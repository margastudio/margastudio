import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import ScrollMorphHero from './components/ui/scroll-morph-hero'
import cases from './data/cases.json'
import { I18nProvider, LANGS, useI18n, type Localized } from './i18n'
import './styles.css'

type DecisionRow = { label: Localized; text: Localized }
type Decision = { title: Localized; rows: DecisionRow[] }
type Section = {
  id: string; title: Localized
  intro?: Localized[]; items?: Localized[]; outro?: Localized[]; decisions?: Decision[]
}
type CaseStudy = {
  slug: string; name: string; category: Localized
  hero: { tagline: Localized; description: Localized; meta: Localized }
  seo?: Localized
  sections: Section[]
}

const EMAIL = 'histudiomarga@gmail.com'
const studies = Object.values(cases) as unknown as CaseStudy[]
const certificates = Array.from({ length: 10 }, (_, index) => index + 1)
const cardImages: Record<string, string> = {
  tribuxmusic: '/images/swckcaqxxpjaxmycntbjniwjnza.webp',
  funihao: '/images/iw0rwwsuqmp50qtapit9hbomni.webp',
  'claudia-fabiani': '/images/mbh8xzc2f8x6uegn0mkfgq3uvdw.webp',
  'raul-pardeilhan': '/images/ma3cfyrxgiayvrwdpwugsaarga.webp',
  duolingo: '/images/sfyalaumgxmvcnarvhl7lzjai.webp',
}

