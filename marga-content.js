(function () {
  const translations = {
    en: {
      role: 'Product designer', location: 'argentina-china', home: 'Home', work: 'Work', about: 'About', contact: 'Contact',
      hero: 'I design websites, digital products and visual systems for ambitious brands that want to stand out.',
      intro: 'I’m Marga, a digital designer from Argentina currently based in China. I design strategic digital experiences that help brands build trust, stand out and grow online.',
      process: 'I like to get involved early. Before opening Figma, I want to understand what’s there, what’s missing, and what the experience needs to do. I ask questions, collect references, sketch things out and test ideas until there’s a direction worth following. From there, the work becomes a matter of making it sharper, simpler and more considered.',
      sub: 'I don’t like separating the thinking from the making. I move between strategy, structure, visuals and code as the project takes shape, which means things can change along the way. A layout might become an interaction, an interaction might become a whole new idea. I leave room for that.',
      selected: 'Selected projects', aboutTitle: 'About', certifications: 'Certifications', addCourse: 'Add course name', certification: 'Certification',
      bringTitle: 'What I bring to the table', bringText: 'Digital experiences that engage users and help ambitious brands stand out from day one.', talk: 'Let’s talk', email: 'histudiomarga@gmail.com',
      tags: ['Product Design', 'User Experience Design', 'Design Systems', 'User Research', 'User Interface Design', 'Branding', 'Pitch Deck Design', 'Framer Development', 'Visual Design']
    },
    es: {
      role: 'Diseñadora de producto', location: 'argentina-china', home: 'Inicio', work: 'Proyectos', about: 'Sobre mí', contact: 'Contacto',
      hero: 'Diseño sitios web, productos digitales y sistemas visuales para marcas ambiciosas que quieren destacarse.',
      intro: 'Soy Marga, diseñadora digital de Argentina, actualmente basada en China. Diseño experiencias digitales estratégicas que ayudan a las marcas a generar confianza, destacarse y crecer online.',
      process: 'Me gusta involucrarme desde el principio. Antes de abrir Figma, quiero entender qué existe, qué falta y qué necesita lograr la experiencia. Hago preguntas, reúno referencias, dibujo ideas y pruebo caminos hasta encontrar una dirección que valga la pena seguir. Después, el trabajo consiste en hacerla más clara, simple y precisa.',
      sub: 'No me gusta separar el pensamiento de la creación. Paso de la estrategia a la estructura, lo visual y el código mientras el proyecto toma forma. Un layout puede convertirse en una interacción, y una interacción en una idea completamente nueva. Dejo espacio para eso.',
      selected: 'Proyectos seleccionados', aboutTitle: 'Sobre mí', certifications: 'Certificaciones', addCourse: 'Agregar nombre del curso', certification: 'Certificación',
      bringTitle: 'Lo que aporto al proyecto', bringText: 'Experiencias digitales que conectan con las personas y ayudan a las marcas ambiciosas a destacarse desde el primer día.', talk: 'Hablemos', email: 'histudiomarga@gmail.com',
      tags: ['Diseño de producto', 'Diseño de experiencia', 'Sistemas de diseño', 'Investigación de usuarios', 'Diseño de interfaces', 'Branding', 'Diseño de pitch decks', 'Desarrollo en Framer', 'Diseño visual']
    },
    zh: {
      role: '产品设计师', location: '阿根廷 / 中国', home: '首页', work: '项目', about: '关于我', contact: '联系',
      hero: '我为希望脱颖而出的品牌设计网站、数字产品和视觉系统。',
      intro: '我是 Marga，一名来自阿根廷、目前居住在中国的数字设计师。我设计具有策略性的数字体验，帮助品牌建立信任、脱颖而出并在线成长。',
      process: '我喜欢从项目早期就参与其中。在打开 Figma 之前，我会先了解现状、缺少什么，以及体验需要完成什么。我提出问题、收集参考、绘制草图并测试想法，直到找到值得继续的方向。之后，再把它做得更清晰、更简单、更有分寸。',
      sub: '我不喜欢把思考和制作分开。随着项目成形，我会在策略、结构、视觉和代码之间切换。一个布局可能变成一次互动，一次互动也可能带来全新的想法。我会为这些变化留下空间。',
      selected: '精选项目', aboutTitle: '关于我', certifications: '认证课程', addCourse: '添加课程名称', certification: '认证',
      bringTitle: '我能带来的价值', bringText: '创造能吸引用户、帮助有野心的品牌从第一天起脱颖而出的数字体验。', talk: '联系我', email: 'histudiomarga@gmail.com',
      tags: ['产品设计', '用户体验设计', '设计系统', '用户研究', '用户界面设计', '品牌设计', '路演材料设计', 'Framer 开发', '视觉设计']
    }
  };

  const projectData = {
    '/projects/ostro-coffee': { slug: 'tribuxmusic', name: 'TRIBUXMUSIC', category: 'Websites / Branding', description: 'A mobile experience for discovering and booking live music events in Buenos Aires.', es: 'Una experiencia móvil para descubrir y reservar eventos de música en vivo en Buenos Aires.', zh: '为布宜诺斯艾利斯用户探索和预订现场音乐活动打造的移动体验。' },
    '/projects/solene': { slug: 'funihao', name: 'FUNIHAO', category: 'Websites / Experiments', description: 'A playful language-learning experience designed to make practicing Chinese feel less like studying and more like using it.', es: 'Una experiencia lúdica para aprender idiomas, pensada para que practicar chino se sienta menos como estudiar y más como usarlo.', zh: '一款有趣的语言学习体验，让练习中文不再像学习，而更像真实使用。' },
    '/projects/contrada': { slug: 'claudia-fabiani', name: 'CLAUDIA FABIANI', category: 'Branding / Experiments', description: 'A family sparkling wine identity built from old paper archives and photographed the way the wine is actually enjoyed.', es: 'Una identidad para un espumante familiar, construida desde antiguos archivos de papel y fotografiada como realmente se disfruta.', zh: '以家族旧纸档案为灵感的起泡酒品牌识别，记录真实享用葡萄酒的方式。' },
    '/projects/ovenbird-bakery': { slug: 'raul-pardeilhan', name: 'RAUL PARDEILHAN', category: 'Products / Digital Illustration', description: 'A real-life conversation feature exploring how language-learning products can create more natural opportunities to speak.', es: 'Una funcionalidad de conversaciones reales que explora cómo los productos de aprendizaje pueden crear oportunidades más naturales para hablar.', zh: '探索语言学习产品如何创造更自然交流机会的真实对话功能。' },
    '/projects/plump-soda': { slug: 'duolingo', name: 'DUOLINGO NEW FEATURE', category: 'Branding / Experiments', description: 'A mango soda identity designed to be loud, playful and impossible to miss on a crowded shelf.', es: 'Una identidad para una soda de mango, estridente, lúdica e imposible de ignorar en una góndola llena.', zh: '为芒果汽水打造的大胆、有趣且在货架上无法忽视的品牌识别。' },
    '/projects/dusk-chocolate': { slug: 'harman', name: 'HARMAN', category: 'Products / Branding', description: 'A product and brand exploration for a sound experience where technology feels physical, expressive and human.', es: 'Una exploración de producto y marca para una experiencia sonora donde la tecnología se siente física, expresiva y humana.', zh: '探索一种让科技变得有形、富有表现力且更贴近人的声音产品与品牌体验。' }
  };

  const projectAliases = {
    '/projects/tribuxmusic': '/projects/ostro-coffee',
    '/projects/funihao': '/projects/solene',
    '/projects/claudia-fabiani': '/projects/contrada',
    '/projects/raul-pardeilhan': '/projects/ovenbird-bakery',
    '/projects/duolingo': '/projects/plump-soda',
    '/projects/harman': '/projects/dusk-chocolate'
  };

  const certifications = [
    { image: 'cert-1.png', pdf: 'cert-1.pdf', year: '2025', place: { en: 'Buenos Aires City', es: 'Buenos Aires Ciudad', zh: '布宜诺斯艾利斯市' }, title: { en: 'UI Design', es: 'Diseño UI', zh: 'UI 设计' } },
    { image: 'cert-2.png', pdf: 'cert-2.pdf', year: '2023', place: { en: 'CUI', es: 'CUI', zh: 'CUI 语言中心' }, title: { en: 'English for Software Developers', es: 'Inglés para desarrolladores de software', zh: '软件开发英语' } },
    { image: 'cert-3.png', pdf: 'cert-3.pdf', year: '2022', place: { en: 'Egg', es: 'Egg', zh: 'Egg' }, title: { en: 'Programming from Scratch', es: 'Programación desde cero', zh: '从零开始编程' } },
    { image: 'cert-4.png', pdf: 'cert-4.pdf', year: '2023', place: { en: 'Universidad Tecnológica Nacional', es: 'Universidad Tecnológica Nacional', zh: '国立技术大学' }, title: { en: 'Web Development with React JS', es: 'Desarrollo web con React JS', zh: 'React JS 网页开发' } },
    { image: 'cert-5.png', pdf: 'cert-5.pdf', year: '2022', place: { en: 'Jornada Extendida', es: 'Jornada Extendida', zh: '延伸学习项目' }, title: { en: 'Graphic Design', es: 'Diseño gráfico', zh: '平面设计' } },
    { image: 'cert-6.png', pdf: 'cert-6.pdf', year: '2022', place: { en: 'Egg', es: 'Egg', zh: 'Egg' }, title: { en: 'Programming', es: 'Programación', zh: '编程' } },
    { image: 'cert-7.png', pdf: 'cert-7.pdf', year: '2024', place: { en: 'Desafío Latam', es: 'Desafío Latam', zh: 'Desafío Latam' }, title: { en: 'English for Developers & IT Professionals', es: 'Inglés para desarrolladores y profesionales IT', zh: '开发者与 IT 专业人士英语' } },
    { image: 'cert-8.png', pdf: 'cert-8.pdf', year: '2024', place: { en: 'Digital learning program', es: 'Programa de aprendizaje digital', zh: '数字学习项目' }, title: { en: 'Digital Design', es: 'Diseño digital', zh: '数字设计' } },
    { image: 'cert-9.png', pdf: 'cert-9.pdf', year: '2025', place: { en: 'Buenos Aires Aprende', es: 'Buenos Aires Aprende', zh: '布宜诺斯艾利斯学习平台' }, title: { en: 'UI Design', es: 'Diseño UI', zh: 'UI 设计' } },
    { image: 'cert-10.png', pdf: 'cert-10.pdf', year: '2025', place: { en: 'Adalo App Academy', es: 'Adalo App Academy', zh: 'Adalo App Academy' }, title: { en: 'App Planning & Organization', es: 'Planificación y organización de apps', zh: '应用规划与组织' } }
  ];

  const pagePath = location.pathname.replace(/\/$/, '') || '/';
  const resolvedPagePath = projectAliases[pagePath] || pagePath;
  const sourceNodes = [];
  const sourceText = new WeakMap();

  function collectSources() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while (node = walker.nextNode()) {
      if (!node.nodeValue.trim()) continue;
      sourceNodes.push(node); sourceText.set(node, node.nodeValue.trim());
    }
  }

  function setText(source, value) {
    sourceNodes.forEach(node => { if (sourceText.get(node) === source) node.nodeValue = node.nodeValue.replace(node.nodeValue.trim(), value); });
  }

  function renderStaticCopy(lang) {
    const c = translations[lang] || translations.en;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    ['Brand designer', 'Digital designer', 'Product designer'].forEach(source => setText(source, c.role));
    ['GMT−4', 'Argentina / China', 'argentina-china'].forEach(source => setText(source, c.location));
    setText('Designing digital products, websites & experiences that move ideas forward.', c.hero);
    setText('I design strategic brand identities that help ambitious businesses earn instant trust and attract the clients they actually want.', c.hero);
    setText('Selected projects', c.selected);
    setText('Marga Studio', 'Marga Studio');
    setText('Menu', lang === 'es' ? 'Menú' : lang === 'zh' ? '菜单' : 'Menu');
    setText('I’m Marga Studio, a brand designer based in Brooklyn. I design strategic brand identities that help ambitious businesses earn instant trust and attract better clients.', c.intro);
    setText('I’m Marga, a digital designer from Argentina currently based in China. I design strategic digital experiences that help brands build trust, stand out and grow online.', c.intro);
    setText('I don’t start with the logo. I start with what the business is trying to become, because a mark that looks good and means nothing falls apart under the first question. The design comes easily once we know what we’re designing for.', c.process);
    setText('Outside of work I run early, before the city starts. I watch a film most nights, usually alone, usually one I’ve already seen. And I take the long way home when it goes past a building I like, which is most of the time.', c.sub);
    setText('Let’s talk', c.talk); setText("Let's talk", c.talk);
    setText('hello@margastudio.com', c.email);
    setText('Brand Strategy', lang === 'es' ? 'Estrategia de marca' : lang === 'zh' ? '品牌策略' : 'Brand Strategy');
    setText('Visual Identity', lang === 'es' ? 'Identidad visual' : lang === 'zh' ? '视觉识别' : 'Visual Identity');
    setText('Art Direction', lang === 'es' ? 'Dirección de arte' : lang === 'zh' ? '艺术指导' : 'Art Direction');
    setText('Packaging', lang === 'es' ? 'Packaging' : lang === 'zh' ? '包装设计' : 'Packaging');
    setText('Digital', lang === 'es' ? 'Digital' : lang === 'zh' ? '数字体验' : 'Digital');
    renderProjectIndex(lang); renderAbout(lang); replaceAboutPhoto(); setAboutVisibility(); renderProject(lang);
    if (pagePath === '/') document.title = 'MARGA STUDIO — Product designer';
  }

  function renderProjectIndex(lang) {
    if (pagePath !== '/') return;
    const labels = lang === 'es'
      ? [['TRIBUXMUSIC', 'Websites / Branding'], ['FUNIHAO', 'Websites / Experimentos'], ['CLAUDIA FABIANI', 'Branding / Experimentos'], ['RAUL PARDEILHAN', 'Productos / Ilustración digital'], ['DUOLINGO NEW FEATURE', 'Branding / Experimentos'], ['HARMAN', 'Productos / Branding']]
      : lang === 'zh'
        ? [['TRIBUXMUSIC', '网站 / 品牌'], ['FUNIHAO', '网站 / 实验'], ['CLAUDIA FABIANI', '品牌 / 实验'], ['RAUL PARDEILHAN', '产品 / 数字插画'], ['DUOLINGO NEW FEATURE', '品牌 / 实验'], ['HARMAN', '产品 / 品牌']]
        : [['TRIBUXMUSIC', 'Websites / Branding'], ['FUNIHAO', 'Websites / Experiments'], ['CLAUDIA FABIANI', 'Branding / Experiments'], ['RAUL PARDEILHAN', 'Products / Digital Illustration'], ['DUOLINGO NEW FEATURE', 'Branding / Experiments'], ['HARMAN', 'Products / Branding']];
    const labelsByPath = Object.fromEntries(Object.keys(projectData).map((path, index) => [path, labels[index]]));
    const links = Array.from(document.querySelectorAll('a[href*="/projects/"]')).filter(link => !link.closest('.marga-case-study-note'));
    links.forEach(link => {
      const path = new URL(link.href, location.href).pathname;
      const copy = labelsByPath[path];
      if (!copy) return;
      const [name, category] = copy;
      const textNodes = Array.from(link.querySelectorAll('p')).filter(node => node.textContent.trim());
      if (textNodes[0]) textNodes[0].textContent = name;
      if (textNodes[1]) textNodes[1].textContent = category;
    });
  }

  function renderAbout(lang) {
    const about = document.querySelector('#about-me'); if (!about) return;
    let section = about.querySelector('.marga-about-extra');
    if (!section) { section = document.createElement('div'); section.className = 'marga-about-extra'; about.appendChild(section); }
    const c = translations[lang] || translations.en;
    const certificateLabel = lang === 'es' ? 'Ver certificado' : lang === 'zh' ? '查看证书' : 'View certificate';
    const yearLabel = lang === 'es' ? 'Año' : lang === 'zh' ? '年份' : 'Year';
    const certificateCards = certifications.map((certificate, index) => `<a class="marga-cert-card" href="images/certificates/${encodeURIComponent(certificate.pdf)}" target="_blank" rel="noopener"><img src="images/certificates/${certificate.image}" alt="${certificate.title[lang] || certificate.title.en}"><div class="marga-cert-copy"><span>${String(index + 1).padStart(2, '0')}</span><strong>${certificate.title[lang] || certificate.title.en}</strong><small>${yearLabel} ${certificate.year} · ${certificate.place[lang] || certificate.place.en}</small><em>${certificateLabel} ↗</em></div></a>`).join('');
    section.innerHTML = `<div class="marga-bring"><div class="marga-bring-orbit"><div class="marga-bring-center"><h3>${c.bringTitle}</h3><p>${c.bringText}</p></div><div class="marga-bring-tags">${c.tags.map(tag => `<span>${tag}</span>`).join('')}</div></div></div><div class="marga-about-block marga-certifications-block"><h3>${c.certifications}</h3><div class="marga-cert-grid">${certificateCards}</div></div>`;
  }

  function setAboutVisibility() {
    const about = document.querySelector('#about-me');
    if (!about) return;
    about.hidden = !location.hash.toLowerCase().includes('about');
  }

  function replaceAboutPhoto() {
    const about = document.querySelector('#about-me');
    const photo = about && [...about.querySelectorAll('img')].find(image => image.alt.includes('Portrait'));
    if (!photo) return;
    photo.src = 'images/marga-profile.png';
    photo.removeAttribute('srcset');
    photo.alt = 'Marga Studio';
    photo.classList.add('marga-profile-photo');
  }

  function renderProject(lang) {
    const project = projectData[resolvedPagePath]; if (!project) return;
    const description = lang === 'es' ? project.es : lang === 'zh' ? project.zh : project.description;
    const category = lang === 'es' ? project.category.replace('Product Design', 'Diseño de producto').replace('Interaction Design', 'Diseño de interacción').replace('Web Design', 'Diseño web').replace('Creative Technology', 'Tecnología creativa') : lang === 'zh' ? project.category.replace('Product Design', '产品设计').replace('Interaction Design', '互动设计').replace('Web Design', '网页设计').replace('Creative Technology', '创意技术') : project.category;
    setText('Free portfolio website template for brand designers, art directors, and independent studios.', description);
    setText(project.name, project.name); setText('Brand Strategy', category);
    document.title = `${project.name} — Marga Studio`;
    const main = document.querySelector('#main main');
    if (!main) return;
    let note = main.querySelector('.marga-case-study-note');
    if (!note) { note = document.createElement('section'); note.className = 'marga-case-study-note'; main.insertBefore(note, main.firstElementChild); }
    note.innerHTML = `<p class="marga-eyebrow">${lang === 'es' ? 'Caso de estudio' : lang === 'zh' ? '案例研究' : 'Case study'}</p><h2>${project.name}</h2><p>${description}</p><div><span>${category}</span><span>Marga Studio</span></div>`;
  }

  function updateContactLinks() {
    document.querySelectorAll('a[href^="mailto:"]').forEach(a => { a.href = 'mailto:histudiomarga@gmail.com'; });
    document.querySelectorAll('a[href*="instagram.com"]').forEach(a => { a.href = 'https://www.instagram.com/margadesignstudio/'; });
    document.querySelectorAll('a[href*="linkedin.com"]').forEach(a => { a.href = 'https://www.linkedin.com/in/margaritapardeilhan'; });
    document.querySelectorAll('a').forEach(a => {
      if (/^(about|sobre mí|关于我)$/i.test(a.textContent.trim())) a.href = '#about-me';
    });
  }

  function removeFramerBadge() {
    document.querySelectorAll('#__framer-badge-container, .__framer-badge').forEach(element => element.remove());
    document.querySelectorAll('a, button').forEach(element => {
      if (element.textContent.trim() === 'Use for free') element.remove();
    });
  }

  function addStyles() {
    if (document.getElementById('marga-custom-styles')) return;
    const style = document.createElement('style'); style.id = 'marga-custom-styles';
    style.textContent = `.marga-about-extra{padding:80px 24px;display:grid;gap:100px;max-width:1200px;margin:auto}.marga-about-block h3,.marga-bring h3{font-size:clamp(32px,5vw,64px);font-weight:400;letter-spacing:-.04em;margin:0 0 32px}.marga-cert-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}.marga-cert-card{min-height:130px;border:1px solid currentColor;border-radius:4px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.marga-cert-card span,.marga-cert-card small{opacity:.55;font-size:12px}.marga-cert-card strong{font-size:16px;font-weight:400}.marga-bring{text-align:center;padding:80px 0;position:relative;overflow:hidden}.marga-bring p{font-size:20px;max-width:560px;margin:0 auto 48px}.marga-bring-tags{display:flex;flex-wrap:wrap;justify-content:center;gap:14px;max-width:950px;margin:auto}.marga-bring-tags span{background:#70432e;color:#fcfaf8;padding:14px 24px;border-radius:999px;transform:rotate(-2deg)}.marga-bring-tags span:nth-child(2n){transform:rotate(2deg)}.marga-case-study-note{padding:clamp(80px,12vw,180px) 24px 80px;max-width:1000px;margin:auto}.marga-case-study-note h2{font-size:clamp(48px,9vw,120px);font-weight:400;letter-spacing:-.06em;line-height:.95;margin:12px 0 28px}.marga-case-study-note>p:not(.marga-eyebrow){font-size:clamp(20px,2.5vw,30px);line-height:1.2;max-width:720px}.marga-case-study-note>div{display:flex;gap:24px;margin-top:44px;font-size:13px;opacity:.65}.marga-case-study-note>div span+span:before{content:'·';margin-right:24px}.marga-language-switcher{position:fixed;right:16px;bottom:16px;z-index:30;display:flex;gap:10px;font:12px/1 sans-serif;letter-spacing:.04em}.marga-language-switcher button{background:transparent;border:0;padding:4px;cursor:pointer;color:inherit;opacity:.55}.marga-language-switcher button[aria-current=true]{opacity:1;text-decoration:underline}@media(max-width:809px){.marga-about-extra{padding:56px 12px;gap:64px}.marga-cert-grid{grid-template-columns:repeat(2,1fr)}.marga-cert-card{min-height:110px}.marga-bring{padding:48px 0}.marga-bring-tags span{padding:11px 16px;font-size:13px}.marga-case-study-note{padding:100px 12px 48px}.marga-case-study-note>div{display:block}.marga-case-study-note>div span{display:block;margin-bottom:8px}.marga-case-study-note>div span+span:before{display:none}}`; document.head.appendChild(style);
  }

  function addVisualStyles() {
    if (document.getElementById('marga-visual-styles')) return;
    const style = document.createElement('style');
    style.id = 'marga-visual-styles';
    style.textContent = `
      .marga-about-extra { max-width: 1240px; }
      .marga-brand-lockup { display: inline-flex !important; align-items: center; width: max-content !important; min-width: max-content !important; white-space: nowrap !important; overflow: visible !important; text-decoration: none; }
      .marga-brand-lockup span { display: inline-block; white-space: nowrap; font-size: 16px; line-height: 1; }
      #about-me[hidden] { display: none !important; }
      .marga-profile-photo { filter: grayscale(1); }
      .marga-cert-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
      .marga-cert-card img { aspect-ratio: 1.55; }
      .marga-cert-card { min-width: 0; padding: 0; overflow: hidden; color: inherit; text-decoration: none; background: #fff; border-color: rgba(15,15,15,.2); transition: transform .35s ease, box-shadow .35s ease; }
      .marga-cert-card:hover { transform: translateY(-6px); box-shadow: 0 14px 30px rgba(15,15,15,.12); }
      .marga-cert-card img { display: block; width: 100%; aspect-ratio: 1.55; object-fit: cover; background: #ece8df; }
      .marga-cert-copy { min-height: 142px; padding: 14px; display: flex; flex-direction: column; gap: 8px; }
      .marga-cert-card strong { font-size: 15px; font-weight: 500; line-height: 1.15; }
      .marga-cert-card em { margin-top: auto; font-size: 11px; font-style: normal; opacity: .6; }
      .marga-bring { padding: 100px 0 140px; }
      .marga-bring-orbit { width: min(88vw, 760px); aspect-ratio: 1; margin: auto; position: relative; display: grid; place-items: center; border: 1px solid rgba(112,67,46,.2); border-radius: 50%; animation: marga-breathe 7s ease-in-out infinite; }
      .marga-bring-center { width: min(62%, 420px); aspect-ratio: 1; border-radius: 50%; background: #70432e; color: #fcfaf8; display: grid; place-content: center; padding: 35px; position: relative; z-index: 2; }
      .marga-bring-center h3 { font-family: Gambarino, serif; font-style: italic; font-size: clamp(28px, 4vw, 54px); line-height: 1.05; margin: 0 0 18px; }
      .marga-bring-center p { font-size: 16px; line-height: 1.25; margin: 0 auto; max-width: 300px; }
      .marga-bring-tags { position: absolute; inset: 0; animation: marga-orbit 28s linear infinite; }
      .marga-bring-tags span { position: absolute; left: 50%; top: 50%; background: #70432e; color: #fcfaf8; padding: 13px 20px; border-radius: 999px; font-size: 13px; white-space: nowrap; transform: rotate(-4deg) translateY(-min(44vw, 350px)) translateX(-50%); transform-origin: 50% min(44vw, 350px); }
      .marga-bring-tags span:nth-child(2) { transform: rotate(36deg) translateY(-min(44vw, 350px)) translateX(-50%); }
      .marga-bring-tags span:nth-child(3) { transform: rotate(76deg) translateY(-min(44vw, 350px)) translateX(-50%); }
      .marga-bring-tags span:nth-child(4) { transform: rotate(116deg) translateY(-min(44vw, 350px)) translateX(-50%); }
      .marga-bring-tags span:nth-child(5) { transform: rotate(156deg) translateY(-min(44vw, 350px)) translateX(-50%); }
      .marga-bring-tags span:nth-child(6) { transform: rotate(196deg) translateY(-min(44vw, 350px)) translateX(-50%); }
      .marga-bring-tags span:nth-child(7) { transform: rotate(236deg) translateY(-min(44vw, 350px)) translateX(-50%); }
      .marga-bring-tags span:nth-child(8) { transform: rotate(276deg) translateY(-min(44vw, 350px)) translateX(-50%); }
      .marga-bring-tags span:nth-child(9) { transform: rotate(316deg) translateY(-min(44vw, 350px)) translateX(-50%); }
      @keyframes marga-orbit { to { transform: rotate(360deg); } }
      @keyframes marga-breathe { 50% { transform: scale(1.025); } }
      .marga-brand-title { font-size: clamp(54px, 13vw, 190px) !important; letter-spacing: -.07em !important; width: 100% !important; max-width: 100% !important; text-align: center !important; text-transform: none !important; }
      span[style*="white-space:nowrap"] { overflow: visible !important; }
      @media (max-width: 809px) { .marga-cert-grid { grid-template-columns: 1fr; gap: 20px; } .marga-cert-card img { aspect-ratio: 1.5; } .marga-bring-center { width: 64%; padding: 22px; } .marga-bring-center h3 { font-size: clamp(24px, 7vw, 38px); } .marga-bring-center p { font-size: 13px; } .marga-bring-tags span { font-size: 10px; padding: 9px 12px; } .marga-brand-title { font-size: clamp(54px, 17vw, 120px) !important; letter-spacing: -.08em !important; } }
      .marga-bring-orbit { width: min(100%, 820px); min-height: 540px; border: 1px solid rgba(112,67,46,.2); border-radius: 50%; animation: marga-breathe 7s ease-in-out infinite; }
      .marga-bring-center { width: min(52%, 560px); aspect-ratio: auto; border-radius: 0; background: transparent; color: inherit; padding: 0; text-align: center; }
      .marga-bring-center h3 { font-size: clamp(42px, 6vw, 82px); line-height: .98; margin-bottom: 24px; }
      .marga-bring-center p { font-size: 20px; max-width: 560px; }
      .marga-bring-tags { animation: none; }
      .marga-bring-tags span { left: auto; top: auto; background: #70432e; padding: 14px 24px; font-size: 14px; transform: none !important; animation: marga-float 8s ease-in-out infinite; }
      .marga-bring-tags span:nth-child(1) { top: 8%; left: 43%; animation-delay: -.8s; }
      .marga-bring-tags span:nth-child(2) { top: 19%; right: 10%; animation-delay: -2.1s; }
      .marga-bring-tags span:nth-child(3) { top: 19%; left: 10%; animation-delay: -4.2s; }
      .marga-bring-tags span:nth-child(4) { top: 45%; left: 3%; animation-delay: -1.4s; }
      .marga-bring-tags span:nth-child(5) { top: 45%; right: 3%; animation-delay: -3.4s; }
      .marga-bring-tags span:nth-child(6) { bottom: 16%; left: 12%; animation-delay: -5.2s; }
      .marga-bring-tags span:nth-child(7) { bottom: 16%; right: 12%; animation-delay: -2.8s; }
      .marga-bring-tags span:nth-child(8) { bottom: 5%; left: 40%; animation-delay: -4.8s; }
      .marga-bring-tags span:nth-child(9) { bottom: 39%; right: 18%; animation-delay: -6.2s; }
      @keyframes marga-float { 0%, 100% { translate: 0 0; rotate: -2deg; } 50% { translate: 0 -12px; rotate: 2deg; } }
      @media (max-width: 809px) { .marga-bring-orbit { min-height: 560px; } .marga-bring-center { width: 58%; } .marga-bring-center h3 { font-size: clamp(32px, 9vw, 52px); } .marga-bring-center p { font-size: 15px; } }
      @media (max-width: 809px) { .marga-brand-lockup span { font-size: 15px; } }
      @media (prefers-reduced-motion: reduce) { .marga-bring-tags span { animation: none; } }
    `;
    document.head.appendChild(style);
  }

  function fixBrandLockup() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let node;
    while (node = walker.nextNode()) textNodes.push(node);
    textNodes.forEach(textNode => {
      if (/kai\s+marlow/i.test(textNode.nodeValue)) textNode.nodeValue = textNode.nodeValue.replace(/kai\s+marlow/ig, 'Marga Studio');
    });
    document.querySelectorAll('h1, h2, h3, p, span, a').forEach(element => {
      if (/kai\s+marlow/i.test(element.textContent.trim())) element.textContent = 'Marga Studio';
    });
    document.querySelectorAll('h1, h2, h3, p, span, a').forEach(element => {
      if (element.textContent.trim() === 'MARGA STUDIO') element.textContent = 'Marga Studio';
      if (element.textContent.trim() !== 'Marga Studio') return;
      element.style.whiteSpace = 'nowrap';
      element.style.overflow = 'visible';
      if (element.tagName === 'H1') element.classList.add('marga-brand-title');
      if (element.tagName !== 'H1' && element.parentElement) { element.parentElement.style.width = 'max-content'; element.parentElement.style.minWidth = 'max-content'; }
    });
    replaceBrandLogo();
  }

  function replaceBrandLogo() {
    const brandLinks = [...document.querySelectorAll('a')].filter(link => /marga studio/i.test(link.textContent.trim()));
    brandLinks.forEach(link => {
      if (link.closest('.marga-brand-lockup')) return;
      link.classList.add('marga-brand-lockup');
      link.innerHTML = '<span>Marga Studio</span>';
      link.setAttribute('aria-label', 'Marga Studio');
    });
  }

  function addLanguageSwitcher(lang) {
    let bar = document.querySelector('.marga-language-switcher');
    if (!bar) { bar = document.createElement('nav'); bar.className = 'marga-language-switcher'; bar.setAttribute('aria-label', 'Language'); document.body.appendChild(bar); }
    bar.innerHTML = [['en', 'EN'], ['es', 'ES'], ['zh', '中文']].map(([value, label]) => `<button type="button" data-marga-lang="${value}" aria-current="${value === lang}">${label}</button>`).join('');
    bar.querySelectorAll('button').forEach(button => { button.onclick = () => { localStorage.setItem('marga-language', button.dataset.margaLang); render(button.dataset.margaLang); }; });
  }

  function render(lang) { renderStaticCopy(lang); addLanguageSwitcher(lang); updateContactLinks(); removeFramerBadge(); fixBrandLockup(); }
  function init() {
    collectSources(); addStyles(); addVisualStyles();
    const lang = localStorage.getItem('marga-language') || 'en';
    render(lang);
    let brandRepairRuns = 0;
    const brandRepairTimer = setInterval(() => {
      fixBrandLockup();
      brandRepairRuns += 1;
      if (brandRepairRuns >= 12) clearInterval(brandRepairTimer);
    }, 250);
    window.addEventListener('hashchange', setAboutVisibility);
    setTimeout(() => { collectSources(); render(localStorage.getItem('marga-language') || lang); }, 300);
    window.addEventListener('load', () => render(localStorage.getItem('marga-language') || lang), { once: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
