// Has to be in the head tag, otherwise a flicker effect will occur.

// Toggle through light, dark, and system theme settings.
// Single-mode: force dark only.
let setThemeSetting = (themeSetting) => {
  // Store explicitly as dark and apply.
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme-setting", "dark");
  applyTheme();
};

// Apply the computed dark or light theme to the website.
let applyTheme = () => {
  let theme = determineComputedTheme();

  transTheme();
  setHighlight(theme);
  setGiscusTheme(theme);
  setSearchTheme(theme);

  // if mermaid is not defined, do nothing
  if (typeof mermaid !== "undefined") {
    setMermaidTheme(theme);
  }

  // if diff2html is not defined, do nothing
  if (typeof Diff2HtmlUI !== "undefined") {
    setDiff2htmlTheme(theme);
  }

  // if echarts is not defined, do nothing
  if (typeof echarts !== "undefined") {
    setEchartsTheme(theme);
  }

  // if vegaEmbed is not defined, do nothing
  if (typeof vegaEmbed !== "undefined") {
    setVegaLiteTheme(theme);
  }

  document.documentElement.setAttribute("data-theme", theme);

  // Add class to tables.
  let tables = document.getElementsByTagName("table");
  for (let i = 0; i < tables.length; i++) {
    if (theme == "dark") {
      tables[i].classList.add("table-dark");
    } else {
      tables[i].classList.remove("table-dark");
    }
  }

  // Set jupyter notebooks themes.
  let jupyterNotebooks = document.getElementsByClassName("jupyter-notebook-iframe-container");
  for (let i = 0; i < jupyterNotebooks.length; i++) {
    let bodyElement = jupyterNotebooks[i].getElementsByTagName("iframe")[0].contentWindow.document.body;
    if (theme == "dark") {
      bodyElement.setAttribute("data-jp-theme-light", "false");
      bodyElement.setAttribute("data-jp-theme-name", "JupyterLab Dark");
    } else {
      bodyElement.setAttribute("data-jp-theme-light", "true");
      bodyElement.setAttribute("data-jp-theme-name", "JupyterLab Light");
    }
  }

  // Updates the background of medium-zoom overlay.
  if (typeof medium_zoom !== "undefined") {
    medium_zoom.update({
      background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
    });
  }
};

let setHighlight = (theme) => {
  const highlightThemeLight = document.getElementById("highlight_theme_light");
  const highlightThemeDark = document.getElementById("highlight_theme_dark");

  if (!highlightThemeLight || !highlightThemeDark) {
    return;
  }

  if (theme == "dark") {
    highlightThemeLight.media = "none";
    highlightThemeDark.media = "";
  } else {
    highlightThemeDark.media = "none";
    highlightThemeLight.media = "";
  }
};

let setGiscusTheme = (theme) => {
  function sendMessage(message) {
    const iframe = document.querySelector("iframe.giscus-frame");
    if (!iframe) return;
    iframe.contentWindow.postMessage({ giscus: message }, "https://giscus.app");
  }

  sendMessage({
    setConfig: {
      theme: theme,
    },
  });
};

let addMermaidZoom = (records, observer) => {
  var svgs = d3.selectAll(".mermaid svg");
  svgs.each(function () {
    var svg = d3.select(this);
    svg.html("<g>" + svg.html() + "</g>");
    var inner = svg.select("g");
    var zoom = d3.zoom().on("zoom", function (event) {
      inner.attr("transform", event.transform);
    });
    svg.call(zoom);
  });
  observer.disconnect();
};

let setMermaidTheme = (theme) => {
  if (theme == "light") {
    // light theme name in mermaid is 'default'
    // https://mermaid.js.org/config/theming.html#available-themes
    theme = "default";
  }

  /* Re-render the SVG, based on https://github.com/cotes2020/jekyll-theme-chirpy/blob/master/_includes/mermaid.html */
  document.querySelectorAll(".mermaid").forEach((elem) => {
    // Get the code block content from previous element, since it is the mermaid code itself as defined in Markdown, but it is hidden
    let svgCode = elem.previousSibling.childNodes[0].innerHTML;
    elem.removeAttribute("data-processed");
    elem.innerHTML = svgCode;
  });

  mermaid.initialize({ theme: theme });
  window.mermaid.init(undefined, document.querySelectorAll(".mermaid"));

  const observable = document.querySelector(".mermaid svg");
  if (observable !== null) {
    var observer = new MutationObserver(addMermaidZoom);
    const observerOptions = { childList: true };
    observer.observe(observable, observerOptions);
  }
};

