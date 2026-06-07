// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research-activities",
          title: "research activities",
          description: "academic research activities including conferences, workshops, special issues, and scholarly engagements.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research-activities/";
          },
        },{id: "news-at-we-make-future-2025-in-bologna-i-represented-the-university-of-catania-and-coehar-presenting-projects-on-ai-based-smoking-detection-and-impostor-bias-in-multimedia-authentication",
          title: 'At We Make Future 2025 in Bologna, I represented the University of Catania...',
          description: "",
          section: "News",},{id: "news-i-have-reached-200-citations-on-google-scholar-with-an-h-index-of-6",
          title: 'I have reached 200 citations on Google Scholar, with an h-index of 6....',
          description: "",
          section: "News",},{id: "news-closing-of-the-fhda-challenge-at-metroxraine-2025-organized-by-me-luca-guarnera-and-prof-sebastiano-battiato-with-publication-of-final-rankings",
          title: 'Closing of the FHDA Challenge at MetroXRAINE 2025, organized by me, Luca Guarnera,...',
          description: "",
          section: "News",},{id: "news-at-the-verimedia-workshop-at-ijcnn-2025-we-presented-our-wild-project-a-large-dataset-for-synthetic-image-attribution",
          title: 'At the VERIMEDIA workshop at IJCNN 2025, we presented our WILD project, a...',
          description: "",
          section: "News",},{id: "news-i-participated-in-the-international-forensics-summer-school-ifoss-2025-held-from-july-13-to-19-2025-at-hotel-village-baia-samuele-punta-sampieri-scicli-ragusa-sicily",
          title: 'I participated in the International Forensics Summer School (IFOSS 2025), held from July...',
          description: "",
          section: "News",},{id: "news-closing-of-our-special-issue-digital-innovations-in-health-in-the-fight-against-psychological-problems-progress-obstacles-and-prospects-published-in-exploration-of-digital-health-technologies-open-exploration-with-four-articles-inside",
          title: 'Closing of our special issue Digital innovations in health in the fight against...',
          description: "",
          section: "News",},{id: "news-a-mid-journey-through-reality-has-been-published-in-human-behavior-and-emerging-technologies",
          title: 'A (Mid)Journey Through Reality has been published in Human Behavior and Emerging Technologies....',
          description: "",
          section: "News",},{id: "news-i-had-the-pleasure-of-presenting-my-talk-on-psychedelic-simulation-at-digitales-hosted-by-prof-dr-steffen-moritz",
          title: 'I had the pleasure of presenting my talk on Psychedelic Simulation at DigiTales,...',
          description: "",
          section: "News",},{id: "news-i-started-a-visiting-research-period-at-epfl-under-the-supervision-of-prof-andrea-cavallaro-at-the-mints-lab",
          title: 'I started a visiting research period at EPFL, under the supervision of Prof....',
          description: "",
          section: "News",},{id: "news-co-chaired-the-dff-2025-workshop-and-served-on-the-aadd-2025-dataset-committee-at-acm-multimedia-2025",
          title: 'Co-chaired the DFF-2025 workshop and served on the AADD-2025 dataset committee at ACM...',
          description: "",
          section: "News",},{id: "news-digital-technologies-and-artificial-intelligence-in-eating-disorders-has-been-published-in-computers-in-human-behavior-reports",
          title: 'Digital technologies and artificial intelligence in eating disorders has been published in Computers...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%72%6B%6F.%63%61%73%75@%70%68%64.%75%6E%69%63%74.%69%74", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=zpZZ3X4AAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/m1rkocasu", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mirkocasu", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
