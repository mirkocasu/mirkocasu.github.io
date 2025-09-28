---
layout: page
permalink: /fr/activites-de-recherche/
title: activités de recherche
description: activités de recherche académique incluant conférences, ateliers, numéros spéciaux et engagements scientifiques.
nav: true
nav_order: 3
lang: fr
_styles: >
  /* Mise en page activités de recherche */
  .activites-de-recherche { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; display: flex; flex-direction: column; gap: 2.4rem; }
  .activites-de-recherche .activity-section { display: flex; flex-direction: column; gap: 1.4rem; }
  .activites-de-recherche .section-title { color: #2c6c67; font-weight: 600; border-top: 1px solid rgba(44,108,103,0.4); padding-top: 0.65rem; display: block; font-size: 1.35rem; letter-spacing: 0.02em; text-align: right; margin: 0; width: 100%; align-self: stretch; }
  .activites-de-recherche .activity-list { display: flex; flex-direction: column; gap: 1.2rem; }
  .activites-de-recherche .activity-card { display: flex; gap: 1.2rem; background: transparent; border: none; border-radius: 18px; padding: 1.15rem 0; transition: transform 0.25s ease, box-shadow 0.25s ease; }
  .activites-de-recherche .activity-card:hover { transform: translateY(-3px); box-shadow: none; }
  .activites-de-recherche .activity-side { flex: 0 0 clamp(96px, 14%, 120px); width: clamp(96px, 14%, 120px); max-width: 120px; display: flex; flex-direction: column; align-items: stretch; justify-content: flex-start; gap: 0.55rem; text-align: left; padding-top: 0.145rem; }
  .activites-de-recherche .activity-side > * { align-self: stretch; }
  .activites-de-recherche .activity-tag { display: inline-flex; align-items: center; justify-content: center; width: 100%; padding: 0.22rem 0.55rem; border-radius: 6px !important; font-size: 0.58rem; font-weight: 700; letter-spacing: 0.02em; text-transform: uppercase; color: #fff; text-align: center; line-height: 1.1; }
  .activites-de-recherche .activity-tag--conference { background: #6366f1; }
  .activites-de-recherche .activity-tag--webinar { background: #6366f1; }
  .activites-de-recherche .activity-tag--workshop { background: #ef4444; }
  .activites-de-recherche .activity-tag--school { background: #f97316; }
  .activites-de-recherche .activity-tag--event { background: #0ea5e9; }
  .activites-de-recherche .activity-tag--editorial { background: #8b5cf6; }
  .activites-de-recherche .activity-thumb { width: 100%; max-width: 120px; aspect-ratio: 4 / 3; border-radius: 6px !important; overflow: hidden; background: linear-gradient(135deg, rgba(15,51,44,0.25), rgba(15,23,42,0.2)); display: flex; align-items: center; justify-content: center; }
  .activites-de-recherche .activity-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 6px !important; }
  .activites-de-recherche .activity-date { display: inline-flex; align-items: center; justify-content: center; width: 100%; padding: 0.3rem 0.55rem; border-radius: 6px !important; font-size: 0.58rem; font-weight: 600; background: rgba(15,23,42,0.06); color: #1f2937; text-transform: uppercase; letter-spacing: 0.02em; align-self: flex-start; text-align: center; line-height: 1.1; }
  .activites-de-recherche .activity-body { flex: 1 1 auto; display: flex; flex-direction: column; gap: 0.6rem; }
  .activites-de-recherche .activity-heading { display: flex; justify-content: space-between; gap: 0.75rem; align-items: flex-start; }
  .activites-de-recherche .activity-title { font-size: 1.08rem; font-weight: 680; color: #111827; margin: 0; }
  .activites-de-recherche .activity-meta { display: flex; flex-wrap: wrap; gap: 0.45rem; align-items: center; color: #4b5563; font-size: 0.9rem; }
  .activites-de-recherche .activity-role { background: #272B31; color: #eaf3ff; padding: 0.22rem 0.55rem; border-radius: 6px !important; font-size: 0.58rem; font-weight: 700; letter-spacing: 0.02em; text-transform: uppercase; line-height: 1.1; }
  .activites-de-recherche .activity-role--conference,
  .activites-de-recherche .activity-role--webinar { color: #8488FF; }
  .activites-de-recherche .activity-role--workshop,
  .activites-de-recherche .activity-role--challenge { color: #FF6B6B; }
  .activites-de-recherche .activity-role--school { color: #FF9C45; }
  .activites-de-recherche .activity-role--event { color: #4EC8FF; }
  .activites-de-recherche .activity-role--editorial { color: #B799FF; }
  .activites-de-recherche .activity-description { color: #374151; font-size: 0.9rem; line-height: 1.5; margin: 0; }
  .activites-de-recherche .activity-links { display: flex; flex-wrap: wrap; gap: 0.45rem; }
  .activites-de-recherche .activity-btn { display: inline-flex; align-items: center; justify-content: center; gap: 0.25rem; padding: 0.22rem 0.55rem; border-radius: 6px !important; background: #272B31; color: #43B4A1; font-size: 0.58rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.02em; line-height: 1.1; text-decoration: none; transition: background 0.2s ease, transform 0.2s ease; }
  .activites-de-recherche .activity-btn:hover { background: #1F2228; color: #43B4A1; transform: translateY(-1px); text-decoration: none; }
  .activites-de-recherche .activity-btn.secondary { background: rgba(39,43,49,0.55); color: #43B4A1; }
  .activites-de-recherche .activity-btn.secondary:hover { background: rgba(39,43,49,0.68); color: #43B4A1; }
  .activites-de-recherche a { text-decoration: none; }
  .activites-de-recherche a:hover { text-decoration: underline; }
  @media (max-width: 992px) {
  .activites-de-recherche .activity-card { flex-direction: column; align-items: stretch; gap: 0.9rem; }
  .activites-de-recherche .activity-side { width: 100%; flex-direction: row; flex-wrap: wrap; justify-content: center; align-items: center; gap: 0.75rem; text-align: center; }
  .activites-de-recherche .activity-tag,
  .activites-de-recherche .activity-thumb,
  .activites-de-recherche .activity-date { flex: 0 0 clamp(96px, 33vw, 120px); width: clamp(96px, 33vw, 120px); max-width: 120px; }
  .activites-de-recherche .activity-date { align-self: center; }
  }
  @media (max-width: 640px) {
  .activites-de-recherche .activity-heading { flex-direction: column; align-items: flex-start; gap: 0.4rem; }
  .activites-de-recherche .activity-side { width: 100%; max-width: none; flex: 0 0 100%; flex-direction: column; align-items: stretch; text-align: left; gap: 0.65rem; }
  .activites-de-recherche .activity-tag,
  .activites-de-recherche .activity-thumb,
  .activites-de-recherche .activity-date { width: 100%; max-width: none; flex: 0 0 100%; }
  .activites-de-recherche .activity-thumb { aspect-ratio: 4 / 3; }
  .activites-de-recherche .activity-tag,
  .activites-de-recherche .activity-tag,
  .activites-de-recherche .activity-thumb,
  .activites-de-recherche .activity-date { width: 100%; max-width: none; flex: 0 0 100%; }
  .activites-de-recherche .activity-meta { justify-content: center; align-items: stretch; gap: 0.45rem; text-align: center; }
  .activites-de-recherche .activity-tag,
  .activites-de-recherche .activity-date { display: flex; justify-content: center; align-items: center; text-align: center; width: 100%; max-width: 100%; flex: 0 0 100%; align-self: stretch; margin-inline: 0; }
  .activites-de-recherche .activity-role,
  .activites-de-recherche .activity-btn { width: auto; max-width: 100%; flex: 0 0 auto; align-self: flex-start; }
  .activites-de-recherche .activity-meta { justify-content: flex-start; align-items: center; gap: 0.45rem; text-align: left; }
  .activites-de-recherche .activity-links { width: 100%; justify-content: flex-start; flex-direction: row; flex-wrap: wrap; gap: 0.45rem; }
  .activites-de-recherche .activity-btn:hover { background: rgba(39,43,49,0.92); color: #43B4A1; }
  .activites-de-recherche .activity-btn.secondary { background: rgba(39,43,49,0.5); color: #43B4A1; }
  .activites-de-recherche .activity-btn.secondary:hover { background: rgba(39,43,49,0.62); color: #43B4A1; }
  }
  @media (prefers-color-scheme: dark) {
  .activites-de-recherche .section-title { color: #2c6c67; border-color: rgba(44,108,103,0.6); }
  .activites-de-recherche .activity-card { background: transparent; border: none; box-shadow: none; }
  .activites-de-recherche .activity-thumb { background: linear-gradient(135deg, rgba(77,219,204,0.35), rgba(59,130,246,0.25)); }
    .activites-de-recherche .activity-date { background: rgba(148,163,184,0.18); color: #e2e8f0; }
    .activites-de-recherche .activity-title { color: #f8fafc; }
    .activites-de-recherche .activity-meta { color: #cbd5f5; }
    .activites-de-recherche .activity-description { color: #e2e8f0; }
  .activites-de-recherche .activity-btn { background: rgba(39,43,49,0.8); color: #43B4A1; }
  .activites-de-recherche .activity-btn:hover { background: rgba(39,43,49,0.92); color: #43B4A1; }
  .activites-de-recherche .activity-btn.secondary { background: rgba(39,43,49,0.5); color: #43B4A1; }
  .activites-de-recherche .activity-btn.secondary:hover { background: rgba(39,43,49,0.62); color: #43B4A1; }
  }
---

<div class="activites-de-recherche">
  <!-- Section Conférences et Présentations -->
  <div class="activity-section">
  <h3 class="section-title">conférences & présentations</h3>
    <div class="activity-list">
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Conférence</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/icaisf.webp' | relative_url }}" alt="Visuel d'ICAISF 2025" loading="lazy">
          </div>
          <div class="activity-date">26-27 oct 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">ICAISF 2025</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Scientific Committee</span>
            <span>University of Catania, Istinye University · Catane (Italie)</span>
          </div>
          <p class="activity-description">Membre du Scientific Committee pour ICAISF 2025, the 2nd International Conference on AI and Emerging Technology For Sustainable Future.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://www.icaisf.com/index.html" target="_blank" rel="noopener">icaisf.com</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--webinar">Webinaire</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/digitales.webp' | relative_url }}" alt="Visuel du webinaire DigiTales - Neues zu digitalen Tools für psychische Erkrankungen" loading="lazy">
          </div>
          <div class="activity-date">25 sept 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">DigiTales</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--webinar">Conférencier</span>
          </div>
          <p class="activity-description">Présentateur de la conférence <strong>« Psychedelic Simulation »</strong> lors du webinaire DigiTales - Neues zu digitalen Tools für psychische Erkrankungen, présenté par le Prof. Dr. Steffen Moritz.</p>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Conférence</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/metroxraine24.webp' | relative_url }}" alt="Session poster à IEEE MetroXRAINE 2024" loading="lazy">
          </div>
          <div class="activity-date">21-23 oct 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">IEEE MetroXRAINE 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Présentateur poster &amp; oral</span>
            <span>University of Hertfordshire · St Albans (R.-U.)</span>
          </div>
          <p class="activity-description">Présentateur du poster, présentateur de communication en session orale et coordinateur de la dernière session poster de la conférence internationale IEEE 2024 sur la métrologie pour la réalité étendue, l'intelligence artificielle et le génie neuronal.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://metroxraine.org/metroxraine2024/" target="_blank" rel="noopener">metroxraine2024</a>
          </div>
        </div>
      </div>
        <div class="activity-card">
          <div class="activity-side">
            <span class="activity-tag activity-tag--conference">Congrès</span>
            <div class="activity-thumb">
              <img src="{{ '/assets/img/research_activ_prevs/psicocantiere24.webp' | relative_url }}" alt="Affiche de Psicologia in Cantiere 2024" loading="lazy">
            </div>
            <div class="activity-date">12 oct 2024</div>
          </div>
          <div class="activity-body">
            <div class="activity-heading">
              <h5 class="activity-title">Psicologia in Cantiere 2024</h5>
            </div>
            <div class="activity-meta">
              <span class="activity-role activity-role--conference">Poster Presenter</span>
              <span>Ordine degli Psicologi della Regione Sicilia · Palermo (Italy)</span>
            </div>
            <p class="activity-description">Présentation d'un poster sur la recherche « Impostor Bias » lors de l'événement « Psicologia in Cantiere » (Ecomuseo Mare Memoria Viva, Palerme), en collaboration avec le groupe de travail de psychologie expérimentale.</p>
            <div class="activity-links">
              <a class="activity-btn secondary" href="https://www.oprs.it/evento/psicologia-in-cantiere/" target="_blank" rel="noopener">Event page</a>
            </div>
          </div>
        </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Congrès</span>
          <div class="activity-thumb">
              <img src="{{ '/assets/img/research_activ_prevs/aip24.webp' | relative_url }}" alt="Affiche du AIP Clinical &amp; Dynamic Psychology Congress 2024" loading="lazy">
          </div>
          <div class="activity-date">12-15 sept 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">AIP Clinical &amp; Dynamic Psychology Congress 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Intervenant</span>
            <span>Université de Salerne · Fisciano (Italie)</span>
          </div>
          <p class="activity-description">Présentation du projet de double diagnostic basé sur smartwatch au 24e congrès national de l'AIP, section Psychologie Clinique et Dynamique.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://web.archive.org/web/20241116114405/https://aipclinicadinamica2024.it/" target="_blank" rel="noopener">aipclinicadinamica2024.it (archive)</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Congrès</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/gfn24.webp' | relative_url }}" alt="Présentation au Global Forum on Nicotine 2024" loading="lazy">
          </div>
          <div class="activity-date">13-15 juin 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">Global Forum on Nicotine 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Intervenant</span>
            <span>Global Forum on Nicotine Limited · Varsovie (Pologne)</span>
          </div>
          <p class="activity-description">Présentation de la scoping review actualisée <strong>« Screening of Digital and Mobile Health Technologies for Improving Smoking Detection and Cessation »</strong> au GFN 2024, axée sur la détection du tabagisme via smartwatch alimentés par l'IA dans le cadre du projet Fondazione Samothrace.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://gfn.events/videos/2024/digital-and-mobile-health-innovations-enhancing-smoking-detection-and-cessation/" target="_blank" rel="noopener">Vidéo de la session</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Conférence</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/notobaccoday24.webp' | relative_url }}" alt="Session interactive au No Tobacco Day 2024" loading="lazy">
          </div>
          <div class="activity-date">30 mai 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">No Tobacco Day 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Intervenant</span>
            <span>CoEHAR · Catane (Italie)</span>
          </div>
          <p class="activity-description">Animation d'une session interactive avec les étudiants en présentant le projet <strong>« AI in Action: Pioneering an Algorithm for Smoke-Free Living Through Wearable Tech »</strong>.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://web.archive.org/web/20250114002430/https://www.coehar.it/evento/notobacco-day-2024/" target="_blank" rel="noopener">Détails de l'événement (archive)</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Conférence</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/europedigitalpsy24.webp' | relative_url }}" alt="Affiche de la European Conference of Digital Psychology 2024" loading="lazy">
          </div>
          <div class="activity-date">21-22 mars 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">European Conference of Digital Psychology</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Intervenant</span>
            <span>Sigmund Freud University Milano · Virtual Forum</span>
          </div>
          <p class="activity-description">Présentation de l'étude soutenue par la Fondazione Samothrace <strong>&laquo; AI in Action: Pioneering an Algorithm for Smoke-Free Living through Wearable Tech &raquo;</strong> avec le Pr Pasquale Caponnetto lors du forum virtuel de la 2nd European Conference <strong>&laquo; Psychology and AI: New Horizons &raquo;</strong>.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://digitalpsychology.eu/" target="_blank" rel="noopener">digitalpsychology.eu</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Conférence</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/icann17.webp' | relative_url }}" alt="Affiche d'ICANN 2017" loading="lazy">
          </div>
          <div class="activity-date">11-14 sept 2017</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">ICANN 2017</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Staff d'accueil</span>
            <span>European Neural Network Society (ENNS) · Alghero (Italie)</span>
          </div>
          <p class="activity-description">Soutien à la 26<sup>e</sup> édition de l'International Conference on Artificial Neural Networks (ICANN), la principale conférence européenne sur les réseaux neuronaux artificiels.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://web.archive.org/web/20170911053138/http://www.icann2017.org/" target="_blank" rel="noopener">icann2017.org (archive)</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Section Ateliers & Challenges -->
  <div class="activity-section">
  <h3 class="section-title">ateliers & challenges</h3>
    <div class="activity-list">
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--workshop">Atelier</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/ijcnn25.webp' | relative_url }}" alt="Affiche du VERIMEDIA Workshop 2025" loading="lazy">
          </div>
          <div class="activity-date">30 juin - 5 juil 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">VERIMEDIA Workshop</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--workshop">Speaker</span>
          </div>
          <p class="activity-description">Présentation de <strong>WILD</strong>, un dataset à grande échelle pour l'attribution d'images synthétiques, au VERIMEDIA &mdash; International Workshop on Media Verification and Integrity, intégré à l'International Joint Conference on Neural Networks (IJCNN) 2025.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://2025.ijcnn.org/" target="_blank" rel="noopener">2025.ijcnn.org</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--workshop">Challenge</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/fhda25.webp' | relative_url }}" alt="Affiche du FHDA Challenge 2025" loading="lazy">
          </div>
          <div class="activity-date">25 juin 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">FHDA Challenge</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--workshop">Organisateur</span>
          </div>
          <p class="activity-description">Dirigé et organisé le challenge Forensic Handwritten Document Analysis lors d'IEEE MetroXRAINE 2025, avec Luca Guarnera et le Pr Sebastiano Battiato.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://mfs-iplab.github.io/fhda-challenge/" target="_blank" rel="noopener">Site du challenge</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--workshop">Atelier</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/secondws25.webp' | relative_url }}" alt="Affiche du Second Workshop on Generative AI &amp; Computer Vision" loading="lazy">
          </div>
          <div class="activity-date">11 avr 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">Second Workshop on Generative AI &amp; Computer Vision</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--workshop">Poster Presenter</span>
            <span>University of Catania · Catania (Italy)</span>
          </div>
          <p class="activity-description">Présentation d'un poster sur la recherche « Impostor Bias » (publiée dans <em>Forensic Science International: Digital Investigation</em>) lors du Second Workshop on Generative AI &amp; Computer Vision.</p>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--workshop">Atelier</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/firstws24.webp' | relative_url }}" alt="Affiche du First Workshop on Generative AI &amp; Computer Vision" loading="lazy">
          </div>
          <div class="activity-date">19 mars 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">First Workshop on Generative AI &amp; Computer Vision</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--workshop">Poster Presenter</span>
            <span>University of Catania · Catania (Italy)</span>
          </div>
          <p class="activity-description">Participation au premier workshop dédié à l'IA générative et à la vision par ordinateur sous la direction du Pr Sebastiano Battiato.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Section Écoles d'Été -->
  <div class="activity-section">
  <h3 class="section-title">écoles d'été</h3>
    <div class="activity-list">
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--school">École d'Été</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/ifoss25.webp' | relative_url }}" alt="Affiche d'IFOSS 2025" loading="lazy">
          </div>
          <div class="activity-date">13-19 juil 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">IFOSS 2025</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--school">Participant &amp; Staff Member</span>
            <span>University of Catania, Milan, Foggia · Punta Sampieri (Italie)</span>
          </div>
          <p class="activity-description">Participation, présentation de poster et membre du staff lors de la quatrième édition d'IFOSS – International Forensics Summer School.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://web.archive.org/web/20250604114252/https://www.ifoss.it/" target="_blank" rel="noopener">ifoss.it (archive)</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--school">École d'Été</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/ifoss24.webp' | relative_url }}" alt="Affiche d'IFOSS 2024" loading="lazy">
          </div>
          <div class="activity-date">14-20 juil 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">IFOSS 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--school">Participant &amp; Staff Member</span>
            <span>University of Catania, Milan, Foggia · Punta Sampieri (Italie)</span>
          </div>
          <p class="activity-description">Participation, présentation de poster et soutien logistique à la troisième édition d'IFOSS – International Forensics Summer School.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://web.archive.org/web/20240602130323/https://www.ifoss.it/" target="_blank" rel="noopener">ifoss.it (archive)</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Section Autres Événements -->
  <div class="activity-section">
  <h3 class="section-title">autres événements</h3>
    <div class="activity-list">
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--event">Événement</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/sharper25.webp' | relative_url }}" alt="Affiche de SHARPER Night 2025" loading="lazy">
          </div>
          <div class="activity-date">26 sept 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">SHARPER Night 2025</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--event">Demonstrator</span>
            <span>Catania (Italy)</span>
          </div>
          <p class="activity-description">Participation à SHARPER Night 2025 avec le stand DMI.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://web.dmi.unict.it/it/notizie/dmi-alla-sharper-night-2025" target="_blank" rel="noopener">Page de l'événement</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--event">Événement</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/wmf25.webp' | relative_url }}" alt="Affiche de We Make Future 2025" loading="lazy">
          </div>
          <div class="activity-date">4-6 juin 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">We Make Future 2025</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--event">Demonstrator</span>
            <span>Third Mission Area · Bologna (Italy)</span>
          </div>
          <p class="activity-description">Présentation des projets sur la détection du tabagisme basée sur l'IA et le biais de l'imposteur en authentification multimédia lors de la plus grande foire italienne de l'innovation.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://www.wemakefuture.it/2025/programma/" target="_blank" rel="noopener">Programme</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--event">Événement</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/welcomephd24.webp' | relative_url }}" alt="Affiche de Welcome Ph.D. Day 2024" loading="lazy">
          </div>
          <div class="activity-date">9 déc 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">Welcome Ph.D. Day 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--event">Poster Presenter</span>
            <span>University of Catania · Catania (Italy)</span>
          </div>
          <p class="activity-description">Présentation d'un poster sur « Impostor Bias » lors de la session poster inaugurale du Welcome Ph.D. Day.</p>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--event">Événement</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/sharper24.webp' | relative_url }}" alt="Affiche de SHARPER Night 2024" loading="lazy">
          </div>
          <div class="activity-date">27 sept 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">SHARPER Night 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--event">Demonstrator</span>
            <span>Catania (Italy)</span>
          </div>
          <p class="activity-description">Participation à SHARPER Night 2024 sur le stand DMI &laquo; Images and Smart Cities &raquo;, présentant une démo VR (Meta Quest 3) intégrée aux montres Empatica EmbracePlus pour susciter et surveiller les réactions psychophysiologiques à des phobies telles que l'acrophobie et la claustrophobie.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://www.sharper-night.it/evento/computer-vision-per-smart-cities/" target="_blank" rel="noopener">Page de l'événement</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--event">Événement</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/didacta23.webp' | relative_url }}" alt="Affiche de Didacta Italia – Sicilian Edition" loading="lazy">
          </div>
          <div class="activity-date">12-14 oct 2023</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">Didacta Italia – Sicilian Edition</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--event">Demonstrator</span>
            <span>Ordine degli Psicologi della Sicilia · Catania (Italy)</span>
          </div>
          <p class="activity-description">Représenté l'Ordine degli Psicologi della Sicilia au sein du pavillon régional durant la principale foire italienne de l'éducation, Didacta.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://fieradidacta.indire.it/it/didacta-sicilia-2023/" target="_blank" rel="noopener">Page de l'événement</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Section Travail Éditorial -->
  <div class="activity-section">
  <h3 class="section-title">travail éditorial</h3>
    <div class="activity-list">
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--editorial">Special Issue</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/digprog.webp' | relative_url }}" alt="Visuel du numéro spécial Digital Health Innovations &amp; Psychological Well-being" loading="lazy">
          </div>
          <div class="activity-date">31 août 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">Special Issue on Digital Health Innovations &amp; Psychological Well-being</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--editorial">Guest Editor</span>
          </div>
          <p class="activity-description">Rédacteur invité et académique du numéro spécial "Digital Health Innovations in the Battle Against Psychological Problems: Progress, Hurdles, and Prospects", publié dans la revue "Exploration of Digital Health Technologies" (Open Exploration).</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://www.explorationpub.com/Journals/edht/Special_Issues/287" target="_blank" rel="noopener">Numéro spécial</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
