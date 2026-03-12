import './style.css'

// Google Analytics gtag type declaration
declare function gtag(...args: any[]): void

type IconGlyph = {
  viewBox: string
  path: string
  className?: string
  filled?: boolean
}

type ServiceCategory = {
  title: string
  bullets: string[]
  icon: IconGlyph
}

type ContactChannel = {
  label: string
  value: string
  href: string
  accent: 'primary' | 'neutral'
  dir?: 'ltr' | 'rtl'
  icon: IconGlyph
}

const heroContent = {
  badge: '',
  title: 'יניב כהן – הנדסאי חשמל',
  subtitle: 'תיקונים ועבודות חשמל לבית ולעסק',
  intro:
    'קצר, שקע שלא עובד או תאורה שצריך להחליף או להתקין? אני יניב כהן, חשמלאי מוסמך והנדסאי חשמל, מטפל בתקלות ועבודות חשמל בבתים ובעסקים באזור המרכז והשרון – בצורה בטוחה, נקייה ובשקיפות מלאה.',
  details:
    'לפני כל עבודה אני מסביר מה עושים ולמה, עובד לפי התקנים הרלוונטיים ומשאיר אחריי לוח, חיבורים ותאורה מסודרים.',
  promise:
    'המטרה היא שתדעו בדיוק מה קורה במערכת החשמל בבית או בעסק שלכם ותישארו עם ראש שקט.'
}

const storyParagraphs = [
  'מערכת החשמל בבית או בעסק היא בסיס לבטיחות, נוחות ושגרת היום‑יום.',
  'בכל עבודה אני בודק את המצב הקיים, מסביר את האפשרויות ופועל לפי התקנים הרלוונטיים – עם דגש על בטיחות, סדר וניקיון בשטח.'
]

const icons = {
  home: {
    viewBox: '0 0 24 24',
    path: 'M3 10.5 12 3l9 7.5v10.5a1 1 0 0 1-1 1h-5.5v-6h-5v6H4a1 1 0 0 1-1-1z'
  },
  smart: {
    viewBox: '0 0 24 24',
    path: 'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 4h10m-7 12h4'
  },
  shield: {
    viewBox: '0 0 24 24',
    path: 'M12 2 4 5v6c0 5 3.5 9.4 8 11 4.5-1.6 8-6 8-11V5l-8-3z'
  },
  briefcase: {
    viewBox: '0 0 24 24',
    path: 'M9 5V3h6v2h4a2 2 0 0 1 2 2v3H3V7a2 2 0 0 1 2-2zm12 5v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9m0 4h18'
  },
  phone: {
    viewBox: '0 0 24 24',
    path: 'M6.5 3h2l1.5 4-2 1a11 11 0 0 0 7 7l1-2 4 1.5v2c0 1-1 2-2 2A15 15 0 0 1 3.5 5c0-1 1-2 3-2z'
  },
  chat: {
    viewBox: '0 0 24 24',
    path: 'M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-4.5l-3.5 3-3.5-3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm3 5h10m-10 4h6'
  },
  mail: {
    viewBox: '0 0 24 24',
    path: 'M3 6h18v12H3z M3 6l9 8 9-8'
  },
  whatsapp: {
    viewBox: '0 0 24 24',
    path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',
    className: 'whatsapp-chip',
    filled: true
  },
  instagram: {
    viewBox: '0 0 24 24',
    path: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.25-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z',
    className: 'instagram-chip'
  }
} as const

const serviceCategories: ServiceCategory[] = [
  {
    title: 'תיקוני חשמל לבית ולעסק',
    icon: icons.home,
    bullets: [
      'תיקון קצרים והפסקות חשמל בדירות, בתים פרטיים ועסקים קטנים',
      'הוספה והזזה של נקודות חשמל ושקעים במרחב הקיים',
      'החלפת מפסקים, שקעים וחוטים פגומים',
      'טיפול בתקלות בלוח החשמל הקיים ובהגנות הקיימות'
    ]
  },
  {
    title: 'תאורה בבית ובחוץ',
    icon: icons.smart,
    bullets: [
      'התקנת גופי תאורה בסלון, חדרי שינה, מטבח ומסדרונות',
      'ספוטים, פסי לד ותאורה שקועה לפי הצורך בשטח',
      'תאורה למרפסת, לגינה ולחצר',
      'התאמת תאורה נוחה לקריאה, עבודה ואירוח'
    ]
  },
  {
    title: 'לוחות חשמל ותקלות חירום',
    icon: icons.shield,
    bullets: [
      'איתור תקלות חשמל וחיווט בעייתי במערכת הקיימת',
      'שדרוג לוח חשמל ישן והחלפת רכיבים בלויים',
      'הגדלת עומסים ותכנון נקודות חדשות לפי הצורך',
      'מענה לקריאות חירום באזור המרכז והשרון'
    ]
  },
  {
    title: 'עבודות גדולות ופרויקטים',
    icon: icons.briefcase,
    bullets: [
      'עבודות חשמל בשיפוץ דירה או בית פרטי',
      'תכנון וביצוע מערכות חשמל לעסקים, חנויות ומשרדים',
      'שיתופי פעולה ותיאום מול אדריכלים, קבלנים ומפקחים',
      'פתרונות חשמל מתקדמים, כולל מערכות חכמות ועמדות טעינה לרכב חשמלי'
    ]
  }
]