/** Phase 07 — every route change starts at the top; "/#work" still jumps to its anchor. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  React.useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
  }, [])
  React.useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (target) { target.scrollIntoView({ behavior: 'instant' as ScrollBehavior }); return }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])
  return null
}

/** Keeps <title> and meta description in the active language. */
function PageMeta({ title, description }: { title: string; description: string }) {
  React.useEffect(() => {
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
  return null
}

function LangSwitch() {
  const { lang, setLang, t } = useI18n()
  return <div className="lang-switch" role="group" aria-label={t('langLabel')}>
    {LANGS.map((item, i) => <React.Fragment key={item.code}>
      {i > 0 && <span aria-hidden="true">/</span>}
      <button type="button" className={lang === item.code ? 'is-active' : ''} aria-pressed={lang === item.code} lang={item.html} onClick={() => setLang(item.code)}>{item.label}</button>
    </React.Fragment>)}
  </div>
}

function Header() {
  const { t } = useI18n()
  const [open, setOpen] = React.useState(false)
  const location = useLocation()
  React.useEffect(() => setOpen(false), [location.pathname])
  return <header className="site-header">
    <Link className="brand" to="/">Marga Studio<span>{t('brandRole')}</span></Link>
    <span className="location">{t('location')}</span>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={t('menuOpen')}>{open ? t('menuClose') : t('menuOpen')}</button>
    <nav className={open ? 'nav-links is-open' : 'nav-links'}>
      <Link to="/">{t('navHome')}</Link><Link to="/#work">{t('navWork')}</Link><Link to="/about">{t('navAbout')}</Link><a href={`mailto:${EMAIL}`}>{t('navContact')}</a>
    </nav>
    <LangSwitch />
  </header>
}

function Footer() {
  const { t } = useI18n()
  return <footer className="site-footer">
    <div><span className="eyebrow">{t('contactCta')}</span><a className="footer-talk" href={`mailto:${EMAIL}`}>{t('letsTalk')} <span>↗</span></a></div>
    <div className="footer-seal">
      {/* Drop the final Water Goat mark at public/water-goat-seal.svg; it stays hidden until the file exists. */}
      <img src="/water-goat-seal.svg" alt="" width={36} height={36} onError={event => { event.currentTarget.style.display = 'none' }} />
      <p>{t('footerLine')}</p>
    </div>
    <div className="footer-bottom"><Link to="/">Marga Studio</Link><a href={`mailto:${EMAIL}`}>{EMAIL}</a><span>{t('footerSignature')}</span><span>© {new Date().getFullYear()} Marga Studio</span></div>
  </footer>
}

function ProjectCard({ study, index }: { study: CaseStudy; index: number }) {
  const { pick } = useI18n()
  return <Link className={`project-card project-card-${index + 1}`} to={`/projects/${study.slug}`}>
    <div className="project-image"><img src={cardImages[study.slug] || '/images/comydsrbrvzzlf6gpuvyoueoju.png'} alt={study.name} loading="lazy" /><span className="project-arrow">↗</span></div>
    <div className="project-caption"><div><h3>{study.name}</h3><p>{pick(study.hero.tagline)}</p></div><span>{pick(study.category)}</span></div>
  </Link>
}

function Home() {
  const { t } = useI18n()
  const mainStudies = [...studies].sort((a, b) => a.slug === 'tribuxmusic' ? -1 : b.slug === 'tribuxmusic' ? 1 : a.name.localeCompare(b.name))
  return <><PageMeta title={t('metaTitle')} description={`${t('heroTitle')} ${t('heroText')}`} />
    <ScrollMorphHero /><main>
      <section className="home-intro section-wrap"><div className="eyebrow">{t('microcopy')}</div><h2>{t('designApproach')}</h2><div className="intro-meta"><span>{t('productDesigner')}</span><span>{t('location')}</span><a href={`mailto:${EMAIL}`}>{t('letsTalk')} ↗</a></div></section>
      <section className="work-section section-wrap" id="work"><div className="section-heading"><span className="eyebrow">{t('selectedWorkText')}</span><h2>{t('selectedWork')}<span>({String(mainStudies.length).padStart(2, '0')})</span></h2></div><div className="project-grid">{mainStudies.map((study, i) => <ProjectCard key={study.slug} study={study} index={i} />)}</div></section>
      <section className="home-about section-wrap"><div className="eyebrow">{t('aboutPreviewEyebrow')}</div><p>{t('aboutPreview')}</p><Link to="/about" className="text-link">{t('moreAboutMe')} <span>↗</span></Link></section>
    </main><Footer /></>
}

function About() {
  const { t } = useI18n()
  const areas = t('areas').split(' · ')
  const languages = t('languages').split(' · ')
  return <><PageMeta title={`${t('aboutTitle')} — Marga Studio`} description={t('aboutPreview')} />
    <main className="about-page section-wrap">
      <div className="page-kicker"><span className="eyebrow">{t('aboutKicker')}</span><span>{t('location')}</span></div>
      {/* 1 · professional photo + presentation */}
      <section className="about-lead"><h1>{t('aboutTitle')}</h1><div className="about-lead-copy"><p>{t('aboutPreview')}</p><img className="profile-image" src="/images/marga-profile.png" alt={t('portraitAlt')} /></div></section>
      {/* 2 · biography */}
      <section className="about-story"><div className="eyebrow">{t('biographyEyebrow')}</div><div><p>{t('biography')}</p></div></section>
      {/* 3 · approach + areas */}
      <section className="services"><div className="eyebrow">{t('approachEyebrow')}</div><h2>{t('designApproach')}</h2><div className="eyebrow areas-label">{t('areasEyebrow')}</div><div className="tag-list">{areas.map(x => <span key={x}>{x}</span>)}</div></section>
      {/* 4 · education */}
      <section className="about-story"><div className="eyebrow">{t('educationEyebrow')}</div><div><p>{t('education')}</p></div></section>
      {/* 5 · certificates */}
      <section className="certifications"><div className="certifications-heading"><div className="eyebrow">{t('certsEyebrow')}</div><h2>{t('certsTitle')}</h2></div><div className="certificate-grid">{certificates.map(number => <a className="certificate-card" href={`/images/certificates/cert-${number}.png`} target="_blank" rel="noreferrer" key={number} aria-label={`${t('certOpen')} ${number}`}><img src={`/images/certificates/cert-${number}.png`} alt={`${t('certAlt')} ${number}`} loading="lazy" /></a>)}</div></section>
      {/* 6 · languages */}
      <section className="about-story"><div className="eyebrow">{t('languagesEyebrow')}</div><div className="tag-list">{languages.map(x => <span key={x}>{x}</span>)}</div></section>
      {/* 7 · contact */}
      <section className="about-story"><div className="eyebrow">{t('contactEyebrow')}</div><div><p>{t('contactCta')}</p><a className="text-link" href={`mailto:${EMAIL}`}>{EMAIL} <span>↗</span></a></div></section>
    </main><Footer /></>
}

function RichText({ value }: { value: string }) {
  const bits = value.split(/(\*\*.*?\*\*)/g)
  return <>{bits.map((bit, i) => bit.startsWith('**') && bit.endsWith('**') ? <strong key={i}>{bit.slice(2, -2)}</strong> : <React.Fragment key={i}>{bit}</React.Fragment>)}</>
}

function CaseSection({ section }: { section: Section }) {
  const { pick } = useI18n()
  const paragraphs = (list?: Localized[], prefix = 'p') => list?.map((paragraph, i) => <p key={`${prefix}-${i}`}><RichText value={pick(paragraph)} /></p>)
  return <article className="case-section" id={section.id}>
    <h2>{pick(section.title)}</h2>
    <div>
      {paragraphs(section.intro, 'intro')}
      {paragraphs(section.items, 'item')}
      {section.decisions?.map((decision, i) => <div className="case-decision" key={`decision-${i}`}>
        <h3>{pick(decision.title)}</h3>
        {decision.rows.map((row, j) => <p key={j}><strong>{pick(row.label)}:</strong> <RichText value={pick(row.text)} /></p>)}
      </div>)}
      {paragraphs(section.outro, 'outro')}
    </div>
  </article>
}

function CasePage() {
  const { t, pick } = useI18n()
  const { slug } = useParams()
  const study = studies.find(item => item.slug === slug)
  if (!study) return <main className="section-wrap not-found"><h1>{t('notFound')}</h1><Link to="/">{t('backHome')}</Link></main>
  const others = studies.filter(item => item.slug !== study.slug)
  return <><PageMeta title={`${study.name} — Marga Studio`} description={pick(study.seo) || pick(study.hero.description)} />
    <main className="case-page">
      <section className="case-hero section-wrap"><div className="page-kicker"><span className="eyebrow">{t('selectedProject')} / {pick(study.category).toUpperCase()}</span><Link to="/#work">{t('allProjects')}</Link></div><h1>{study.name}</h1><p className="case-tagline">{pick(study.hero.tagline)}</p><div className="case-image"><img src={cardImages[study.slug]} alt={`${study.name} — ${t('caseImageAlt')}`} /></div></section>
      <section className="case-summary section-wrap"><div className="case-meta"><span>{t('projectType')}</span><b>{pick(study.category)}</b><span>{t('year')}</span><b>{pick(study.hero.meta).split(' · ')[0]}</b></div><div><span className="eyebrow">{t('projectOverview')}</span><p>{pick(study.hero.description)}</p></div></section>
      <section className="case-content section-wrap">{study.sections.map(section => <CaseSection key={section.id} section={section} />)}</section>
      <section className="next-project section-wrap"><span className="eyebrow">{t('moreWork')}</span><div className="project-grid">{others.slice(0, 2).map((item, i) => <ProjectCard key={item.slug} study={item} index={i} />)}</div></section>
    </main><Footer /></>
}

function App() {
  return <BrowserRouter><I18nProvider><Header /><ScrollManager /><Routes>
    <Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/projects/:slug" element={<CasePage />} /><Route path="*" element={<Home />} />
  </Routes></I18nProvider></BrowserRouter>
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
