(function () {
  function loadStats() {
    return fetch("/_data/author_stats.json")
      .then(function (r) {
        if (!r.ok) throw new Error("not found");
        return r.json();
      })
      .catch(function () {
        // as a fallback, read values rendered into the DOM by Jekyll
        var stats = {};
        var v = document.querySelector("#author-metrics .metric .metric-value");
        stats.semantic_scholar = {
          citations: v ? parseInt(v.textContent.trim().replace(/,/g, "")) : 0,
          h_index: 0,
          papers: 0,
        };
        return Promise.resolve(stats);
      });
  }

  function renderBar(stats) {
    var ctx = document.getElementById("citations-chart");
    if (!ctx) return;
    var ss = stats.semantic_scholar || {};
    var labels = ["Citations", "h-index", "Papers"];
    var data = [ss.citations || 0, ss.h_index || 0, ss.papers || 0];
    new Chart(ctx, {
      type: "bar",
      data: { labels: labels, datasets: [{ label: "Semantic Scholar", data: data, backgroundColor: ["#43BEAA", "#8AB4FF", "#C084FC"] }] },
      options: { responsive: true, plugins: { legend: { display: false } } },
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    loadStats()
      .then(function (stats) {
        renderBar(stats);
      })
      .catch(function (e) {
        console.warn("author_metrics: could not load stats", e);
      });
  });
})();
