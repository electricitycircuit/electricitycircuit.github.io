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

// Update accessibility.html in dist/ (Vite copies it from public/ during build)
const accessibilityPath = join(process.cwd(), 'dist', 'accessibility.html')
if (!existsSync(accessibilityPath)) {
  console.error('accessibility.html not found in dist/. Make sure it exists in public/ and run build.')
  process.exit(1)
}

let html = readFileSync(accessibilityPath, 'utf-8')

// Replace the CSS reference (handles both /src/style.css and any existing /assets/ reference)
html = html.replace(
  /<link rel="stylesheet" href="[^"]*" ?\/?>/,
  `<link rel="stylesheet" href="/assets/${cssFile}">`
)

writeFileSync(accessibilityPath, html)
console.log(`✓ Updated accessibility.html to use /assets/${cssFile}`)

