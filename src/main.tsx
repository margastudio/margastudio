import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import ScrollMorphHero from './components/ui/scroll-morph-hero'
import cases from './data/cases.json'
import './styles.css'

type Localized = { en: string; es?: string; zh?: string }
type CaseStudy = {
  slug: string; name: string; category: Localized; hero: { tagline: Localized; description: Localized; meta: Localized; tags?: { en: string[] } }
  sections: Array<{ id: string; title: Localized; intro?: Localized[]; items?: Localized[]; [key: string]: unknown }>
}
const studies = Object.values(cases) as CaseStudy[]
const cardImages: Record<string, string> = {
  tribuxmusic: '/images/swckcaqxxpjaxmycntbjniwjnza.webp',
  funihao: '/images/iw0rwwsuqmp50qtapit9hbomni.webp',
  'claudia-fabiani': '/images/mbh8xzc2f8x6uegn0mkfgq3uvdw.webp',
  'raul-pardeilhan': '/images/ma3cfyrxgiayvrwdpwugsaarga.webp',
  duolingo: '/images/sfyalaumgxmvcnarvhl7lzjai.webp',
}

function Header() {
  const [open, setOpen] = React.useState(false)
  const location = useLocation()
  React.useEffect(() => setOpen(false), [location.pathname])
  return <header className="site-header">
    <Link className="brand" to="/">Marga Studio<span>Digital designer</span></Link>
    <span className="location">Argentina / China</span>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? 'Close' : 'Menu'}</button>
    <nav className={open ? 'nav-links is-open' : 'nav-links'}>
      <Link to="/">Home</Link><Link to="/#work">Work</Link><Link to="/about">About</Link><a href="mailto:histudiomarga@gmail.com">Contact</a>
    </nav>
  </header>
}

function Footer() { return <footer className="site-footer"><div><span className="eyebrow">HAVE A PROJECT IN MIND?</span><a className="footer-talk" href="mailto:histudiomarga@gmail.com">Let’s talk <span>↗</span></a></div><div className="footer-bottom"><Link to="/">Marga Studio</Link><a href="mailto:histudiomarga@gmail.com">histudiomarga@gmail.com</a><span>Argentina / China</span><span>© {new Date().getFullYear()} Marga Studio</span></div></footer> }

function ProjectCard({ study, index }: { study: CaseStudy; index: number }) {
  return <Link className={`project-card project-card-${index + 1}`} to={`/projects/${study.slug}`}>
    <div className="project-image"><img src={cardImages[study.slug] || '/images/comydsrbrvzzlf6gpuvyoueoju.png'} alt={`${study.name} project`} loading="lazy" /><span className="project-arrow">↗</span></div>
    <div className="project-caption"><div><h3>{study.name}</h3><p>{study.hero.tagline.en}</p></div><span>{study.category.en}</span></div>
  </Link>
}

function Home() {
  const mainStudies = [...studies].sort((a, b) => a.slug === 'tribuxmusic' ? -1 : b.slug === 'tribuxmusic' ? 1 : a.name.localeCompare(b.name))
  return <><ScrollMorphHero /><main>
    <section className="home-intro section-wrap"><div className="eyebrow">INDEPENDENT DIGITAL DESIGN STUDIO</div><h2>I design websites, digital products and visual systems for ambitious brands that want to stand out.</h2><div className="intro-meta"><span>Product designer</span><span>Argentina / China</span><a href="mailto:histudiomarga@gmail.com">Let’s talk ↗</a></div></section>
    <section className="work-section section-wrap" id="work"><div className="section-heading"><span className="eyebrow">A SELECTION OF RECENT WORK</span><h2>Selected projects<span>({String(mainStudies.length).padStart(2, '0')})</span></h2></div><div className="project-grid">{mainStudies.map((study, i) => <ProjectCard key={study.slug} study={study} index={i} />)}</div></section>
    <section className="home-about section-wrap"><div className="eyebrow">A LITTLE ABOUT ME</div><p>I’m Marga, a digital designer from Argentina currently based in China. I design digital experiences that help brands build trust, stand out and grow online.</p><Link to="/about" className="text-link">More about me <span>↗</span></Link></section>
  </main><Footer /></>
}

