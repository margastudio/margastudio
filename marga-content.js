(function () {
  const translations = {
    en: {
      role: 'Product designer',
      location: 'Argentina / China',
      home: 'Home',
      work: 'Work',
      about: 'About',
      contact: 'Contact',
 
      hero: 'I design websites, digital products and visual systems for ambitious brands that want to stand out.',
 
      intro: 'I’m Marga, a digital designer from Argentina currently based in China. I design digital experiences that help brands build trust, stand out and grow online.',
 
      process: 'I like to get involved early. Before opening Figma, I want to understand what’s there, what’s missing, and what the experience needs to do. I ask questions, collect references, sketch things out and test ideas until there’s a direction worth following. From there, the work becomes a matter of making it sharper, simpler and more considered.',
 
      sub: 'I don’t like separating the thinking from the making. I move between strategy, structure, visuals and code as the project takes shape, which means things can change along the way. A layout might become an interaction, an interaction might become a whole new idea. I leave room for that.',
 
      selected: 'Selected projects',
      aboutTitle: 'About',
      certifications: 'Certifications',
      addCourse: 'Add course name',
      certification: 'Certification',
 
      bringTitle: 'What I bring to the table',
      bringText: 'Digital experiences that engage users and help ambitious brands stand out from day one.',
 
      talk: 'Let’s talk',
      email: 'histudiomarga@gmail.com',
 
      tags: [
        'Product Design',
        'User Experience Design',
        'Design Systems',
        'User Research',
        'User Interface Design',
        'Branding',
        'Pitch Deck Design',
        'Framer Development',
        'Visual Design'
      ],
 
      // SEO Specifics
      metaTitle: 'MARGA STUDIO — Product & Digital Designer',
      metaDescription: 'Digital designer based in Argentina & China. Designing websites, digital products, and visual systems for ambitious brands.'
    },
 
    es: {
      role: 'Diseñadora de producto',
      location: 'Argentina / China',
      home: 'Inicio',
      work: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Contacto',
 
      hero: 'Diseño sitios web, productos digitales y sistemas visuales para marcas ambiciosas que quieren destacarse.',
 
      intro: 'Soy Marga, diseñadora digital de Argentina, actualmente vivo en China. Diseño experiencias digitales que ayudan a las marcas a generar confianza, destacarse y crecer online.',
 
      process: 'Me gusta involucrarme desde el principio. Antes de abrir Figma, quiero entender qué existe, qué falta y qué necesita lograr la experiencia. Hago preguntas, reúno referencias, hago bocetos y pruebo ideas hasta encontrar una dirección que valga la pena seguir. Después, el trabajo consiste en hacer todo más claro, simple y preciso.',
 
      sub: 'No me gusta separar la estrategia de la creación. Paso de la estrategia a la estructura, lo visual y el código mientras el proyecto toma forma. Eso permite que las ideas evolucionen durante el proceso y deja espacio para encontrar nuevas soluciones.',
 
      selected: 'Proyectos seleccionados',
      aboutTitle: 'Sobre mí',
      certifications: 'Certificaciones',
      addCourse: 'Agregar nombre del curso',
      certification: 'Certificación',
 
      bringTitle: 'Lo que aporto al proyecto',
      bringText: 'Experiencias digitales que conectan con las personas y ayudan a las marcas a destacarse desde el primer día.',
 
      talk: 'Hablemos',
      email: 'histudiomarga@gmail.com',
 
      tags: [
        'Diseño de producto',
        'Diseño de experiencia',
        'Sistemas de diseño',
        'Investigación de usuarios',
        'Diseño de interfaces',
        'Branding',
        'Diseño de pitch decks',
        'Desarrollo en Framer',
        'Diseño visual'
      ],
 
      // SEO Specifics
      metaTitle: 'MARGA STUDIO — Diseñadora de Producto y Digital',
      metaDescription: 'Diseñadora digital de Argentina y China. Diseño sitios web, productos digitales y sistemas visuales para marcas ambiciosas.'
    },
 
    zh: {
      role: '产品设计师',
      location: '阿根廷 / 中国',
      home: '首页',
      work: '项目',
      about: '关于我',
      contact: '联系',
 
      hero: '我为希望脱颖而出的品牌设计网站、数字产品和视觉系统。',
 
      intro: '我是 Marga，一名来自阿根廷、目前居住在中国的数字设计师。我设计具有策略性的数字体验，帮助品牌建立信任、脱颖而出并在线成长。',
 
      process: '我喜欢从项目早期就参与其中。在打开 Figma 之前，我会先了解现状、缺少什么，以及体验需要完成什么。我提出问题、收集参考、绘制草图并测试想法，直到找到值得继续的方向。之后，再把它做得更清晰、更简单、更有分寸。',
 
      sub: '我不喜欢把思考和制作分开。随着项目成形，我会在策略、结构、视觉和代码之间切换。一个布局可能变成一次互动，一次互动也可能带来全新的想法。我会为这些变化留下空间。',
 
      selected: '精选项目',
      aboutTitle: '关于我',
      certifications: '认证课程',
      addCourse: '添加课程名称',
      certification: '认证',
 
      bringTitle: '我能带来的价值',
      bringText: '创造能吸引用户、帮助有抱负的品牌从第一天起脱颖而出的数字体验。',
 
      talk: '联系我',
      email: 'histudiomarga@gmail.com',
 
      tags: [
        '产品设计',
        '用户体验设计',
        '设计系统',
        '用户研究',
        '用户界面设计',
        '品牌设计',
        '路演材料设计',
        'Framer 开发',
        '视觉设计'
      ],
 
      // SEO Specifics
      metaTitle: 'MARGA STUDIO — 产品与数字设计师',
      metaDescription: '位于阿根廷与中国的数字设计师。为雄心勃勃的品牌设计网站、数字产品和视觉系统。'
    }
  };
 
  const projectData = {
    '/projects/tribuxmusic': {
      name: 'TRIBUXMUSIC',
      category: {
        en: 'Mobile app / Event discovery',
        es: 'App móvil / Descubrimiento de eventos',
        zh: '移动应用 / 活动发现'
      },
      description: {
        en: 'A mobile concept for discovering live music and booking experiences in Buenos Aires, designed to make nightlife feel easier, richer and more social.',
        es: 'Un concepto de app móvil para descubrir música en vivo y reservar experiencias en Buenos Aires, pensado para que la vida nocturna se sienta más fácil, más rica y más social.',
        zh: '为布宜诺斯艾利斯的现场音乐和活动预订打造的移动端概念，旨在让夜生活更加轻松、更丰富且更具社交感。'
      }
    },
    '/projects/funihao': {
      name: 'FUNIHAO',
      category: {
        en: 'Product concept / UX strategy',
        es: 'Concepto de producto / UX strategy',
        zh: '产品概念 / 用户体验策略'
      },
      description: {
        en: 'Independent product exploration for a language app built around HSK, focused on the gap between studying a lesson and actually speaking with confidence.',
        es: 'Exploración independiente de producto para una app de idiomas basada en HSK, enfocada en la brecha entre estudiar una lección y hablar con confianza de verdad.',
        zh: '独立产品探索，围绕 HSK 构建语言应用，重点解决“学习一课和真正自信表达”之间的落差。'
      }
    },
    '/projects/claudia-fabiani': {
      name: 'CLAUDIA FABIANI',
      category: {
        en: 'Website / Branding',
        es: 'Sitio web / Branding',
        zh: '网站 / 品牌'
      },
      description: {
        en: 'Premium redesign of a skincare expert’s digital presence, transforming a legacy website into a polished experience that reflects 45+ years of trust and expertise.',
        es: 'Rediseño premium de la presencia digital de una experta en skincare, transformando un sitio legacy en una experiencia pulida que refleja 45+ años de confianza y experiencia.',
        zh: '针对护肤专家的高端数字形象重塑，将传统网站转化为更优雅、更专业的在线体验，体现 45 年以上的信任与专业知识。'
      }
    },
    '/projects/raul-pardeilhan': {
      name: 'RAUL PARDEILHAN',
      category: {
        en: 'Website / Art direction',
        es: 'Sitio web / Dirección de arte',
        zh: '网站 / 艺术指导'
      },
      description: {
        en: 'Art direction and portfolio design for a multidisciplinary artist, balancing editorial elegance with a strong personal narrative across music, modeling and performance.',
        es: 'Dirección de arte y diseño de portfolio para un artista multidisciplinario, equilibrando elegancia editorial con una narrativa personal fuerte entre música, modelaje y performance.',
        zh: '为多才多艺艺术家打造艺术指导与作品集设计，在音乐、模特与演艺之间平衡编辑美感与强烈个人叙事。'
      }
    },
    '/projects/duolingo': {
      name: 'DUOLINGO · REAL PRACTICE',
      category: {
        en: 'Product concept',
        es: 'Concepto de producto',
        zh: '产品概念'
      },
      description: {
        en: 'Academic concept redesigning the learning journey around real-life conversation practice, helping users turn lesson completion into meaningful, usable speaking confidence.',
        es: 'Concepto académico que rediseña el recorrido de aprendizaje alrededor de la práctica conversacional real, ayudando a convertir la finalización de una lección en confianza oral útil y real.',
        zh: '学术概念重新设计学习旅程，以真实对话练习为核心，帮助用户将完成课程转化为可用的口语信心。'
      }
    },
    '/projects/harman': {
      name: 'HARMAN',
      category: {
        en: 'Product concept',
        es: 'Concepto de producto',
        zh: '产品概念'
      },
      description: {
        en: 'Experience concept exploring how sound technology can feel physical, expressive and human through a refined product story.',
        es: 'Concepto de experiencia explorando cómo la tecnología sonora puede sentirse física, expresiva y humana a través de una narrativa de producto refinada.',
        zh: '探索声音技术如何通过精炼的产品叙事，呈现出更具物理感、表现力和人性化的体验。'
      }
    }
  };
 
  const certifications = [
    {
      image: 'cert-1.png',
      pdf: 'cert-1.pdf',
      year: '2025',
      place: { en: 'Buenos Aires City', es: 'Buenos Aires Ciudad', zh: '布宜诺斯艾利斯市' },
      title: { en: 'UI Design', es: 'Diseño UI', zh: 'UI 设计' }
    },
    {
      image: 'cert-2.png',
      pdf: 'cert-2.pdf',
      year: '2023',
      place: { en: 'CUI', es: 'CUI', zh: 'CUI 语言中心' },
      title: { en: 'English for Software Developers', es: 'Inglés para desarrolladores de software', zh: '软件开发英语' }
    },
    {
      image: 'cert-3.png',
      pdf: 'cert-3.pdf',
      year: '2022',
      place: { en: 'Egg', es: 'Egg', zh: 'Egg' },
      title: { en: 'Programming from Scratch', es: 'Programación desde cero', zh: '从零开始编程' }
    },
    {
      image: 'cert-4.png',
      pdf: 'cert-4.pdf',
      year: '2023',
      place: { en: 'Universidad Tecnológica Nacional', es: 'Universidad Tecnológica Nacional', zh: '国立技术大学' },
      title: { en: 'Web Development with React JS', es: 'Desarrollo web con React JS', zh: 'React JS 网页开发' }
    },
    {
      image: 'cert-5.png',
      pdf: 'cert-5.pdf',
      year: '2022',
      place: { en: 'Jornada Extendida', es: 'Jornada Extendida', zh: '延伸学习项目' },
      title: { en: 'Graphic Design', es: 'Diseño gráfico', zh: '平面设计' }
    },
    {
      image: 'cert-6.png',
      pdf: 'cert-6.pdf',
      year: '2022',
      place: { en: 'Egg', es: 'Egg', zh: 'Egg' },
      title: { en: 'Programming', es: '编程' }
    },
    {
      image: 'cert-7.png',
      pdf: 'cert-7.pdf',
      year: '2024',
      place: { en: 'Desafío Latam', es: 'Desafío Latam', zh: 'Desafío Latam' },
      title: { en: 'English for Developers & IT Professionals', es: 'Inglés para desarrolladores y profesionales IT', zh: '开发者与 IT 专业人士英语' }
    },
    {
      image: 'cert-8.png',
      pdf: 'cert-8.pdf',
      year: '2024',
      place: { en: 'Digital learning program', es: 'Programa de aprendizaje digital', zh: '数字学习项目' },
      title: { en: 'Digital Design', es: 'Diseño digital', zh: '数字设计' }
    },
    {
      image: 'cert-9.png',
      pdf: 'cert-9.pdf',
      year: '2025',
      place: { en: 'Buenos Aires Aprende', es: 'Buenos Aires Aprende', zh: '布宜诺斯艾利斯学习平台' },
      title: { en: 'UI Design', es: 'Diseño UI', zh: 'UI 设计' }
    },
    {
      image: 'cert-10.png',
      pdf: 'cert-10.pdf',
      year: '2025',
      place: { en: 'Adalo App Academy', es: 'Adalo App Academy', zh: 'Adalo App Academy' },
      title: { en: 'App Planning & Organization', es: 'Planificación y organización de apps', zh: '应用规划与组织' }
    }
  ];
 
  const pagePath = location.pathname.replace(/\/$/, '') || '/';
  const resolvedPagePath = pagePath;
  const isAboutPage = pagePath === '/about.html' || pagePath === '/about';
 
  if (isAboutPage) {
    document.documentElement.classList.add('marga-about-page');
  }
 
  let currentLang = 'en';
  let observer = null;
  let mutationTimer = null;
 
  const sourceNodes = [];
  const sourceText = new WeakMap();
 
  /*
   * Normaliza comillas tipográficas y espacios en blanco antes de comparar
   * texto. Framer suele exportar HTML con saltos de línea / indentación
   * distintos cada vez que se regenera el sitio, y eso rompe una comparación
   * exacta de string a string. Esta es la causa más probable de que el copy
   * viejo del template se quedara pegado: el texto a reemplazar no coincidía
   * carácter por carácter con lo que había realmente en el DOM.
   */
  function normalize(str) {
    return String(str)
      .replace(/[’‘‛]/g, "'")
      .replace(/[“”„]/g, '"')
      .replace(/\s+/g, ' ')
      .trim();
  }
 
  function collectSources() {
    sourceNodes.length = 0;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!node.nodeValue.trim()) continue;
      sourceNodes.push(node);
      sourceText.set(node, normalize(node.nodeValue));
    }
  }
 
  // Intento 1: reemplazo nodo por nodo (rápido, conserva toda la estructura
  // y animaciones de Framer intactas). Devuelve true si encontró algo.
  function setTextNodes(source, value) {
    const target = normalize(source);
    let matched = false;
    sourceNodes.forEach(node => {
      if (sourceText.get(node) === target) {
        node.nodeValue = node.nodeValue.replace(node.nodeValue.trim(), value);
        matched = true;
      }
    });
    return matched;
  }
 
  // Intento 2 (fallback): cuando Framer parte una frase en varios <span>
  // (animaciones palabra por palabra), ningún nodo de texto individual
  // contiene la frase completa y el intento 1 falla en silencio, dejando el
  // copy viejo a la vista. Acá buscamos el elemento contenedor más chico
  // cuyo texto completo coincide, y reemplazamos su contenido entero. Se
  // pierde el detalle de la animación palabra por palabra en ese caso
  // puntual, pero se prioriza mostrar el texto correcto.
  function setTextElement(source, value) {
    const target = normalize(source);
    const all = document.body.querySelectorAll('*');
    let best = null;
    let bestCount = Infinity;
 
    all.forEach(el => {
      if (!el.children.length) return;
      if (el.closest('.marga-language-switcher, .marga-about-extra, .marga-case-study-note')) return;
      if (normalize(el.textContent) !== target) return;
 
      const count = el.querySelectorAll('*').length;
      if (count < bestCount) {
        best = el;
        bestCount = count;
      }
    });
 
    if (best) {
      best.textContent = value;
      return true;
    }
    return false;
  }
 
  function setText(source, value) {
    const matched = setTextNodes(source, value);
    if (!matched) {
      const matchedFallback = setTextElement(source, value);
      if (!matchedFallback) {
        // Aviso solo en consola (F12) para poder ver qué frases ya no
        // coinciden con el HTML real y ajustar el mapeo si hace falta.
        console.warn('[marga-content] No encontré este texto en la página para traducirlo:', source);
      }
    }
  }
 
  /*
   * FUNCIÓN SEO: actualiza metaetiquetas en tiempo real (title, description,
   * canonical, Open Graph, Twitter Card y datos estructurados JSON-LD) según
   * el idioma activo y la página actual.
   */
  function updateSEOMetadata(lang) {
    const c = translations[lang] || translations.en;
    const domain = 'https://margastudio.cc.cd';
    const currentUrl = domain + (pagePath === '/' ? '' : pagePath);
    const ogImage = domain + '/images/marga-profile.png';
 
    function ensureMeta(key, isProperty) {
      const selector = isProperty ? `meta[property="${key}"]` : `meta[name="${key}"]`;
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        if (isProperty) tag.setAttribute('property', key);
        else tag.setAttribute('name', key);
        document.head.appendChild(tag);
      }
      return tag;
    }
 
    // 1. Meta description
    const metaDescription = ensureMeta('description', false);
 
    // 2. Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = currentUrl;
 
    // 3. Robots — solo se crea si no existe, para no pisar lo que ya
    // configuraste manualmente.
    if (!document.querySelector('meta[name="robots"]')) {
      ensureMeta('robots', false).content = 'index, follow';
    }
 
    // 4. Títulos y descripciones dinámicos según la página
    let title;
    let description;
    let isProjectPage = false;
 
    if (isAboutPage) {
      title = `${c.aboutTitle} — MARGA STUDIO`;
      description = c.intro;
    } else if (projectData[resolvedPagePath]) {
      isProjectPage = true;
      const proj = projectData[resolvedPagePath];
      description = proj.description[lang] || proj.description.en;
      title = `${proj.name} — MARGA STUDIO`;
    } else {
      title = c.metaTitle;
      description = c.metaDescription;
    }
 
    document.title = title;
    metaDescription.content = description;
 
    // 5. Open Graph (Facebook, LinkedIn, WhatsApp, etc.)
    ensureMeta('og:title', true).content = title;
    ensureMeta('og:description', true).content = description;
    ensureMeta('og:url', true).content = currentUrl;
    ensureMeta('og:type', true).content = isProjectPage ? 'article' : 'website';
    ensureMeta('og:image', true).content = ogImage;
    ensureMeta('og:locale', true).content = lang === 'zh' ? 'zh_CN' : lang === 'es' ? 'es_AR' : 'en_US';
    ensureMeta('og:site_name', true).content = 'Marga Studio';
 
    // 6. Twitter Card
    ensureMeta('twitter:card', false).content = 'summary_large_image';
    ensureMeta('twitter:title', false).content = title;
    ensureMeta('twitter:description', false).content = description;
    ensureMeta('twitter:image', false).content = ogImage;
 
    // 7. Datos estructurados (JSON-LD) para que Google entienda quién sos y,
    // en las páginas de proyecto, qué es cada case study.
    let ld = document.getElementById('marga-jsonld');
    if (!ld) {
      ld = document.createElement('script');
      ld.type = 'application/ld+json';
      ld.id = 'marga-jsonld';
      document.head.appendChild(ld);
    }
 
    const person = {
      '@type': 'Person',
      name: 'Margarita Pardeilhan',
      alternateName: 'Marga',
      url: domain,
      image: ogImage,
      jobTitle: c.role,
      worksFor: { '@type': 'Organization', name: 'Marga Studio' },
      sameAs: [
        'https://www.instagram.com/margadesignstudio/',
        'https://www.linkedin.com/in/margaritapardeilhan'
      ]
    };
 
    const ldData = isProjectPage
      ? {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: projectData[resolvedPagePath].name,
          description,
          url: currentUrl,
          creator: person
        }
      : { '@context': 'https://schema.org', ...person };
 
    ld.textContent = JSON.stringify(ldData);
  }
 
  function renderStaticCopy(lang) {
    const c = translations[lang] || translations.en;
 
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
 
    ['Brand designer', 'Digital designer', 'Product designer'].forEach(source => setText(source, c.role));
    ['GMT−4', 'Argentina / China', 'argentina-china'].forEach(source => setText(source, c.location));
 
    // El menú (Home / Work / About / Contact) tenía las traducciones
    // definidas en el objeto `translations` pero nunca se aplicaban acá:
    // por eso, sin importar el idioma elegido, el menú se quedaba siempre
    // con el texto original del template.
    ['Home', 'HOME'].forEach(source => setText(source, c.home));
    ['Work', 'WORK'].forEach(source => setText(source, c.work));
    ['About', 'ABOUT'].forEach(source => setText(source, c.about));
    ['Contact', 'CONTACT'].forEach(source => setText(source, c.contact));
 
    setText('Designing digital products, websites & experiences that move ideas forward.', c.hero);
    setText('I design strategic brand identities that help ambitious businesses earn instant trust and attract the clients they actually want.', c.hero);
    setText('Selected projects', c.selected);
    setText('Marga Studio', 'Marga Studio');
    // En mobile a veces el hero heading vuelve a mostrar "Kai Marlow", el
    // nombre de placeholder del template original de Framer, en vez de
    // "Marga Studio" (parece un problema de hidratación de React en ese
    // breakpoint puntual). El reemplazo "leaf-only" que ya existía en el
    // script embebido de index.html no lo agarraba porque el texto viene
    // partido en varios <span>; setText() sí tiene un fallback para eso.
    setText('Kai Marlow', 'Marga Studio');
    setText('Menu', lang === 'es' ? 'Menú' : lang === 'zh' ? '菜单' : 'Menu');
 
    setText('I’m Marga, a digital designer from Argentina currently based in China. I design digital experiences that help brands build trust, stand out and grow online.', c.intro);
 
    setText('I don’t start with the logo. I start with what the business is trying to become, because a mark that looks good and means nothing falls apart under the first question. The design comes easily once we know what we’re designing for.', c.process);
    setText('I like to get involved early. Before opening Figma, I want to understand what’s there, what’s missing, and what the experience needs to do. I ask questions, collect references, sketch things out and test ideas until there’s a direction worth following. From there, the work becomes a matter of making it sharper, simpler and more considered.', c.process);
 
    setText('Outside of work I run early, before the city starts. I watch a film most nights, usually alone, usually one I’ve already seen. And I take the long way home when it goes past a building I like, which is most of the time.', c.sub);
    setText('I don’t like separating the thinking from the making. I move between strategy, structure, visuals and code as the project takes shape, which means things can change along the way. A layout might become an interaction, an interaction might become a whole new idea. I leave room for that.', c.sub);
 
    setText('Let’s talk', c.talk);
    setText("Let's talk", c.talk);
    setText('hello@margastudio.com', c.email);
 
    renderProjectIndex(lang);
    renderAbout(lang);
    replaceAboutPhoto();
    setAboutVisibility();
    renderProject(lang);
 
    // Ejecutar actualización de SEO
    updateSEOMetadata(lang);
  }
 
  function renderProjectIndex(lang) {
    if (pagePath !== '/') return;
 
    const projectPaths = Object.keys(projectData);
    const links = Array.from(document.querySelectorAll('a[href*="/projects/"]')).filter(
      link => !link.closest('.marga-case-study-note')
    );
 
    links.slice(0, projectPaths.length).forEach((link, index) => {
      const project = projectData[projectPaths[index]];
      if (!project) return;
 
      link.href = projectPaths[index];
      const nameNode = Array.from(link.querySelectorAll('p')).find(node => node.textContent.trim());
      const categoryNode = Array.from(link.querySelectorAll('p')).filter(node => node.textContent.trim())[1];
 
      if (nameNode) nameNode.textContent = project.name;
      if (categoryNode) categoryNode.textContent = project.category[lang] || project.category.en;
    });
  }
 
  function renderAbout(lang) {
    const about = document.querySelector('#about-me');
    if (!about) return;
 
    let section = about.querySelector('.marga-about-extra');
    if (!section) {
      section = document.createElement('div');
      section.className = 'marga-about-extra';
      about.appendChild(section);
    }
 
    const c = translations[lang] || translations.en;
    const certificateLabel = lang === 'es' ? 'Ver certificado' : lang === 'zh' ? '查看证书' : 'View certificate';
    const yearLabel = lang === 'es' ? 'Año' : lang === 'zh' ? '年份' : 'Year';
 
    const certificateCards = certifications
      .map((certificate, index) => {
        const title = certificate.title[lang] || certificate.title.en;
        const place = certificate.place[lang] || certificate.place.en;
 
        return `
          <a
            class="marga-cert-card"
            href="images/certificates/${encodeURIComponent(certificate.pdf)}"
            target="_blank"
            rel="noopener"
          >
            <img
              src="images/certificates/${certificate.image}"
              alt="${title}"
            >
            <div class="marga-cert-copy">
              <span>${String(index + 1).padStart(2, '0')}</span>
              <strong>${title}</strong>
              <small>${yearLabel} ${certificate.year} · ${place}</small>
              <em>${certificateLabel} ↗</em>
            </div>
          </a>
        `;
      })
      .join('');
 
    section.innerHTML = `
      <div class="marga-bring">
        <div class="marga-bring-orbit">
          <div class="marga-bring-center">
            <h3>${c.bringTitle}</h3>
            <p>${c.bringText}</p>
          </div>
          <div class="marga-bring-tags">
            ${c.tags.map(tag => `<span>${tag}</span>`).join('')}
          </div>
        </div>
      </div>
 
      <div class="marga-about-block marga-certifications-block">
        <h3>${c.certifications}</h3>
        <div class="marga-cert-grid">
          ${certificateCards}
        </div>
      </div>
    `;
  }
 
  function setAboutVisibility() {
    const about = document.querySelector('#about-me');
    if (!about) return;
 
    about.hidden = !isAboutPage && !location.hash.toLowerCase().includes('about');
 
    if (isAboutPage) {
      document.querySelectorAll('main > section').forEach(section => {
        if (section !== about) section.hidden = true;
      });
      about.hidden = false;
    }
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
    const project = projectData[resolvedPagePath];
    if (!project) return;
 
    const description = project.description[lang] || project.description.en;
    const category = project.category[lang] || project.category.en;
 
    const main = document.querySelector('#main main');
    if (!main) return;
 
    let note = main.querySelector('.marga-case-study-note');
    if (!note) {
      note = document.createElement('section');
      note.className = 'marga-case-study-note';
      main.insertBefore(note, main.firstElementChild);
    }
 
    note.innerHTML = `
      <p class="marga-eyebrow">
        ${lang === 'es' ? 'Caso de estudio' : lang === 'zh' ? '案例研究' : 'Case study'}
      </p>
      <h2>${project.name}</h2>
      <p>${description}</p>
      <div>
        <span>${category}</span>
        <span>Marga Studio</span>
      </div>
    `;
  }
 
  function updateContactLinks() {
    document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
      a.href = 'mailto:histudiomarga@gmail.com';
    });
    document.querySelectorAll('a[href*="instagram.com"]').forEach(a => {
      a.href = 'https://www.instagram.com/margadesignstudio/';
    });
    document.querySelectorAll('a[href*="linkedin.com"]').forEach(a => {
      a.href = 'https://www.linkedin.com/in/margaritapardeilhan';
    });
    document.querySelectorAll('a[href*="x.com"], a[href*="twitter.com"]').forEach(a => a.remove());
 
    document.querySelectorAll('a').forEach(a => {
      if (/^(about|sobre mí|关于我)$/i.test(a.textContent.trim())) {
        a.href = 'about.html';
        a.target = '_blank';
        a.rel = 'noopener';
      }
    });
  }
 
  function removeFramerBadge() {
    document.querySelectorAll('#__framer-badge-container, .__framer-badge').forEach(element => element.remove());
    document.querySelectorAll('a, button').forEach(element => {
      if (element.textContent.trim() === 'Use for free') element.remove();
    });
  }
 
  /*
   * Un solo bloque de estilos (antes estaba partido en addStyles() +
   * addVisualStyles(), y la segunda hoja pisaba a la primera sin ningún
   * media query — por eso, por ejemplo, la grilla de certificados quedaba
   * fija en 2 columnas incluso en pantallas grandes, y el "orbit" de tags
   * de la sección About se rompía en mobile). Ahora es una sola hoja
   * responsive, sin reglas que se contradigan entre sí.
   */
  function injectStyles() {
    if (document.getElementById('marga-custom-styles')) return;
 
    const style = document.createElement('style');
    style.id = 'marga-custom-styles';
    style.textContent = `
      .marga-about-extra {
        padding: 80px 24px;
        display: grid;
        gap: 100px;
        max-width: 1240px;
        margin: auto;
      }
 
      .marga-about-block h3,
      .marga-bring h3 {
        font-size: clamp(32px, 5vw, 64px);
        font-weight: 400;
        letter-spacing: -.04em;
        margin: 0 0 32px;
      }
 
      /* Grilla de certificados: fluida en vez de columnas fijas, así se
         acomoda sola en cualquier ancho de pantalla sin que una hoja de
         estilos posterior la vuelva a pisar. */
      .marga-cert-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
      }
 
      .marga-cert-card {
        min-width: 0;
        min-height: 130px;
        padding: 0;
        border: 1px solid rgba(15, 15, 15, .2);
        border-radius: 4px;
        overflow: hidden;
        color: inherit;
        text-decoration: none;
        background: #fff;
        display: flex;
        flex-direction: column;
        transition: transform .35s ease, box-shadow .35s ease;
      }
 
      .marga-cert-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 14px 30px rgba(15, 15, 15, .12);
      }
 
      .marga-cert-card img {
        display: block;
        width: 100%;
        aspect-ratio: 1.55;
        object-fit: cover;
        background: #ece8df;
      }
 
      .marga-cert-copy {
        min-height: 142px;
        padding: 14px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
 
      .marga-cert-card span,
      .marga-cert-card small {
        opacity: .55;
        font-size: 12px;
      }
 
      .marga-cert-card strong {
        font-size: 15px;
        font-weight: 500;
        line-height: 1.15;
      }
 
      .marga-cert-card em {
        margin-top: auto;
        font-size: 11px;
        font-style: normal;
        opacity: .6;
      }
 
      .marga-bring {
        text-align: center;
        padding: 100px 0 140px;
        position: relative;
        overflow: hidden;
      }
 
      .marga-bring p {
        font-size: 20px;
        max-width: 560px;
        margin: 0 auto 48px;
      }
 
      .marga-bring-orbit {
        width: min(100%, 820px);
        min-height: 540px;
        border: 1px solid rgba(112, 67, 46, .2);
        border-radius: 50%;
        animation: marga-breathe 7s ease-in-out infinite;
        position: relative;
        display: grid;
        place-items: center;
        margin: auto;
      }
 
      .marga-bring-center {
        width: min(52%, 560px);
        position: relative;
        z-index: 2;
      }
 
      .marga-bring-center h3 {
        font-size: clamp(42px, 6vw, 82px);
        line-height: .98;
        margin-bottom: 24px;
      }
 
      .marga-bring-tags {
        position: absolute;
        inset: 0;
      }
 
      .marga-bring-tags span {
        position: absolute;
        background: #70432e;
        color: #fcfaf8;
        padding: 14px 24px;
        border-radius: 999px;
        font-size: 14px;
        white-space: nowrap;
        animation: marga-float 8s ease-in-out infinite;
      }
 
      .marga-bring-tags span:nth-child(1) { top: 8%; left: 43%; animation-delay: -.8s; }
      .marga-bring-tags span:nth-child(2) { top: 19%; right: 10%; animation-delay: -2.1s; }
      .marga-bring-tags span:nth-child(3) { top: 19%; left: 10%; animation-delay: -4.2s; }
      .marga-bring-tags span:nth-child(4) { top: 45%; left: 3%; animation-delay: -1.4s; }
      .marga-bring-tags span:nth-child(5) { top: 45%; right: 3%; animation-delay: -3.4s; }
      .marga-bring-tags span:nth-child(6) { bottom: 16%; left: 12%; animation-delay: -5.2s; }
      .marga-bring-tags span:nth-child(7) { bottom: 16%; right: 12%; animation-delay: -2.8s; }
      .marga-bring-tags span:nth-child(8) { bottom: 5%; left: 40%; animation-delay: -4.8s; }
      .marga-bring-tags span:nth-child(9) { bottom: 39%; right: 18%; animation-delay: -6.2s; }
 
      @keyframes marga-float {
        0%, 100% { translate: 0 0; rotate: -2deg; }
        50% { translate: 0 -12px; rotate: 2deg; }
      }
 
      @keyframes marga-breathe {
        50% { transform: scale(1.025); }
      }
 
      .marga-case-study-note {
        padding: clamp(80px, 12vw, 180px) 24px 80px;
        max-width: 1000px;
        margin: auto;
      }
 
      .marga-case-study-note h2 {
        font-size: clamp(48px, 9vw, 120px);
        font-weight: 400;
        letter-spacing: -.06em;
        line-height: .95;
        margin: 12px 0 28px;
      }
 
      .marga-case-study-note > p:not(.marga-eyebrow) {
        font-size: clamp(20px, 2.5vw, 30px);
        line-height: 1.2;
        max-width: 720px;
      }
 
      .marga-case-study-note > div {
        display: flex;
        gap: 24px;
        margin-top: 44px;
        font-size: 13px;
        opacity: .65;
      }
 
      .marga-case-study-note > div span + span:before {
        content: '·';
        margin-right: 24px;
      }
 
      .marga-brand-lockup {
        display: inline-flex !important;
        align-items: center;
        width: max-content !important;
        min-width: max-content !important;
        white-space: nowrap !important;
        overflow: visible !important;
        text-decoration: none;
      }
 
      .marga-brand-lockup span {
        display: inline-block;
        white-space: nowrap;
        font-size: 16px;
        line-height: 1;
      }
 
      .marga-brand-title {
        font-size: clamp(54px, 13vw, 190px) !important;
        letter-spacing: -.07em !important;
        width: 100%;
      }
 
      .marga-profile-photo {
        filter: grayscale(1);
      }

      /* El label de rol ("Product designer") y ubicacion ("Argentina /
         China") del nav pierden su estilo (Switzer, uppercase) cada vez
         que se traducen, porque Framer parte el texto en varios <span>
         para animarlo y el reemplazo de texto termina reescribiendo el
         contenedor entero sin sus clases. Se fuerza aca el estilo
         correcto directo sobre el wrapper, que si es estable. */
      .framer-1ndf9in,
      .framer-l99npk {
        font-family: "Switzer", "Switzer Placeholder", sans-serif !important;
        font-weight: 400 !important;
        letter-spacing: -0.02em !important;
        text-transform: uppercase !important;
      }

      .marga-language-switcher {
        position: fixed;
        left: 16px;
        bottom: 16px;
        z-index: 2147483647;
        pointer-events: auto;
        display: none;
        gap: 10px;
        font: 12px/1 sans-serif;
        letter-spacing: .04em;
      }

      /* Antes quedaba fijo abajo a la izquierda todo el tiempo y tapaba
         el texto del body al hacer scroll. Ahora solo se muestra
         mientras el menu esta abierto (Lenis le agrega esta clase al
         <html> cuando bloquea el scroll de fondo), en vez de flotar
         encima del contenido todo el tiempo. */
      html.lenis-stopped .marga-language-switcher {
        display: flex;
      }
 
      .marga-language-switcher button {
        background: transparent;
        border: 0;
        padding: 10px 8px;
        cursor: pointer;
        color: inherit;
        opacity: .55;
        pointer-events: auto;
      }
 
      .marga-language-switcher button[aria-current=true] {
        opacity: 1;
        text-decoration: underline;
      }
 
      #about-me[hidden] {
        display: none !important;
      }
 
      .marga-about-page main > section:not(#about-me) {
        display: none !important;
      }
 
      html:not(.marga-about-page) #about-me {
        display: none !important;
      }
 
      section[data-framer-name="Ability"] {
        display: none !important;
      }
 
      @media (max-width: 809px) {
        .marga-about-extra {
          padding: 56px 12px;
          gap: 64px;
        }
 
        .marga-cert-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
 
        .marga-cert-card {
          min-height: 110px;
        }
 
        .marga-bring {
          padding: 48px 0;
        }
 
        /* El "orbit" circular con las etiquetas flotando alrededor está
           pensado para pantallas anchas. En mobile el círculo se
           deformaba (quedaba ovalado) y las etiquetas se salían del
           borde, así que acá se cae a una lista simple centrada. */
        .marga-bring-orbit {
          min-height: auto;
          border: 0;
          animation: none;
          display: block;
        }
 
        .marga-bring-tags {
          position: static;
          inset: auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-top: 32px;
        }
 
        .marga-bring-tags span {
          position: static;
          animation: none;
          padding: 11px 16px;
          font-size: 13px;
        }
 
        .marga-case-study-note {
          padding: 100px 12px 48px;
        }
 
        .marga-case-study-note > div {
          display: block;
        }
 
        .marga-case-study-note > div span {
          display: block;
          margin-bottom: 8px;
        }
 
        .marga-case-study-note > div span + span:before {
          display: none;
        }
      }
    `;
 
    document.head.appendChild(style);
  }
 
  function addLanguageSwitcher(lang) {
    let switcher = document.querySelector('.marga-language-switcher');
    if (!switcher) {
      switcher = document.createElement('div');
      switcher.className = 'marga-language-switcher';
      // Se cuelga de <html> en vez de <body>: si algún componente de
      // Framer (cursor custom, transición de página, smooth-scroll) le
      // pone un transform/filter al <body>, crea su propio "stacking
      // context" y ningún z-index dentro de body puede ganarle a un
      // overlay que esté fuera de ese contexto. Colgarlo de <html>
      // evita ese problema.
      document.documentElement.appendChild(switcher);
    }
 
    // Refuerzo inline, por si algún estilo externo llega a pisar el CSS.
    switcher.style.position = 'fixed';
    switcher.style.zIndex = '2147483647';
    switcher.style.pointerEvents = 'auto';
 
    switcher.innerHTML = `
      <button type="button" data-lang="en" ${lang === 'en' ? 'aria-current="true"' : ''}>EN</button>
      <button type="button" data-lang="es" ${lang === 'es' ? 'aria-current="true"' : ''}>ES</button>
      <button type="button" data-lang="zh" ${lang === 'zh' ? 'aria-current="true"' : ''}>中文</button>
    `;
 
    switcher.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        const lang = btn.getAttribute('data-lang');
        localStorage.setItem('marga_lang', lang);
        render(lang);
      });
    });
  }
 
  function fixBrandLockup() {
    const links = document.querySelectorAll('a[href="/"], a[href="./"]');
    links.forEach(link => {
      if (link.textContent.includes('MARGA') || link.textContent.includes('Studio')) {
        link.classList.add('marga-brand-lockup');
      }
    });
  }
 
  /*
   * El "Marga Studio" gigante del hero lo arma Framer con un truco de SVG
   * (un <svg> con viewBox fijo + <foreignObject> adentro) para que el texto
   * se autoajuste al ancho disponible. El problema es que ese calculo se
   * hace contra el ancho de texto "esperado" y, si la tipografia custom
   * (Gambarino) todavia no cargo en ese momento, el texto real termina mas
   * ancho que el viewBox - y como el <foreignObject> tiene
   * overflow:visible, el sobrante se corta contra el borde de la pagina en
   * vez de reacomodarse. La clase .marga-brand-title ya estaba escrita en
   * el CSS pero nunca se aplicaba a ningun elemento; esta funcion saca el
   * <h1> de adentro del SVG y lo deja como texto plano con tamano
   * responsive (clamp + vw), que no depende de ninguna medicion previa.
   */
  function fixBrandTitle() {
    // Antes de hidratar, Framer envuelve cada variante de breakpoint en un
    // div ".ssr-variant" separado. React descarta esos wrappers al
    // hidratar y deja el <svg> como hijo directo del contenedor, así que
    // hay que buscarlo ahí (no dentro de ".ssr-variant", que ya no existe
    // en el DOM real una vez que la página termina de cargar).
    document.querySelectorAll('section[data-framer-name="Hero section"] svg[data-framer-component-type="RichTextContainer"]').forEach(svg => {
      const h1 = svg.querySelector('h1.framer-text');
      if (!h1) return;

      // El texto real ("Marga Studio") a veces tarda un instante en pisar
      // el placeholder del template original ("Kai Marlow"). Si se
      // reemplaza el SVG mientras todavía muestra el placeholder, ese
      // texto queda congelado para siempre (ya no es Framer quien lo
      // controla). Mejor esperar a que diga lo que tiene que decir.
      const text = h1.textContent.trim();
      if (!text || /kai\s*marlow/i.test(text)) return;

      h1.classList.add('marga-brand-title');
      h1.style.whiteSpace = 'nowrap';
      svg.replaceWith(h1);
    });
  }
 
  /*
   * El link "About" del menu viene de Framer apuntando a "./#about-me"
   * (un anchor dentro de la misma pagina), no a una pagina aparte. Se
   * redirige a /about.html, que es la pagina dedicada que ya arma
   * renderAbout() con la bio y las certificaciones.
   */
  // Colapsa "AboutAbout" -> "About" (Framer duplica el texto de los links
  // del menu para poder animar la palabra saliente/entrante).
  function dedupeText(str) {
    const len = str.length;
    if (len > 0 && len % 2 === 0) {
      const half = str.slice(0, len / 2);
      if (half === str.slice(len / 2)) return half;
    }
    return str;
  }

  function fixAboutLink() {
    // Intento 1: si el link ya tiene el href nativo de Framer
    // ("./#about-me" o "#about-me"), corregirlo de una. Sirve para
    // click derecho / abrir en pestaña nueva / copiar link.
    document.querySelectorAll('a[href$="#about-me"]').forEach(link => {
      link.setAttribute('href', '/about.html');
    });

    // Intento 2 (el que realmente importa): React vuelve a poner el href
    // original en cada re-render suyo, así que en vez de pelear con eso
    // se intercepta el click directamente. Un solo listener en el
    // document, en fase de captura, para que se ejecute antes que
    // cualquier handler de Framer en el link.
    if (document.documentElement.dataset.margaAboutClickBound) return;
    document.documentElement.dataset.margaAboutClickBound = 'true';

    document.addEventListener('click', function (event) {
      const link = event.target.closest('a');
      if (!link) return;

      const text = dedupeText(link.textContent.trim()).toLowerCase();
      if (text === 'about' || text === 'sobre mí' || text === '关于我') {
        event.preventDefault();
        event.stopPropagation();
        window.location.href = '/about.html';
      }
    }, true);
  }
 
  function render(lang) {
    currentLang = lang;
    renderStaticCopy(lang);
    addLanguageSwitcher(lang);
    updateContactLinks();
    removeFramerBadge();
    fixBrandLockup();
    fixBrandTitle();
    fixAboutLink();
  }
 
  /*
   * Framer sigue tocando el DOM después de la carga inicial (animaciones al
   * entrar en viewport, transiciones de página, etc.), y eso puede llegar a
   * pisar el texto que ya habíamos traducido. Este observer detecta esos
   * cambios y vuelve a aplicar el idioma activo. Se desconecta a sí mismo
   * mientras hace el reemplazo para no entrar en un loop infinito con sus
   * propios cambios.
   */
  function startObserver() {
    if (observer) return;
 
    observer = new MutationObserver(() => {
      clearTimeout(mutationTimer);
      mutationTimer = setTimeout(() => {
        observer.disconnect();
        try {
          collectSources();
          render(currentLang);
        } finally {
          observer.observe(document.body, { childList: true, subtree: true, characterData: true });
        }
      }, 300);
    });
 
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }
 
  function init() {
    injectStyles();
    collectSources();
 
    const storedLang = localStorage.getItem('marga_lang');
    const userLang = storedLang || (navigator.language.startsWith('es') ? 'es' : navigator.language.startsWith('zh') ? 'zh' : 'en');
 
    render(userLang);
    startObserver();
  }
 
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