let setDiff2htmlTheme = (theme) => {
  document.querySelectorAll(".diff2html").forEach((elem) => {
    // Get the code block content from previous element, since it is the diff code itself as defined in Markdown, but it is hidden
    let textData = elem.previousSibling.childNodes[0].innerHTML;
    elem.innerHTML = "";
    const configuration = { colorScheme: theme, drawFileList: true, highlight: true, matching: "lines" };
    const diff2htmlUi = new Diff2HtmlUI(elem, textData, configuration);
    diff2htmlUi.draw();
  });
};

let setEchartsTheme = (theme) => {
  document.querySelectorAll(".echarts").forEach((elem) => {
    // Get the code block content from previous element, since it is the echarts code itself as defined in Markdown, but it is hidden
    let jsonData = elem.previousSibling.childNodes[0].innerHTML;
    echarts.dispose(elem);

    if (theme === "dark") {
      var chart = echarts.init(elem, "dark-fresh-cut");
    } else {
      var chart = echarts.init(elem);
    }

    chart.setOption(JSON.parse(jsonData));
  });
};

let setVegaLiteTheme = (theme) => {
  document.querySelectorAll(".vega-lite").forEach((elem) => {
    // Get the code block content from previous element, since it is the vega lite code itself as defined in Markdown, but it is hidden
    let jsonData = elem.previousSibling.childNodes[0].innerHTML;
    elem.innerHTML = "";
    if (theme === "dark") {
      vegaEmbed(elem, JSON.parse(jsonData), { theme: "dark" });
    } else {
      vegaEmbed(elem, JSON.parse(jsonData));
    }
  });
};

let setSearchTheme = (theme) => {
  const ninjaKeys = document.querySelector("ninja-keys");
  if (!ninjaKeys) return;

  if (theme === "dark") {
    ninjaKeys.classList.add("dark");
  } else {
    ninjaKeys.classList.remove("dark");
  }
};

let transTheme = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 500);
};

// Determine the expected state of the theme toggle, which can be "dark", "light", or
// "system". Default is "system".
let determineThemeSetting = () => {
  let themeSetting = localStorage.getItem("theme");
  if (themeSetting != "dark" && themeSetting != "light" && themeSetting != "system") {
    themeSetting = "system";
  }
  return themeSetting;
};

// Determine the computed theme, which can be "dark" or "light". If the theme setting is
// "system", the computed theme is determined based on the user's system preference.
let determineComputedTheme = () => {
  let themeSetting = determineThemeSetting();
  if (themeSetting == "system") {
    const userPref = window.matchMedia;
    if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  } else {
    return themeSetting;
  }
};

let initTheme = () => {
  // Always set dark mode.
  setThemeSetting("dark");
};

