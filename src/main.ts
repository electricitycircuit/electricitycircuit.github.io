import './style.css'

type IconGlyph = {
  viewBox: string
  path: string
}

type ServiceCategory = {
  title: string
  bullets: string[]
  icon: IconGlyph
}

type Testimonial = {
  quote: string
  author: string
  role: string
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
  badge: 'חשמלאי מוסמך והנדסאי חשמל',
  title: 'מעגל החשמל',
  subtitle: 'פתרונות חשמל לבית ולעסק',
  intro:
    '״מהרגע הראשון ועד סיום הפרוייקט״ – משפט שמלווה אותי בכל עבודה. כל לקוח מקבל ליווי מקצועי ואישי, מתכנון ראשוני ועד מסירה מסודרת.',
  details:
    'התקנת גופי תאורה, שקעים ולוחות חשמל היא רק התוצאה הסופית. הדרך כוללת תכנון נכון, התאמה בשטח וזמינות מלאה עד לתוצאה המדויקת שדמיינתם.',
  promise: 'יחס אישי, שקיפות מלאה ומענה אמיתי – כל העבודות מבוצעות לפי התקן ובידי חשמלאי מוסמך בלבד.'
}

const storyParagraphs = [
  'עבורי חשמל הוא הרבה מעבר לכבלים ולוחות. הוא הבטיחות של הבית, האסתטיקה של התאורה וההמשכיות של העסק.',
  'אני מלווה כל תהליך עם שרטוטים מסודרים, דו״חות בדיקה ועמידה בלוחות זמנים – כדי שנוכל להוריד דאגה אחת מהרשימה שלכם.'
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
  }
} as const

