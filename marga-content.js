/* temp - loading from previous good version */
(function(){
  var s=document.createElement('script');
  s.src='https://cdn.jsdelivr.net/gh/margastudio/margastudio@e7b97b274ad12e3128f025176585676c57827786/marga-content.js';
  s.onload=function(){console.info('[marga] content loaded from last good commit');};
  s.onerror=function(){console.error('[marga] failed to load content from CDN');};
  document.head.appendChild(s);
})();
