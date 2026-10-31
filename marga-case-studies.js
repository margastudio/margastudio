/* temp - loading from previous good version */
(function(){
  var s=document.createElement('script');
  s.src='https://cdn.jsdelivr.net/gh/margastudio/margastudio@e7b97b274ad12e3128f025176585676c57827786/marga-case-studies.js';
  s.onload=function(){console.info('[marga] case-studies loaded from last good commit');};
  s.onerror=function(){console.error('[marga] failed to load case-studies from CDN');};
  document.head.appendChild(s);
})();
