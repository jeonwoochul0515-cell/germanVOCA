/* * ==========================================================================
 * 1. PWA & SERVICE WORKER
 * ========================================================================== */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
}

/* * ==========================================================================
 * 2. STATE MANAGEMENT & INITIALIZATION
 * ========================================================================== */
let currentVocabList = [];
let deletedHistory = [];
let isMeaningHidden = false;
let activeFilter = null;
let wordStats = {};
let dailyHistory = {};
const TARGET_DAILY_COUNT = 100;
let currentView = 'home';

function initApp() {
    // 다크모드 복원
    if (localStorage.getItem('germanVocab_darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        const btn = document.getElementById('darkModeBtn');
        if (btn) btn.innerHTML = '☀️';
    }

    const today = new Date().toDateString();
    const savedState = localStorage.getItem('germanVocabState_V6');
    if (savedState) {
        const state = JSON.parse(savedState);
        wordStats = state.wordStats || {};
        dailyHistory = state.dailyHistory || {};
        if (state.lastDate !== today) {
            // 어제 학습 기록 저장
            if (state.lastDate && state.dailyDone) {
                dailyHistory[state.lastDate] = state.dailyDone;
            }
            fillList(state.currentList || []);
        } else {
            currentVocabList = state.currentList;
        }
    } else {
        // V5에서 마이그레이션 시도
        const oldState = localStorage.getItem('germanVocabState_V5');
        if (oldState) {
            const state = JSON.parse(oldState);
            wordStats = state.wordStats || {};
            currentVocabList = state.currentList || [];
            if (state.lastDate !== today) {
                fillList(currentVocabList);
            }
        } else {
            fillList([]);
        }
    }

    saveState();
    renderWords();
    updateDashboard();
    switchView('home');

    // 오늘 날짜 표시
    const dateEl = document.getElementById('today-date');
    if (dateEl) {
        const d = new Date();
        dateEl.textContent = `${d.getMonth()+1}/${d.getDate()} (${['일','월','화','수','목','금','토'][d.getDay()]})`;
    }
}

/* * ==========================================================================
 * 3. VIEW NAVIGATION
 * ========================================================================== */
function switchView(view) {
    currentView = view;
    document.querySelectorAll('.view-page').forEach(v => {
        v.classList.remove('active');
        v.classList.add('hidden');
    });
    const target = document.getElementById('view-' + view);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('active');
    }

    // 탭 활성화
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.view === view);
    });

    // 뷰별 갱신
    if (view === 'home') updateDashboard();
    if (view === 'stats') updateStatsPage();
    if (view === 'learn') renderWords();
    if (view === 'quiz') exitQuiz();
}

/* * ==========================================================================
 * 4. DASHBOARD (HOME VIEW)
 * ========================================================================== */
function updateDashboard() {
    const totalWords = masterVocabList.length;
    const learnedCount = Object.keys(wordStats).length;
    const masteredCount = Object.values(wordStats).filter(s => s.interval >= 4).length;
    const mastery = totalWords ? Math.round((learnedCount / totalWords) * 100) : 0;

    setText('stat-total-words', totalWords);
    setText('stat-learned', learnedCount);
    setText('stat-mastery', mastery + '%');
    setText('remaining-count', currentVocabList.length);

    // 진행률
    const done = TARGET_DAILY_COUNT - currentVocabList.length;
    const pct = Math.round((done / TARGET_DAILY_COUNT) * 100);
    setText('progress-done', Math.max(0, done));
    setText('progress-total', TARGET_DAILY_COUNT);
    setText('progress-percent', Math.max(0, pct) + '%');
    const bar = document.getElementById('progress-bar');
    if (bar) bar.style.width = Math.max(0, pct) + '%';

    // 품사별 카운트 (전체 단어장 기준)
    const counts = { Noun: 0, Verb: 0, Adjective: 0 };
    currentVocabList.forEach(w => counts[w.partOfSpeech]++);
    const total = currentVocabList.length || 1;

    setText('home-count-noun', counts.Noun);
    setText('home-count-verb', counts.Verb);
    setText('home-count-adj', counts.Adjective);

    setWidth('bar-noun', (counts.Noun / total * 100) + '%');
    setWidth('bar-verb', (counts.Verb / total * 100) + '%');
    setWidth('bar-adjective', (counts.Adjective / total * 100) + '%');
}