const businessHighlights = [
  'תכנון וביצוע מערכות חשמל לפי תוכניות אדריכליות',
  'שיתופי פעולה עם אדריכלים, קבלנים ומפקחים',
  'ייעוץ מקצועי בתכנון תאורה, עומסים ומיקומי נקודות',
  'עמידה מוקפדת בלוחות זמנים ותיאום מלא מול כל הגורמים',
  'תחזוקה ומענה רציף לכל תקלה כדי שלא תהיה פגיעה בפעילות העסק'
]

const reasons = [
  'הנדסאי חשמל וחשמלאי מוסמך עם ניסיון רב בעבודות חשמל בבתים, דירות ועסקים',
  'כל עבודה מתוכננת ומבוצעת לפי התקנים הרלוונטיים ולפי מצב המערכת הקיימת',
  'שקיפות מלאה והסבר ברור לפני שמתחילים – אתם יודעים מה עושים ולמה',
  'עבודה נקייה ומסודרת, עם תשומת לב לבית, לעסק ולסדר של הלקוח',
  'זמינות לתקלות וחירום באזור המרכז והשרון'
]

const contactChannels: ContactChannel[] = [
  {
    label: 'התקשרו עכשיו',
    value: '052-555-1309',
    href: 'tel:+972525551309',
    accent: 'primary',
    dir: 'ltr',
    icon: icons.phone
  },
  {
    label: 'שלחו ווטסאפ',
    value: 'הודעה מהירה',
    href: 'https://wa.me/972525551309',
    accent: 'neutral',
    icon: icons.whatsapp
  }
]

const contactHighlights = [
  'אפשר להתקשר או לשלוח הודעה – חוזרים אליכם בהקדם האפשרי',
  'מענה גם לקריאות חירום לתקלות וקצרים קריטיים',
  'ניתן לשלוח תוכניות, תמונות וסרטונים מפורטים לתיאור המצב בשטח'
]

type GalleryItem =
  | {
      type: 'image'
      src: string
      caption: string
    }
  | {
      type: 'video'
      src: string
      poster?: string
      caption: string
    }

const galleryItems: GalleryItem[] = [
  { type: 'image', src: '/images/yaniv-working-on-a-canal.jpeg', caption: 'עבודה בתעלה – הכנות תשתית' },
  { type: 'image', src: '/images/cabinet-wiring.jpg', caption: 'חיווט לוח חשמל מאורגן' },
  { type: 'image', src: '/images/appartment-cabinet-before.jpg', caption: 'לפני – לוח חשמל בדירה לפני שדרוג' },
  { type: 'image', src: '/images/appartment-cabinet-after.jpg', caption: 'אחרי – לוח חשמל משודרג ומסודר' },
  { type: 'image', src: '/images/wiring-work.jpg', caption: 'חיווט מקצועי בשטח' },
  { type: 'image', src: '/images/store-lighting-in-progress.jpg', caption: 'תאורת חנות – עבודה מסחרית בהתקדמות' },
  { type: 'image', src: '/images/store-lighting-in-progress-2.jpg', caption: 'תאורת חנות – המשך התקנה וסידור' },
  { type: 'image', src: '/images/yaniv-working-on-store-lighting.jpg', caption: 'יניב בעבודה על תאורת חנות' },
  { type: 'image', src: '/images/canal-preparations.jpg', caption: 'הכנות תעלה ותשתיות חשמל' },
  { type: 'image', src: '/images/lighting-projector-on-the-floor.jpg', caption: 'תאורת פרויקטור – הכנה ובדיקה' },
  { type: 'image', src: '/images/city-lights-before.jpg', caption: 'לפני – תאורה חיצונית עירונית' },
  { type: 'image', src: '/images/city-lights-after.jpg', caption: 'אחרי – שדרוג תאורה חיצונית עירונית' },
  { type: 'image', src: '/images/dining-table-lighting.jpg', caption: 'תאורת פנים מעוצבת לפינת אוכל' },
  { type: 'image', src: '/images/bathroom-lighting.jpg', caption: 'תאורת אמבטיה מדויקת ובטוחה' },
  { type: 'image', src: '/images/porch-ceiling-fans.jpg', caption: 'תאורת חוץ ומאווררי תקרה במרפסת' },
  { type: 'image', src: '/images/spotlights.jpg', caption: 'תאורת ספוטים מדויקת' },
  { type: 'image', src: '/images/reading-nook-lighting.jpg', caption: 'נישת קריאה מוארת ונעימה' },
  { type: 'image', src: '/images/cool-picture-with-lighting.jpg', caption: 'תאורה דקורטיבית – השראה' },
  { type: 'image', src: '/images/IMG_0478.jpg', caption: 'בדיקת לוח חשמל' },
  { type: 'image', src: '/images/IMG_0630.jpg', caption: 'חיבורי שטח בבדיקה' },
  { type: 'image', src: '/images/panel-after.jpg', caption: 'מבט מקרוב – לוח לאחר סידור' },
  { type: 'video', src: '/images/cabinet-wiring-timelapse.mp4', poster: '/images/cabinet-wiring.jpg', caption: 'טיימלאפס – עבודה על לוח חשמל' }
]

