(function(){
  var urls=[], i, n=8;
  for(i=0;i<n;i++) urls.push('/marga-parts/case.'+i+'.js');
  var loaded=0;
  urls.forEach(function(u){
    var s=document.createElement('script');
    s.src=u;
    s.onload=function(){ loaded++; if(loaded===n) done(); };
    s.onerror=function(){ console.error('[marga] fail',u); };
    document.head.appendChild(s);
  });
  function done(){
    var P=(window.__MARGA_PARTS||{}).case||[];
    var s='';
    for(var i=0;i<n;i++){ if(!P[i]){console.error('missing',i);return;} s+=atob(P[i]); }
    try{s=decodeURIComponent(escape(s));}catch(e){}
    var el=document.createElement('script'); el.text=s; document.head.appendChild(el);
  }
})();
