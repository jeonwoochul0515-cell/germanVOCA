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
let currentView = null;
let userXP = parseInt(localStorage.getItem('germanVocab_userXP') || '0');
let userLevel = Math.floor(Math.sqrt(userXP / 50)) + 1;

// === 고도화 변수 및 상태 관리 ===
let treatCount = parseInt(localStorage.getItem('germanVocab_treats') || '0');
let shieldCount = parseInt(localStorage.getItem('germanVocab_shields') || '0');
let userSavedMnemonics = JSON.parse(localStorage.getItem('germanVocab_userMnemonics') || '{}');

let dailyQuests = {
    date: new Date().toDateString(),
    learnedCount: 0,
    mnemonicWritten: 0,
    petCount: 0,
    claimed: false
};

function initApp() {
    // 다크모드 복원
    if (localStorage.getItem('germanVocab_darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        const btn = document.getElementById('darkModeBtn');
        if (btn) btn.innerHTML = '☀️';
    }

    // 사운드 음소거 상태 복원 및 버튼 UI 싱크
    updateMuteButton();

    const today = new Date().toDateString();
    
    // 일일 퀘스트 복원 및 리셋
    const savedQuests = localStorage.getItem('germanVocab_dailyQuests');
    if (savedQuests) {
        const qState = JSON.parse(savedQuests);
        if (qState.date === today) {
            dailyQuests = qState;
        } else {
            dailyQuests = {
                date: today,
                learnedCount: 0,
                mnemonicWritten: 0,
                petCount: 0,
                claimed: false
            };
            saveQuestsState();
        }
    } else {
        saveQuestsState();
    }

    // Migration from V6 to V7
    let savedState = localStorage.getItem('germanVocabState_V7');
    if (!savedState) {
      savedState = localStorage.getItem('germanVocabState_V6');
      if (savedState) {
        localStorage.setItem('germanVocabState_V7', savedState);
        console.log('Migrated from V6 to V7');
      }
    }
    
    if (savedState) {
        const state = JSON.parse(savedState);
        wordStats = state.wordStats || {};
        dailyHistory = state.dailyHistory || {};
        
        // --- 스트리크 실드 로직 ---
        if (state.lastDate && state.lastDate !== today) {
            const lastDateObj = new Date(state.lastDate);
            const yesterdayObj = new Date();
            yesterdayObj.setDate(yesterdayObj.getDate() - 1);
            
            // 어제 학습을 걸렀을 때
            if (lastDateObj.toDateString() !== yesterdayObj.toDateString()) {
                if (shieldCount > 0) {
                    shieldCount--;
                    localStorage.setItem('germanVocab_shields', shieldCount.toString());
                    // 로컬스토리지 즉시 동기화
                    setTimeout(() => {
                        alert("🛡️ 구스타프가 '스트리크 실드'를 작동하여 대현 님의 연속 공부 스트리크를 보호했습니다! (남은 실드: " + shieldCount + "개)");
                    }, 500);
                }
            }
            
            // 어제 학습 기록 저장
            if (state.dailyDone) {
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

    // 구스타프 쓰다듬기 이벤트 연결
    setTimeout(() => {
        const gustavEl = document.getElementById('home-gustav');
        if (gustavEl) {
            gustavEl.addEventListener('gustav-pet', (e) => {
                const count = e.detail.petCount;
                dailyQuests.petCount = count;
                addXP(5);
                triggerFloatXP(gustavEl, 5);
                
                checkQuests();
                saveQuestsState();
                updateQuestsUI();
            });
        }
    }, 100);

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

    updateQuestsUI();
    updateShieldUI();
    updateTreatsUI();
    
    if (typeof initBackgroundSparkles === 'function') {
        initBackgroundSparkles();
    }
}

/* * ==========================================================================
 * 3. VIEW NAVIGATION
 * ========================================================================== */
const viewOrder = ['home', 'learn', 'quiz', 'stats'];
function switchView(view) {
    if (currentView === view) {
        if (view === 'home') updateDashboard();
        if (view === 'stats') {
            updateStatsPage();
            if (typeof renderEnhancedStats === 'function') renderEnhancedStats();
        }
        if (view === 'learn') renderWords();
        if (view === 'quiz') exitQuiz();
        return;
    }

    const oldView = currentView;
    currentView = view;

    const oldEl = document.getElementById('view-' + oldView);
    const newEl = document.getElementById('view-' + view);
    
    if (!oldEl || !newEl) {
        document.querySelectorAll('.view-page').forEach(v => {
            v.classList.remove('active');
            v.classList.add('hidden');
        });
        if (newEl) {
            newEl.classList.remove('hidden');
            newEl.classList.add('active');
            retriggerStagger(newEl);
        }
    } else {
        const oldIdx = viewOrder.indexOf(oldView);
        const newIdx = viewOrder.indexOf(view);
        const direction = newIdx > oldIdx ? 'right' : 'left';

        // pointer-events lock to prevent rapid spam clicks
        document.body.style.pointerEvents = 'none';

        // Clear existing transition tags
        oldEl.className = oldEl.className.replace(/view-slide-\S+/g, '').trim();
        newEl.className = newEl.className.replace(/view-slide-\S+/g, '').trim();

        // Make the incoming view active
        newEl.classList.remove('hidden');
        newEl.classList.add('active');
        retriggerStagger(newEl);

        // Apply slide animation classes
        if (direction === 'right') {
            oldEl.classList.add('view-slide-out-left');
            newEl.classList.add('view-slide-in-right');
        } else {
            oldEl.classList.add('view-slide-out-right');
            newEl.classList.add('view-slide-in-left');
        }

        setTimeout(() => {
            oldEl.classList.remove('active');
            oldEl.classList.add('hidden');
            oldEl.className = oldEl.className.replace(/view-slide-\S+/g, '').trim();
            newEl.className = newEl.className.replace(/view-slide-\S+/g, '').trim();
            document.body.style.pointerEvents = 'auto';
        }, 390);
    }

    // 탭 활성화
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.view === view);
    });
    updateNavIndicator();

    // 뷰별 갱신
    if (view === 'home') updateDashboard();
    if (view === 'stats') {
        updateStatsPage();
        if (typeof renderEnhancedStats === 'function') renderEnhancedStats();
    }
    if (view === 'learn') renderWords();
    if (view === 'quiz') exitQuiz();
}

// 뷰 진입 시 stagger-in 자식들을 reflow로 다시 트리거
function retriggerStagger(viewEl) {
    if (!viewEl) return;
    viewEl.querySelectorAll('.stagger-in').forEach(container => {
        container.classList.remove('stagger-in');
        void container.offsetWidth;
        container.classList.add('stagger-in');
    });
}

// 하단 nav active 탭 위치로 인디케이터 슬라이드
function updateNavIndicator() {
    const indicator = document.getElementById('nav-indicator');
    if (!indicator) return;
    const activeTab = document.querySelector('.nav-tab.active');
    if (!activeTab) return;
    const bar = activeTab.closest('.nav-bar');
    if (!bar) return;
    const tabRect = activeTab.getBoundingClientRect();
    const barRect = bar.getBoundingClientRect();
    const width = Math.max(24, tabRect.width * 0.5);
    const left = tabRect.left - barRect.left + (tabRect.width - width) / 2;
    indicator.style.left = `${left}px`;
    indicator.style.width = `${width}px`;
    indicator.classList.add('ready');
}

// 탭 ripple 마이크로 인터랙션 - 모든 nav-tab에 위임
document.addEventListener('click', (e) => {
    const tab = e.target.closest('.nav-tab');
    if (!tab) return;
    const rect = tab.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'nav-ripple';
    const size = Math.max(rect.width, rect.height) * 1.4;
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    tab.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
});

// 창 크기 변경 시 인디케이터 재정렬
window.addEventListener('resize', () => {
    if (typeof updateNavIndicator === 'function') updateNavIndicator();
});

/* * ==========================================================================
 * 4. DASHBOARD (HOME VIEW)
 * ========================================================================== */
function updateDashboard() {
    const totalWords = masterVocabList.length;
    const learnedCount = Object.keys(wordStats).length;
    const masteredCount = Object.values(wordStats).filter(s => s.interval >= 4).length;
    const mastery = totalWords ? Math.round((learnedCount / totalWords) * 100) : 0;

    setText('stat-total-words', totalWords, true);
    setText('stat-learned', learnedCount, true);
    setText('stat-mastery', mastery + '%', true);
    setText('remaining-count', currentVocabList.length, true);

    // 진행률
    const done = TARGET_DAILY_COUNT - currentVocabList.length;
    const pct = Math.round((done / TARGET_DAILY_COUNT) * 100);
    setText('progress-done', Math.max(0, done), true);
    setText('progress-total', TARGET_DAILY_COUNT);
    setText('progress-percent', Math.max(0, pct) + '%', true);
    const bar = document.getElementById('progress-bar');
    if (bar) bar.style.width = Math.max(0, pct) + '%';

    // 품사별 카운트 (전체 단어장 기준)
    const counts = { Noun: 0, Verb: 0, Adjective: 0 };
    currentVocabList.forEach(w => counts[w.partOfSpeech]++);
    const total = currentVocabList.length || 1;

    setText('home-count-noun', counts.Noun, true);
    setText('home-count-verb', counts.Verb, true);
    setText('home-count-adj', counts.Adjective, true);

    setWidth('bar-noun', (counts.Noun / total * 100) + '%');
    setWidth('bar-verb', (counts.Verb / total * 100) + '%');
    setWidth('bar-adjective', (counts.Adjective / total * 100) + '%');

    // 마스코트 구스타프 컴포넌트 갱신
    const gustavEl = document.getElementById('home-gustav');
    if (gustavEl) {
        const targetMascotLevel = Math.min(4, userLevel);
        gustavEl.setAttribute('level', targetMascotLevel);
        setText('gustav-level-text', targetMascotLevel);
    }

    // 에빙하우스 기억 잔존율 컴포넌트 갱신
    const forgettingEl = document.getElementById('home-forgetting');
    if (forgettingEl) {
        const retValue = typeof calculateAverageRetention === 'function' ? calculateAverageRetention() : 100;
        forgettingEl.setAttribute('value', retValue);
        const infoEl = document.getElementById('memory-decay-info');
        if (infoEl) {
            if (retValue >= 80) infoEl.textContent = "두뇌 기억 유지도 최상! 🧠";
            else if (retValue >= 50) infoEl.textContent = "복습이 딱 알맞은 시기 ⏰";
            else infoEl.textContent = "망각 속도가 빨라요, 즉시 복습! 🚨";
        }
    }

    updateXPDisplay();
    updateShieldUI();
}

function setText(id, val, animate = false) {
    const el = document.getElementById(id);
    if (!el) return;
    if (!animate) {
        el.textContent = val;
        return;
    }
    // 카운트업: "42" 또는 "42%" 같은 형식에서 숫자 부분만 보간
    const m = String(val).match(/^(-?\d+(?:\.\d+)?)(.*)$/);
    if (!m) {
        el.textContent = val;
        return;
    }
    const target = parseFloat(m[1]);
    const suffix = m[2] || '';
    const startText = (el.textContent || '0').match(/^(-?\d+(?:\.\d+)?)/);
    const start = startText ? parseFloat(startText[1]) : 0;
    if (start === target) {
        el.textContent = `${Math.round(target)}${suffix}`;
        return;
    }
    const duration = 700;
    const startTime = performance.now();
    const isInteger = Number.isInteger(target);
    const step = (now) => {
        const t = Math.min(1, (now - startTime) / duration);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - t, 3);
        const cur = start + (target - start) * eased;
        el.textContent = `${isInteger ? Math.round(cur) : cur.toFixed(1)}${suffix}`;
        if (t < 1) requestAnimationFrame(step);
        else {
            el.textContent = `${isInteger ? Math.round(target) : target.toFixed(1)}${suffix}`;
            el.classList.remove('number-pulse');
            void el.offsetWidth;
            el.classList.add('number-pulse');
        }
    };
    requestAnimationFrame(step);
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

    setText('stats-total-vocab', totalWords, true);
    setText('stats-learned-count', learnedCount, true);
    setText('stats-mastered', masteredCount, true);

    // 연속 학습일 계산
    const streak = calculateStreak();
    setText('stats-streak', streak, true);
    setText('streak-count', streak, true);

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

    // Adaptive ratio based on days since first entry
    const historyDates = Object.keys(dailyHistory);
    let daysSinceFirst = 0;
    if (historyDates.length > 0) {
        const firstDate = historyDates.map(d => new Date(d)).sort((a, b) => a - b)[0];
        daysSinceFirst = Math.floor((Date.now() - firstDate.getTime()) / 86400000);
    }
    let reviewRatio;
    if (daysSinceFirst < 7) reviewRatio = 0.4;
    else if (daysSinceFirst <= 30) reviewRatio = 0.5;
    else reviewRatio = 0.65;

    const reviewCount = Math.floor(needed * reviewRatio);
    shuffleArray(learnedWords);
    newList = [...newList, ...learnedWords.slice(0, reviewCount)];

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

function calcTier(stat) {
  if (!stat || (stat.correct||0) === 0) return 'NEW';
  if ((stat.correct||0) === 1) return 'FAMILIAR';
  if ((stat.correct||0) < 4) return 'DEVELOPING';
  if ((stat.interval||0) < 7) return 'COMPETENT';
  if ((stat.interval||0) < 30) return 'PROFICIENT';
  return 'MASTERED';
}

function addXP(amount) {
  userXP += amount;
  const newLevel = Math.floor(Math.sqrt(userXP / 50)) + 1;
  if (newLevel > userLevel) {
    showLevelUp(newLevel);
  }
  userLevel = newLevel;
  try {
    localStorage.setItem('germanVocab_userXP', userXP.toString());
  } catch (e) {
    console.error('Failed to save XP:', e);
  }
  updateXPDisplay();
}

function updateXPDisplay() {
  const levelEl = document.getElementById('user-level');
  const xpEl = document.getElementById('user-xp');
  if (levelEl) levelEl.textContent = userLevel;
  if (xpEl) xpEl.textContent = userXP;
}

function showLevelUp(level) {
  const badge = document.getElementById('xp-badge');
  if (badge) {
    badge.classList.add('level-up');
    setTimeout(() => badge.classList.remove('level-up'), 1000);
  }
  
  // Gustav level-up reaction
  const gustavEl = document.getElementById('home-gustav');
  if (gustavEl && typeof gustavEl.triggerLevelUpEffect === 'function') {
    const oldMascotLevel = Math.min(4, userLevel);
    const newMascotLevel = Math.min(4, level);
    if (newMascotLevel > oldMascotLevel) {
      setTimeout(() => {
        gustavEl.triggerLevelUpEffect();
      }, 500);
    }
  }
}

function getStreakData() {
  const streak = calculateStreak();
  const badges = [];
  if (streak >= 3) badges.push({ name: '3일 연속', icon: '🔥' });
  if (streak >= 7) badges.push({ name: '1주 연속', icon: '⭐' });
  if (streak >= 30) badges.push({ name: '1개월 연속', icon: '🏆' });
  if (streak >= 100) badges.push({ name: '100일 연속', icon: '💎' });
  return { streak, badges };
}

function handleSwipeLeft(item) {
    const id = item.id;
    
    // 정답 사운드 재생
    if (typeof SoundEngine !== 'undefined') SoundEngine.playSuccess();

    // Enhanced SRS for correct answer
    if (!wordStats[id]) wordStats[id] = { interval: 0, nextReview: 0, attempts: 0, correct: 0, difficulty: 0.3, stability: 1, lastReview: null, tier: 'NEW' };
    const stat = wordStats[id];
    stat.correct = (stat.correct || 0) + 1;
    stat.attempts = (stat.attempts || 0) + 1;
    stat.lastReview = Date.now();

    // FSRS-inspired interval calculation
    const diffMod = 1 + (1 - (stat.difficulty || 0.3)) * 0.5;
    if (stat.interval === 0) stat.interval = 1;
    else if (stat.interval === 1) stat.interval = 3;
    else stat.interval = Math.round(stat.interval * (1.5 + diffMod));

    stat.difficulty = Math.max(0.1, (stat.difficulty || 0.3) - 0.05);
    stat.stability = (stat.stability || 1) * 1.2;
    stat.nextReview = Date.now() + stat.interval * 86400000;

    // Calculate tier
    stat.tier = calcTier(stat);

    // XP
    const xpGain = 10 + Math.round((stat.difficulty || 0.3) * 10);
    addXP(xpGain);

    // 일일 퀘스트 학습 개수 누적
    dailyQuests.learnedCount = (dailyQuests.learnedCount || 0) + 1;
    checkQuests();
    saveQuestsState();
    updateQuestsUI();

    // 말풍선 반응
    if (Math.random() < 0.15) {
        const gustavEl = document.getElementById('home-gustav');
        if (gustavEl) {
            gustavEl.say("정답! 대현 님의 독일어 뇌세포가 성장하고 있어요! 왈!", 3500);
        }
    }

    removeWord(item);
}

function handleSwipeRight(item) {
    const id = item.id;
    
    // 오답 사운드 재생
    if (typeof SoundEngine !== 'undefined') SoundEngine.playFailure();

    if (!wordStats[id]) wordStats[id] = { interval: 0, nextReview: 0, attempts: 0, correct: 0, difficulty: 0.3, stability: 1, lastReview: null, tier: 'NEW' };
    const stat = wordStats[id];
    stat.attempts = (stat.attempts || 0) + 1;
    stat.lastReview = Date.now();
    stat.difficulty = Math.min(1.0, (stat.difficulty || 0.3) + 0.15);
    stat.stability = Math.max(0.1, (stat.stability || 1) * 0.5);
    stat.interval = 0;
    stat.nextReview = Date.now();
    stat.tier = calcTier(stat);

    // Small XP for attempting
    addXP(3);

    // 말풍선 반응 (20% 확률로 연상 서랍 유도)
    if (Math.random() < 0.20) {
        const gustavEl = document.getElementById('home-gustav');
        if (gustavEl) {
            const hasMnemonic = getSystemMnemonic(item.word) || userSavedMnemonics[item.word];
            if (hasMnemonic) {
                gustavEl.say("괜찮아요! 연상 서랍 💡의 암기 힌트를 확인해 보세요! 멍!", 4000);
            } else {
                gustavEl.say("공부는 반복이에요! 제가 끝까지 도와줄게요! 화이팅! 멍!", 3000);
            }
        }
    }

    moveWordToBack(item);
}

function saveState() {
    const done = TARGET_DAILY_COUNT - currentVocabList.length;
    try {
        localStorage.setItem('germanVocabState_V7', JSON.stringify({
            lastDate: new Date().toDateString(),
            currentList: currentVocabList,
            wordStats: wordStats,
            dailyHistory: dailyHistory,
            dailyDone: Math.max(0, done)
        }));
    } catch (e) {
        console.error('Failed to save state:', e);
    }
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
    const glowClasses = { Noun: "glow-noun", Verb: "glow-verb", Adjective: "glow-adjective" };
    card.className = `bg-white p-4 rounded-2xl shadow-sm border border-slate-100 card-touch card-stagger flex flex-col relative overflow-hidden select-none mb-2 ${glowClasses[item.partOfSpeech] || ''}`;
    // 위 10장까지는 진짜 stagger, 11번째부터는 같은 짧은 지연으로 정리
    const delay = Math.min(index, 12) * 0.04;
    card.style.setProperty('--card-delay', `${delay}s`);

    const borderColors = { Noun: "border-l-blue-500", Verb: "border-l-red-500", Adjective: "border-l-green-500" };
    const textColors = { Noun: "text-blue-600", Verb: "text-red-600", Adjective: "text-green-600" };
    card.classList.add("border-l-4", borderColors[item.partOfSpeech] || "border-l-slate-400");

    let mainText = item.partOfSpeech === 'Noun' ? `${item.gender.charAt(0).toUpperCase() + item.gender.slice(1)} ${item.word}` : item.word;
    let textColor = textColors[item.partOfSpeech] || "text-slate-700";

    // 배지 구성
    let badges = '';
    
    // 🎯 내신 필수 / 💯 수능 대비 강조 배지 추가
    if (item.level.startsWith('A')) {
        badges += `<span class="text-[9px] bg-rose-50 text-rose-700 px-1.5 py-0.5 rounded-md font-bold border border-rose-100">🎯 내신 필수</span>`;
    } else if (item.level.startsWith('B')) {
        badges += `<span class="text-[9px] bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded-md font-bold border border-indigo-100">💯 수능 대비</span>`;
    }

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

    // 에빙하우스 기억 잔존율
    const retention = typeof calculateWordRetention === 'function' ? calculateWordRetention(item.id) : 100;
    let retentionBarColor = "bg-emerald-500";
    if (retention < 40) retentionBarColor = "bg-red-500";
    else if (retention < 75) retentionBarColor = "bg-amber-500";

    // 연상 힌트 DB 로드
    const sysMnemonic = typeof getSystemMnemonic === 'function' ? getSystemMnemonic(item.word) : "";
    const userMnemonic = userSavedMnemonics[item.word] || "";

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
        <div class="flex justify-between items-end w-full pointer-events-none mb-2">
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

        <!-- 뇌과학 게이지 & 연상 서랍 토글 바 -->
        <div class="flex items-center justify-between border-t border-slate-100 pt-2.5 mt-1 text-xs">
            <div class="flex items-center gap-1.5 text-slate-400 font-semibold">
                <span>기억도</span>
                <div class="w-16 bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div class="${retentionBarColor} h-2 rounded-full" style="width: ${retention}%"></div>
                </div>
                <span class="font-bold ${retention < 40 ? 'text-red-500' : retention < 75 ? 'text-amber-500' : 'text-emerald-500'}">${retention}%</span>
            </div>
            <button onclick="event.stopPropagation(); toggleMnemonicDrawer(this)" class="text-indigo-600 hover:text-indigo-800 font-bold flex items-center gap-0.5 transition" aria-expanded="false">
                💡 연상 서랍 <span class="arrow-icon transition-transform duration-200">▼</span>
            </button>
        </div>

        <!-- 연상 암기법 접이식 서랍 -->
        <div class="mnemonic-drawer mt-2 bg-indigo-50/50 dark:bg-slate-800/40 rounded-xl p-3 border border-indigo-100/50">
            ${sysMnemonic ? `<div class="mb-2 text-xs text-slate-600 dark:text-slate-300"><span class="font-bold text-indigo-600 dark:text-indigo-400">추천 연상법:</span> ${sysMnemonic}</div>` : ''}
            
            <div class="flex gap-2 items-center mt-1">
                <input type="text" placeholder="${sysMnemonic ? '또는 나만의 연상법을 기록하세요...' : '기억하기 쉬운 나만의 연상법을 기록하세요...'}" 
                       value="${userMnemonic}" 
                       class="mnemonic-input flex-1 px-3 py-1.5 bg-white dark:bg-slate-700 text-xs border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:text-slate-100" 
                       onclick="event.stopPropagation()">
                <button onclick="event.stopPropagation(); saveUserMnemonic(this, '${item.word}')" 
                        class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm active:scale-95 transition">
                    저장
                </button>
            </div>
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
        if (e.target.closest('.speaker-btn') || e.target.closest('.mnemonic-drawer') || e.target.closest('input') || e.target.closest('button')) return;
        startX = e.touches[0].clientX;
        currentX = startX;
        isDragging = true;
        longPressRevealed = false;
        
        // Pick-up state: lift slightly and remove transitions
        card.style.transition = 'none';
        card.style.transform = 'scale(1.025)';
        card.style.zIndex = '50';

        if (isMeaningHidden) {
            longPressTimer = setTimeout(() => {
                const mc = card.querySelector('.meaning-container');
                if (mc && !mc.classList.contains('revealed')) {
                    mc.classList.add('revealed');
                    longPressRevealed = true;
                    if (navigator.vibrate) navigator.vibrate(30);
                }
            }, 1500); // 1.5s is standard for friendly quick preview
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
        
        // Dynamic tilt rotation physics
        const tiltAngle = diffX * 0.07; // 0.07 deg per pixel
        card.style.transform = `translateX(${diffX}px) rotate(${tiltAngle}deg) scale(1.025)`;
        
        card.querySelector('.hint-left').style.opacity = diffX < 0 ? Math.min(-diffX / 100, 1) : 0;
        card.querySelector('.hint-right').style.opacity = diffX > 0 ? Math.min(diffX / 100, 1) : 0;
    }, {passive: true});

    card.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }

        card.style.zIndex = '10';

        if (longPressRevealed) {
            const mc = card.querySelector('.meaning-container');
            if (mc) mc.classList.remove('revealed');
            longPressRevealed = false;
            card.style.transition = 'transform 0.4s var(--spring-bounce)';
            card.style.transform = 'translateX(0) rotate(0deg) scale(1)';
            return;
        }

        const diffX = currentX - startX;
        if (Math.abs(diffX) < 6) {
            toggleCardMeaning(card);
            card.style.transition = 'transform 0.4s var(--spring-bounce)';
            card.style.transform = 'translateX(0) rotate(0deg) scale(1)';
        }
        else if (diffX < -100) { 
            // Fling away left (spin out)
            card.style.transition = 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s';
            card.style.transform = `translateX(-130%) rotate(${-15}deg) scale(0.95)`; 
            setTimeout(() => { handleSwipeLeft(item); speakNextWord(); }, 220); 
        }
        else if (diffX > 100) { 
            // Fling away right (spin out)
            card.style.transition = 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s';
            card.style.transform = `translateX(130%) rotate(${15}deg) scale(0.95)`; 
            setTimeout(() => { handleSwipeRight(item); speakNextWord(); }, 220); 
        }
        else { 
            // Springy bounce-back to center
            card.style.transition = 'transform 0.45s var(--spring-bounce)'; 
            card.style.transform = 'translateX(0) rotate(0deg) scale(1)'; 
            card.querySelector('.hint-left').style.opacity = 0;
            card.querySelector('.hint-right').style.opacity = 0;
        }
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
    
    // 폭죽(Confetti) 구동
    runConfettiEffect();

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
    const qid = q.id;

    // 모든 버튼 비활성화
    document.querySelectorAll('.quiz-option').forEach(b => {
        b.disabled = true;
        if (b.dataset.correct === 'true') b.classList.add('correct');
    });

    if (isCorrect) {
        btn.classList.add('correct');
        triggerQuizRingBlast(btn);
        quizState.correct++;
        // Enhanced SRS for correct quiz answer
        if (!wordStats[qid]) wordStats[qid] = { interval: 0, nextReview: 0, attempts: 0, correct: 0, difficulty: 0.3, stability: 1, lastReview: null, tier: 'NEW' };
        const stat = wordStats[qid];
        stat.correct = (stat.correct || 0) + 1;
        stat.attempts = (stat.attempts || 0) + 1;
        stat.lastReview = Date.now();
        const diffMod = 1 + (1 - (stat.difficulty || 0.3)) * 0.5;
        if (stat.interval === 0) stat.interval = 1;
        else if (stat.interval === 1) stat.interval = 3;
        else stat.interval = Math.round(stat.interval * (1.5 + diffMod));
        stat.difficulty = Math.max(0.1, (stat.difficulty || 0.3) - 0.05);
        stat.stability = (stat.stability || 1) * 1.2;
        stat.nextReview = Date.now() + stat.interval * 86400000;
        stat.tier = calcTier(stat);
        const xpGain = 10 + Math.round((stat.difficulty || 0.3) * 10);
        addXP(xpGain);
    } else {
        btn.classList.add('wrong');
        quizState.wrong++;
        quizState.wrongList.push(q);
        // SRS for incorrect quiz answer
        if (!wordStats[qid]) wordStats[qid] = { interval: 0, nextReview: 0, attempts: 0, correct: 0, difficulty: 0.3, stability: 1, lastReview: null, tier: 'NEW' };
        const stat = wordStats[qid];
        stat.attempts = (stat.attempts || 0) + 1;
        stat.lastReview = Date.now();
        stat.difficulty = Math.min(1.0, (stat.difficulty || 0.3) + 0.15);
        stat.stability = Math.max(0.1, (stat.stability || 1) * 0.5);
        stat.interval = 0;
        stat.nextReview = Date.now();
        stat.tier = calcTier(stat);
        addXP(3);
    }
    saveState();

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
    const qid = q.id;

    document.querySelectorAll('.artikel-btn').forEach(b => {
        b.disabled = true;
        if (b.dataset.correct === 'true') b.classList.add('correct');
    });

    if (isCorrect) {
        btn.classList.add('correct');
        triggerQuizRingBlast(btn);
        quizState.correct++;
        // Enhanced SRS for correct artikel answer
        if (!wordStats[qid]) wordStats[qid] = { interval: 0, nextReview: 0, attempts: 0, correct: 0, difficulty: 0.3, stability: 1, lastReview: null, tier: 'NEW' };
        const stat = wordStats[qid];
        stat.correct = (stat.correct || 0) + 1;
        stat.attempts = (stat.attempts || 0) + 1;
        stat.lastReview = Date.now();
        const diffMod = 1 + (1 - (stat.difficulty || 0.3)) * 0.5;
        if (stat.interval === 0) stat.interval = 1;
        else if (stat.interval === 1) stat.interval = 3;
        else stat.interval = Math.round(stat.interval * (1.5 + diffMod));
        stat.difficulty = Math.max(0.1, (stat.difficulty || 0.3) - 0.05);
        stat.stability = (stat.stability || 1) * 1.2;
        stat.nextReview = Date.now() + stat.interval * 86400000;
        stat.tier = calcTier(stat);
        const xpGain = 10 + Math.round((stat.difficulty || 0.3) * 10);
        addXP(xpGain);
    } else {
        btn.classList.add('wrong');
        quizState.wrong++;
        quizState.wrongList.push(q);
        // SRS for incorrect artikel answer
        if (!wordStats[qid]) wordStats[qid] = { interval: 0, nextReview: 0, attempts: 0, correct: 0, difficulty: 0.3, stability: 1, lastReview: null, tier: 'NEW' };
        const stat = wordStats[qid];
        stat.attempts = (stat.attempts || 0) + 1;
        stat.lastReview = Date.now();
        stat.difficulty = Math.min(1.0, (stat.difficulty || 0.3) + 0.15);
        stat.stability = Math.max(0.1, (stat.stability || 1) * 0.5);
        stat.interval = 0;
        stat.nextReview = Date.now();
        stat.tier = calcTier(stat);
        addXP(3);
    }
    saveState();

    setTimeout(() => {
        quizState.currentIndex++;
        showQuizQuestion();
    }, isCorrect ? 700 : 1200);
}

