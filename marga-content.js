(function () {
  const copy = {
    en: {
      home: 'Home', work: 'Work', about: 'About', contact: 'Contact',
      hero: 'Designing digital products, websites & experiences that move ideas forward.',
      intro: 'I’m Marga, an independent digital designer working across UX/UI, product design, web design and creative technology.',
      sub: 'I combine strategy, visual design and technology to turn ideas into clear, engaging digital experiences.',
      selected: '↓ Selected work',
      aboutTitle: 'About Marga Studio',
      about: 'Marga Studio is an independent design practice focused on digital experiences, product design, web design and creative technology.',
      contact: 'Have an idea, a product or a website in mind? Let’s make it happen.',
      available: 'Available for freelance projects, collaborations and selected creative opportunities.'
    },
    es: {
      home: 'Inicio', work: 'Proyectos', about: 'Estudio', contact: 'Contacto',
      hero: 'Diseño productos digitales, sitios web y experiencias que hacen avanzar las ideas.',
      intro: 'Soy Marga, diseñadora digital independiente especializada en UX/UI, diseño de producto, diseño web y tecnología creativa.',
      sub: 'Combino estrategia, diseño visual y tecnología para transformar ideas en experiencias digitales claras y atractivas.',
      selected: '↓ Proyectos seleccionados',
      aboutTitle: 'Sobre Marga Studio',
      about: 'Marga Studio es un estudio independiente de diseño enfocado en experiencias digitales, diseño de producto, diseño web y tecnología creativa.',
      contact: '¿Tenés una idea, un producto o un sitio web en mente? Hagámoslo realidad.',
      available: 'Disponible para proyectos freelance, colaboraciones y oportunidades creativas seleccionadas.'
    },
    zh: {
      home: '首页', work: '项目', about: '关于', contact: '联系',
      hero: '设计推动想法向前发展的数字产品、网站与体验。',
      intro: '我是 Marga，一名独立数字设计师，专注于 UX/UI、产品设计、网页设计与创意科技。',
      sub: '我将策略、视觉设计与技术结合，将想法转化为清晰、有吸引力的数字体验。',
      selected: '↓ 精选项目',
      aboutTitle: '关于 Marga Studio',
      about: 'Marga Studio 是一个独立设计工作室，专注于数字体验、产品设计、网页设计与创意科技。',
      contact: '有一个想法、产品或网站项目？让我们一起把它实现。',
      available: '接受自由职业项目、合作以及精选创意机会。'
    }
  };
  const projects = {
    '/projects/solene': ['FuNiHao', 'Product Design / UX/UI', 'A Chinese-learning app designed to make language learning more engaging, practical and human.'],
    '/projects/ostro-coffee': ['TribuxMusic', 'Product Design / UX/UI', 'A digital ticketing experience designed for young music audiences in Buenos Aires.'],
    '/projects/ovenbird-bakery': ['Harman Audio Experience', 'UX/UI / Interaction Design', 'A concept for a connected audio experience exploring the relationship between sound, light and interaction.'],
    '/projects/contrada': ['Duolingo — Real-Life Conversations', 'UX/UI / Product Design', 'A product concept exploring how language-learning platforms can create opportunities for more natural, real-world conversations.'],
    '/projects/plump-soda': ['Santander', 'UX/UI / Product Design', 'A digital banking feature concept focused on improving the experience of managing personal finances.'],
    '/projects/dusk-chocolate': ['Marga Studio', 'Web Design / Creative Technology', 'The digital home of Marga Studio — an independent design practice exploring digital design, technology and culture.']
  };
  function textNodes(root) {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const out = []; let n; while (n = w.nextNode()) out.push(n); return out;
  }
  function replace(oldText, newText) {
    textNodes(document.body).forEach(n => { if (n.nodeValue.trim() === oldText) n.nodeValue = n.nodeValue.replace(oldText, newText); });
  }
  function render(lang) {
    const c = copy[lang] || copy.en;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    replace('Brand designer', 'Digital designer'); replace('GMT−4', 'Argentina / China');
    replace('Selected projects', c.work); replace('Let’s talk', c.contact);
    replace('Marga Studio', 'Marga Studio'); replace('I design strategic brand identities that help ambitious businesses earn instant trust and attract the clients they actually want.', c.intro);
    replace('I don’t start with the logo. I start with what the business is trying to become, because a mark that looks good and means nothing falls apart under the first question.', c.about);
    replace('Outside of work I run early, before the city starts. I watch a film most nights, usually alone, usually one I’ve already seen.', c.sub);
    const p = projects[location.pathname]; if (p) { replace(document.title.split(' - ')[0], p[0]); replace('Brand Strategy', p[1]); replace('Free portfolio website template for brand designers, art directors, and independent studios.', p[2]); document.title = p[0] + ' — Marga Studio'; }
    document.querySelectorAll('[data-marga-lang]').forEach(b => b.setAttribute('aria-current', b.dataset.margaLang === lang ? 'true' : 'false'));
  }
  function init() {
    const saved = localStorage.getItem('marga-language') || 'en';
    const bar = document.createElement('nav'); bar.setAttribute('aria-label', 'Language'); bar.style.cssText = 'position:fixed;right:16px;bottom:16px;z-index:20;display:flex;gap:8px;font:12px sans-serif;letter-spacing:.04em';
    [['en','EN'],['es','ES'],['zh','中文']].forEach(([v,l]) => { const b=document.createElement('button'); b.type='button'; b.textContent=l; b.dataset.margaLang=v; b.style.cssText='background:transparent;border:0;padding:4px;cursor:pointer;color:inherit'; b.onclick=()=>{localStorage.setItem('marga-language',v);render(v)}; bar.appendChild(b); });
    document.body.appendChild(bar); render(saved);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