const serviceCategories: ServiceCategory[] = [
  {
    title: 'עבודות חשמל לבית',
    icon: icons.home,
    bullets: [
      'שיפוץ מלא של מערכות החשמל בדירות ובבתים פרטיים',
      'החלפת לוחות, חיווט, פחתים ומפסקים ישנים',
      'הוספת נקודות חשמל ותאורה בגינה, במרפסת ובכל חלל',
      'התקנת גופי תאורה דקורטיביים – תאורה סמויה, פסי לד ונברשות מעוצבות'
    ]
  },
  {
    title: 'פתרונות מתקדמים וחכמים',
    icon: icons.smart,
    bullets: [
      'עמדות טעינה לרכב חשמלי – מהתשתית ועד בדיקת בודק מוסמך',
      'הכנה מוקדמת וביצוע ביקורת חברת חשמל',
      'פתרונות חשמל חכמים ושליטה דרך אפליקציה',
      'התקנת לוחות חשמל לפי התקנים והנחיות חברת חשמל'
    ]
  },
  {
    title: 'תחזוקה ובטיחות',
    icon: icons.shield,
    bullets: [
      'איתור תקלות, בדיקות בידוד והארקה, טיפול בקצרים',
      'הגדלת חיבור חד פאזי לתלת פאזי והרחבת אספקת החשמל',
      'תחזוקת חשמל שוטפת לעסקים, חנויות ומשרדים',
      'מענה חירום מסביב לשעון לתקלות קריטיות'
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
  'הנדסאי חשמל מוסמך עם ניסיון רב בפרויקטים מורכבים ועבודות שירות',
  'כל עבודה מבוצעת על ידי חשמלאי מוסמך בלבד ובתיעוד מלא',
  'אמינות, שקיפות והצעת מחיר ברורה ללא הפתעות',
  'עבודה נקייה, מסודרת ועמידה בזמנים בכל קנה מידה',
  'אחריות מלאה ושירות אישי וזמין לכל שאלה ובקשה'
]

const testimonials: Testimonial[] = [
  {
    quote: 'השיפוץ של הבית שלנו הסתיים בדיוק בזמן. יניב דאג לכל אישורי חברת החשמל והשאיר בית מואר ובטוח.',
    author: 'משפחת סגל',
    role: 'רמת השרון'
  },
  {
    quote: 'כפרויקט מסחרי היינו חייבים חשמלאי שמבין גם בתיאום מול הקבלן וגם בעמידה בתקנים. יניב היה שם בכל שלב.',
    author: 'מיכל דביר',
    role: 'אדריכלית וותיקה'
  },
  {
    quote: 'תקלת החשמל בחנות טופלה תוך שעה בלילה. שירות אמיתי וחיוך גדול גם בשעת חירום.',
    author: 'אלעד כץ',
    role: 'בעל חנות, תל אביב'
  }
]

const contactChannels: ContactChannel[] = [
  {
    label: 'התקשרו עכשיו',
    value: '052-555-1099',
    href: 'tel:+972525551099',
    accent: 'primary',
    dir: 'ltr',
    icon: icons.phone
  },
  {
    label: 'שלחו ווטסאפ',
    value: 'הודעה מהירה',
    href: 'https://wa.me/972525551099',
    accent: 'neutral',
    icon: icons.chat
  },
  {
    label: 'כתבו מייל',
    value: 'electricitycircuit@outlook.com',
    href: 'mailto:electricitycircuit@outlook.com',
    accent: 'neutral',
    dir: 'ltr',
    icon: icons.mail
  }
]

const contactHighlights = [
  'תגובה ראשונית באותו היום בימים א׳-ה׳ בין 08:00-20:00',
  'מענה חירום 24/7 לתקלות וקצרים קריטיים',
  'ניתן לשלוח תוכניות, תמונות וסרטונים מפורטים לתיאום מהיר'
]

const heroGallery = [
  {
    src: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=700&q=80',
    alt: 'לוח חשמל מסודר',
    label: 'לוחות מבוקרים'
  },
  {
    src: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=700&q=80',
    alt: 'חיווט בית חכם',
    label: 'חיווט חכם'
  },
  {
    src: 'https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=700&q=80',
    alt: 'צוות התקנה מקצועי',
    label: 'צוותים בשטח'
  }
]

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
    caption: 'תאורת אווירה בסלון חכם'
  },
  {
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
    caption: 'שדרוג לוח תלת פאזי לעסק קמעונאי'
  },
  {
    src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=900&q=80',
    caption: 'תכנון מוקפד עם אדריכלים בשטח'
  },
  {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
    caption: 'עמדות טעינה לרכב חשמלי בבניין משרדים'
  }
]

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Root element #app not found')
}

const currentYear = new Date().getFullYear()
const assetBase = import.meta.env.BASE_URL
const logoPath = `${assetBase}logo.png`
const renderIcon = ({ viewBox, path }: IconGlyph) => `
  <span class="icon-chip">
    <svg viewBox="${viewBox}" role="img" aria-hidden="true">
      <path d="${path}" />
    </svg>
  </span>
`