function triggerQuizRingBlast(btn) {
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const blast = document.createElement('div');
    blast.className = 'quiz-ring-blast';
    blast.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
    blast.style.top = `${rect.top + window.scrollY + rect.height / 2}px`;
    document.body.appendChild(blast);
    
    setTimeout(() => {
        blast.remove();
    }, 550);
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
    try {
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
    } catch (e) {
        console.error('Failed to save quiz history:', e);
    }
}

function exitQuiz() {
    document.getElementById('quiz-active').classList.add('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-setup').classList.remove('hidden');
}

/* * ==========================================================================
 * 11. GUSTAV & BRAIN SCIENCE ADDITIONS (V7)
 * ========================================================================== */

function toggleMnemonicDrawer(btn) {
    const card = btn.closest('.card-touch') || btn.closest('.bg-white');
    if (!card) return;
    const drawer = card.querySelector('.mnemonic-drawer');
    const arrow = btn.querySelector('.arrow-icon');
    if (drawer) {
        const isOpen = drawer.classList.contains('open');
        drawer.classList.toggle('open', !isOpen);
        btn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
        if (arrow) {
            arrow.style.transform = !isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    }
}

function saveUserMnemonic(btn, word) {
    const container = btn.closest('.mnemonic-drawer');
    if (!container) return;
    const input = container.querySelector('.mnemonic-input');
    if (!input) return;
    const value = input.value.trim();
    
    userSavedMnemonics[word] = value;
    localStorage.setItem('germanVocab_userMnemonics', JSON.stringify(userSavedMnemonics));
    
    alert('나만의 연상법이 저장되었습니다! 💡');
    
    if (value.length > 0) {
        dailyQuests.mnemonicWritten = 1;
        checkQuests();
        saveQuestsState();
        updateQuestsUI();
    }
}

function toggleMute() {
    if (typeof SoundEngine !== 'undefined') {
        const currentlyMuted = SoundEngine.isMuted();
        SoundEngine.setMute(!currentlyMuted);
        updateMuteButton();
    }
}

function updateMuteButton() {
    const btn = document.getElementById('muteBtn');
    if (btn && typeof SoundEngine !== 'undefined') {
        const isMuted = SoundEngine.isMuted();
        btn.innerHTML = isMuted ? '🔇' : '🔊';
        btn.setAttribute('aria-label', isMuted ? '음소거 켬' : '음소거 끔');
    }
}

function openShopModal() {
    const shopModal = document.getElementById('shop-modal');
    if (shopModal) {
        shopModal.classList.add('active');
        updateTreatsUI();
    }
}

function closeShopModal() {
    const shopModal = document.getElementById('shop-modal');
    if (shopModal) {
        shopModal.classList.remove('active');
    }
}

function buyStreakShield() {
    if (treatCount >= 50) {
        treatCount -= 50;
        shieldCount += 1;
        localStorage.setItem('germanVocab_treats', treatCount.toString());
        localStorage.setItem('germanVocab_shields', shieldCount.toString());
        
        updateTreatsUI();
        updateShieldUI();
        
        if (typeof SoundEngine !== 'undefined') SoundEngine.playSuccess();
        alert('스트리크 실드(방어막)를 구매했습니다! 🛡️ (보유 개수: ' + shieldCount + '개)');
    } else {
        if (typeof SoundEngine !== 'undefined') SoundEngine.playFailure();
        alert('간식이 부족합니다! 🍖 일일 퀘스트를 완료하여 간식을 모아보세요!');
    }
}

function petGustavDirectly() {
    const gustavEl = document.getElementById('home-gustav');
    if (gustavEl && typeof gustavEl.handlePet === 'function') {
        gustavEl.handlePet();
    }
}

function checkQuests() {
    if (!dailyQuests.claimed) {
        const q1 = (dailyQuests.learnedCount || 0) >= 15;
        const q2 = (dailyQuests.mnemonicWritten || 0) >= 1;
        const q3 = (dailyQuests.petCount || 0) >= 3;
        
        if (q1 && q2 && q3) {
            dailyQuests.claimed = true;
            treatCount += 30;
            localStorage.setItem('germanVocab_treats', treatCount.toString());
            
            updateTreatsUI();
            updateQuestsUI();
            
            if (typeof SoundEngine !== 'undefined') {
                SoundEngine.playQuestComplete();
            }
            
            runConfettiEffect();
            
            setTimeout(() => {
                alert("🎉 축하합니다! 오늘의 두뇌 퀘스트를 모두 완료하여 구스타프의 간식 🍖 30개를 획득하셨습니다! 간식 상점에서 스트리크 실드를 구매해 보세요!");
            }, 600);
        }
    }
}

function saveQuestsState() {
    localStorage.setItem('germanVocab_dailyQuests', JSON.stringify(dailyQuests));
}

function updateQuestsUI() {
    const chk1 = document.getElementById('quest-chk-1');
    const prg1 = document.getElementById('quest-progress-1');
    const lCount = dailyQuests.learnedCount || 0;
    if (chk1) chk1.checked = lCount >= 15;
    if (prg1) prg1.textContent = `${Math.min(lCount, 15)} / 15`;

    const chk2 = document.getElementById('quest-chk-2');
    const prg2 = document.getElementById('quest-progress-2');
    const mCount = dailyQuests.mnemonicWritten || 0;
    if (chk2) chk2.checked = mCount >= 1;
    if (prg2) prg2.textContent = `${Math.min(mCount, 1)} / 1`;

    const chk3 = document.getElementById('quest-chk-3');
    const prg3 = document.getElementById('quest-progress-3');
    const pCount = dailyQuests.petCount || 0;
    if (chk3) chk3.checked = pCount >= 3;
    if (prg3) prg3.textContent = `${Math.min(pCount, 3)} / 3`;
}

function updateShieldUI() {
    const shieldCountEl = document.getElementById('shield-count');
    if (shieldCountEl) {
        shieldCountEl.textContent = shieldCount;
    }
}

function updateTreatsUI() {
    const treatCountEl = document.getElementById('shop-treat-count');
    if (treatCountEl) {
        treatCountEl.textContent = treatCount;
    }
}

function triggerFloatXP(targetEl, amount) {
    if (!targetEl) return;
    const rect = targetEl.getBoundingClientRect();
    const x = rect.left + window.scrollX + rect.width / 2;
    const y = rect.top + window.scrollY;
    
    const floatEl = document.createElement('div');
    floatEl.className = 'xp-float-num';
    floatEl.textContent = `+${amount} XP`;
    floatEl.style.left = `${x}px`;
    floatEl.style.top = `${y}px`;
    floatEl.style.transform = 'translate(-50%, -100%)';
    floatEl.style.position = 'absolute';
    
    document.body.appendChild(floatEl);
    
    setTimeout(() => {
        floatEl.remove();
    }, 800);
}

function runConfettiEffect() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const colors = ['#f54242', '#42f554', '#4287f5', '#f5dc42', '#d542f5', '#42f5d5', '#ff9900'];
    const particles = [];
    const particleCount = 120;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: canvas.height + Math.random() * 20,
            vx: (Math.random() - 0.5) * 8,
            vy: -15 - Math.random() * 15,
            size: 5 + Math.random() * 8,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            gravity: 0.4 + Math.random() * 0.3,
            opacity: 1
        });
    }
    
    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let active = false;
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.rotation += p.rotationSpeed;
            
            if (p.y > canvas.height * 0.8) {
                p.opacity -= 0.02;
            }
            
            if (p.opacity > 0 && p.y < canvas.height + 20) {
                active = true;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation * Math.PI / 180);
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                ctx.restore();
            }
        });
        
        if (active) {
            requestAnimationFrame(update);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    
    update();
}

