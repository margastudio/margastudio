/* Loads last known-good full file from commit e7b97b2 via jsDelivr */
(function () {
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/gh/margastudio/margastudio@e7b97b274ad12e3128f025176585676c57827786/marga-content.js';
  s.onload = function () { console.info('[marga] content OK'); };
  s.onerror = function () { console.error('[marga] content CDN failed'); };
  document.head.appendChild(s);
})();
