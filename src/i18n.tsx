import React from 'react'

export type Lang = 'en' | 'zh' | 'es'
export type Localized = { en: string; es?: string; zh?: string }

// Order follows the plan: EN / 中文 / ES. Abbreviations, not flags.
export const LANGS: { code: Lang; label: string; html: string }[] = [
  { code: 'en', label: 'EN', html: 'en' },
  { code: 'zh', label: '中文', html: 'zh-CN' },
  { code: 'es', label: 'ES', html: 'es' },
]

type Entry = Record<Lang, string>
const e = (en: string, es: string, zh: string): Entry => ({ en, es, zh })

/**
 * UI copy. Strings marked "plan" come verbatim from
 * Marga_Studio_Website_Redesign_Plan_ES_EN_ZH.pdf.
 * Strings marked "NEW" are small UI labels the plan did not include —
 * review them before publishing.
 */
export const STRINGS = {
  // ── Header / nav (NEW labels)
  brandRole: e('Digital designer', 'Diseñadora digital', '数字设计师'),
  location: e('Argentina / China', 'Argentina / China', '阿根廷 / 中国'),
  navHome: e('Home', 'Inicio', '首页'),
  navWork: e('Work', 'Trabajos', '作品'),
  navAbout: e('About', 'Sobre mí', '关于'),
  navContact: e('Contact', 'Contacto', '联系'),
  menuOpen: e('Menu', 'Menú', '菜单'),
  menuClose: e('Close', 'Cerrar', '关闭'),
  langLabel: e('Language', 'Idioma', '语言'),

  // ── Home (plan §3)
  heroTitle: e(
    'Digital designer shaping thoughtful digital experiences across cultures.',
    'Diseñadora digital creando experiencias digitales con intención, entre culturas.',
    '一名跨越不同文化、专注于创造有意义数字体验的数字设计师。',
  ),
  heroText: e(
    'I design digital products, websites and visual systems that bring ideas closer to people.',
    'Diseño productos digitales, sitios web y sistemas visuales que acercan ideas a las personas.',
    '我设计数字产品、网站和视觉系统，让创意与人们建立连接。',
  ),
  scrollHint: e('SCROLL TO EXPLORE', 'DESLIZÁ PARA EXPLORAR', '向下滚动探索'), // NEW
  scrollNote: e('Scroll to move through the collection', 'Deslizá para recorrer la colección', '滚动浏览作品集'), // NEW
  microcopy: e(
    'Independent digital designer · Argentina / China',
    'Diseñadora digital independiente · Argentina / China',
    '独立数字设计师 · 阿根廷 / 中国',
  ),
  designApproach: e(
    'From the first question to the final interaction, I connect research, strategy and visual design to create clear, useful and memorable experiences.',
    'Desde la primera pregunta hasta la interacción final, conecto investigación, estrategia y diseño visual para crear experiencias claras, útiles y memorables.',
    '从最初的问题到最终的交互，我将研究、策略与视觉设计结合，创造清晰、实用且令人印象深刻的体验。',
  ),
  productDesigner: e('Product designer', 'Diseñadora de producto', '产品设计师'), // NEW
  selectedWork: e('Selected work', 'Trabajos seleccionados', '精选作品'), // NEW heading
  selectedWorkText: e(
    'A selection of digital products, websites and visual identities.',
    'Una selección de productos digitales, sitios web e identidades visuales.',
    '精选数字产品、网站与视觉识别项目。',
  ),
  aboutPreviewEyebrow: e('A little about me', 'Un poco sobre mí', '关于我'), // NEW
  aboutPreview: e(
    "I'm Marga, an Argentine digital designer based in China. My work explores the intersection of technology, culture and human experiences.",
    'Soy Marga, diseñadora digital argentina radicada en China. Mi trabajo explora la intersección entre tecnología, cultura y experiencias humanas.',
    '我是 Marga，一名常驻中国的阿根廷数字设计师。我的创作探索科技、文化与人类体验之间的交汇点。',
  ),
  moreAboutMe: e('More about me', 'Más sobre mí', '更多关于我'), // NEW

  // ── Contact CTA + footer (plan §3, §8)
  contactCta: e(
    "Have an idea in mind? Let's make it meaningful.",
    '¿Tenés una idea en mente? Hagámosla realidad con intención.',
    '有一个想法？让我们一起把它变成有意义的体验。',
  ),
  letsTalk: e('Let’s talk', 'Hablemos', '联系我'), // NEW
  footerSignature: e(
    'Designed between Argentina and China. Guided by curiosity.',
    'Diseñado entre Argentina y China. Guiado por la curiosidad.',
    '连接阿根廷与中国，以好奇心为引导。',
  ),
  footerLine: e(
    'Curiosity moves everything. — Marga Studio',
    'La curiosidad lo mueve todo. — Marga Studio',
    '好奇心，让一切向前。— Marga Studio',
  ),

  // ── About (plan §4)
  aboutKicker: e('MARGA STUDIO / ABOUT', 'MARGA STUDIO / SOBRE MÍ', 'MARGA STUDIO / 关于'),
  aboutTitle: e('About', 'Sobre mí', '关于我'),
  portraitAlt: e('Marga, digital designer', 'Marga, diseñadora digital', 'Marga，数字设计师'),
  biographyEyebrow: e('Biography', 'Biografía', '简介'), // NEW
  biography: e(
    "I'm Marga Pardeilhan, an Argentine digital designer currently based in China. Since 2021, I've been exploring how digital design can make complex ideas easier to understand and use. My practice brings together product thinking, user experience, visual systems and web design. Living between cultures has made me attentive to language, context and the different ways people interact with technology. I'm especially interested in the role of AI and emerging technologies in creating more accessible, human-centered experiences.",
    'Soy Marga Pardeilhan, diseñadora digital argentina actualmente radicada en China. Desde 2021 exploro cómo el diseño digital puede hacer que las ideas complejas sean más fáciles de comprender y utilizar. Mi práctica combina pensamiento de producto, experiencia de usuario, sistemas visuales y diseño web. Vivir entre culturas me volvió más consciente del lenguaje, el contexto y las distintas formas en que las personas interactúan con la tecnología. Me interesa especialmente el papel de la inteligencia artificial y las nuevas tecnologías en la creación de experiencias más accesibles y centradas en las personas.',
    '我叫 Marga Pardeilhan，来自阿根廷，目前生活在中国。自 2021 年以来，我一直在探索数字设计如何让复杂的想法更容易被理解和使用。我的设计实践融合了产品思维、用户体验、视觉系统与网页设计。跨文化生活经历让我更加关注语言、语境，以及人们与科技互动的不同方式。我尤其关注人工智能和新兴技术如何帮助创造更易于使用、以人为本的体验。',
  ),
  approachEyebrow: e('Approach', 'Enfoque', '设计方法'), // NEW
  areasEyebrow: e('Areas of practice', 'Áreas de práctica', '实践领域'),
  areas: e(
    'Product design · UX/UI · Web design · Framer development · Visual identity · AI-driven explorations',
    'Diseño de producto · UX/UI · Diseño web · Desarrollo en Framer · Identidad visual · Exploraciones con IA',
    '产品设计 · UX/UI · 网站设计 · Framer 开发 · 视觉识别 · AI 创意探索',
  ),
  educationEyebrow: e('Education', 'Formación académica', '教育背景'),
  education: e(
    'Digital Design — Universidad del Este, Argentina. Currently completing the remaining coursework and final thesis process.',
    'Diseño Digital — Universidad del Este, Argentina. Actualmente completando las materias pendientes y el proceso de tesis.',
    '数字设计 — 阿根廷东方大学（Universidad del Este）。目前正在完成剩余课程及毕业论文流程。',
  ),
  certsEyebrow: e('Certifications', 'Certificados', '证书'),
  certsTitle: e('Courses & certificates', 'Cursos y certificados', '课程与证书'),
  certOpen: e('Open certificate', 'Abrir certificado', '查看证书'), // NEW
  certAlt: e('Course certificate', 'Certificado de curso', '课程证书'), // NEW
  languagesEyebrow: e('Languages', 'Idiomas', '语言'),
  languages: e(
    'Spanish — Native · English — Professional working proficiency · Chinese — Learning',
    'Español — Nativo · Inglés — Competencia profesional · Chino — En aprendizaje',
    '西班牙语 — 母语 · 英语 — 专业工作沟通水平 · 中文 — 学习中',
  ),
  contactEyebrow: e('Contact', 'Contacto', '联系'),

  // ── Case study pages (NEW labels)
  allProjects: e('← All projects', '← Todos los proyectos', '← 所有项目'),
  selectedProject: e('SELECTED PROJECT', 'PROYECTO SELECCIONADO', '精选项目'),
  projectType: e('Project type', 'Tipo de proyecto', '项目类型'),
  year: e('Year', 'Año', '年份'),
  projectOverview: e('PROJECT OVERVIEW', 'RESUMEN DEL PROYECTO', '项目概览'),
  moreWork: e('MORE SELECTED WORK', 'MÁS TRABAJOS SELECCIONADOS', '更多精选作品'),
  caseImageAlt: e('case study', 'caso de estudio', '案例研究'),
  notFound: e('Project not found', 'Proyecto no encontrado', '未找到该项目'),
  backHome: e('Back to Marga Studio', 'Volver a Marga Studio', '返回 Marga Studio'),

  // ── <title> / meta description
  metaTitle: e(
    'Marga Studio — Digital designer',
    'Marga Studio — Diseñadora digital',
    'Marga Studio — 数字设计师',
  ),
} satisfies Record<string, Entry>

export type StringKey = keyof typeof STRINGS

type Ctx = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: StringKey) => string
  pick: (value?: Localized | null) => string
}

const I18nContext = React.createContext<Ctx | null>(null)
const STORAGE_KEY = 'marga-lang'

function initialLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'zh' || stored === 'es') return stored
  } catch { /* storage can be blocked */ }
  return 'en'
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>(initialLang)

  const setLang = React.useCallback((next: Lang) => {
    setLangState(next)
    try { window.localStorage.setItem(STORAGE_KEY, next) } catch { /* ignore */ }
  }, [])

  React.useEffect(() => {
    document.documentElement.lang = LANGS.find(l => l.code === lang)?.html ?? 'en'
  }, [lang])

  const value = React.useMemo<Ctx>(() => ({
    lang,
    setLang,
    t: key => STRINGS[key][lang],
    pick: v => (v ? (v[lang] ?? v.en) : ''),
  }), [lang, setLang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = React.useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>')
  return ctx
}
