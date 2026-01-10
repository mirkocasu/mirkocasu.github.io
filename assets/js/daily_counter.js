(function(){
  function fmt(n){ try { return n.toLocaleString(); } catch(e){ return String(n); } }
  function animateCount(el, from, to, ms){
    var start = null;
    var diff = to - from;
    if(diff <= 0){ el.textContent = fmt(to); return; }
    function step(timestamp){
      if(!start) start = timestamp;
      var progress = Math.min((timestamp - start)/ms,1);
      var cur = Math.floor(from + diff * progress);
      el.textContent = fmt(cur);
      if(progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  document.addEventListener('DOMContentLoaded', async function(){
    var elValue = document.getElementById('daily-counter-value');
    var elWrap = document.querySelector('.metric-visitor');
    var elMeta = document.getElementById('daily-counter-meta');
    if(!elValue || !elWrap) return;

    elWrap.classList.add('loading');
    var host = (location.hostname || 'site').replace(/\./g,'-').replace(/:/g,'-');
    var today = new Date().toISOString().slice(0,10); // YYYY-MM-DD
    var namespace = 'site-' + host;
    var key = 'visits-' + today;

    try {
      var res = await fetch('https://api.countapi.xyz/hit/' + encodeURIComponent(namespace) + '/' + encodeURIComponent(key), {method: 'GET'});
      if(!res.ok) throw new Error('Network');
      var json = await res.json();
      var newVal = Number(json.value || 0);
      var prev = Number((elValue.textContent||'0').replace(/[^0-9]/g,'')) || 0;
      animateCount(elValue, prev, newVal, 600);
      setTimeout(function(){ elWrap.classList.remove('loading'); elWrap.classList.add('loaded'); if(elMeta) elMeta.style.display='block'; }, 650);
    } catch(err){
      // fallback: attempt to read value
      try {
        var r2 = await fetch('https://api.countapi.xyz/get/' + encodeURIComponent(namespace) + '/' + encodeURIComponent(key));
        if(r2.ok){ var j2 = await r2.json(); var v = Number(j2.value||0); elValue.textContent = fmt(v); }
        else elValue.textContent = '—';
      } catch(e){ elValue.textContent = '—'; }
      elWrap.classList.remove('loading');
      console.error('Daily counter error', err);
    }
  });
})();