// Apply custom-button class to publication action links generated by Distill/Distillpub
// This ensures buttons (ABS/HTML/PDF/DOI/Poster) receive the fumetto styling even when
// they are injected by client-side scripts.
let applyCustomButtonClassToPublications = () => {
  const selectors = [".publications .links a", ".publications .list-group-item a", ".publications ol.bibliography li .links a.btn"];

  const layoutPublicationMobileActions = () => {
    const isMobile = window.matchMedia("(max-width: 575.98px)").matches;

    document.querySelectorAll(".publications ol.bibliography li").forEach((item) => {
      const mobileHost = item.querySelector(".publication-mobile-actions");
      const desktopHost = item.querySelector(".publication-desktop-actions");
      const mobileDetailsHost = item.querySelector(".publication-mobile-details-host");
      const desktopDetailsHost = item.querySelector(".publication-details-desktop-host");
      const hiddenContent = item.querySelector(".publication-hidden-content");
      const links = item.querySelector(".links");
      const badges = item.querySelector(".badges");

      if (!mobileHost || !desktopHost) {
        return;
      }

      const targetHost = isMobile ? mobileHost : desktopHost;

      if (links && links.parentElement !== targetHost) {
        targetHost.appendChild(links);
      }

      if (badges && badges.parentElement !== targetHost) {
        targetHost.appendChild(badges);
      }

      if (mobileDetailsHost && desktopDetailsHost && hiddenContent) {
        const detailsTargetHost = isMobile ? mobileDetailsHost : desktopDetailsHost;

        if (hiddenContent.parentElement !== detailsTargetHost) {
          detailsTargetHost.appendChild(hiddenContent);
        }
      }
    });
  };

  const applyClass = () => {
    selectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        if (!el.classList.contains("custom-button")) {
          el.classList.add("custom-button");
        }
      });
    });

    layoutPublicationMobileActions();
  };

  // Run once now, and again after DOMContentLoaded to catch late-inserted elements.
  try {
    applyClass();
  } catch (e) {}
  document.addEventListener("DOMContentLoaded", () => {
    applyClass();
    // Also observe the publications list for mutations (some elements are injected later)
    const pub = document.querySelector(".publications");
    if (!pub) return;
    const obs = new MutationObserver((mutations) => {
      applyClass();
    });
    obs.observe(pub, { childList: true, subtree: true });
  });

  window.addEventListener("resize", () => {
    window.requestAnimationFrame(() => {
      applyClass();
    });
  });
};

let layoutResearchActivityMobilePills = () => {
  const isMobile = window.matchMedia("(max-width: 992px)").matches;

  document.querySelectorAll(".research-activities .activity-card").forEach((item) => {
    const side = item.querySelector(".activity-side");
    const role = item.querySelector(".activity-meta .activity-role");
    const links = item.querySelector(".activity-links");

    if (!side) {
      return;
    }

    let mobileHost = item.querySelector(".activity-mobile-pills");
    if (!mobileHost) {
      mobileHost = document.createElement("div");
      mobileHost.className = "activity-mobile-pills";
      side.appendChild(mobileHost);
    }

    if (role && !item.querySelector(".activity-role-placeholder")) {
      const rolePlaceholder = document.createElement("span");
      rolePlaceholder.className = "activity-role-placeholder";
      rolePlaceholder.hidden = true;
      role.parentElement.insertBefore(rolePlaceholder, role);
    }

    if (links && !item.querySelector(".activity-links-placeholder")) {
      const linksPlaceholder = document.createElement("span");
      linksPlaceholder.className = "activity-links-placeholder";
      linksPlaceholder.hidden = true;
      links.parentElement.insertBefore(linksPlaceholder, links);
    }

    const rolePlaceholder = item.querySelector(".activity-role-placeholder");
    const linksPlaceholder = item.querySelector(".activity-links-placeholder");

    if (isMobile) {
      if (role && role.parentElement !== mobileHost) {
        mobileHost.appendChild(role);
      }

      if (links && links.parentElement !== mobileHost) {
        mobileHost.appendChild(links);
      }
      return;
    }

    if (role && rolePlaceholder && role.parentElement !== rolePlaceholder.parentElement) {
      rolePlaceholder.after(role);
    }

    if (links && linksPlaceholder && links.parentElement !== linksPlaceholder.parentElement) {
      linksPlaceholder.after(links);
    }
  });
};

// Initialize theme and then apply custom-button wiring
initTheme();
applyCustomButtonClassToPublications();
layoutResearchActivityMobilePills();

document.addEventListener("DOMContentLoaded", () => {
  layoutResearchActivityMobilePills();

  const activities = document.querySelector(".research-activities");
  if (!activities) return;

  const obs = new MutationObserver(() => {
    layoutResearchActivityMobilePills();
  });

  obs.observe(activities, { childList: true, subtree: true });
});

window.addEventListener("resize", () => {
  window.requestAnimationFrame(() => {
    layoutResearchActivityMobilePills();
  });
});