function About() {
  return <><main className="about-page section-wrap"><div className="page-kicker"><span className="eyebrow">MARGA STUDIO / ABOUT</span><span>Argentina / China</span></div><section className="about-lead"><h1>About</h1><p>I’m Marga, a digital designer from Argentina currently based in China. I design digital experiences that help brands build trust, stand out and grow online.</p></section>
    <section className="about-story"><div className="eyebrow">HOW I WORK</div><div><p>I like to get involved early. Before opening Figma, I want to understand what’s there, what’s missing, and what the experience needs to do. I ask questions, collect references, sketch things out and test ideas until there’s a direction worth following. From there, the work becomes a matter of making it sharper, simpler and more considered.</p><p>I don’t like separating the thinking from the making. I move between strategy, structure, visuals and code as the project takes shape, which means things can change along the way. A layout might become an interaction, an interaction might become a whole new idea. I leave room for that.</p></div></section>
    <section className="services"><div className="eyebrow">WHAT I BRING TO THE TABLE</div><h2>Digital experiences that engage users and help ambitious brands stand out from day one.</h2><div className="tag-list">{['Product Design','User Experience Design','Design Systems','User Research','User Interface Design','Branding','Pitch Deck Design','Framer Development','Visual Design'].map(x => <span key={x}>{x}</span>)}</div></section>
    <section className="certifications"><div className="eyebrow">CERTIFICATIONS</div><p>Certification</p></section>
  </main><Footer /></>
}

function RichText({ value }: { value: string }) {
  const bits = value.split(/(\*\*.*?\*\*)/g)
  return <>{bits.map((bit, i) => bit.startsWith('**') && bit.endsWith('**') ? <strong key={i}>{bit.slice(2, -2)}</strong> : <React.Fragment key={i}>{bit}</React.Fragment>)}</>
}

function CasePage() {
  const { slug } = useParams()
  const study = studies.find(item => item.slug === slug)
  if (!study) return <main className="section-wrap not-found"><h1>Project not found</h1><Link to="/">Back to Marga Studio</Link></main>
  return <><main className="case-page">
    <section className="case-hero section-wrap"><div className="page-kicker"><span className="eyebrow">SELECTED PROJECT / {study.category.en.toUpperCase()}</span><Link to="/#work">← All projects</Link></div><h1>{study.name}</h1><p className="case-tagline">{study.hero.tagline.en}</p><div className="case-image"><img src={cardImages[study.slug]} alt={`${study.name} case study`} /></div></section>
    <section className="case-summary section-wrap"><div className="case-meta"><span>Project type</span><b>{study.category.en}</b><span>Year</span><b>{study.hero.meta.en.split(' · ')[0]}</b></div><div><span className="eyebrow">PROJECT OVERVIEW</span><p>{study.hero.description.en}</p></div></section>
    <section className="case-content section-wrap">{study.sections.map(section => <article className="case-section" key={section.id}><h2>{section.title.en}</h2><div>{section.intro?.map((paragraph, i) => <p key={i}><RichText value={paragraph.en} /></p>)}{section.items?.map((paragraph, i) => <p key={`item-${i}`}><RichText value={paragraph.en} /></p>)}</div></article>)}</section>
    <section className="next-project section-wrap"><span className="eyebrow">MORE SELECTED WORK</span><div className="project-grid">{studies.filter(item => item.slug !== study.slug).slice(0, 2).map((item, i) => <ProjectCard key={item.slug} study={item} index={i} />)}</div></section>
  </main><Footer /></>
}

function App() { return <BrowserRouter><Header /><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/projects/:slug" element={<CasePage />} /><Route path="*" element={<Home />} /></Routes></BrowserRouter> }

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
