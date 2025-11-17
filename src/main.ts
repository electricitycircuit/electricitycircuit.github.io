import './style.css'

type ServiceCategory = {
  title: string
  bullets: string[]
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

const serviceCategories: ServiceCategory[] = [
  {
    title: 'עבודות חשמל לבית',
    bullets: [
      'שיפוץ מלא של מערכות החשמל בדירות ובבתים פרטיים',
      'החלפת לוחות, חיווט, פחתים ומפסקים ישנים',
      'הוספת נקודות חשמל ותאורה בגינה, במרפסת ובכל חלל',
      'התקנת גופי תאורה דקורטיביים – תאורה סמויה, פסי לד ונברשות מעוצבות'
    ]
  },
  {
    title: 'פתרונות מתקדמים וחכמים',
    bullets: [
      'עמדות טעינה לרכב חשמלי – מהתשתית ועד בדיקת בודק מוסמך',
      'הכנה מוקדמת וביצוע ביקורת חברת חשמל',
      'פתרונות חשמל חכמים ושליטה דרך אפליקציה',
      'התקנת לוחות חשמל לפי התקנים והנחיות חברת חשמל'
    ]
  },
  {
    title: 'תחזוקה ובטיחות',
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
    dir: 'ltr'
  },
  {
    label: 'שלחו ווטסאפ',
    value: 'הודעה מהירה',
    href: 'https://wa.me/972525551099',
    accent: 'neutral'
  },
  {
    label: 'כתבו מייל',
    value: 'electricitycircuit@outlook.com',
    href: 'mailto:electricitycircuit@outlook.com',
    accent: 'neutral',
    dir: 'ltr'
  }
]

const contactHighlights = [
  'תגובה ראשונית באותו היום בימים א׳-ה׳ בין 08:00-20:00',
  'מענה חירום 24/7 לתקלות וקצרים קריטיים',
  'ניתן לשלוח תוכניות, תמונות וסרטונים עד 25MB'
]

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Root element #app not found')
}

const currentYear = new Date().getFullYear()

app.innerHTML = `
  <main class="page">
    <header class="hero" id="hero">
      <div class="hero-content">
        <img class="logo-mark" src="/logo.png" alt="מעגל החשמל" loading="lazy" />
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
        <div class="visual-frame">
          <p>פתרונות חשמל מדויקים <br />לכל תוכנית, בית ועסק.</p>
          <span>תכנון • ביצוע • תחזוקה</span>
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
        <p class="eyebrow">למה לבחור בי</p>
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