function setText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
}

function setWidth(id, w) {
    const el = document.getElementById(id);
    if (el) el.style.width = w;
}

/* * ==========================================================================
 * 5. STATS PAGE
 * ========================================================================== */
function updateStatsPage() {
    const totalWords = masterVocabList.length;
    const learnedCount = Object.keys(wordStats).length;
    const masteredCount = Object.values(wordStats).filter(s => s.interval >= 4).length;

    setText('stats-total-vocab', totalWords);
    setText('stats-learned-count', learnedCount);
    setText('stats-mastered', masteredCount);

    // 연속 학습일 계산
    const streak = calculateStreak();
    setText('stats-streak', streak);

    // 레벨별 진행도
    renderLevelProgress();

    // 최근 기록
    renderHistory();
}

function calculateStreak() {
    let streak = 0;
    const d = new Date();
    // 오늘 학습했으면 오늘부터, 아니면 어제부터 체크
    const todayDone = TARGET_DAILY_COUNT - currentVocabList.length;
    if (todayDone > 0) {
        streak = 1;
        d.setDate(d.getDate() - 1);
    }
    while (dailyHistory[d.toDateString()]) {
        streak++;
        d.setDate(d.getDate() - 1);
    }
    return streak;
}

function renderLevelProgress() {
    const container = document.getElementById('level-progress-container');
    if (!container) return;

    const levels = {};
    masterVocabList.forEach(w => {
        if (!levels[w.level]) levels[w.level] = { total: 0, learned: 0 };
        levels[w.level].total++;
        if (wordStats[w.id]) levels[w.level].learned++;
    });

    const levelOrder = ['A1', 'A2', 'B1', 'B2'];
    const colors = { A1: 'emerald', A2: 'blue', B1: 'purple', B2: 'rose' };

    container.innerHTML = levelOrder.filter(l => levels[l]).map(level => {
        const data = levels[level];
        const pct = Math.round((data.learned / data.total) * 100);
        const c = colors[level] || 'slate';
        return `
            <div class="flex items-center gap-3">
                <span class="w-10 text-xs font-bold text-${c}-600 bg-${c}-100 text-center py-0.5 rounded">${level}</span>
                <div class="flex-1 bg-slate-100 rounded-full h-3 relative overflow-hidden">
                    <div class="bg-${c}-500 h-3 rounded-full transition-all" style="width:${pct}%"></div>
                </div>
                <span class="text-xs text-slate-500 w-20 text-right">${data.learned}/${data.total} (${pct}%)</span>
            </div>
        `;
    }).join('');
}

function renderHistory() {
    const container = document.getElementById('history-container');
    if (!container) return;

    const entries = Object.entries(dailyHistory).sort((a, b) => new Date(b[0]) - new Date(a[0])).slice(0, 7);

    if (!entries.length) {
        container.innerHTML = '<p class="text-sm text-slate-400 text-center py-4">아직 학습 기록이 없습니다. 첫 학습을 시작해보세요!</p>';
        return;
    }

    container.innerHTML = entries.map(([date, count]) => {
        const d = new Date(date);
        const dateStr = `${d.getMonth()+1}/${d.getDate()} (${['일','월','화','수','목','금','토'][d.getDay()]})`;
        return `
            <div class="flex items-center justify-between bg-slate-50 rounded-xl px-4 py-3">
                <span class="text-sm text-slate-600 font-medium">${dateStr}</span>
                <span class="text-sm font-bold text-indigo-600">${count}개 학습</span>
            </div>
        `;
    }).join('');
}

/* * ==========================================================================
 * 6. CORE LOGIC (SRS & LIST MANAGEMENT)
 * ========================================================================== */
