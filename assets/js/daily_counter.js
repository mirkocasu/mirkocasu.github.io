(function(){
  function fmt(n){ try { return n.toLocaleString(); } catch(e){ return String(n); } }
  document.addEventListener('DOMContentLoaded', async function(){
    var el = document.getElementById('daily-counter-value');
    if(!el) return;
    // Use hostname-based namespace so it works for all localizations
    var host = (location.hostname || 'site').replace(/\./g,'-').replace(/:/g,'-');
    var today = new Date().toISOString().slice(0,10); // YYYY-MM-DD
    var namespace = 'site-' + host;
    var key = 'visits-' + today;

    // Try to increment the counter (creates key if missing)
    try {
      var r = await fetch('https://api.countapi.xyz/hit/' + encodeURIComponent(namespace) + '/' + encodeURIComponent(key), {method: 'GET'});
      if(!r.ok) throw new Error('Network');
      var json = await r.json();
      el.textContent = fmt(json.value || 0);
    } catch(err) {
      // fallback: try to just read current value
      try {
        var r2 = await fetch('https://api.countapi.xyz/get/' + encodeURIComponent(namespace) + '/' + encodeURIComponent(key));
        if(r2.ok){
          var j2 = await r2.json();
          el.textContent = fmt(j2.value || 0);
        } else {
          el.textContent = '—';
        }
      } catch(e){ el.textContent = '—'; }
      console.error('Daily counter error', err);
    }
  });
})();