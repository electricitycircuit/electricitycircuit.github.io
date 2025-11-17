# מעגל החשמל – דף נחיתה

אתר סטטי שנבנה עם Vite + TypeScript עבור יניב כהן (מעגל החשמל).

## פיתוח מקומי

```bash
npm install
npm run dev
```

האתר זמין ב־`http://localhost:5173/`.

## בנייה ופריסה

- `npm run build` יוצר את התוכן הסופי בתיקיית `dist/`.
- קובץ `vite.config.ts` מוגדר עם `base: '/'` כי האתר נפרס כריפו משתמש (`electricitycircuit.github.io`).
- תהליך הפריסה מתבצע אוטומטית דרך GitHub Actions (`.github/workflows/deploy.yml`):
  1. בכל `push` ל־`main` (או `workflow_dispatch`) נבנה האתר בענן.
  2. התוכן מועלה כ־artifact ומפורסם לסביבת GitHub Pages.
- ב־Settings → Pages יש לבחור "GitHub Actions" כמקור. עם סיום ה־workflow האתר יהיה זמין ב־`https://electricitycircuit.github.io/`.

## התאמות עתידיות

- שינוי דומיין → לעדכן את `base` ואת תגיות ה־OG/טוויטר.
- נכסים חדשים (תמונות, לוגואים) ממוקמים ב־`public/`.

