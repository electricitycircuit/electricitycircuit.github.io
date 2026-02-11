import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

// Find the CSS file in dist/assets/
const distAssetsDir = join(process.cwd(), 'dist', 'assets')
if (!existsSync(distAssetsDir)) {
  console.error('dist/assets/ directory not found. Run build first.')
  process.exit(1)
}

const files = readdirSync(distAssetsDir)
const cssFile = files.find(f => f.endsWith('.css'))

if (!cssFile) {
  console.error('No CSS file found in dist/assets/')
  process.exit(1)
}

// Update accessibility.html and privacy.html in dist/ (Vite copies from public/ during build)
const staticPages = ['accessibility.html', 'privacy.html']
for (const name of staticPages) {
  const filePath = join(process.cwd(), 'dist', name)
  if (!existsSync(filePath)) {
    console.error(`${name} not found in dist/. Make sure it exists in public/ and run build.`)
    process.exit(1)
  }
  let html = readFileSync(filePath, 'utf-8')
  html = html.replace(
    /<link rel="stylesheet" href="[^"]*" ?\/?>/,
    `<link rel="stylesheet" href="/assets/${cssFile}">`
  )
  writeFileSync(filePath, html)
  console.log(`✓ Updated ${name} to use /assets/${cssFile}`)
}