app.innerHTML = `
  <main class="page">
    <header class="hero" id="hero">
      <div class="hero-content">
        <img class="logo-mark" src="${logoPath}" alt="מעגל החשמל" loading="lazy" />
        <div class="badge">${heroContent.badge}</div>
        <h1>${heroContent.title}<span>${heroContent.subtitle}</span></h1>
        <p>${heroContent.intro}</p>
        <p>${heroContent.details}</p>
        <p>${heroContent.promise}</p>
        <div class="hero-cta">
          <a class="btn primary" href="tel:+972525551099">שיחה מיידית</a>
          <a class="btn secondary" href="#contact">השארת פרטים</a>
        </div>
        <ul class="pill-list">
          <li>15+ שנות ניסיון</li>
          <li>תיעוד מלא ואחריות</li>
          <li>מענה חירום 24/7</li>
        </ul>
      </div>
      <div class="hero-visual">
        <div class="hero-gallery">
          ${heroGallery
            .map(
              (item) => `
                <figure>
                  <img src="${item.src}" alt="${item.alt}" loading="lazy" />
                  <figcaption>${item.label}</figcaption>
                </figure>
              `
            )
            .join('')}
        </div>
      </div>
    </header>

    <section class="section story">
      <div class="section-head">
        <p class="eyebrow">על הדרך שלי</p>
        <h2>ליווי אישי עד למסירה מושלמת</h2>
      </div>
      <div class="rich-text">
        ${storyParagraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
      </div>
    </section>

    <section class="section services" id="services">
      <div class="section-head">
        <p class="eyebrow">השירותים שלנו</p>
        <h2>פתרונות חשמל מותאמים לבית ולעסק</h2>
        <p class="section-desc">מתכנון נכון, דרך בחירת הציוד ועד התאמה בשטח – הכל מתועד ונמסר עם אחריות מלאה.</p>
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
        <p class="eyebrow">למגזר העסקי ואדריכלים</p>
        <h2>שפה מקצועית משותפת ושקיפות מלאה</h2>
        <p class="section-desc">תיאום מלא מול אדריכלים, קבלנים ומפקחים כדי לעמוד בלוחות הזמנים ללא הפתעות.</p>
      </div>
      <div class="card business-card">
        <ul class="services-list">
          ${businessHighlights.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    </section>

    <section class="section testimonials" id="testimonials">
      <div class="section-head">
        <p class="eyebrow">לקוחות מספרים</p>
        <h2>שקט נפשי מתחיל בחשמלאי נכון</h2>
      </div>
      <div class="testimonials-grid">
        ${testimonials
          .map(
            (testimonial) => `
              <blockquote class="card testimonial-card">
                <div class="rating" aria-label="5 מתוך 5">
                  ${'<span>★</span>'.repeat(5)}
                </div>
                <p>“${testimonial.quote}”</p>
                <footer>
                  <span>${testimonial.author}</span>
                  <span>${testimonial.role}</span>
                </footer>
              </blockquote>
            `
          )
          .join('')}
      </div>
    </section>

    <section class="section reasons" id="reasons">
      <div class="section-head">
        <p class="eyebrow">למה לבחור בנו</p>
        <h2>מעגל החשמל – סטנדרט של דיוק</h2>
      </div>
      <div class="reasons-grid">
        ${reasons
          .map(
            (reason) => `
              <div class="card reason-card">
                <p>${reason}</p>
              </div>
            `
          )
          .join('')}
      </div>
    </section>

    <section class="section gallery" id="gallery">
      <div class="section-head">
        <p class="eyebrow">מהשטח</p>
        <h2>פרויקטים ותיעוד</h2>
        <p class="section-desc">שילוב של קונסטרוקציה נקייה, סימון מדויק ותיעוד צילומי לכל לקוח.</p>
      </div>
      <div class="gallery-grid">
        ${galleryImages
          .map(
            (image) => `
              <figure class="gallery-card">
                <img src="${image.src}" alt="${image.caption}" loading="lazy" />
                <figcaption>${image.caption}</figcaption>
              </figure>
            `
          )
          .join('')}
      </div>
    </section>

    <section class="section contact" id="contact">
      <div class="section-head">
        <p class="eyebrow">רוצים ייעוץ או הצעת מחיר?</p>
        <h2>השאירו פרטים ונחזור אליכם במהירות</h2>
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
          <p class="value">שיתוף קבצים ותיאום צפוי מראש</p>
          <ul class="services-list compact">
            ${contactHighlights.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>
    </div>
    </section>

    <footer class="footer">
      <p>© ${currentYear} מעגל החשמל – יניב כהן.</p>
      <p>
        <a href="https://wa.me/972525551099" target="_blank" rel="noopener">ווטסאפ</a> ·
        <a href="mailto:electricitycircuit@outlook.com">אימייל</a> ·
        <a href="tel:+972525551099">טלפון</a>
      </p>
    </footer>
  </main>
`