function calculateWordRetention(wordId) {
    const stat = wordStats[wordId];
    if (!stat || !stat.lastReview) return 100;
    
    const elapsedDays = (Date.now() - stat.lastReview) / 86400000;
    const stability = Math.max(0.2, stat.stability || stat.interval || 1);
    
    const retention = Math.exp(-elapsedDays / stability);
    return Math.max(10, Math.round(retention * 100));
}

function calculateAverageRetention() {
    const ids = Object.keys(wordStats).filter(id => wordStats[id].lastReview);
    if (ids.length === 0) return 100;
    
    let sum = 0;
    ids.forEach(id => {
        sum += calculateWordRetention(id);
    });
    return Math.round(sum / ids.length);
}

function initBackgroundSparkles() {
    const maxParticles = 6;
    for (let i = 0; i < maxParticles; i++) {
        createSparkleParticle(true);
    }
    
    setInterval(() => {
        const activeParticles = document.querySelectorAll('.bg-sparkle').length;
        if (activeParticles < maxParticles) {
            createSparkleParticle(false);
        }
    }, 2500);
}

function createSparkleParticle(randomY) {
    const p = document.createElement('div');
    p.className = 'bg-sparkle';
    
    const size = 6 + Math.random() * 12;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}vw`;
    p.style.top = randomY ? `${Math.random() * 100}vh` : '105vh';
    
    const duration = 8 + Math.random() * 6;
    p.style.animationDuration = `${duration}s`;
    p.style.setProperty('--drift-x', `${(Math.random() - 0.5) * 80}px`);
    
    document.body.appendChild(p);
    
    setTimeout(() => {
        p.remove();
    }, duration * 1000);
}

// Bind to window to ensure global availability
window.initBackgroundSparkles = initBackgroundSparkles;
window.createSparkleParticle = createSparkleParticle;
window.toggleMnemonicDrawer = toggleMnemonicDrawer;
window.saveUserMnemonic = saveUserMnemonic;
window.toggleMute = toggleMute;
window.updateMuteButton = updateMuteButton;
window.openShopModal = openShopModal;
window.closeShopModal = closeShopModal;
window.buyStreakShield = buyStreakShield;
window.petGustavDirectly = petGustavDirectly;
window.checkQuests = checkQuests;
window.saveQuestsState = saveQuestsState;
window.updateQuestsUI = updateQuestsUI;
window.updateShieldUI = updateShieldUI;
window.updateTreatsUI = updateTreatsUI;
window.triggerFloatXP = triggerFloatXP;
window.runConfettiEffect = runConfettiEffect;
window.calculateWordRetention = calculateWordRetention;
window.calculateAverageRetention = calculateAverageRetention;

/* * ==========================================================================
 * 12. INIT
 * ========================================================================== */
initApp();
