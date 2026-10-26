/*
 * Marga Studio — renderer de case studies.
 * Requiere marga-case-studies.js cargado antes.
 *
 * Uso en cada /projects/*:
 *   <div class="marga-case-study-content"></div>
 *   <script src="/marga-case-studies.js"></script>
 *   <script src="/marga-case-render.js"></script>
 *
 * - Reemplaza el contenido del contenedor en cada render (no duplica al cambiar idioma).
 * - Idioma: ?lang=xx > localStorage('marga-lang') > <html lang> > 'en'.
 * - Para engancharlo a tu botón EN/ES/ZH, en el handler del botón llamá:
 *       window.MargaCases.setLang('es')   // 'en' | 'es' | 'zh'
 *   o disparás:  window.dispatchEvent(new CustomEvent('marga-lang-change', { detail: 'es' }))
 * - El hero NO se renderiza por defecto (la página Framer ya trae el suyo).
 *   Si querés que lo renderice: <div class="marga-case-study-content" data-mcs-hero="on">
 */
(function () {
  var CASES = window.MARGA_CASES || {};
  var LANGS = ['en', 'es', 'zh'];
  var KEY = 'marga_lang';
  var HTML_LANG = { en: 'en', es: 'es', zh: 'zh-CN' };

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  // Imágenes: "![alt](url)" y "[image](url)" (solo http(s) o rutas /…) se
  // dibujan como <img> reales en vez de quedar como texto Markdown literal.
  function img(alt, url) { return '<img loading="lazy" src="' + url + '" alt="' + alt + '">'; }
  function md(s) {
    return esc(s)
      .replace(/!\[([^\]]*)\]\(((?:https?:\/\/|\/)[^)\s"]+)\)/g, function (_, a, u) { return img(a, u); })
      .replace(/\[image\]\(((?:https?:\/\/|\/)[^)\s"]+)\)/gi, function (_, u) { return img('', u); })
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }
  function imgSrc(v) { var m = /^\[[^\]]*\]\(([^)\s]+)\)$/.exec(String(v).trim()); return m ? m[1] : v; }
  function pick(v, lang) {
    if (v == null) return '';
    if (typeof v === 'string') return v;
    var r = v[lang];
    if (r == null || r === '') { console.warn('[marga-cases] falta traducción "' + lang + '"'); r = v.en || ''; }
    return r;
  }
  function pickList(o, lang) { return (o && (o[lang] || o.en)) || []; }

  function getLang() {
    var q = new URLSearchParams(location.search).get('lang');
    if (LANGS.indexOf(q) > -1) return q;
    try { var s = localStorage.getItem(KEY); if (LANGS.indexOf(s) > -1) return s; } catch (e) {}
    var h = (document.documentElement.lang || 'en').slice(0, 2).toLowerCase();
    return LANGS.indexOf(h) > -1 ? h : 'en';
  }

  function currentCase() {
    var p = location.pathname.replace(/\/index\.html$/, '').replace(/\.html$/, '').replace(/\/+$/, '');
    return CASES[p] || null;
  }

  function injectCss() {
    if (document.getElementById('mcs-css')) return;
    var st = document.createElement('style');
    st.id = 'mcs-css';
    st.textContent =
      '.mcs{box-sizing:border-box;width:100%;max-width:760px;margin:0 auto;padding:0 20px;font:inherit;color:inherit;line-height:1.65;overflow-wrap:anywhere}' +
      '.mcs *{box-sizing:border-box;max-width:100%}' +
      '.mcs-sec{margin:48px 0}.mcs-sec:first-child{margin-top:0}' +
      '.mcs h2{font-size:clamp(22px,3vw,30px);line-height:1.2;margin:0 0 16px;font-weight:600}' +
      '.mcs p{margin:0 0 14px}.mcs p img{display:block;width:100%;height:auto;border-radius:10px;margin:12px 0}' +
      '.mcs ul{margin:0 0 14px;padding-left:1.2em}.mcs li{margin:0 0 12px}' +
      '.mcs-dec{border:1px solid rgba(128,128,128,.35);border-radius:12px;padding:18px 20px;margin:0 0 16px}' +
      '.mcs-dec h3{font-size:18px;margin:0 0 10px;font-weight:600}' +
      '.mcs-dec p{margin:0 0 8px}.mcs-dec p:last-child{margin:0}' +
      '.mcs-gal{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin:0}' +
      '.mcs-gal figure{margin:0}.mcs-gal img{display:block;width:100%;height:auto;border-radius:10px}' +
      '.mcs-gal figcaption{font-size:14px;opacity:.75;margin-top:6px}' +
      '.mcs-cta{display:flex;flex-wrap:wrap;gap:12px}' +
      '.mcs-cta a{display:inline-block;padding:12px 22px;border:1px solid currentColor;border-radius:999px;color:inherit;text-decoration:none}' +
      '.mcs-badges{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 14px}' +
      '.mcs-badges span,.mcs-tags span{font-size:13px;padding:4px 12px;border:1px solid currentColor;border-radius:999px}' +
      '.mcs-tags{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 14px}' +
      '@media (min-width:768px){.mcs{padding:0 32px}.mcs-sec{margin:64px 0}}';
    document.head.appendChild(st);
  }

  function renderSection(sec, lang) {
    var h = '<section class="mcs-sec" id="' + esc(sec.id) + '"><h2>' + esc(pick(sec.title, lang)) + '</h2>';
    (sec.intro || []).forEach(function (p) { h += '<p>' + md(pick(p, lang)) + '</p>'; });
    if (sec.items && sec.items.length) {
      h += '<ul>' + sec.items.map(function (i) { return '<li>' + md(pick(i, lang)) + '</li>'; }).join('') + '</ul>';
    }
    (sec.decisions || []).forEach(function (d) {
      h += '<div class="mcs-dec"><h3>' + esc(pick(d.title, lang)) + '</h3>' +
        d.rows.map(function (r) { return '<p><strong>' + esc(pick(r.label, lang)) + ':</strong> ' + md(pick(r.text, lang)) + '</p>'; }).join('') + '</div>';
    });
    (sec.outro || []).forEach(function (p) { h += '<p>' + md(pick(p, lang)) + '</p>'; });
    return h + '</section>';
  }

  function setMeta(c, lang) {
    var d = pick(c.seo, lang);
    if (!d) return;
    var m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement('meta'); m.setAttribute('name', 'description'); document.head.appendChild(m); }
    m.setAttribute('content', d);
    var og = document.querySelector('meta[property="og:description"]');
    if (og) og.setAttribute('content', d);
    document.title = c.name + ' — Marga Studio';
  }

  function render(lang) {
    var c = currentCase();
    var box = document.querySelector('.marga-case-study-content');
    if (!c || !box) { if (!c) console.warn('[marga-cases] sin datos para ' + location.pathname); return; }
    lang = LANGS.indexOf(lang) > -1 ? lang : getLang();
    injectCss();
    var h = '<div class="mcs" lang="' + HTML_LANG[lang] + '">';
    if (box.getAttribute('data-mcs-hero') === 'on') {
      var hero = c.hero;
      h += '<section class="mcs-sec"><h1>' + esc(c.name) + '</h1>' +
        '<p><em>' + esc(pick(hero.tagline, lang)) + '</em></p><p>' + esc(pick(hero.description, lang)) + '</p>' +
        (hero.badges && hero.badges.length ? '<div class="mcs-badges">' + hero.badges.map(function (b) { return '<span>' + esc(pick(b, lang)) + '</span>'; }).join('') + '</div>' : '') +
        '<p>' + esc(pick(hero.meta, lang)) + '</p>' +
        '<div class="mcs-tags">' + pickList(hero.tags, lang).map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('') + '</div></section>';
    }
    c.sections.forEach(function (s) { h += renderSection(s, lang); });
    if (c.gallery && c.gallery.length) {
      h += '<section class="mcs-sec"><div class="mcs-gal">' + c.gallery.map(function (g) {
        return '<figure><img loading="lazy" src="' + esc(imgSrc(g.src)) + '" alt="' + esc(pick(g.alt, lang)) + '">' +
          (g.caption ? '<figcaption>' + esc(pick(g.caption, lang)) + '</figcaption>' : '') + '</figure>';
      }).join('') + '</div></section>';
    }
    var ctas = (c.cta || []).filter(function (b) { return b.href; });
    if (ctas.length) {
      h += '<section class="mcs-sec"><div class="mcs-cta">' + ctas.map(function (b) {
        return '<a href="' + esc(b.href) + '" target="_blank" rel="noopener">' + esc(pick(b.label, lang)) + '</a>';
      }).join('') + '</div></section>';
    }
    box.innerHTML = h + '</div>';
    document.documentElement.lang = HTML_LANG[lang];
    setMeta(c, lang);
  }

  function setLang(lang) {
    if (LANGS.indexOf(lang) < 0) return;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    render(lang);
  }

  window.MargaCases = { render: render, setLang: setLang, getLang: getLang };
  window.addEventListener('marga-lang-change', function (e) { setLang(e.detail && e.detail.lang ? e.detail.lang : e.detail); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { render(); });
  else render();
})();
