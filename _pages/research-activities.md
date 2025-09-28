---
layout: page
permalink: /research-activities/
title: research activities
description: academic research activities including conferences, workshops, special issues, and scholarly engagements.
nav: true
nav_order: 3
lang: en
_styles: >
  /* Research Activities Layout */
  .research-activities { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; display: flex; flex-direction: column; gap: 2.4rem; }
  .research-activities .activity-section { display: flex; flex-direction: column; gap: 1.4rem; }
  .research-activities .section-title { color: #2c6c67; font-weight: 600; border-top: 1px solid rgba(44,108,103,0.4); padding-top: 0.65rem; display: block; font-size: 1.35rem; letter-spacing: 0.02em; text-align: right; margin: 0; width: 100%; align-self: stretch; }
  .research-activities .activity-list { display: flex; flex-direction: column; gap: 1.2rem; }
  .research-activities .activity-card { display: flex; gap: 1.2rem; background: transparent; border: none; border-radius: 18px; padding: 1.15rem 0; transition: transform 0.25s ease, box-shadow 0.25s ease; }
  .research-activities .activity-card:hover { transform: translateY(-3px); box-shadow: none; }
  .research-activities .activity-side { flex: 0 0 clamp(96px, 14%, 120px); width: clamp(96px, 14%, 120px); max-width: 120px; display: flex; flex-direction: column; align-items: stretch; justify-content: flex-start; gap: 0.55rem; text-align: left; padding-top: 0.145rem; }
  .research-activities .activity-side > * { align-self: stretch; }
  .research-activities .activity-tag { display: inline-flex; align-items: center; justify-content: center; width: 100%; padding: 0.22rem 0.55rem; border-radius: 6px !important; font-size: 0.58rem; font-weight: 700; letter-spacing: 0.02em; text-transform: uppercase; color: #fff; text-align: center; line-height: 1.1; }
  .research-activities .activity-tag--conference { background: #6366f1; }
  .research-activities .activity-tag--webinar { background: #6366f1; }
  .research-activities .activity-tag--workshop { background: #ef4444; }
  .research-activities .activity-tag--school { background: #f97316; }
  .research-activities .activity-tag--event { background: #0ea5e9; }
  .research-activities .activity-tag--editorial { background: #8b5cf6; }
  .research-activities .activity-thumb { width: 100%; max-width: 120px; aspect-ratio: 4 / 3; border-radius: 6px !important; overflow: hidden; background: linear-gradient(135deg, rgba(15,51,44,0.25), rgba(15,23,42,0.2)); display: flex; align-items: center; justify-content: center; }
  .research-activities .activity-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 6px !important; }
  .research-activities .activity-date { display: inline-flex; align-items: center; justify-content: center; width: 100%; padding: 0.3rem 0.55rem; border-radius: 6px !important; font-size: 0.58rem; font-weight: 600; background: rgba(15,23,42,0.06); color: #1f2937; text-transform: uppercase; letter-spacing: 0.02em; align-self: flex-start; text-align: center; line-height: 1.1; }
  .research-activities .activity-body { flex: 1 1 auto; display: flex; flex-direction: column; gap: 0.6rem; }
  .research-activities .activity-heading { display: flex; justify-content: space-between; gap: 0.75rem; align-items: flex-start; }
  .research-activities .activity-title { font-size: 1.08rem; font-weight: 680; color: #111827; margin: 0; }
  .research-activities .activity-meta { display: flex; flex-wrap: wrap; gap: 0.45rem; align-items: center; color: #4b5563; font-size: 0.9rem; }
  .research-activities .activity-role { background: #272B31; color: #eaf3ff; padding: 0.22rem 0.55rem; border-radius: 6px !important; font-size: 0.58rem; font-weight: 700; letter-spacing: 0.02em; text-transform: uppercase; line-height: 1.1; }
  .research-activities .activity-role--conference,
  .research-activities .activity-role--webinar { color: #8488FF; }
  .research-activities .activity-role--workshop,
  .research-activities .activity-role--challenge { color: #FF6B6B; }
  .research-activities .activity-role--school { color: #FF9C45; }
  .research-activities .activity-role--event { color: #4EC8FF; }
  .research-activities .activity-role--editorial { color: #B799FF; }
  .research-activities .activity-description { color: #374151; font-size: 0.9rem; line-height: 1.5; margin: 0; }
  .research-activities .activity-links { display: flex; flex-wrap: wrap; gap: 0.45rem; }
  .research-activities .activity-btn { display: inline-flex; align-items: center; justify-content: center; gap: 0.25rem; padding: 0.22rem 0.55rem; border-radius: 6px !important; background: #272B31; color: #43B4A0; font-size: 0.58rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.02em; line-height: 1.1; text-decoration: none; transition: background 0.2s ease, transform 0.2s ease; }
  .research-activities .activity-btn:hover { background: #1F2228; color: #43B4A0; transform: translateY(-1px); text-decoration: none; }
  .research-activities .activity-btn.secondary { background: rgba(39,43,49,0.55); color: #43B4A0; }
  .research-activities .activity-btn.secondary:hover { background: rgba(39,43,49,0.68); color: #43B4A0; }
  .research-activities a { text-decoration: none; }
  .research-activities a:hover { text-decoration: underline; }
  @media (max-width: 992px) {
  .research-activities .activity-card { flex-direction: column; align-items: stretch; gap: 0.9rem; }
  .research-activities .activity-side { width: 100%; flex-direction: row; flex-wrap: wrap; justify-content: center; align-items: center; gap: 0.75rem; text-align: center; }
  .research-activities .activity-tag,
  .research-activities .activity-thumb,
  .research-activities .activity-date { flex: 0 0 clamp(96px, 33vw, 120px); width: clamp(96px, 33vw, 120px); max-width: 120px; }
  .research-activities .activity-date { align-self: center; }
  }
  @media (max-width: 640px) {
  .research-activities .activity-heading { flex-direction: column; align-items: flex-start; gap: 0.4rem; }
  .research-activities .activity-side { width: 100%; max-width: none; flex: 0 0 100%; flex-direction: column; align-items: stretch; text-align: left; gap: 0.65rem; }
  .research-activities .activity-tag,
  .research-activities .activity-thumb,
  .research-activities .activity-date { width: 100%; max-width: none; flex: 0 0 100%; }
  .research-activities .activity-thumb { aspect-ratio: 4 / 3; }
  .research-activities .activity-tag,
  .research-activities .activity-date { display: flex; justify-content: center; align-items: center; text-align: center; width: 100%; max-width: 100%; flex: 0 0 100%; align-self: stretch; margin-inline: 0; }
  .research-activities .activity-role,
  .research-activities .activity-btn { width: auto; max-width: 100%; flex: 0 0 auto; align-self: flex-start; }
  .research-activities .activity-meta { justify-content: flex-start; align-items: center; gap: 0.45rem; text-align: left; }
  .research-activities .activity-links { width: 100%; justify-content: flex-start; flex-direction: row; flex-wrap: wrap; gap: 0.45rem; }
  }
  @media (prefers-color-scheme: dark) {
  .research-activities .section-title { color: #2c6c67; border-color: rgba(44,108,103,0.6); }
  .research-activities .activity-card { background: transparent; border: none; box-shadow: none; }
  .research-activities .activity-thumb { background: linear-gradient(135deg, rgba(77,219,204,0.35), rgba(59,130,246,0.25)); }
    .research-activities .activity-date { background: rgba(148,163,184,0.18); color: #e2e8f0; }
    .research-activities .activity-title { color: #f8fafc; }
    .research-activities .activity-meta { color: #cbd5f5; }
    .research-activities .activity-description { color: #e2e8f0; }
  .research-activities .activity-btn { background: rgba(39,43,49,0.8); color: #43B4A0; }
  .research-activities .activity-btn:hover { background: rgba(39,43,49,0.92); color: #43B4A0; }
  .research-activities .activity-btn.secondary { background: rgba(39,43,49,0.5); color: #43B4A0; }
  .research-activities .activity-btn.secondary:hover { background: rgba(39,43,49,0.62); color: #43B4A0; }
  }
---

<div class="research-activities">
  <!-- Conferences and Talks Section -->
  <div class="activity-section">
  <h3 class="section-title">conferences & talks</h3>
    <div class="activity-list">
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Conference</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/icaisf.webp' | relative_url }}" alt="Cover for ICAISF 2025" loading="lazy">
          </div>
          <div class="activity-date">Oct 26-27, 2025</div>
        </div>
        <div class="activity-body">
            <div class="activity-heading">
              <h5 class="activity-title">ICAISF 2025</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Scientific Committee</span>
            <span>University of Catania, Istinye University · Catania (Italy)</span>
          </div>
          <p class="activity-description">Scientific Committee member for ICAISF 2025, the 2nd International Conference on AI and Emerging Technology For Sustainable Future.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://www.icaisf.com/index.html" target="_blank" rel="noopener">icaisf.com</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--webinar">Webinar</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/digitales.webp' | relative_url }}" alt="Cover for the DigiTales webinar" loading="lazy">
          </div>
          <div class="activity-date">Sep 25, 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">DigiTales</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--webinar">Speaker</span>
          </div>
          <p class="activity-description">Presenter of the talk <strong>"Psychedelic Simulation"</strong> at the DigiTales - Neues zu digitalen Tools für psychische Erkrankungen webinar, hosted by Prof. Dr. Steffen Moritz.</p>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Conference</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/metroxraine24.webp' | relative_url }}" alt="Poster session at IEEE MetroXRAINE 2024" loading="lazy">
          </div>
          <div class="activity-date">Oct 21-23, 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">IEEE MetroXRAINE 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Poster &amp; Oral Presenter</span>
            <span>University of Hertfordshire · St Albans (UK)</span>
          </div>
          <p class="activity-description">Poster presenter, oral session paper presenter and coordinator of the last poster session of the 2024 IEEE International Conference on Metrology for eXtended Reality, Artificial Intelligence and Neural Engineering.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://metroxraine.org/metroxraine2024/" target="_blank" rel="noopener">metroxraine2024</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Congress</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/psicocantiere24.webp' | relative_url }}" alt="Poster for Psicologia in Cantiere 2024" loading="lazy">
          </div>
          <div class="activity-date">Oct 12, 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">Psicologia in Cantiere 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Poster Presenter</span>
            <span>Ordine degli Psicologi della Regione Sicilia · Palermo (Italy)</span>
          </div>
          <p class="activity-description">Presented poster on "Impostor Bias" research at "Psicologia in Cantiere" event (Ecomuseo Mare Memoria Viva, Palermo), in collaboration with the Experimental Psychology Working Group.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://www.oprs.it/evento/psicologia-in-cantiere/" target="_blank" rel="noopener">Event page</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Congress</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/aip24.webp' | relative_url }}" alt="Poster for AIP Clinical &amp; Dynamic Psychology Congress 2024" loading="lazy">
          </div>
          <div class="activity-date">Sep 12-15, 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">AIP Clinical &amp; Dynamic Psychology Congress 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Speaker</span>
            <span>University of Salerno · Fisciano (Italy)</span>
          </div>
          <p class="activity-description">Presented the smartwatch-based dual diagnosis project at the 24th National AIP Congress of the Clinical and Dynamic Psychology Section.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://web.archive.org/web/20241116114405/https://aipclinicadinamica2024.it/" target="_blank" rel="noopener">aipclinicadinamica2024.it (archive)</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Congress</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/gfn24.webp' | relative_url }}" alt="Presentation at the Global Forum on Nicotine 2024" loading="lazy">
          </div>
          <div class="activity-date">Jun 13-15, 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">Global Forum on Nicotine 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Speaker</span>
            <span>Global Forum on Nicotine Limited · Warsaw (Poland)</span>
          </div>
          <p class="activity-description">Presented the updated scoping review <strong>"Screening of Digital and Mobile Health Technologies for Improving Smoking Detection and Cessation"</strong> at the GFN 2024, focusing on AI-enabled smartwatch detection for smoking behaviors within the Fondazione Samothrace project.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://gfn.events/videos/2024/digital-and-mobile-health-innovations-enhancing-smoking-detection-and-cessation/" target="_blank" rel="noopener">Session video</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Conference</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/notobaccoday24.webp' | relative_url }}" alt="Interactive session at No Tobacco Day 2024" loading="lazy">
          </div>
          <div class="activity-date">May 30, 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">No Tobacco Day 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Speaker</span>
            <span>CoEHAR · Catania (Italy)</span>
          </div>
          <p class="activity-description">Led an interactive session with students, presenting the <strong>"AI in Action: Pioneering an Algorithm for Smoke-Free Living Through Wearable Tech"</strong> project.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://web.archive.org/web/20250114002430/https://www.coehar.it/evento/notobacco-day-2024/" target="_blank" rel="noopener">Event details (archive)</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Conference</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/europedigitalpsy24.webp' | relative_url }}" alt="Poster for the European Conference of Digital Psychology 2024" loading="lazy">
          </div>
          <div class="activity-date">Mar 21-22, 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">European Conference of Digital Psychology</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Speaker</span>
            <span>Sigmund Freud University Milano · Virtual Forum</span>
          </div>
          <p class="activity-description">Presented the Fondazione Samothrace-backed study <strong>&ldquo;AI in Action: Pioneering an Algorithm for Smoke-Free Living through Wearable Tech&rdquo;</strong> with Prof. Pasquale Caponnetto at the virtual forum 2nd European Conference <strong>&ldquo;Psychology and AI: New Horizons&rdquo;</strong>.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://digitalpsychology.eu/" target="_blank" rel="noopener">digitalpsychology.eu</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--conference">Conference</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/icann17.webp' | relative_url }}" alt="Poster for ICANN 2017" loading="lazy">
          </div>
          <div class="activity-date">Sep 11-14, 2017</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">ICANN 2017</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--conference">Hosting Staff</span>
            <span>European Neural Network Society (ENNS) · Alghero (Italy)</span>
          </div>
          <p class="activity-description">Supported the 26th edition of the International Conference on Artificial Neural Networks (ICANN), the leading European conference on artificial neural networks.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://web.archive.org/web/20170911053138/http://www.icann2017.org/" target="_blank" rel="noopener">icann2017.org (archive)</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Workshops & Challenges Section -->
  <div class="activity-section">
  <h3 class="section-title">workshops & challenges</h3>
    <div class="activity-list">
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--workshop">Workshop</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/ijcnn25.webp' | relative_url }}" alt="Poster for VERIMEDIA Workshop 2025" loading="lazy">
          </div>
          <div class="activity-date">Jun 30-Jul 5, 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">VERIMEDIA Workshop</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--workshop">Speaker</span>
          </div>
          <p class="activity-description">Showcased <strong>WILD</strong>, a large-scale dataset for synthetic image attribution, at VERIMEDIA &mdash; International Workshop on Media Verification and Integrity, part of the International Joint Conference on Neural Networks (IJCNN) 2025.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://2025.ijcnn.org/" target="_blank" rel="noopener">2025.ijcnn.org</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--workshop">Challenge</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/fhda25.webp' | relative_url }}" alt="Poster for FHDA Challenge 2025" loading="lazy">
          </div>
          <div class="activity-date">Jun 25, 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">FHDA Challenge</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--workshop">Organizer</span>
          </div>
          <p class="activity-description">Led and organized the Forensic Handwritten Document Analysis challenge at IEEE MetroXRAINE 2025, along with Luca Guarnera and Prof. Sebastiano Battiato.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://mfs-iplab.github.io/fhda-challenge/" target="_blank" rel="noopener">Challenge website</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--workshop">Workshop</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/secondws25.webp' | relative_url }}" alt="Poster for the Second Workshop on Generative AI &amp; Computer Vision" loading="lazy">
          </div>
          <div class="activity-date">Apr 11, 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">Second Workshop on Generative AI &amp; Computer Vision</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--workshop">Poster Presenter</span>
            <span>University of Catania · Catania (Italy)</span>
          </div>
          <p class="activity-description">Presented poster on "Impostor Bias" research (published in <em>Forensic Science International: Digital Investigation</em>) at the Second Workshop on Generative AI &amp; Computer Vision.</p>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--workshop">Workshop</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/wstaormina25.webp' | relative_url }}" alt="Poster for the Workshop on Emerging Challenges and Innovations in ICT in the Era of AI" loading="lazy">
          </div>
          <div class="activity-date">Mar 11, 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">Workshop on Emerging Challenges and Innovations in ICT in the Era of AI</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--workshop">Participant</span>
            <span>University of Catania, Messina · Taormina (Italy)</span>
          </div>
          <p class="activity-description">Participated in the joint workshop &ldquo;Emerging Challenges and Innovations in ICT in the Era of AI,&rdquo; organized by the Universities of Catania and Messina.</p>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--workshop">Workshop</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/firstws24.webp' | relative_url }}" alt="Poster for the First Workshop on Generative AI &amp; Computer Vision" loading="lazy">
          </div>
          <div class="activity-date">Mar 19, 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">First Workshop on Generative AI &amp; Computer Vision</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--workshop">Poster Presenter</span>
            <span>University of Catania · Catania (Italy)</span>
          </div>
          <p class="activity-description">Joined the first workshop focused on generative AI and computer vision advances curated by Prof. Sebastiano Battiato.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Summer Schools Section -->
  <div class="activity-section">
  <h3 class="section-title">summer schools</h3>
    <div class="activity-list">
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--school">Summer School</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/ifoss25.webp' | relative_url }}" alt="Poster for IFOSS 2025" loading="lazy">
          </div>
          <div class="activity-date">Jul 13-19, 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">IFOSS 2025</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--school">Participant &amp; Staff Member</span>
            <span>University of Catania, Milan, Foggia · Punta Sampieri (Italy)</span>
          </div>
          <p class="activity-description">Participation, poster presenter and staff member at the fourth edition of IFOSS – International Forensics Summer School.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://web.archive.org/web/20250604114252/https://www.ifoss.it/" target="_blank" rel="noopener">ifoss.it (archive)</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--school">Summer School</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/ifoss24.webp' | relative_url }}" alt="Poster for IFOSS 2024" loading="lazy">
          </div>
          <div class="activity-date">Jul 14-20, 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">IFOSS 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--school">Participant &amp; Staff Member</span>
            <span>University of Catania, Milan, Foggia · Punta Sampieri (Italy)</span>
          </div>
          <p class="activity-description">Participation, poster presenter and staff member at the third edition of IFOSS – International Forensics Summer School.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://web.archive.org/web/20240602130323/https://www.ifoss.it/" target="_blank" rel="noopener">ifoss.it (archive)</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Other Events Section -->
  <div class="activity-section">
  <h3 class="section-title">other events</h3>
    <div class="activity-list">
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--event">Event</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/sharper25.webp' | relative_url }}" alt="Poster for SHARPER Night 2025" loading="lazy">
          </div>
          <div class="activity-date">Sep 26, 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">SHARPER Night 2025</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--event">Demonstrator</span>
            <span>Catania (Italy)</span>
          </div>
          <p class="activity-description">Participated in SHARPER Night 2025 with the DMI stand.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://web.dmi.unict.it/it/notizie/dmi-alla-sharper-night-2025" target="_blank" rel="noopener">Event page</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--event">Event</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/wmf25.webp' | relative_url }}" alt="Poster for We Make Future 2025" loading="lazy">
          </div>
          <div class="activity-date">Jun 4-6, 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">We Make Future 2025</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--event">Demonstrator</span>
            <span>Third Mission Area · Bologna (Italy)</span>
          </div>
          <p class="activity-description">Showcased AI-driven smoking detection projects and insights on impostor bias in multimedia authentication at Italy's leading innovation fair.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://www.wemakefuture.it/2025/programma/" target="_blank" rel="noopener">Event programme</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--event">Event</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/welcomephd24.webp' | relative_url }}" alt="Poster for Welcome Ph.D. Day 2024" loading="lazy">
          </div>
          <div class="activity-date">Dec 9, 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">Welcome Ph.D. Day 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--event">Poster Presenter</span>
            <span>University of Catania · Catania (Italy)</span>
          </div>
          <p class="activity-description">Presented poster on "Impostor Bias" at the inaugural Welcome Ph.D. Day poster session.</p>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--event">Event</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/sharper24.webp' | relative_url }}" alt="Poster for SHARPER Night 2024" loading="lazy">
          </div>
          <div class="activity-date">Sep 27, 2024</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">SHARPER Night 2024</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--event">Demonstrator</span>
            <span>Catania (Italy)</span>
          </div>
          <p class="activity-description">Participated in SHARPER Night 2024 with the DMI stand &ldquo;Images and Smart Cities&rdquo;, presenting a VR demo (Meta Quest 3) integrated with Empatica EmbracePlus smartwatches to elicit and monitor psychophysiological reactions to phobias like acrophobia and claustrophobia.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://www.sharper-night.it/evento/computer-vision-per-smart-cities/" target="_blank" rel="noopener">Event page</a>
          </div>
        </div>
      </div>
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--event">Event</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/didacta23.webp' | relative_url }}" alt="Poster for Didacta Italia – Sicilian Edition" loading="lazy">
          </div>
          <div class="activity-date">Oct 12-14, 2023</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">Didacta Italia – Sicilian Edition</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--event">Demonstrator</span>
            <span>Ordine degli Psicologi della Sicilia · Catania (Italy)</span>
          </div>
          <p class="activity-description">Represented the "Ordine degli Psicologi della Sicilia" within the regional pavilion during Italy's premier education fair, Didacta.</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://fieradidacta.indire.it/it/didacta-sicilia-2023/" target="_blank" rel="noopener">Event page</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Editorial Work Section -->
  <div class="activity-section">
  <h3 class="section-title">editorial work</h3>
    <div class="activity-list">
      <div class="activity-card">
        <div class="activity-side">
          <span class="activity-tag activity-tag--editorial">Special Issue</span>
          <div class="activity-thumb">
            <img src="{{ '/assets/img/research_activ_prevs/digprog.webp' | relative_url }}" alt="Cover for the Digital Health Innovations &amp; Psychological Well-being special issue" loading="lazy">
          </div>
          <div class="activity-date">Aug 31, 2025</div>
        </div>
        <div class="activity-body">
          <div class="activity-heading">
            <h5 class="activity-title">Special Issue on Digital Health Innovations &amp; Psychological Well-being</h5>
          </div>
          <div class="activity-meta">
            <span class="activity-role activity-role--editorial">Guest Editor</span>
          </div>
          <p class="activity-description">Guest and Academic editor of the Special Issue "Digital Health Innovations in the Battle Against Psychological Problems: Progress, Hurdles, and Prospects", published on the journal "Exploration of Digital Health Technologies" (Open Exploration).</p>
          <div class="activity-links">
            <a class="activity-btn secondary" href="https://www.explorationpub.com/Journals/edht/Special_Issues/287" target="_blank" rel="noopener">Special issue</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