function fillList(baseList) {
    let newList = [...baseList];
    const needed = TARGET_DAILY_COUNT - newList.length;
    if (needed <= 0) { currentVocabList = newList; return; }

    const learnedWords = masterVocabList.filter(w => wordStats[w.id] && !newList.some(nl => nl.id === w.id));
    const newWords = masterVocabList.filter(w => !wordStats[w.id] && !newList.some(nl => nl.id === w.id));

    const halfNeeded = Math.floor(needed / 2);
    shuffleArray(learnedWords);
    newList = [...newList, ...learnedWords.slice(0, halfNeeded)];

    const remainingNeeded = TARGET_DAILY_COUNT - newList.length;
    shuffleArray(newWords);
    newList = [...newList, ...newWords.slice(0, remainingNeeded)];

    if (newList.length < TARGET_DAILY_COUNT) {
        const remainingAll = masterVocabList.filter(w => !newList.some(nl => nl.id === w.id));
        shuffleArray(remainingAll);
        newList = [...newList, ...remainingAll.slice(0, TARGET_DAILY_COUNT - newList.length)];
    }

    shuffleArray(newList);
    currentVocabList = newList;
}

function handleSwipeLeft(item) {
    const stat = wordStats[item.id] || { interval: 0, nextReview: 0 };
    let newInterval = stat.interval === 0 ? 1 : stat.interval * 2;
    wordStats[item.id] = { interval: newInterval, nextReview: Date.now() + (newInterval * 24 * 60 * 60 * 1000) };
    removeWord(item);
}

function handleSwipeRight(item) {
    wordStats[item.id] = { interval: 0, nextReview: Date.now() };
    moveWordToBack(item);
}

function saveState() {
    const done = TARGET_DAILY_COUNT - currentVocabList.length;
    localStorage.setItem('germanVocabState_V6', JSON.stringify({
        lastDate: new Date().toDateString(),
        currentList: currentVocabList,
        wordStats: wordStats,
        dailyHistory: dailyHistory,
        dailyDone: Math.max(0, done)
    }));
    updateCounts();
    updateUndoButton();
    setText('remaining-count', currentVocabList.length);
}

/* * ==========================================================================
 * 7. RENDERING
 * ========================================================================== */
function renderWords() {
    const container = document.getElementById('word-container');
    if (!container) return;
    container.innerHTML = '';

    let listToRender = activeFilter ? currentVocabList.filter(item => item.partOfSpeech === activeFilter) : currentVocabList;

    if (currentVocabList.length === 0) {
        // 오늘 학습 기록 저장
        dailyHistory[new Date().toDateString()] = TARGET_DAILY_COUNT;
        triggerCelebration();
        setTimeout(() => {
            fillList([]);
            saveState();
            renderWords();
            closeCelebration();
        }, 1500);
        return;
    }

    listToRender.forEach((item, index) => {
        container.appendChild(createCard(item, index));
    });
}