const photoGalleryItems = galleryItems.filter((item): item is Extract<GalleryItem, { type: 'image' }> => item.type === 'image')
const videoGalleryItems = galleryItems.filter((item): item is Extract<GalleryItem, { type: 'video' }> => item.type === 'video')

const faqs = [
  {
    question: 'האם אתם חשמלאים מוסמכים ורשומים?',
    answer:
      'בהחלט. יניב כהן הוא חשמלאי מוסמך רשום והנדסאי חשמל בעל רישיון משרד העבודה, עם ביטוחים מלאים ועמידה בתקנים.'
  },
  {
    question: 'מה זמני התגובה לפרויקטים ותקלות חירום?',
    answer:
      'ניתן לפנות בטלפון או בהודעה, ותקלות חירום מטופלות באזור המרכז והשרון לפי זמינות ולפי אופי התקלה.'
  },
  {
    question: 'האם ניתן לקבל דוחות בדיקה ואישורי חברת חשמל?',
    answer:
      'כן. אנו מבצעים בדיקות עומסים, דוחות בודק מוסמך והכנה לביקורת חברת החשמל, כולל מסמכי מסירה מסודרים.'
  }
]

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Root element #app not found')
}

const assetBase = import.meta.env.BASE_URL
const logoPath = `${assetBase}logo.png`
const renderIcon = ({ viewBox, path, className, filled }: IconGlyph) => {
  const pathAttrs = filled
    ? 'fill="currentColor"'
    : 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"'
  // Icons are accessible to screen readers as they provide visual context
  return `
  <span class="icon-chip ${className ?? ''}">
    <svg viewBox="${viewBox}" role="img" aria-hidden="false">
      <path d="${path}" ${pathAttrs} />
    </svg>
  </span>
`
}

