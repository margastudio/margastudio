const fs = require('fs');

let content = fs.readFileSync('marga-content.js', 'utf8');

// 1. Fix setAboutVisibility so it does not hide sections on about.html
content = content.replace(
  /function setAboutVisibility\(\) \{[\s\S]*?about\.hidden = false;\s*\}\s*\}/,
  `function setAboutVisibility() {
    if (pagePath !== '/') return;
    const about = document.querySelector('#about-me');
    if (!about) return;
    about.hidden = !location.hash.toLowerCase().includes('about');
  }`
);

// 2. Remove destructive section hiding in CSS
content = content.replace(
  /\.marga-about-page main > section:not\(#about-me\) \{[\s\S]*?\}/,
  '/* about page sections displayed normally */'
);
content = content.replace(
  /html:not\(\.marga-about-page\) #about-me \{[\s\S]*?\}/,
  '/* single-page #about-me rule */'
);
content = content.replace(
  /section\[data-framer-name="Ability"\] \{[\s\S]*?\}/,
  '/* data-framer-name Ability displayed */'
);

// 3. Update CSS for .marga-language-switcher
content = content.replace(
  /\.marga-language-switcher \{[\s\S]*?\.marga-language-switcher button\[aria-current=true\] \{[\s\S]*?\}/,
  `.marga-language-switcher {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        margin: 0 10px;
        font-family: "Switzer", "DM Sans", -apple-system, sans-serif;
        font-size: 13px;
        line-height: 1;
        font-weight: 500;
        letter-spacing: -0.01em;
        text-transform: uppercase;
        pointer-events: auto;
        user-select: none;
        z-index: 20;
      }

      .marga-language-switcher button.marga-lang-btn {
        background: transparent;
        border: 0;
        padding: 4px 2px;
        margin: 0;
        cursor: pointer !important;
        color: var(--token-340480bd-b0d6-40b9-8115-66f2e4394a52, #121212);
        opacity: 0.45;
        transition: opacity 0.2s ease, font-weight 0.2s ease;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        letter-spacing: inherit;
        text-transform: inherit;
      }

      .marga-language-switcher button.marga-lang-btn:hover {
        opacity: 0.85;
      }

      .marga-language-switcher button.marga-lang-btn[aria-current="true"],
      .marga-language-switcher button.marga-lang-btn.active {
        opacity: 1;
        font-weight: 700;
        text-decoration: underline;
        text-underline-offset: 3px;
      }

      .marga-language-switcher .marga-lang-sep {
        opacity: 0.25;
        font-size: 11px;
        user-select: none;
        pointer-events: none;
      }

      .marga-language-switcher-drawer {
        margin-top: 18px;
        padding-top: 14px;
        border-top: 1px solid rgba(18, 18, 18, 0.08);
        display: flex;
        justify-content: flex-start;
      }`
);

// 4. Update addLanguageSwitcher
content = content.replace(
  /function addLanguageSwitcher\(lang\) \{[\s\S]*?\n  \}/,
  `function renderSwitcherButtons(switcher, lang) {
    switcher.setAttribute('role', 'group');
    switcher.setAttribute('aria-label', 'Language Selector');
    switcher.innerHTML = \`
      <button type="button" class="marga-lang-btn \${lang === 'en' ? 'active' : ''}" data-lang="en" aria-current="\${lang === 'en' ? 'true' : 'false'}" aria-label="English">EN</button>
      <span class="marga-lang-sep" aria-hidden="true">·</span>
      <button type="button" class="marga-lang-btn \${lang === 'es' ? 'active' : ''}" data-lang="es" aria-current="\${lang === 'es' ? 'true' : 'false'}" aria-label="Español">ES</button>
      <span class="marga-lang-sep" aria-hidden="true">·</span>
      <button type="button" class="marga-lang-btn \${lang === 'zh' ? 'active' : ''}" data-lang="zh" aria-current="\${lang === 'zh' ? 'true' : 'false'}" aria-label="中文">中文</button>
    \`;

    switcher.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        const selectedLang = btn.getAttribute('data-lang');
        localStorage.setItem('marga_lang', selectedLang);
        render(selectedLang);
      });
    });
  }

  function addLanguageSwitcher(lang) {
    // 1. En la barra superior: dentro de .framer-1damdz1 (Text wrapper junto al botón Menu)
    const topBarWrappers = document.querySelectorAll('.framer-1damdz1');
    topBarWrappers.forEach(wrapper => {
      let switcher = wrapper.querySelector('.marga-language-switcher');
      if (!switcher) {
        switcher = document.createElement('div');
        switcher.className = 'marga-language-switcher';
        const menuBtn = wrapper.querySelector('.framer-17x87gr');
        if (menuBtn) {
          wrapper.insertBefore(switcher, menuBtn);
        } else {
          wrapper.appendChild(switcher);
        }
      }
      renderSwitcherButtons(switcher, lang);
    });

    // 2. En el panel desplegable del menú (data-framer-name="Links" / .framer-eh2gyv)
    const drawerContainers = document.querySelectorAll('.framer-eh2gyv');
    drawerContainers.forEach(container => {
      let switcher = container.querySelector('.marga-language-switcher-drawer');
      if (!switcher) {
        switcher = document.createElement('div');
        switcher.className = 'marga-language-switcher marga-language-switcher-drawer';
        container.appendChild(switcher);
      }
      renderSwitcherButtons(switcher, lang);
    });
  }`
);

// 5. Update renderStaticCopy to include hero, story, What I bring, tags, certifications, etc.
content = content.replace(
  /function renderStaticCopy\(lang\) \{[\s\S]*?renderProjectIndex\(lang\);/,
  `function renderStaticCopy(lang) {
    const c = translations[lang] || translations.en;

    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;

    ['Brand designer', 'Digital designer', 'Product designer', 'Product Designer', 'Digital Designer', 'PRODUCT DESIGNER', 'DIGITAL DESIGNER'].forEach(source => setText(source, lang === 'zh' ? c.role : source === source.toUpperCase() ? c.role.toUpperCase() : c.role));
    ['GMT−4', 'Argentina / China', 'Argentina / china', 'ARGENTINA / CHINA'].forEach(source => setText(source, lang === 'zh' ? c.location : source === source.toUpperCase() ? c.location.toUpperCase() : c.location));

    // Menú
    ['Home', 'HOME'].forEach(source => setText(source, c.home));
    ['Work', 'WORK'].forEach(source => setText(source, c.work));
    ['About', 'ABOUT'].forEach(source => setText(source, c.about));
    ['Contact', 'CONTACT'].forEach(source => setText(source, c.contact));

    setText('Designing digital products, websites & experiences that move ideas forward.', c.hero);
    setText('I design strategic brand identities that help ambitious businesses earn instant trust and attract the clients they actually want.', c.hero);
    setText('Selected projects', c.selected);
    setText('Marga Studio', 'Marga Studio');
    setText('Kai Marlow', 'Marga Studio');
    ['Menu', 'MENU', 'Menú', 'MENÚ', '菜单'].forEach(source => setText(source, lang === 'es' ? (source === 'MENU' ? 'MENÚ' : 'Menú') : lang === 'zh' ? '菜单' : (source === 'MENU' ? 'MENU' : 'Menu')));

    // Hero intro
    const introPart1 = {
      en: 'I’m Marga, a digital designer from Argentina currently based in China.',
      es: 'Soy Marga, diseñadora digital de Argentina, actualmente vivo en China.',
      zh: '我是 Marga，一名来自阿根廷、目前居住在中国的数字设计师。'
    };
    const introPart2 = {
      en: 'I design strategic digital experiences that help brands build trust, stand out and grow online.',
      es: 'Diseño experiencias digitales que ayudan a las marcas a generar confianza, destacarse y crecer online.',
      zh: '我设计具有策略性的数字体验，帮助品牌建立信任、脱颖而出并在线成长。'
    };
    [introPart1.en, introPart1.es, introPart1.zh].forEach(src => setText(src, introPart1[lang]));
    [introPart2.en, introPart2.es, introPart2.zh].forEach(src => setText(src, introPart2[lang]));
    [
      "I'm Marga, a digital designer from Argentina currently based in China. I design strategic digital experiences that help brands build trust, stand out and grow online.",
      "I’m Marga, a digital designer from Argentina currently based in China. I design strategic digital experiences that help brands build trust, stand out and grow online.",
      translations.es.intro,
      translations.zh.intro
    ].forEach(src => setText(src, c.intro));

    // Story paragraphs
    [
      'I like to get involved early. Before opening Figma, I want to understand what’s there, what’s missing, and what the experience needs to do. I ask questions, collect references, sketch things out and test ideas until there’s a direction worth following. From there, the work becomes a matter of making it sharper, simpler and more considered.',
      translations.es.process,
      translations.zh.process
    ].forEach(src => setText(src, c.process));

    [
      'I don’t like separating the thinking from the making. I move between strategy, structure, visuals and code as the project takes shape, which means things can change along the way. A layout might become an interaction, an interaction might become a whole new idea. I leave room for that.',
      "I don't like separating the thinking from the making. I move between strategy, structure, visuals and code as the project takes shape, which means things can change along the way. A layout might become an interaction, an interaction might become a whole new idea. I leave room for that.",
      translations.es.sub,
      translations.zh.sub
    ].forEach(src => setText(src, c.sub));

    // What I bring to the table
    ['What I bring to the table', 'Lo que aporto al proyecto', '我能带来的价值'].forEach(src => setText(src, c.bringTitle));
    [
      'Digital experiences that engage users and help your startup stand out from day one',
      'Digital experiences that engage users and help ambitious brands stand out from day one.',
      translations.es.bringText,
      translations.zh.bringText
    ].forEach(src => setText(src, c.bringText));

    // Tags
    for (let i = 0; i < translations.en.tags.length; i++) {
      const enTag = translations.en.tags[i];
      const esTag = translations.es.tags[i];
      const zhTag = translations.zh.tags[i];
      [enTag, esTag, zhTag].forEach(src => setText(src, c.tags[i]));
    }

    // Certifications
    ['Certifications', 'CERTIFICATIONS', 'Certificaciones', 'CERTIFICACIONES', '认证课程', '认证与专业资质'].forEach(source => setText(source, source === source.toUpperCase() ? c.certifications.toUpperCase() : c.certifications));

    // Let's talk
    ['Let’s talk', "Let's talk", "LET'S TALK", "Let's Talk", 'Hablemos', 'HABLEMOS', '联系我'].forEach(src => setText(src, src === src.toUpperCase() ? c.talk.toUpperCase() : c.talk));

    setText('hello@margastudio.com', c.email);
    setText('histudiomarga@gmail.com', c.email);

    renderProjectIndex(lang);`
);

fs.writeFileSync('marga-content.js', content);
console.log('Successfully updated marga-content.js');
