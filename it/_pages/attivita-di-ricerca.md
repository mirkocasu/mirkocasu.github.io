---
layout: page
permalink: /it/attivita-di-ricerca/
title: attività di ricerca
description: attività di ricerca accademica inclusi conferenze, workshop, special issue e impegni scientifici.
nav: true
nav_order: 3
lang: it
_styles: >
  /* Layout attività di ricerca */
  .attivita-di-ricerca { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; display: flex; flex-direction: column; gap: 2.4rem; }
  .attivita-di-ricerca .activity-section { display: flex; flex-direction: column; gap: 1.4rem; }
  .attivita-di-ricerca .section-title { color: #2c6c67; font-weight: 600; border-top: 1px solid rgba(44,108,103,0.4); padding-top: 0.65rem; display: block; font-size: 1.35rem; letter-spacing: 0.02em; text-align: right; margin: 0; width: 100%; align-self: stretch; }
  .attivita-di-ricerca .activity-list { display: flex; flex-direction: column; gap: 1.2rem; }
  .attivita-di-ricerca .activity-card { display: flex; gap: 1.2rem; background: transparent; border: none; border-radius: 18px; padding: 1.15rem 0; transition: transform 0.25s ease, box-shadow 0.25s ease; }
  .attivita-di-ricerca .activity-card:hover { transform: translateY(-3px); box-shadow: none; }
  .attivita-di-ricerca .activity-side { flex: 0 0 clamp(96px, 14%, 120px); width: clamp(96px, 14%, 120px); max-width: 120px; display: flex; flex-direction: column; align-items: stretch; justify-content: flex-start; gap: 0.55rem; text-align: left; padding-top: 0.145rem; }
  .attivita-di-ricerca .activity-side > * { align-self: stretch; }
  .attivita-di-ricerca .activity-tag { display: inline-flex; align-items: center; justify-content: center; width: 100%; padding: 0.22rem 0.55rem; border-radius: 6px !important; font-size: 0.58rem; font-weight: 700; letter-spacing: 0.02em; text-transform: uppercase; color: #fff; text-align: center; line-height: 1.1; }
  .attivita-di-ricerca .activity-tag--conference { background: #6366f1; }
  .attivita-di-ricerca .activity-tag--webinar { background: #6366f1; }
  .attivita-di-ricerca .activity-tag--workshop { background: #ef4444; }
  .attivita-di-ricerca .activity-tag--school { background: #f97316; }
  .attivita-di-ricerca .activity-tag--event { background: #0ea5e9; }
  .attivita-di-ricerca .activity-tag--editorial { background: #8b5cf6; }
  .attivita-di-ricerca .activity-thumb { width: 100%; max-width: 120px; aspect-ratio: 4 / 3; border-radius: 6px !important; overflow: hidden; background: linear-gradient(135deg, rgba(15,51,44,0.25), rgba(15,23,42,0.2)); display: flex; align-items: center; justify-content: center; }
  .attivita-di-ricerca .activity-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 6px !important; }
  .attivita-di-ricerca .activity-date { display: inline-flex; align-items: center; justify-content: center; width: 100%; padding: 0.3rem 0.55rem; border-radius: 6px !important; font-size: 0.58rem; font-weight: 600; background: rgba(15,23,42,0.06); color: #1f2937; text-transform: uppercase; letter-spacing: 0.02em; align-self: flex-start; text-align: center; line-height: 1.1; }
  .attivita-di-ricerca .activity-body { flex: 1 1 auto; display: flex; flex-direction: column; gap: 0.6rem; }
  .attivita-di-ricerca .activity-heading { display: flex; justify-content: space-between; gap: 0.75rem; align-items: flex-start; }
  .attivita-di-ricerca .activity-title { font-size: 1.08rem; font-weight: 680; color: #111827; margin: 0; }
  .attivita-di-ricerca .activity-meta { display: flex; flex-wrap: wrap; gap: 0.45rem; align-items: center; color: #4b5563; font-size: 0.9rem; }
  .attivita-di-ricerca .activity-role { background: #272B31; color: #eaf3ff; padding: 0.22rem 0.55rem; border-radius: 6px !important; font-size: 0.58rem; font-weight: 700; letter-spacing: 0.02em; text-transform: uppercase; line-height: 1.1; }
  .attivita-di-ricerca .activity-role--conference,
  .attivita-di-ricerca .activity-role--webinar { color: #8488FF; }
  .attivita-di-ricerca .activity-role--workshop,
  .attivita-di-ricerca .activity-role--challenge { color: #FF6B6B; }
  .attivita-di-ricerca .activity-role--school { color: #FF9C45; }
  .attivita-di-ricerca .activity-role--event { color: #4EC8FF; }
  .attivita-di-ricerca .activity-role--editorial { color: #B799FF; }
  .attivita-di-ricerca .activity-description { color: #374151; font-size: 0.9rem; line-height: 1.5; margin: 0; }
  .attivita-di-ricerca .activity-links { display: flex; flex-wrap: wrap; gap: 0.45rem; }
  .attivita-di-ricerca .activity-btn { display: inline-flex; align-items: center; justify-content: center; gap: 0.25rem; padding: 0.22rem 0.55rem; border-radius: 6px !important; background: #272B31; color: #43B4A0; font-size: 0.58rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.02em; line-height: 1.1; text-decoration: none; transition: background 0.2s ease, transform 0.2s ease; }
  .attivita-di-ricerca .activity-btn:hover { background: #1F2228; color: #43B4A0; transform: translateY(-1px); text-decoration: none; }
  .attivita-di-ricerca .activity-btn.secondary { background: rgba(39,43,49,0.55); color: #43B4A0; }
  .attivita-di-ricerca .activity-btn.secondary:hover { background: rgba(39,43,49,0.68); color: #43B4A0; }
  .attivita-di-ricerca a { text-decoration: none; }
  .attivita-di-ricerca a:hover { text-decoration: underline; }
  @media (max-width: 992px) {
  .attivita-di-ricerca .activity-card { flex-direction: column; align-items: stretch; gap: 0.9rem; }
  .attivita-di-ricerca .activity-side { width: 100%; flex-direction: row; flex-wrap: wrap; justify-content: center; align-items: center; gap: 0.75rem; text-align: center; }
  .attivita-di-ricerca .activity-tag,
  .attivita-di-ricerca .activity-thumb,
  .attivita-di-ricerca .activity-date { flex: 0 0 clamp(96px, 33vw, 120px); width: clamp(96px, 33vw, 120px); max-width: 120px; }
  .attivita-di-ricerca .activity-date { align-self: center; }
  }
  @media (max-width: 640px) {
  .attivita-di-ricerca .activity-heading { flex-direction: column; align-items: flex-start; gap: 0.4rem; }
  .attivita-di-ricerca .activity-side { width: 100%; max-width: none; flex: 0 0 100%; flex-direction: column; align-items: stretch; text-align: left; gap: 0.65rem; }
  .attivita-di-ricerca .activity-tag,
  .attivita-di-ricerca .activity-thumb,
  .attivita-di-ricerca .activity-date { width: 100%; max-width: none; flex: 0 0 100%; }
  .attivita-di-ricerca .activity-thumb { aspect-ratio: 4 / 3; }
  .attivita-di-ricerca .activity-tag,
  .attivita-di-ricerca .activity-date { display: flex; justify-content: center; align-items: center; text-align: center; width: 100%; max-width: 100%; flex: 0 0 100%; align-self: stretch; margin-inline: 0; }
  .attivita-di-ricerca .activity-role,
  .attivita-di-ricerca .activity-btn { width: auto; max-width: 100%; flex: 0 0 auto; align-self: flex-start; }
  .attivita-di-ricerca .activity-meta { justify-content: flex-start; align-items: center; gap: 0.45rem; text-align: left; }
  .attivita-di-ricerca .activity-links { width: 100%; justify-content: flex-start; flex-direction: row; flex-wrap: wrap; gap: 0.45rem; }
  }
  @media (prefers-color-scheme: dark) {
  .attivita-di-ricerca .section-title { color: #2c6c67; border-color: rgba(44,108,103,0.6); }
  .attivita-di-ricerca .activity-card { background: transparent; border: none; box-shadow: none; }
  .attivita-di-ricerca .activity-thumb { background: linear-gradient(135deg, rgba(77,219,204,0.35), rgba(59,130,246,0.25)); }
    .attivita-di-ricerca .activity-date { background: rgba(148,163,184,0.18); color: #e2e8f0; }
    .attivita-di-ricerca .activity-title { color: #f8fafc; }
    .attivita-di-ricerca .activity-meta { color: #cbd5f5; }
    .attivita-di-ricerca .activity-description { color: #e2e8f0; }
  .attivita-di-ricerca .activity-btn { background: rgba(39,43,49,0.8); color: #43B4A0; }
  .attivita-di-ricerca .activity-btn:hover { background: rgba(39,43,49,0.92); color: #43B4A0; }
  .attivita-di-ricerca .activity-btn.secondary { background: rgba(39,43,49,0.5); color: #43B4A0; }
  .attivita-di-ricerca .activity-btn.secondary:hover { background: rgba(39,43,49,0.62); color: #43B4A0; }
  }
---

<div class="attivita-di-ricerca">
  <!-- Sezione Conferenze e Talk -->
  <div class="activity-section">
  <h3 class="section-title">conferenze & talk</h3>
    <div class="activity-list">
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Conferenza</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/icaisf.webp' | relative_url }}" alt="Copertina di ICAISF-2025" loading="lazy">
          </div>
          <div class="activity-date">19-20 dic 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">ICAISF-2025</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Scientific Committee</span>
            <span>University of Catania, Istinye University · Catania (Italia)</span>
          </div>
          <p class="activity-description">Membro dello Scientific Committee per ICAISF 2025, la 2nd International Conference on AI and Emerging Technology For Sustainable Future.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://www.icaisf.com/index.html" target="_blank" rel="noopener">icaisf.com</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Conferenza</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/acmmm25.webp' | relative_url }}" alt="Copertina di ACM Multimedia 2025" loading="lazy">
          </div>
          <div class="activity-date">27-31 ott 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">ACM Multimedia 2025</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Track Co-Chair &amp; Comitato dataset</span>
            <span>ACM SIGMM · Dublino (Irlanda)</span>
          </div>
          <p class="activity-description">Partecipazione come track co-chair per il <strong>DFF-2025 Workshop</strong> (Deepfake Forensics) e come membro del comitato dataset per il <strong>AADD-2025 Grand Challenge</strong> (Adversarial Attacks on Deepfake Detectors).</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://acmmm2025.org/" target="_blank" rel="noopener">acmmm2025.org</a>
            <a class="activity-btn secondary" href="https://dl.acm.org/doi/abs/10.1145/3746027.3762241" target="_blank" rel="noopener">DFF-2025</a>
            <a class="activity-btn secondary" href="https://dl.acm.org/doi/10.1145/3746027.3761983" target="_blank" rel="noopener">AADD-2025</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--webinar">Webinar</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/digitales.webp' | relative_url }}" alt="Copertina del webinar DigiTales" loading="lazy">
          </div>
          <div class="activity-date">25 set 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">DigiTales</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--webinar">Relatore</span>
          </div>
          <p class="activity-description">Presentatore del talk <strong>"Psychedelic Simulation"</strong> al webinar DigiTales - Neues zu digitalen Tools für psychische Erkrankungen, presentato dal Prof. Dr. Steffen Moritz.</p>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Conferenza</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/metroxraine24.webp' | relative_url }}" alt="Sessione poster a IEEE MetroXRAINE 2024" loading="lazy">
          </div>
          <div class="activity-date">21-23 ott 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">IEEE MetroXRAINE 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Presentatore poster &amp; orale</span>
            <span>University of Hertfordshire · St Albans (UK)</span>
          </div>
          <p class="activity-description">Presentatore del poster, presentatore dell'articolo in sessione orale e coordinatore dell'ultima sessione poster della 2024 IEEE International Conference on Metrology for eXtended Reality, Artificial Intelligence and Neural Engineering.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://metroxraine.org/metroxraine2024/" target="_blank" rel="noopener">metroxraine2024</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Congresso</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/psicocantiere24.webp' | relative_url }}" alt="Copertina di Psicologia in Cantiere 2024" loading="lazy">
          </div>
          <div class="activity-date">12 ott 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">Psicologia in Cantiere 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Poster Presenter</span>
            <span>Ordine degli Psicologi della Regione Sicilia · Palermo (Italy)</span>
          </div>
          <p class="activity-description">Presentato un poster sulla ricerca "Impostor Bias" durante l'evento "Psicologia in Cantiere" (Ecomuseo Mare Memoria Viva, Palermo), in collaborazione con il Gruppo di Lavoro di Psicologia Sperimentale.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://www.oprs.it/evento/psicologia-in-cantiere/" target="_blank" rel="noopener">Event page</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Congresso</span>
          <div class="activity-thumb">
                <img src="{{ '/assets/img/research_activ_prevs/aip24.webp' | relative_url }}" alt="Copertina di AIP Clinical &amp; Dynamic Psychology Congress 2024" loading="lazy">
          </div>
          <div class="activity-date">12-15 set 2024</div>
        </div>
        <div class="activity-body">
              <div class="activity-heading">
                   <h5 class="activity-title">AIP Clinical &amp; Dynamic Psychology Congress 2024</h5>
              </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Relatore</span>
            <span>Università di Salerno · Fisciano (Italia)</span>
          </div>
          <p class="activity-description">Presentato il progetto di doppia diagnosi basato su smartwatch al 24° Congresso Nazionale AIP della Sezione di Psicologia Clinica e Dinamica.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://web.archive.org/web/20241116114405/https://aipclinicadinamica2024.it/" target="_blank" rel="noopener">aipclinicadinamica2024.it (archivio)</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Congresso</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/gfn24.webp' | relative_url }}" alt="Presentazione al Global Forum on Nicotine 2024" loading="lazy">
          </div>
          <div class="activity-date">13-15 giu 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">Global Forum on Nicotine 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Relatore</span>
            <span>Global Forum on Nicotine Limited · Varsavia (Polonia)</span>
          </div>
          <p class="activity-description">Presentata la scoping review aggiornata <strong>"Screening of Digital and Mobile Health Technologies for Improving Smoking Detection and Cessation"</strong> al GFN 2024, con focus sul rilevamento del fumo tramite smartwatch abilitati all'IA nel progetto Fondazione Samothrace.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://gfn.events/videos/2024/digital-and-mobile-health-innovations-enhancing-smoking-detection-and-cessation/" target="_blank" rel="noopener">Video della sessione</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Conferenza</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/notobaccoday24.webp' | relative_url }}" alt="Sessione interattiva al No Tobacco Day 2024" loading="lazy">
          </div>
          <div class="activity-date">30 mag 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">No Tobacco Day 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Relatore</span>
            <span>CoEHAR · Catania (Italia)</span>
          </div>
          <p class="activity-description">Guidata una sessione interattiva con gli studenti presentando il progetto <strong>"AI in Action: Pioneering an Algorithm for Smoke-Free Living Through Wearable Tech"</strong>.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://web.archive.org/web/20250114002430/https://www.coehar.it/evento/notobacco-day-2024/" target="_blank" rel="noopener">Dettagli evento (archivio)</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Conferenza</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/europedigitalpsy24.webp' | relative_url }}" alt="Copertina della European Conference of Digital Psychology 2024" loading="lazy">
          </div>
          <div class="activity-date">21-22 mar 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">European Conference of Digital Psychology</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Relatore</span>
            <span>Sigmund Freud University Milano · Virtual Forum</span>
          </div>
          <p class="activity-description">Presentato lo studio sostenuto dalla Fondazione Samothrace <strong>&laquo;AI in Action: Pioneering an Algorithm for Smoke-Free Living through Wearable Tech&raquo;</strong> insieme al Prof. Pasquale Caponnetto al forum virtuale della 2nd European Conference <strong>&laquo;Psychology and AI: New Horizons&raquo;</strong>.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://digitalpsychology.eu/" target="_blank" rel="noopener">digitalpsychology.eu</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Conferenza</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/icann17.webp' | relative_url }}" alt="Copertina di ICANN 2017" loading="lazy">
          </div>
          <div class="activity-date">11-14 set 2017</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">ICANN 2017</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Staff ospitante</span>
            <span>European Neural Network Society (ENNS) · Alghero (Italia)</span>
          </div>
          <p class="activity-description">Supporto alla 26ª edizione della International Conference on Artificial Neural Networks (ICANN), la principale conferenza europea sulle reti neurali artificiali.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://web.archive.org/web/20170911053138/http://www.icann2017.org/" target="_blank" rel="noopener">icann2017.org (archivio)</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sezione Workshop & Challenge -->
  <div class="activity-section">
  <h3 class="section-title">workshop & challenge</h3>
    <div class="activity-list">
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--workshop">Workshop</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/ijcnn25.webp' | relative_url }}" alt="Copertina del VERIMEDIA Workshop 2025" loading="lazy">
          </div>
          <div class="activity-date">30 giu - 5 lug 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">VERIMEDIA Workshop</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--workshop">Speaker</span>
          </div>
          <p class="activity-description">Presentato <strong>WILD</strong>, un dataset su larga scala per l'attribuzione di immagini sintetiche, al VERIMEDIA &mdash; International Workshop on Media Verification and Integrity, parte dell'International Joint Conference on Neural Networks (IJCNN) 2025.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://2025.ijcnn.org/" target="_blank" rel="noopener">2025.ijcnn.org</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--workshop">Challenge</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/fhda25.webp' | relative_url }}" alt="Copertina della FHDA Challenge 2025" loading="lazy">
          </div>
          <div class="activity-date">25 giu 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">FHDA Challenge</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--workshop">Organizzatore</span>
          </div>
          <p class="activity-description">Guidato e organizzato la Forensic Handwritten Document Analysis challenge a IEEE MetroXRAINE 2025, insieme a Luca Guarnera e al Prof. Sebastiano Battiato.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://mfs-iplab.github.io/fhda-challenge/" target="_blank" rel="noopener">Sito della challenge</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--workshop">Workshop</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/secondws25.webp' | relative_url }}" alt="Copertina del Second Workshop on Generative AI &amp; Computer Vision" loading="lazy">
          </div>
          <div class="activity-date">11 apr 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">Second Workshop on Generative AI &amp; Computer Vision</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--workshop">Poster Presenter</span>
            <span>University of Catania · Catania (Italy)</span>
          </div>
          <p class="activity-description">Presentato un poster sulla ricerca "Impostor Bias" (pubblicata su <em>Forensic Science International: Digital Investigation</em>) al Second Workshop on Generative AI &amp; Computer Vision.</p>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--workshop">Workshop</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/wstaormina25.webp' | relative_url }}" alt="Copertina del Workshop on Emerging Challenges and Innovations in ICT in the Era of AI" loading="lazy">
          </div>
          <div class="activity-date">11 mar 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">Workshop on Emerging Challenges and Innovations in ICT in the Era of AI</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--workshop">Participant</span>
            <span>University of Catania, Messina · Taormina (Italy)</span>
          </div>
          <p class="activity-description">Partecipazione al workshop congiunto &ldquo;Emerging Challenges and Innovations in ICT in the Era of AI&rdquo;, organizzato dalle Università di Catania e Messina.</p>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--workshop">Workshop</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/firstws24.webp' | relative_url }}" alt="Copertina del First Workshop on Generative AI &amp; Computer Vision" loading="lazy">
          </div>
          <div class="activity-date">19 mar 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">First Workshop on Generative AI &amp; Computer Vision</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--workshop">Poster Presenter</span>
            <span>University of Catania · Catania (Italy)</span>
          </div>
          <p class="activity-description">Partecipazione al primo workshop dedicato a generative AI e computer vision curato dal Prof. Sebastiano Battiato.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Sezione Summer School -->
  <div class="activity-section">
  <h3 class="section-title">summer school</h3>
    <div class="activity-list">
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--school">Summer School</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/ifoss25.webp' | relative_url }}" alt="Copertina di IFOSS 2025" loading="lazy">
          </div>
          <div class="activity-date">13-19 lug 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">IFOSS 2025</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--school">Participant &amp; Staff Member</span>
            <span>University of Catania, Milan, Foggia · Punta Sampieri (Italy)</span>
          </div>
          <p class="activity-description">Partecipazione, presentazione del poster e supporto allo staff alla quarta edizione di IFOSS – International Forensics Summer School.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://web.archive.org/web/20250604114252/https://www.ifoss.it/" target="_blank" rel="noopener">ifoss.it (archivio)</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--school">Summer School</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/ifoss24.webp' | relative_url }}" alt="Copertina di IFOSS 2024" loading="lazy">
          </div>
          <div class="activity-date">14-20 lug 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">IFOSS 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--school">Participant &amp; Staff Member</span>
            <span>University of Catania, Milan, Foggia · Punta Sampieri (Italia)</span>
          </div>
          <p class="activity-description">Partecipazione, presentazione poster e supporto organizzativo alla terza edizione di IFOSS – International Forensics Summer School.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://web.archive.org/web/20240602130323/https://www.ifoss.it/" target="_blank" rel="noopener">ifoss.it (archivio)</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sezione Altri Eventi -->
  <div class="activity-section">
  <h3 class="section-title">altri eventi</h3>
    <div class="activity-list">
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--event">Evento</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/sharper25.webp' | relative_url }}" alt="Copertina di SHARPER Night 2025" loading="lazy">
          </div>
          <div class="activity-date">26 set 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">SHARPER Night 2025</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--event">Demonstrator</span>
            <span>Catania (Italy)</span>
          </div>
          <p class="activity-description">Partecipazione a SHARPER Night 2025 con lo stand DMI.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://web.dmi.unict.it/it/notizie/dmi-alla-sharper-night-2025" target="_blank" rel="noopener">Pagina evento</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--event">Evento</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/wmf25.webp' | relative_url }}" alt="Copertina di We Make Future 2025" loading="lazy">
          </div>
          <div class="activity-date">4-6 giu 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">We Make Future 2025</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--event">Demonstrator</span>
            <span>Third Mission Area · Bologna (Italy)</span>
          </div>
          <p class="activity-description">Presentazione dei progetti su rilevamento del fumo basato su IA e bias dell'impostore nell'autenticazione multimediale alla principale fiera italiana sull'innovazione.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://www.wemakefuture.it/2025/programma/" target="_blank" rel="noopener">Programma</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--event">Evento</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/welcomephd24.webp' | relative_url }}" alt="Copertina di Welcome Ph.D. Day 2024" loading="lazy">
          </div>
          <div class="activity-date">9 dic 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">Welcome Ph.D. Day 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--event">Poster Presenter</span>
            <span>University of Catania · Catania (Italy)</span>
          </div>
          <p class="activity-description">Presentato un poster su "Impostor Bias" durante la sessione poster inaugurale del Welcome Ph.D. Day.</p>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--event">Evento</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/sharper24.webp' | relative_url }}" alt="Copertina di SHARPER Night 2024" loading="lazy">
          </div>
          <div class="activity-date">27 set 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">SHARPER Night 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--event">Demonstrator</span>
            <span>Catania (Italy)</span>
          </div>
          <p class="activity-description">Partecipazione a SHARPER Night 2024 presso lo stand DMI &ldquo;Images and Smart Cities&rdquo;, con una demo VR (Meta Quest 3) integrata con gli smartwatch Empatica EmbracePlus per evocare e monitorare reazioni psicofisiologiche a fobie come acrofobia e claustrofobia.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://www.sharper-night.it/evento/computer-vision-per-smart-cities/" target="_blank" rel="noopener">Pagina evento</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--event">Evento</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/didacta23.webp' | relative_url }}" alt="Copertina di Didacta Italia – Sicilian Edition" loading="lazy">
          </div>
          <div class="activity-date">12-14 ott 2023</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">Didacta Italia – Sicilian Edition</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--event">Demonstrator</span>
            <span>Ordine degli Psicologi della Sicilia · Catania (Italy)</span>
          </div>
          <p class="activity-description">Rappresentato l'Ordine degli Psicologi della Sicilia all'interno del padiglione regionale durante la principale fiera italiana dell'istruzione, Didacta.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://fieradidacta.indire.it/it/didacta-sicilia-2023/" target="_blank" rel="noopener">Event page</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sezione Lavoro Editoriale -->
  <div class="activity-section">
  <h3 class="section-title">lavoro editoriale</h3>
    <div class="activity-list">
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--editorial">Special Issue</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/digprog.webp' | relative_url }}" alt="Copertina dello special issue Digital Health Innovations &amp; Psychological Well-being" loading="lazy">
          </div>
          <div class="activity-date">31 ago 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">Special Issue on Digital Health Innovations &amp; Psychological Well-being</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--editorial">Guest Editor</span>
          </div>
          <p class="activity-description">Guest e Academic Editor del numero speciale "Digital Health Innovations in the Battle Against Psychological Problems: Progress, Hurdles, and Prospects", pubblicato sulla rivista "Exploration of Digital Health Technologies" (Open Exploration).</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://www.explorationpub.com/Journals/edht/Special_Issues/287" target="_blank" rel="noopener">Numero speciale</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