function createCard(item, index) {
    const card = document.createElement('div');
    card.className = "bg-white p-4 rounded-2xl shadow-sm border border-slate-100 card-touch flex flex-col relative overflow-hidden select-none mb-1";

    const borderColors = { Noun: "border-l-blue-500", Verb: "border-l-red-500", Adjective: "border-l-green-500" };
    const textColors = { Noun: "text-blue-600", Verb: "text-red-600", Adjective: "text-green-600" };
    card.classList.add("border-l-4", borderColors[item.partOfSpeech] || "border-l-slate-400");

    let mainText = item.partOfSpeech === 'Noun' ? `${item.gender.charAt(0).toUpperCase() + item.gender.slice(1)} ${item.word}` : item.word;
    let textColor = textColors[item.partOfSpeech] || "text-slate-700";

    // 배지
    let badges = '';
    if (item.cognate) badges += `<span class="text-[9px] bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded-md font-bold border border-indigo-100">🌱 동일어원</span>`;
    if (item.polysemy) badges += `<span class="text-[9px] bg-orange-50 text-orange-600 px-1.5 py-0.5 rounded-md font-bold border border-orange-100">📚 다의어</span>`;
    const compound = compoundData[item.id];
    if (compound) badges += `<span class="text-[9px] bg-pink-50 text-pink-600 px-1.5 py-0.5 rounded-md font-bold border border-pink-100">🔗 결합어</span>`;
    const rektion = rektionData[item.id];
    if (rektion) {
        if (rektion.type === 'reflexive') {
            badges += `<span class="text-[9px] bg-purple-50 text-purple-600 px-1.5 py-0.5 rounded-md font-bold border border-purple-100">🪞 재귀동사</span>`;
        } else {
            badges += `<span class="text-[9px] bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded-md font-bold border border-amber-100">🔗 전치사 짝꿍</span>`;
        }
    }

    let levelColor = item.level.startsWith('A') ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-purple-50 text-purple-700 border-purple-200";

    card.innerHTML = `
        <div class="swipe-hint hint-left font-bold text-emerald-500 text-xs">알아요 ✅</div>
        <div class="swipe-hint hint-right font-bold text-orange-500 text-xs">몰라요 ❓</div>
        <div class="flex justify-between items-start w-full pointer-events-none mb-1">
            <div class="flex items-center flex-wrap gap-1">
                <span class="font-bold text-xl ${textColor}">${mainText}</span>
                ${badges}
            </div>
            <span class="text-[10px] ${levelColor} px-1.5 py-0.5 rounded-md font-bold border">${item.level}</span>
        </div>
        <div class="flex justify-between items-end w-full pointer-events-none">
            <div class="flex flex-col w-full meaning-container transition-opacity duration-300 ${isMeaningHidden ? '' : 'revealed'}">
                <span class="text-slate-800 font-medium text-lg leading-tight">${item.meaning}</span>
                <span class="text-slate-400 text-xs italic mt-0.5">${item.english}</span>
                ${rektion ? buildRektionDisplay(rektion) : ''}
                ${compound ? buildCompoundEtymology(compound) : ''}
            </div>
            <button class="speaker-btn pointer-events-auto text-slate-300 hover:text-indigo-600 p-2 transition z-10" onclick="event.stopPropagation(); speak('${item.partOfSpeech === 'Noun' ? item.gender + ' ' + item.word : item.word}')">
                <span class="text-xl">🔊</span>
            </button>
        </div>
    `;
    attachSwipeEvents(card, item, index);
    return card;
}

/* * ==========================================================================
 * 8. SWIPE & INTERACTION
 * ========================================================================== */
function attachSwipeEvents(card, item, index) {
    let startX = 0, currentX = 0, isDragging = false;
    let longPressTimer = null, longPressRevealed = false;

    card.addEventListener('touchstart', e => {
        if (e.target.closest('.speaker-btn')) return;
        startX = e.touches[0].clientX;
        currentX = startX;
        isDragging = true;
        longPressRevealed = false;
        card.style.transition = 'none';

        if (isMeaningHidden) {
            longPressTimer = setTimeout(() => {
                const mc = card.querySelector('.meaning-container');
                if (mc && !mc.classList.contains('revealed')) {
                    mc.classList.add('revealed');
                    longPressRevealed = true;
                    if (navigator.vibrate) navigator.vibrate(30);
                }
            }, 2000);
        }
    }, {passive: true});

    card.addEventListener('touchmove', e => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        const diffX = currentX - startX;
        if (Math.abs(diffX) > 10 && longPressTimer) {
            clearTimeout(longPressTimer);
            longPressTimer = null;
        }
        card.style.transform = `translateX(${diffX}px)`;
        card.querySelector('.hint-left').style.opacity = diffX < 0 ? Math.min(-diffX / 100, 1) : 0;
        card.querySelector('.hint-right').style.opacity = diffX > 0 ? Math.min(diffX / 100, 1) : 0;
    }, {passive: true});

    card.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }

        if (longPressRevealed) {
            const mc = card.querySelector('.meaning-container');
            if (mc) mc.classList.remove('revealed');
            longPressRevealed = false;
            card.style.transition = 'transform 0.3s';
            card.style.transform = 'translateX(0)';
            return;
        }

        const diffX = currentX - startX;
        if (Math.abs(diffX) < 5) toggleCardMeaning(card);
        else if (diffX < -100) { card.style.transform = 'translateX(-120%)'; setTimeout(() => { handleSwipeLeft(item); speakNextWord(); }, 200); }
        else if (diffX > 100) { card.style.transform = 'translateX(120%)'; setTimeout(() => { handleSwipeRight(item); speakNextWord(); }, 200); }
        else { card.style.transition = 'transform 0.3s'; card.style.transform = 'translateX(0)'; }
    });
}

