// ── State ────────────────────────────────────────────────────
let state = {
  view: 'home',             // 'home' | 'subject' | 'study'
  subject: null,            // 'physics' | 'chemistry'
  topicId: null,
  subtopicId: null,
  cards: [],
  currentIndex: 0,
  flipped: false,
  shuffle: false,
  ratings: {},              // cardId -> 'easy' | 'medium' | 'hard'
};

// ── Helpers ──────────────────────────────────────────────────
function getSubtopic(subjectKey, topicId, subtopicId) {
  const subj = FLASHCARD_DATA[subjectKey];
  const topic = subj.topics.find(t => t.id === topicId);
  if (!topic) return null;
  return topic.subtopics.find(s => s.id === subtopicId);
}

function getAllCardsForSubject(subjectKey) {
  const subj = FLASHCARD_DATA[subjectKey];
  let cards = [];
  subj.topics.forEach(t => t.subtopics.forEach(s => cards.push(...s.cards)));
  return cards;
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function countCards(subjectKey) {
  return getAllCardsForSubject(subjectKey).length;
}

function countTopics(subjectKey) {
  return FLASHCARD_DATA[subjectKey].topics.reduce((n, t) => n + t.subtopics.length, 0);
}

// ── Render: Sidebar ──────────────────────────────────────────
function renderSidebar() {
  const container = document.getElementById('sidebar');
  container.innerHTML = '';

  Object.entries(FLASHCARD_DATA).forEach(([key, subj]) => {
    const subjDiv = document.createElement('div');
    subjDiv.className = 'sidebar-subject';

    const header = document.createElement('div');
    header.className = `sidebar-subject-header ${key}`;
    header.innerHTML = `${subj.icon} ${subj.label}`;
    header.onclick = () => openSubject(key);
    subjDiv.appendChild(header);

    subj.topics.forEach(topic => {
      const topicDiv = document.createElement('div');
      topicDiv.className = 'sidebar-topic';

      const topicTitle = document.createElement('div');
      topicTitle.className = 'sidebar-topic-title';
      topicTitle.id = `topic-${key}-${topic.id}`;
      topicTitle.innerHTML = `<span>${topic.title}</span>`;
      topicDiv.appendChild(topicTitle);

      topic.subtopics.forEach(sub => {
        const subDiv = document.createElement('div');
        subDiv.className = `sidebar-subtopic`;
        subDiv.id = `sub-${key}-${topic.id}-${sub.id}`;
        subDiv.innerHTML = `<span>${sub.title}</span><span class="card-count">${sub.cards.length}</span>`;
        subDiv.onclick = () => openStudy(key, topic.id, sub.id);
        topicDiv.appendChild(subDiv);
      });

      subjDiv.appendChild(topicDiv);
    });

    const divider = document.createElement('hr');
    divider.className = 'sidebar-divider';
    subjDiv.appendChild(divider);

    container.appendChild(subjDiv);
  });

  updateSidebarActive();
}

function updateSidebarActive() {
  document.querySelectorAll('.sidebar-subtopic').forEach(el => {
    el.classList.remove('active', 'chemistry');
  });

  if (state.subtopicId && state.topicId && state.subject) {
    const el = document.getElementById(`sub-${state.subject}-${state.topicId}-${state.subtopicId}`);
    if (el) {
      el.classList.add('active');
      if (state.subject === 'chemistry') el.classList.add('chemistry');
    }
  }
}

// ── Render: Home ─────────────────────────────────────────────
function renderHome() {
  const main = document.getElementById('main');
  main.innerHTML = `
    <div class="home-hero">
      <h1>A/L <span class="accent-blue">Physics</span> &<br><span class="accent-amber">Chemistry</span> Flashcards</h1>
      <p>Master your A/Level science syllabus with smart flashcards.<br>
      Built for Sri Lankan Maths & Bio stream students.</p>

      <div class="subject-cards">
        ${Object.entries(FLASHCARD_DATA).map(([key, subj]) => `
          <div class="subject-card ${key}" onclick="openSubject('${key}')">
            <span class="subject-icon">${subj.icon}</span>
            <h2>${subj.label}</h2>
            <p>${key === 'physics' ? 'Mechanics, Waves, Electricity, Thermal, Quantum & Nuclear physics' : 'Atomic Structure, Energetics, Kinetics, Equilibrium, Organic & Electrochemistry'}</p>
            <div class="subject-stats">
              <div class="stat"><strong>${countCards(key)}</strong>Cards</div>
              <div class="stat"><strong>${countTopics(key)}</strong>Subtopics</div>
              <div class="stat"><strong>${FLASHCARD_DATA[key].topics.length}</strong>Topics</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="stats-bar">
        <span class="badge">📚 Sri Lanka A/L Syllabus</span>
        <span class="badge">⌨️ Keyboard shortcuts</span>
        <span class="badge">🎯 Track your progress</span>
        <span class="badge">🔀 Shuffle mode</span>
      </div>
    </div>
  `;
}

// ── Render: Subject overview ──────────────────────────────────
function renderSubjectOverview(subjectKey) {
  const subj = FLASHCARD_DATA[subjectKey];
  const main = document.getElementById('main');

  main.innerHTML = `
    <div class="flashcard-area">
      <div class="area-header">
        <div class="breadcrumb">
          <span onclick="goHome()">Home</span> / ${subj.label}
        </div>
        <h2>${subj.icon} ${subj.label}</h2>
        <p class="desc">${countCards(subjectKey)} flashcards across ${subj.topics.length} topics — pick a subtopic to study</p>
      </div>

      ${subj.topics.map(topic => `
        <div style="margin-bottom: 2rem;">
          <h3 style="font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--${subjectKey === 'physics' ? 'blue' : 'amber'}); margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--border);">${topic.title}</h3>
          <div class="subtopic-grid">
            ${topic.subtopics.map(sub => `
              <div class="subtopic-tile ${subjectKey}" onclick="openStudy('${subjectKey}', '${topic.id}', '${sub.id}')">
                <h4>${sub.title}</h4>
                <p>${sub.cards.length} card${sub.cards.length !== 1 ? 's' : ''}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ── Render: Study mode ────────────────────────────────────────
function renderStudy() {
  const main = document.getElementById('main');
  const subj = FLASHCARD_DATA[state.subject];
  const color = state.subject === 'physics' ? 'physics' : 'chemistry';
  const total = state.cards.length;
  const idx = state.currentIndex;

  // All done
  if (idx >= total) {
    const easy   = Object.values(state.ratings).filter(r => r === 'easy').length;
    const medium = Object.values(state.ratings).filter(r => r === 'medium').length;
    const hard   = Object.values(state.ratings).filter(r => r === 'hard').length;

    main.innerHTML = `
      <div class="flashcard-area">
        <div class="area-header">
          <div class="breadcrumb">
            <span onclick="goHome()">Home</span> /
            <span onclick="openSubject('${state.subject}')">${subj.label}</span> /
            ${getSubtopic(state.subject, state.topicId, state.subtopicId)?.title || 'Study'}
          </div>
        </div>
        <div class="done-screen">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🎉</div>
          <h3>Session Complete!</h3>
          <p>You reviewed all ${total} cards in this subtopic.</p>
          <div class="done-scores">
            <div class="done-stat easy"><strong>${easy}</strong><span>Easy</span></div>
            <div class="done-stat medium"><strong>${medium}</strong><span>Medium</span></div>
            <div class="done-stat hard"><strong>${hard}</strong><span>Hard</span></div>
          </div>
          <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
            <button class="ctrl-btn" onclick="restartStudy()">↺ Study again</button>
            <button class="ctrl-btn" onclick="openSubject('${state.subject}')">← Back to ${subj.label}</button>
            <button class="ctrl-btn" onclick="goHome()">🏠 Home</button>
          </div>
        </div>
      </div>
    `;
    return;
  }

  const card = state.cards[idx];
  const progress = Math.round((idx / total) * 100);
  const subtopic = getSubtopic(state.subject, state.topicId, state.subtopicId);

  main.innerHTML = `
    <div class="flashcard-area">
      <div class="area-header">
        <div class="breadcrumb">
          <span onclick="goHome()">Home</span> /
          <span onclick="openSubject('${state.subject}')">${subj.label}</span> /
          ${subtopic?.title || 'Study'}
        </div>
        <h2>${subtopic?.title || 'Flashcards'}</h2>
      </div>

      <div class="toolbar">
        <label class="toggle">
          <input type="checkbox" id="shuffleToggle" ${state.shuffle ? 'checked' : ''} onchange="toggleShuffle(this.checked)">
          <span class="toggle-track"></span>
          🔀 Shuffle
        </label>
        <button class="ctrl-btn" onclick="openStudy('${state.subject}', '${state.topicId}', '${state.subtopicId}')">↺ Restart</button>
      </div>

      <div class="progress-wrap">
        <div class="progress-track">
          <div class="progress-fill ${color}" style="width: ${progress}%"></div>
        </div>
        <div class="progress-label">${idx + 1} / ${total}</div>
      </div>

      <div class="flip-scene" onclick="flipCard()" id="flipScene">
        <div class="flip-card ${state.flipped ? 'flipped' : ''}" id="flipCard">
          <div class="flip-face front">
            <div class="face-label front">Question</div>
            <div class="face-content">
              <p>${card.question}</p>
            </div>
            <div class="flip-hint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              Click to reveal answer
            </div>
          </div>
          <div class="flip-face back ${color}">
            <div class="face-label back ${color}">Answer</div>
            <div class="face-content answer">
              <pre class="answer-text">${card.answer}</pre>
            </div>
          </div>
        </div>
      </div>

      <div class="rating-panel ${state.flipped ? 'visible' : ''}" id="ratingPanel">
        <span class="rating-label">How well did you know this?</span>
        <div class="rating-btns">
          <button class="rating-btn easy"   onclick="rateCard('easy')">😊 Easy</button>
          <button class="rating-btn medium" onclick="rateCard('medium')">🤔 Medium</button>
          <button class="rating-btn hard"   onclick="rateCard('hard')">😓 Hard</button>
        </div>
      </div>

      <div class="card-controls">
        <button class="ctrl-btn" id="prevBtn" onclick="prevCard()" ${idx === 0 ? 'disabled' : ''}>← Previous</button>
        <button class="ctrl-btn" onclick="nextCard()">Next →</button>
        <div class="card-position">${idx + 1} / ${total}</div>
      </div>

      <div class="keyboard-hint">
        <kbd class="kbd">Space</kbd> flip ·
        <kbd class="kbd">→</kbd> next ·
        <kbd class="kbd">←</kbd> previous ·
        <kbd class="kbd">1</kbd> easy &nbsp;<kbd class="kbd">2</kbd> medium &nbsp;<kbd class="kbd">3</kbd> hard
      </div>
    </div>
  `;
}

// ── Navigation ────────────────────────────────────────────────
function goHome() {
  state.view = 'home';
  state.subject = null;
  state.topicId = null;
  state.subtopicId = null;
  state.cards = [];
  state.currentIndex = 0;
  state.flipped = false;
  updateSidebarActive();
  renderHome();
  updateNavBtns();
}

function openSubject(key) {
  state.view = 'subject';
  state.subject = key;
  state.topicId = null;
  state.subtopicId = null;
  state.cards = [];
  state.currentIndex = 0;
  state.flipped = false;
  updateSidebarActive();
  renderSubjectOverview(key);
  updateNavBtns();
}

function openStudy(subjectKey, topicId, subtopicId) {
  const sub = getSubtopic(subjectKey, topicId, subtopicId);
  if (!sub) return;

  state.view = 'study';
  state.subject = subjectKey;
  state.topicId = topicId;
  state.subtopicId = subtopicId;
  state.cards = state.shuffle ? shuffleArray(sub.cards) : [...sub.cards];
  state.currentIndex = 0;
  state.flipped = false;
  state.ratings = {};

  updateSidebarActive();
  renderStudy();
  updateNavBtns();
}

function restartStudy() {
  openStudy(state.subject, state.topicId, state.subtopicId);
}

function updateNavBtns() {
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  if (state.subject) {
    const btn = document.querySelector(`.nav-btn[data-key="${state.subject}"]`);
    if (btn) btn.classList.add('active');
  }
}

// ── Card actions ──────────────────────────────────────────────
function flipCard() {
  state.flipped = !state.flipped;

  const card = document.getElementById('flipCard');
  if (card) card.classList.toggle('flipped', state.flipped);

  const panel = document.getElementById('ratingPanel');
  if (panel) panel.classList.toggle('visible', state.flipped);
}

function nextCard() {
  if (state.currentIndex < state.cards.length) {
    state.currentIndex++;
    state.flipped = false;
    renderStudy();
  }
}

function prevCard() {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    state.flipped = false;
    renderStudy();
  }
}

function rateCard(rating) {
  const card = state.cards[state.currentIndex];
  if (card) state.ratings[card.id] = rating;
  nextCard();
}

function toggleShuffle(checked) {
  state.shuffle = checked;
  // Re-shuffle current study set without restarting
  if (state.subtopicId) {
    const sub = getSubtopic(state.subject, state.topicId, state.subtopicId);
    if (sub) {
      const remaining = sub.cards.slice(state.currentIndex);
      const played = sub.cards.slice(0, state.currentIndex);
      state.cards = [...played, ...(checked ? shuffleArray(remaining) : remaining)];
    }
  }
}

// ── Keyboard shortcuts ────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (state.view !== 'study') return;
  if (e.target.tagName === 'INPUT') return;

  switch (e.key) {
    case ' ':
    case 'Enter':
      e.preventDefault();
      flipCard();
      break;
    case 'ArrowRight':
      e.preventDefault();
      nextCard();
      break;
    case 'ArrowLeft':
      e.preventDefault();
      prevCard();
      break;
    case '1':
      if (state.flipped) rateCard('easy');
      break;
    case '2':
      if (state.flipped) rateCard('medium');
      break;
    case '3':
      if (state.flipped) rateCard('hard');
      break;
  }
});

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderHome();
});