app.innerHTML = `
  <!-- Skip link for keyboard navigation -->
  <a href="#main-content" class="skip-link">דלג לתוכן הראשי</a>
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="#hero" class="nav-logo">
        <img src="${logoPath}" alt="מעגל החשמל" />
      </a>
      <button type="button" class="nav-toggle" aria-label="תפריט" aria-expanded="false" aria-controls="nav-dropdown">
        <span class="nav-toggle-icon"></span>
      </button>
      <div class="nav-links" id="nav-dropdown">
        <a href="#services">שירותים</a>
        <a href="#reasons">למה אנחנו</a>
        <a href="#gallery">גלריה</a>
        <a href="#contact">צור קשר</a>
      </div>
      <a href="tel:+972525551309" class="nav-phone" aria-label="התקשרו">052-555-1309</a>
    </div>
  </nav>
  <main class="page" id="main-content">
    <header class="hero" id="hero">
      <div class="hero-content">
        <h1>${heroContent.title}<span>${heroContent.subtitle}</span></h1>
        <p>${heroContent.intro}</p>
        <p class="hero-cert">חשמלאי מוסמך רשום במשרד העבודה | הנדסאי חשמל</p>
        <div class="hero-cta">
          <a class="btn primary" href="tel:+972525551309" aria-label="חייג עכשיו">חייג עכשיו 052-555-1309</a>
        </div>
        <ul class="pill-list">
          <li>15+ שנות ניסיון</li>
          <li>תיעוד מלא ואחריות</li>
          <li>מענה חירום 24/7</li>
          <li>רישיון משרד העבודה</li>
        </ul>
      </div>
    </header>

    <section class="section story" id="about">
      <div class="section-head">
        <h2>מי אני</h2>
        <p class="eyebrow">בטיחות, עבודה נקייה ושקיפות מלאה</p>
        <p class="section-desc">${heroContent.promise}</p>
      </div>
      <div class="story-content">
        <img src="/images/yaniv-working-on-store-lighting.jpg" alt="יניב כהן בעבודה על תאורה בחנות" class="story-image" loading="lazy" />
        <div class="rich-text">
          ${storyParagraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
          <p><strong>${heroContent.details}</strong></p>
        </div>
      </div>
    </section>

    <section class="section services section-bg" id="services" data-bg-image="/images/wiring-work.jpg">
      <div class="section-head">
        <h2>השירותים שלנו</h2>
        <p class="eyebrow">עבודות חשמל יומיומיות לבית ולעסק</p>
        <p class="section-desc">מטיפול בתקלות נקודתיות ועד סידור נקודות ותאורה – עבודות חשמל שמתבצעות בצורה בטוחה, נקייה ובשקיפות מלאה.</p>
      </div>
      <div class="services-grid">
        ${serviceCategories
          .map(
            (category) => `
              <article class="card service-card">
                ${renderIcon(category.icon)}
                <h3>${category.title}</h3>
                <ul class="services-list">
                  ${category.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
                </ul>
              </article>
            `
          )
          .join('')}
      </div>
    </section>

    <section class="section business" id="business">
      <div class="section-head">
        <h2>למגזר העסקי ואדריכלים</h2>
        <p class="eyebrow">שפה מקצועית משותפת ושקיפות מלאה</p>
        <p class="section-desc">תיאום מלא מול אדריכלים, קבלנים ומפקחים כדי לעמוד בלוחות הזמנים ללא הפתעות.</p>
      </div>
      <div class="card business-card">
        <ul class="services-list">
          ${businessHighlights.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    </section>

    <section class="section reasons section-bg" id="reasons" data-bg-image="/images/store-lighting-in-progress.jpg">
      <div class="section-head">
        <h2>למה לבחור בנו</h2>
        <p class="eyebrow">בטיחות, עבודה נקייה, שקיפות מלאה ועמידה בתקנים</p>
        <p class="section-desc">לפני כל תיקון או עבודה אנחנו מסבירים מה עושים ולמה, פועלים לפי התקנים הרלוונטיים ומשאירים אחרינו מערכת חשמל מסודרת וללא הפתעות.</p>
      </div>
      <div class="card reasons-card">
        <ul class="services-list">
          ${reasons.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      <div class="reasons-cta">
        <a class="btn primary" href="tel:+972525551309" aria-label="חייג עכשיו">חייג עכשיו 052-555-1309</a>
      </div>
    </section>

    <section class="section faq" id="faq">
      <div class="section-head">
        <h2>שאלות נפוצות</h2>
        <p class="eyebrow">כל מה שצריך לדעת</p>
        <p class="section-desc">מידע על הכשרות, זמינות ותהליכי בדיקה כדי שתדעו בדיוק למה לצפות בכל שלב.</p>
      </div>
      <div class="faq-grid">
        ${faqs
          .map(
            (faq) => `
              <article class="card faq-card">
                <h3>${faq.question}</h3>
                <p>${faq.answer}</p>
              </article>
            `
          )
          .join('')}
      </div>
    </section>

    <section class="section gallery section-bg" id="gallery" data-bg-image="/images/city-lights-after.jpg">
      <div class="section-head">
        <h2>גלריה</h2>
        <p class="eyebrow">פרויקטים ותיעוד</p>
        <p class="section-desc">שילוב של קונסטרוקציה נקייה, סימון מדויק ותיעוד צילומי לכל לקוח.</p>
      </div>
      <div class="gallery-shell gallery-shell-photos" aria-label="גלריית תמונות">
        <button class="gallery-nav prev" aria-label="גלילה לאחור - תמונות">›</button>
        <div class="gallery-track" role="region" aria-label="תמונות">
          ${photoGalleryItems
            .map((item, index) => {
              const baseAttrs = `data-index="${index}" data-type="${item.type}" data-src="${item.src}" data-caption="${item.caption.replace(/"/g, '&quot;')}"`
              return `
              <figure class="gallery-card" ${baseAttrs}>
                <img src="${item.src}" alt="${item.caption}" loading="lazy" />
                <figcaption>${item.caption}</figcaption>
              </figure>
            `
            })
            .join('')}
        </div>
        <button class="gallery-nav next" aria-label="גלילה קדימה - תמונות">‹</button>
      </div>

      <div class="gallery-subhead" aria-hidden="true">סרטונים</div>
      <div class="gallery-shell gallery-shell-videos" aria-label="גלריית סרטונים">
        <button class="gallery-nav prev" aria-label="גלילה לאחור - סרטונים">›</button>
        <div class="gallery-track" role="region" aria-label="סרטונים">
          ${videoGalleryItems
            .map((item, index) => {
              const baseAttrs = `data-index="${index}" data-type="${item.type}" data-src="${item.src}" data-caption="${item.caption.replace(/"/g, '&quot;')}"`
              const posterAttr = item.poster ? `data-poster="${item.poster}"` : ''
              return `
              <figure class="gallery-card video-card" ${baseAttrs} ${posterAttr}>
                <div class="video-wrapper">
                  <img src="${item.poster ?? '/images/panel-after.jpg'}" alt="${item.caption}" loading="lazy" />
                  <div class="play-badge" aria-hidden="true">▶</div>
                </div>
                <figcaption>${item.caption}</figcaption>
              </figure>
            `
            })
            .join('')}
        </div>
        <button class="gallery-nav next" aria-label="גלילה קדימה - סרטונים">‹</button>
      </div>
    </section>

    <section class="section contact" id="contact">
      <div class="section-head">
        <h2>רוצים ייעוץ או הצעת מחיר?</h2>
        <p class="eyebrow">השאירו פרטים ונחזור אליכם במהירות</p>
        <p class="section-desc">נשמח לעזור לתכנן את מערכת החשמל המושלמת לבית או לעסק. שלחו תוכניות, תמונות או תיאור קצר כדי שנתאים פתרון מדויק.</p>
      </div>
      <div class="contact-grid">
        ${contactChannels
          .map(
            (channel) => `
              <a class="card contact-card ${channel.accent}" href="${channel.href}" target="${channel.href.startsWith('http') ? '_blank' : '_self'}" rel="noopener">
                ${renderIcon(channel.icon)}
                <p class="label">${channel.label}</p>
                <p class="value" dir="${channel.dir ?? 'rtl'}">${channel.value}</p>
              </a>
            `
          )
          .join('')}
        <div class="card response-card">
          <p class="label">מהיר ומדויק</p>
          <p class="value">זמינות</p>
          <ul class="services-list compact">
            ${contactHighlights.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>
    </div>
    </section>

    <footer class="footer">
      <p>
        <a href="/privacy.html" class="footer-privacy-link">מדיניות פרטיות</a>
        <span class="footer-sep"> · </span>
        <a href="/accessibility.html" class="footer-accessibility-link">הצהרת נגישות</a>
        <span class="footer-sep"> · </span>
        <a href="https://www.instagram.com/yaniv.ca" target="_blank" rel="noopener" aria-label="אינסטגרם">אינסטגרם</a>
      </p>
    </footer>
    <div class="mobile-footer-bar" aria-hidden="true">
      <a href="tel:+972525551309" class="mobile-footer-phone" aria-label="התקשרו">052-555-1309</a>
      <a href="https://wa.me/972525551309" class="mobile-footer-whatsapp" target="_blank" rel="noopener" aria-label="ווטסאפ">ווטסאפ</a>
    </div>
  </main>
`

// Lightbox for gallery (images + video)
const lightbox = document.createElement('div')
lightbox.className = 'lightbox'
lightbox.innerHTML = `
  <div class="lightbox-backdrop"></div>
  <div class="lightbox-body">
    <button class="lightbox-close" aria-label="סגירה">×</button>
    <div class="lightbox-content"></div>
    <p class="lightbox-caption"></p>
  </div>
`
document.body.appendChild(lightbox)

const lightboxBackdrop = lightbox.querySelector('.lightbox-backdrop')
const lightboxBody = lightbox.querySelector<HTMLElement>('.lightbox-body')
const lightboxContent = lightbox.querySelector('.lightbox-content')
const lightboxCaption = lightbox.querySelector('.lightbox-caption')
const lightboxClose = lightbox.querySelector<HTMLButtonElement>('.lightbox-close')

let lastFocusedForLightbox: HTMLElement | null = null

const openLightbox = (item: GalleryItem) => {
  if (!lightboxContent || !lightboxCaption || !lightboxBackdrop || !lightboxBody) return

  lightboxContent.innerHTML = ''
  lastFocusedForLightbox = document.activeElement instanceof HTMLElement ? document.activeElement : null

  if (item.type === 'video') {
    const videoEl = document.createElement('video')
    videoEl.src = item.src
    videoEl.controls = true
    // No autoplay for better accessibility; user starts playback explicitly
    videoEl.preload = 'metadata'
    if (item.poster) {
      videoEl.poster = item.poster
    }
    lightboxContent.appendChild(videoEl)
  } else {
    const imgEl = document.createElement('img')
    imgEl.src = item.src
    imgEl.alt = item.caption
    lightboxContent.appendChild(imgEl)
  }

  lightboxCaption.textContent = item.caption
  lightbox.classList.add('open')
  document.body.style.overflow = 'hidden'

  // Move focus into the lightbox (close button is a good first target)
  if (lightboxClose) {
    lightboxClose.focus()
  } else {
    const firstFocusable = getFocusableElements(lightboxBody)[0]
    firstFocusable?.focus()
  }
}

const closeLightbox = () => {
  lightbox.classList.remove('open')
  document.body.style.overflow = ''
  if (lightboxContent) {
    lightboxContent.innerHTML = ''
  }
  if (lastFocusedForLightbox) {
    lastFocusedForLightbox.focus()
    lastFocusedForLightbox = null
  }
}

lightboxBackdrop?.addEventListener('click', closeLightbox)
lightboxClose?.addEventListener('click', closeLightbox)
lightbox.addEventListener('keydown', (e: KeyboardEvent) => {
  // Only handle keyboard events when lightbox is open
  if (!lightbox.classList.contains('open')) return

  if (e.key === 'Escape') {
    e.stopPropagation()
    closeLightbox()
    return
  }

  if (e.key === 'Tab' && lightboxBody) {
    const focusable = getFocusableElements(lightboxBody)
    if (focusable.length === 0) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const current = document.activeElement as HTMLElement

    if (e.shiftKey && current === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && current === last) {
      e.preventDefault()
      first.focus()
    }
  }
})

// Accessible accessibility statement modal
// Non-JS fallback: הקישור מפנה ל-/accessibility.html, כאן רק מוסיפים שדרוג חווייתי עם מודאל.
const accessibilityModal = document.createElement('div')
accessibilityModal.className = 'accessibility-modal'
accessibilityModal.innerHTML = `
  <div class="accessibility-modal-backdrop"></div>
  <div
    class="accessibility-modal-dialog"
    role="dialog"
    aria-modal="true"
    aria-labelledby="accessibility-title"
  >
    <h2 id="accessibility-title">הצהרת נגישות</h2>
    <p>
      אנו רואים חשיבות רבה בהנגשת האתר שלנו עבור אנשים עם מוגבלויות ופועלים לשפר את חוויית הגלישה עבור כל
      המשתמשים.
    </p>
    <p>
      האתר פותח בהתאם לעקרונות תקן ישראלי 5568 המבוסס על הנחיות WCAG 2.0 לרמת AA, ככל שניתן עבור אתר תדמיתי קטן.
    </p>
    <h3>מה נעשה באתר</h3>
    <ul class="services-list">
      <li>שימוש בכותרות וסדר היררכי ברור לתוכן.</li>
      <li>טקסט חלופי (alt) לתמונות בגלריה.</li>
      <li>התאמת ניגודיות צבעים וגדלי טקסט לקריאה נוחה.</li>
      <li>אפשרות ניווט באתר באמצעות מקלדת וטפסים עם תוויות ברורות.</li>
    </ul>
    <h3>יצירת קשר בנושא נגישות</h3>
    <p>
      אם נתקלתם בבעיה נגישות באתר, נשמח שתעדכנו אותנו כדי שנוכל לטפל בכך.
    </p>
    <p>
      ניתן לפנות אלינו בטלפון <a href="tel:+972525551309">052-555-1309</a> או בווטסאפ ולפרט מה הייתה הפעולה שניסיתם לבצע ומהי הבעיה.
    </p>
    <button type="button" class="btn secondary accessibility-modal-close">סגירה</button>
  </div>
`
document.body.appendChild(accessibilityModal)

// Privacy policy modal (same behavior as accessibility)
const privacyModal = document.createElement('div')
privacyModal.className = 'accessibility-modal privacy-modal'
privacyModal.setAttribute('role', 'dialog')
privacyModal.setAttribute('aria-labelledby', 'privacy-title')
privacyModal.setAttribute('aria-modal', 'true')
privacyModal.innerHTML = `
  <div class="accessibility-modal-backdrop"></div>
  <div class="accessibility-modal-dialog" role="document" aria-labelledby="privacy-title">
    <h2 id="privacy-title">מדיניות פרטיות</h2>
    <p>אנו מכבדים את פרטיותכם. בדף זה תמצאו מידע על איסוף ושימוש במידע באתר.</p>
    <h3>עוגיות (Cookies)</h3>
    <p>האתר משתמש בעוגיות לצורכי ניתוח ביצועים ופרסום (Google Tag Manager, Google Analytics, Google Ads). ניתן לבחור לאשר או לדחות עוגיות בחלון ההסכמה שמופיע בביקור הראשון. הבחירה נשמרת במכשיר שלכם.</p>
    <h3>נתונים שנאספים</h3>
    <p>במקביל לאישור עוגיות – נתונים כלליים על גלישה (כגון דפים שנצפו, מקור הכניסה) לצורכי שיפור האתר ומדידת קמפיינים. לא נמכרים נתונים לצדדים שלישיים.</p>
    <h3>יצירת קשר</h3>
    <p>לכל שאלה בנושא פרטיות ניתן לפנות בטלפון <a href="tel:+972525551309">052-555-1309</a> או בווטסאפ.</p>
    <button type="button" class="btn secondary privacy-modal-close">סגירה</button>
  </div>
`
document.body.appendChild(privacyModal)

const privacyBackdrop = privacyModal.querySelector('.accessibility-modal-backdrop')
const privacyDialog = privacyModal.querySelector<HTMLElement>('.accessibility-modal-dialog')
const privacyCloseBtn = privacyModal.querySelector<HTMLButtonElement>('.privacy-modal-close')
const privacyTriggerLinks = () => document.querySelectorAll<HTMLAnchorElement>('.footer-privacy-link, .cookie-consent-privacy-link')

let lastFocusedPrivacy: HTMLElement | null = null

const openPrivacyModal = () => {
  privacyModal.classList.add('open')
  document.body.style.overflow = 'hidden'
  lastFocusedPrivacy = document.activeElement instanceof HTMLElement ? document.activeElement : null
  const focusable = getFocusableElements(privacyDialog)
  if (focusable.length > 0) focusable[0].focus()
}

const closePrivacyModal = () => {
  privacyModal.classList.remove('open')
  document.body.style.overflow = ''
  if (lastFocusedPrivacy) lastFocusedPrivacy.focus()
}

privacyTriggerLinks().forEach((link) => {
  link.addEventListener('click', (e) => {
    if (link.getAttribute('href') === '/privacy.html') {
      e.preventDefault()
      openPrivacyModal()
    }
  })
})

privacyBackdrop?.addEventListener('click', closePrivacyModal)
privacyCloseBtn?.addEventListener('click', closePrivacyModal)

privacyModal.addEventListener('keydown', (event: KeyboardEvent) => {
  if (!privacyModal.classList.contains('open')) return
  if (event.key === 'Escape') {
    event.stopPropagation()
    closePrivacyModal()
    return
  }
  if (event.key === 'Tab' && privacyDialog) {
    const focusable = getFocusableElements(privacyDialog)
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const current = document.activeElement as HTMLElement
    if (event.shiftKey && current === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && current === last) {
      event.preventDefault()
      first.focus()
    }
  }
})

const accessibilityBackdrop = accessibilityModal.querySelector('.accessibility-modal-backdrop')
const accessibilityDialog = accessibilityModal.querySelector<HTMLElement>('.accessibility-modal-dialog')
const accessibilityCloseBtn = accessibilityModal.querySelector<HTMLButtonElement>('.accessibility-modal-close')
const accessibilityTriggerLink = document.querySelector<HTMLAnchorElement>('.footer-accessibility-link')

let lastFocusedElement: HTMLElement | null = null

const getFocusableElements = (root: HTMLElement | null): HTMLElement[] => {
  if (!root) return []
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'textarea',
    'input[type="text"]',
    'input[type="email"]',
    'input[type="tel"]',
    'select',
    '[tabindex]:not([tabindex="-1"])'
  ]
  return Array.from(root.querySelectorAll<HTMLElement>(focusableSelectors.join(','))).filter((el) => {
    if (el.hasAttribute('disabled')) return false
    const ariaHidden = el.getAttribute('aria-hidden')
    // Exclude only elements explicitly marked aria-hidden="true"
    return ariaHidden !== 'true'
  })
}

const openAccessibilityModal = () => {
  accessibilityModal.classList.add('open')
  document.body.style.overflow = 'hidden'
  lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null

  const focusable = getFocusableElements(accessibilityDialog)
  if (focusable.length > 0) {
    focusable[0].focus()
  }
}

const closeAccessibilityModal = () => {
  accessibilityModal.classList.remove('open')
  document.body.style.overflow = ''
  if (lastFocusedElement) {
    lastFocusedElement.focus()
  }
}

accessibilityTriggerLink?.addEventListener('click', (event) => {
  // שדרוג חווייתי בלבד: מניעת ניווט לדף נפרד כאשר JavaScript פעיל
  event.preventDefault()
  openAccessibilityModal()
})

accessibilityBackdrop?.addEventListener('click', () => {
  closeAccessibilityModal()
})

accessibilityCloseBtn?.addEventListener('click', () => {
  closeAccessibilityModal()
})

accessibilityModal.addEventListener('keydown', (event: KeyboardEvent) => {
  // Only handle keyboard events when modal is open
  if (!accessibilityModal.classList.contains('open')) return

  if (event.key === 'Escape') {
    event.stopPropagation()
    closeAccessibilityModal()
    return
  }

  if (event.key === 'Tab' && accessibilityDialog) {
    const focusable = getFocusableElements(accessibilityDialog)
    if (focusable.length === 0) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const current = document.activeElement as HTMLElement

    if (event.shiftKey && current === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && current === last) {
      event.preventDefault()
      first.focus()
    }
  }
})

// Gallery horizontal scroll (photos + videos) + click to open lightbox
const galleryShells = document.querySelectorAll<HTMLElement>('.gallery-shell')

galleryShells.forEach((shell) => {
  const track = shell.querySelector<HTMLElement>('.gallery-track')
  const prevBtn = shell.querySelector<HTMLButtonElement>('.gallery-nav.prev')
  const nextBtn = shell.querySelector<HTMLButtonElement>('.gallery-nav.next')

  const scrollByAmount = () => (track ? track.clientWidth * 0.8 : 300)

  prevBtn?.addEventListener('click', () => {
    track?.scrollBy({ left: -scrollByAmount(), behavior: 'smooth' })
  })

  nextBtn?.addEventListener('click', () => {
    track?.scrollBy({ left: scrollByAmount(), behavior: 'smooth' })
  })

  track?.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault()
      track.scrollBy({ left: e.deltaY, behavior: 'smooth' })
    }
  })
})

const galleryCards = document.querySelectorAll<HTMLElement>('.gallery-card')

galleryCards.forEach((card) => {
  card.addEventListener('click', () => {
    const type = card.dataset.type
    const src = card.dataset.src
    const caption = card.dataset.caption ?? ''
    const poster = card.dataset.poster

    if (!type || !src) return

    if (type === 'video') {
      openLightbox({ type: 'video', src, poster, caption })
    } else {
      openLightbox({ type: 'image', src, caption })
    }
  })

  // Gallery cards are clickable but not in tab order (too many items)
  // Users can navigate with prev/next buttons or mouse click
})

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, observerOptions)

// Navbar scroll effect
const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 50) {
    navbar?.classList.add('scrolled')
  } else {
    navbar?.classList.remove('scrolled')
  }
})

// Mobile nav dropdown
const navToggle = document.querySelector<HTMLButtonElement>('.nav-toggle')
const navDropdown = document.querySelector('#nav-dropdown')

const closeNavMenu = () => {
  navbar?.classList.remove('open')
  navToggle?.setAttribute('aria-expanded', 'false')
}

const openNavMenu = () => {
  navbar?.classList.add('open')
  navToggle?.setAttribute('aria-expanded', 'true')
}

const toggleNavMenu = () => {
  if (navbar?.classList.contains('open')) {
    closeNavMenu()
  } else {
    openNavMenu()
  }
}

navToggle?.addEventListener('click', toggleNavMenu)

navDropdown?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeNavMenu)
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navbar?.classList.contains('open')) {
    closeNavMenu()
  }
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault()
    const href = anchor.getAttribute('href')
    if (href) {
      const target = document.querySelector(href)
      if (target) {
        const offsetTop = (target as HTMLElement).offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    }
  })
})

// Set background images for sections with data-bg-image attribute
document.querySelectorAll('.section-bg[data-bg-image]').forEach((section) => {
  const bgImage = section.getAttribute('data-bg-image')
  if (bgImage && section instanceof HTMLElement) {
    section.style.backgroundImage = `url(${bgImage})`
  }
})

// Observe all animated elements after DOM is ready
setTimeout(() => {
  document
    .querySelectorAll(
      '.section-head, .rich-text, .story-content, .services-grid, .contact-grid, .faq-grid, .reasons-card, .gallery-shell'
    )
    .forEach((el) => {
      observer.observe(el)
    })
}, 100)

// Cookie Consent Banner
const cookieConsent = document.createElement('div')
cookieConsent.className = 'cookie-consent'
cookieConsent.setAttribute('role', 'dialog')
cookieConsent.setAttribute('aria-labelledby', 'cookie-consent-title')
cookieConsent.setAttribute('aria-live', 'polite')
cookieConsent.innerHTML = `
  <div class="cookie-consent-content">
    <div class="cookie-consent-text">
      <h3 id="cookie-consent-title">שימוש בעוגיות</h3>
      <p>אנו משתמשים בעוגיות כדי לשפר את חוויית הגלישה שלכם ולעקוב אחר ביצועי האתר. <a href="/privacy.html" class="cookie-consent-privacy-link footer-privacy-link">מדיניות פרטיות</a>.</p>
    </div>
    <div class="cookie-consent-actions">
      <button type="button" class="btn secondary cookie-consent-reject" aria-label="דחיית עוגיות">דחה</button>
      <button type="button" class="btn primary cookie-consent-accept" aria-label="קבלת עוגיות">אשר</button>
    </div>
  </div>
`
document.body.appendChild(cookieConsent)

const cookieConsentBanner = document.querySelector<HTMLElement>('.cookie-consent')
const cookieAcceptBtn = document.querySelector<HTMLButtonElement>('.cookie-consent-accept')
const cookieRejectBtn = document.querySelector<HTMLButtonElement>('.cookie-consent-reject')

// Helper function to safely access localStorage (works with crawlers)
const getStorageItem = (key: string): string | null => {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

const setStorageItem = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value)
  } catch {
    // localStorage not available (crawlers, privacy mode) - silently fail
  }
}

// Check if user has already made a choice
const hasConsent = getStorageItem('cookie-consent')
if (hasConsent) {
  cookieConsentBanner?.classList.add('hidden')
  document.body.classList.add('has-cookie-choice')
} else {
  // Show banner after a short delay
  setTimeout(() => {
    cookieConsentBanner?.classList.add('visible')
  }, 1000)
}

const acceptCookies = () => {
  setStorageItem('cookie-consent', 'accepted')
  cookieConsentBanner?.classList.remove('visible')
  setTimeout(() => {
    cookieConsentBanner?.classList.add('hidden')
  }, 300)
  document.body.classList.add('has-cookie-choice')
  
  // Update Google Consent Mode
  if (typeof gtag !== 'undefined') {
    gtag('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted'
    })
  }
}

const rejectCookies = () => {
  setStorageItem('cookie-consent', 'rejected')
  cookieConsentBanner?.classList.remove('visible')
  setTimeout(() => {
    cookieConsentBanner?.classList.add('hidden')
  }, 300)
  document.body.classList.add('has-cookie-choice')
  
  // Ensure consent remains denied
  if (typeof gtag !== 'undefined') {
    gtag('consent', 'update', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    })
  }
}

cookieAcceptBtn?.addEventListener('click', acceptCookies)
cookieRejectBtn?.addEventListener('click', rejectCookies)

// Keyboard navigation for cookie banner
cookieConsentBanner?.addEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    rejectCookies()
  }
})