function speakNextWord() {
    const list = activeFilter ? currentVocabList.filter(w => w.partOfSpeech === activeFilter) : currentVocabList;
    if (!list.length) return;
    const next = list[0];
    const text = next.partOfSpeech === 'Noun' ? next.gender + ' ' + next.word : next.word;
    setTimeout(() => speak(text), 300);
}

/* * ==========================================================================
 * 9. UTILITIES
 * ========================================================================== */
function removeWord(item) {
    const idx = currentVocabList.indexOf(item);
    if (idx > -1) { deletedHistory.push(item); currentVocabList.splice(idx, 1); renderWords(); saveState(); }
}

function moveWordToBack(item) {
    const idx = currentVocabList.indexOf(item);
    if (idx > -1) { currentVocabList.push(currentVocabList.splice(idx, 1)[0]); renderWords(); saveState(); }
}

function undoDelete() {
    if (deletedHistory.length) { currentVocabList.unshift(deletedHistory.pop()); renderWords(); saveState(); }
}

function toggleMeanings() {
    isMeaningHidden = !isMeaningHidden;
    const btn = document.getElementById('toggleBtn');
    btn.innerText = isMeaningHidden ? "👁️ 뜻 보이기" : "👁️ 뜻 가리기";
    btn.classList.toggle('bg-indigo-600', !isMeaningHidden);
    btn.classList.toggle('bg-slate-500', isMeaningHidden);
    document.body.classList.toggle('hide-meaning', isMeaningHidden);
    if (!isMeaningHidden) document.querySelectorAll('.revealed').forEach(el => el.classList.remove('revealed'));
}

function toggleCardMeaning(card) {
    if (isMeaningHidden) card.querySelector('.meaning-container').classList.toggle('revealed');
}

function toggleFilter(pos) {
    activeFilter = activeFilter === pos ? null : pos;
    renderWords();
    updateCounts();
}

function updateCounts() {
    const counts = { Noun: 0, Verb: 0, Adjective: 0 };
    currentVocabList.forEach(item => counts[item.partOfSpeech]++);
    ['noun', 'verb', 'adjective'].forEach(pos => {
        const el = document.getElementById(`count-${pos}`);
        if (el) el.innerText = counts[pos.charAt(0).toUpperCase() + pos.slice(1)];
    });
    const totalEl = document.getElementById('count-total');
    if (totalEl) totalEl.innerText = currentVocabList.length;
}

function updateUndoButton() {
    const btn = document.getElementById('undoBtn');
    if (btn) btn.classList.toggle('hidden', !deletedHistory.length);
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function shuffleCurrentList() { shuffleArray(currentVocabList); renderWords(); }

function resetList() {
    if (confirm('초기화하시겠습니까? 학습 진행 상황은 유지됩니다.')) {
        const savedStats = { ...wordStats };
        const savedHistory = { ...dailyHistory };
        fillList([]);
        wordStats = savedStats;
        dailyHistory = savedHistory;
        saveState();
        renderWords();
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('germanVocab_darkMode', isDark);
    const btn = document.getElementById('darkModeBtn');
    if (btn) btn.innerHTML = isDark ? '☀️' : '🌙';
}

function buildCompoundEtymology(compound) {
    let partsHtml = '';
    for (let i = 0; i < compound.parts.length; i++) {
        if (i > 0 && compound.parts[i] !== 's') {
            partsHtml += `<span class="compound-plus">+</span>`;
        }
        if (compound.parts[i] === 's') {
            partsHtml += `<span class="compound-part" style="padding:1px 3px;"><span class="compound-part-word" style="font-size:10px;">s</span><span class="compound-part-meaning">${compound.partMeanings[i]}</span></span>`;
        } else {
            partsHtml += `<span class="compound-part"><span class="compound-part-word">${compound.parts[i]}</span><span class="compound-part-meaning">${compound.partMeanings[i]}</span></span>`;
        }
    }
    return `<div class="compound-etymology mt-1">
        <div class="compound-parts">${partsHtml}</div>
        <div class="compound-note">${compound.note}</div>
    </div>`;
}

function buildRektionDisplay(rektion) {
    if (rektion.patterns.length === 0) {
        return `<div class="rektion-box case-reflexive mt-1">
            <div class="rektion-formula">
                <span class="rektion-sich">sich</span>
                <span class="rektion-verb">재귀동사 (Reflexivverb)</span>
            </div>
            <div class="rektion-meaning-ko">이 동사는 항상 "sich"와 함께 씁니다</div>
        </div>`;
    }

    const primaryCase = rektion.patterns[0].case;
    const boxClass = primaryCase === 'Akk' ? 'case-akk' : 'case-dat';

    let patternsHtml = rektion.patterns.map((pat, i) => {
        const caseClass = pat.case === 'Akk' ? 'rektion-case-akk' : 'rektion-case-dat';
        const caseLabel = pat.case === 'Akk' ? 'Akk. (4격)' : 'Dat. (3격)';
        const verbPart = pat.formula.replace('sich ', '').split(' ')[0];

        let patHtml = i > 0 ? '<div class="rektion-separator"></div>' : '';
        patHtml += `<div class="rektion-formula">`;
        if (rektion.isReflexive) patHtml += `<span class="rektion-sich">sich</span>`;
        patHtml += `<span class="rektion-verb">${verbPart}</span>`;
        patHtml += `<span class="rektion-prep">${pat.prep}</span>`;
        patHtml += `<span class="${caseClass}">+ ${caseLabel}</span>`;
        patHtml += `</div>`;
        patHtml += `<div class="rektion-meaning-ko">${pat.meaningKo}</div>`;
        if (pat.example) {
            patHtml += `<div class="rektion-example">${pat.example}<div class="rektion-example-ko">${pat.exampleKo}</div></div>`;
        }
        return patHtml;
    }).join('');

    return `<div class="rektion-box ${boxClass} mt-1">${patternsHtml}</div>`;
}

function speak(text) {
    if ('speechSynthesis' in window) {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'de-DE';
        u.rate = 0.8;
        window.speechSynthesis.speak(u);
    }
}

function triggerCelebration() {
    const ov = document.getElementById('celebration-overlay');
    if (ov) ov.classList.add('active');
    const au = document.getElementById('applause-sound');
    if (au) au.play().catch(() => {});
}

function closeCelebration() {
    const ov = document.getElementById('celebration-overlay');
    if (ov) ov.classList.remove('active');
}

/* * ==========================================================================
 * 10. QUIZ SYSTEM
 * ========================================================================== */
const QUIZ_COUNT = 10;
let quizState = {
    mode: null,       // 'de2ko' | 'ko2de' | 'listen' | 'artikel'
    questions: [],
    currentIndex: 0,
    correct: 0,
    wrong: 0,
    wrongList: [],
    answered: false
};

function startQuiz(mode) {
    quizState.mode = mode;
    quizState.currentIndex = 0;
    quizState.correct = 0;
    quizState.wrong = 0;
    quizState.wrongList = [];
    quizState.answered = false;

    // 학습한 단어 우선, 없으면 전체에서
    let pool = masterVocabList.filter(w => wordStats[w.id]);
    if (pool.length < 20) pool = [...masterVocabList];

    // 관사 퀴즈는 명사만
    if (mode === 'artikel') {
        pool = pool.filter(w => w.partOfSpeech === 'Noun' && w.gender);
    }

    shuffleArray(pool);
    quizState.questions = pool.slice(0, QUIZ_COUNT);

    // 문제가 부족하면
    if (quizState.questions.length < 4) {
        alert('퀴즈를 진행하기에 단어가 부족합니다. 먼저 학습을 진행해주세요!');
        return;
    }

    document.getElementById('quiz-setup').classList.add('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-active').classList.remove('hidden');

    const labels = { de2ko: '독일어 → 한국어', ko2de: '한국어 → 독일어', listen: '듣기 퀴즈', artikel: '관사 퀴즈' };
    setText('quiz-mode-label', labels[mode]);

    showQuizQuestion();
}

function showQuizQuestion() {
    const q = quizState.questions[quizState.currentIndex];
    if (!q) { showQuizResult(); return; }

    quizState.answered = false;
    const total = quizState.questions.length;
    const cur = quizState.currentIndex + 1;

    setText('quiz-progress', `${cur}/${total}`);
    const pBar = document.getElementById('quiz-progress-bar');
    if (pBar) pBar.style.width = (cur / total * 100) + '%';

    const questionCard = document.getElementById('quiz-question-card');
    const listenBtn = document.getElementById('quiz-listen-btn');
    const optionsDiv = document.getElementById('quiz-options');

    listenBtn.classList.add('hidden');

    if (quizState.mode === 'de2ko') {
        setText('quiz-hint-label', '다음 단어의 뜻은?');
        const mainWord = q.partOfSpeech === 'Noun' ? `${q.gender} ${q.word}` : q.word;
        setText('quiz-question-word', mainWord);
        setText('quiz-question-sub', q.english);
        renderMultipleChoice(q, 'meaning');

    } else if (quizState.mode === 'ko2de') {
        setText('quiz-hint-label', '다음 뜻의 독일어 단어는?');
        setText('quiz-question-word', q.meaning);
        setText('quiz-question-sub', q.english);
        renderMultipleChoice(q, 'word');

    } else if (quizState.mode === 'listen') {
        setText('quiz-hint-label', '들리는 단어를 맞추세요');
        setText('quiz-question-word', '🎧');
        setText('quiz-question-sub', '아래 버튼을 눌러 들어보세요');
        listenBtn.classList.remove('hidden');
        renderMultipleChoice(q, 'word');
        // 자동 재생
        setTimeout(() => quizPlayAudio(), 400);

    } else if (quizState.mode === 'artikel') {
        setText('quiz-hint-label', '이 명사의 관사는?');
        setText('quiz-question-word', q.word);
        setText('quiz-question-sub', q.meaning);
        renderArtikelOptions(q);
    }
}

function renderMultipleChoice(correctItem, answerField) {
    const optionsDiv = document.getElementById('quiz-options');

    // answerField: 'meaning' = 뜻을 보기로, 'word' = 단어를 보기로
    let pool = masterVocabList.filter(w => w.id !== correctItem.id && w.partOfSpeech === correctItem.partOfSpeech);
    if (pool.length < 3) pool = masterVocabList.filter(w => w.id !== correctItem.id);
    shuffleArray(pool);
    const distractors = pool.slice(0, 3);

    const allOptions = [correctItem, ...distractors];
    shuffleArray(allOptions);

    optionsDiv.innerHTML = allOptions.map((opt, idx) => {
        let label;
        if (answerField === 'meaning') {
            label = opt.meaning;
        } else {
            label = opt.partOfSpeech === 'Noun' ? `${opt.gender} ${opt.word}` : opt.word;
        }
        return `<button class="quiz-option" onclick="handleQuizAnswer(this, ${opt.id === correctItem.id}, ${correctItem.id})" data-correct="${opt.id === correctItem.id}">${label}</button>`;
    }).join('');
}

function renderArtikelOptions(correctItem) {
    const optionsDiv = document.getElementById('quiz-options');
    const articles = ['der', 'die', 'das'];
    const correctGender = correctItem.gender;

    optionsDiv.innerHTML = `<div class="flex gap-3">` + articles.map(art => {
        const isCorrect = art === correctGender;
        const colors = { der: 'text-blue-600', die: 'text-red-500', das: 'text-green-600' };
        return `<button class="artikel-btn ${colors[art]}" onclick="handleArtikelAnswer(this, ${isCorrect}, '${correctGender}')" data-artikel="${art}" data-correct="${isCorrect}">
            <div class="text-2xl">${art}</div>
            <div class="text-[10px] mt-1 opacity-60">${art === 'der' ? '남성' : art === 'die' ? '여성' : '중성'}</div>
        </button>`;
    }).join('') + `</div>`;
}

function handleQuizAnswer(btn, isCorrect, correctId) {
    if (quizState.answered) return;
    quizState.answered = true;

    const q = quizState.questions[quizState.currentIndex];

    // 모든 버튼 비활성화
    document.querySelectorAll('.quiz-option').forEach(b => {
        b.disabled = true;
        if (b.dataset.correct === 'true') b.classList.add('correct');
    });

    if (isCorrect) {
        btn.classList.add('correct');
        quizState.correct++;
    } else {
        btn.classList.add('wrong');
        quizState.wrong++;
        quizState.wrongList.push(q);
    }

    // 다음 문제로
    setTimeout(() => {
        quizState.currentIndex++;
        showQuizQuestion();
    }, isCorrect ? 700 : 1200);
}

function handleArtikelAnswer(btn, isCorrect, correctGender) {
    if (quizState.answered) return;
    quizState.answered = true;

    const q = quizState.questions[quizState.currentIndex];

    document.querySelectorAll('.artikel-btn').forEach(b => {
        b.disabled = true;
        if (b.dataset.correct === 'true') b.classList.add('correct');
    });

    if (isCorrect) {
        btn.classList.add('correct');
        quizState.correct++;
    } else {
        btn.classList.add('wrong');
        quizState.wrong++;
        quizState.wrongList.push(q);
    }

    setTimeout(() => {
        quizState.currentIndex++;
        showQuizQuestion();
    }, isCorrect ? 700 : 1200);
}

function quizPlayAudio() {
    const q = quizState.questions[quizState.currentIndex];
    if (!q) return;
    const text = q.partOfSpeech === 'Noun' ? q.gender + ' ' + q.word : q.word;
    speak(text);
}

function showQuizResult() {
    document.getElementById('quiz-active').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');

    const total = quizState.correct + quizState.wrong;
    const pct = total ? Math.round((quizState.correct / total) * 100) : 0;

    setText('result-correct', quizState.correct);
    setText('result-wrong', quizState.wrong);
    setText('result-score', pct + '%');

    // 결과 메시지
    let emoji, title, subtitle;
    if (pct === 100) { emoji = '🏆'; title = 'Perfekt!'; subtitle = '모든 문제를 맞혔습니다!'; }
    else if (pct >= 80) { emoji = '🎉'; title = 'Sehr gut!'; subtitle = '아주 잘했어요!'; }
    else if (pct >= 60) { emoji = '👍'; title = 'Gut gemacht!'; subtitle = '조금만 더 연습하면 완벽해요!'; }
    else if (pct >= 40) { emoji = '💪'; title = 'Weiter so!'; subtitle = '계속 연습하면 늘어요!'; }
    else { emoji = '📚'; title = 'Übung macht den Meister!'; subtitle = '반복 학습이 최고의 방법이에요!'; }

    setText('result-emoji', emoji);
    setText('result-title', title);
    setText('result-subtitle', subtitle);

    // 오답 리스트
    const wrongListDiv = document.getElementById('result-wrong-list');
    const wrongContainer = document.getElementById('wrong-words-container');
    if (quizState.wrongList.length > 0) {
        wrongListDiv.classList.remove('hidden');
        wrongContainer.innerHTML = quizState.wrongList.map(w => {
            const word = w.partOfSpeech === 'Noun' ? `${w.gender} ${w.word}` : w.word;
            const borderColor = w.partOfSpeech === 'Noun' ? 'border-l-blue-400' : w.partOfSpeech === 'Verb' ? 'border-l-red-400' : 'border-l-green-400';
            return `<div class="flex items-center justify-between bg-slate-50 rounded-xl px-4 py-3 border-l-4 ${borderColor}">
                <div>
                    <span class="font-bold text-slate-700 text-sm">${word}</span>
                    <span class="text-xs text-slate-400 ml-2">${w.meaning}</span>
                </div>
                <button onclick="speak('${w.partOfSpeech === 'Noun' ? w.gender + ' ' + w.word : w.word}')" class="text-lg">🔊</button>
            </div>`;
        }).join('');
    } else {
        wrongListDiv.classList.add('hidden');
    }

    // 퀴즈 통계 저장
    saveQuizHistory(quizState.mode, pct, quizState.correct, quizState.wrong);
}

function saveQuizHistory(mode, score, correct, wrong) {
    const key = 'germanVocab_quizHistory';
    let history = JSON.parse(localStorage.getItem(key) || '[]');
    history.push({
        date: new Date().toISOString(),
        mode: mode,
        score: score,
        correct: correct,
        wrong: wrong
    });
    // 최근 50개만 유지
    if (history.length > 50) history = history.slice(-50);
    localStorage.setItem(key, JSON.stringify(history));
}

function exitQuiz() {
    document.getElementById('quiz-active').classList.add('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-setup').classList.remove('hidden');
}

/* * ==========================================================================
 * 11. INIT
 * ========================================================================== */
initApp();
