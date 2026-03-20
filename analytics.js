// ===== DeutschVoca Analytics Module =====

// Learning Velocity
function calculateLearningVelocity() {
  const today = new Date();
  const entries = Object.entries(dailyHistory || {});

  const last7 = entries.filter(([date]) => (today - new Date(date)) / 86400000 <= 7)
    .reduce((sum, [, count]) => sum + count, 0);
  const last30 = entries.filter(([date]) => (today - new Date(date)) / 86400000 <= 30)
    .reduce((sum, [, count]) => sum + count, 0);

  return { daily: Math.round(last7 / 7), weekly: last7, monthly: last30 };
}

// Retention Rate
function calculateRetentionRate() {
  const stats = Object.values(wordStats || {});
  if (!stats.length) return { overall: 0, byLevel: {} };

  const mastered = stats.filter(s => (s.interval || 0) >= 4).length;
  const overall = Math.round((mastered / stats.length) * 100);

  const byLevel = {};
  ['A1','A2','B1','B2'].forEach(level => {
    const lw = (typeof masterVocabList !== 'undefined' ? masterVocabList : []).filter(w => w.level === level);
    const learned = lw.filter(w => wordStats[w.id]);
    const mast = lw.filter(w => wordStats[w.id] && (wordStats[w.id].interval||0) >= 4);
    byLevel[level] = {
      total: lw.length, learned: learned.length, mastered: mast.length,
      rate: learned.length ? Math.round((mast.length/learned.length)*100) : 0
    };
  });
  return { overall, byLevel };
}

// Weak Area Detection
function detectWeakAreas() {
  const vocab = typeof masterVocabList !== 'undefined' ? masterVocabList : [];
  const analysis = { byPartOfSpeech: {}, weakestWords: [] };

  ['Noun','Verb','Adjective'].forEach(pos => {
    const words = vocab.filter(w => w.partOfSpeech === pos);
    const learned = words.filter(w => wordStats[w.id]);
    const mast = words.filter(w => wordStats[w.id] && (wordStats[w.id].interval||0) >= 4);
    const accuracy = learned.length ? learned.reduce((sum,w) => {
      const s = wordStats[w.id];
      return sum + ((s.correct||0) / Math.max(1, s.attempts||1));
    }, 0) / learned.length : 0;
    analysis.byPartOfSpeech[pos] = { total: words.length, learned: learned.length, mastered: mast.length, accuracy: Math.round(accuracy*100) };
  });

  analysis.weakestWords = Object.entries(wordStats||{})
    .filter(([,s]) => (s.attempts||0) >= 3 && ((s.correct||0)/(s.attempts||1)) < 0.5)
    .sort((a,b) => (a[1].correct||0)/Math.max(1,a[1].attempts||1) - (b[1].correct||0)/Math.max(1,b[1].attempts||1))
    .slice(0,20)
    .map(([id,s]) => {
      const word = vocab.find(w => w.id == id);
      return { id, word: word?word.word:'?', meaning: word?word.meaning:'', attempts: s.attempts||0, correct: s.correct||0, accuracy: Math.round(((s.correct||0)/Math.max(1,s.attempts||1))*100) };
    });
  return analysis;
}

// Goethe Exam Readiness
function predictExamReadiness() {
  const vocab = typeof masterVocabList !== 'undefined' ? masterVocabList : [];
  const readiness = {};
  ['A1','A2','B1','B2'].forEach(level => {
    const lw = vocab.filter(w => w.level === level);
    const mast = lw.filter(w => wordStats[w.id] && (wordStats[w.id].interval||0) >= 4);
    const pct = lw.length ? Math.round((mast.length/lw.length)*100) : 0;
    let status, message;
    if (pct >= 85) { status='ready'; message='시험 준비 완료!'; }
    else if (pct >= 60) { status='almost'; message='거의 준비됨'; }
    else if (pct >= 30) { status='progress'; message='학습 진행 중'; }
    else { status='start'; message='학습 시작 단계'; }
    readiness[level] = { percentage: pct, status, message, total: lw.length, mastered: mast.length };
  });
  return readiness;
}

// Tier Distribution
function calculateTierFromStat(stat) {
  if (!stat || (stat.correct||0) === 0) return 'NEW';
  if ((stat.correct||0) === 1) return 'FAMILIAR';
  if ((stat.correct||0) < 4) return 'DEVELOPING';
  if ((stat.interval||0) < 7) return 'COMPETENT';
  if ((stat.interval||0) < 30) return 'PROFICIENT';
  return 'MASTERED';
}

function getTierDistribution() {
  const vocab = typeof masterVocabList !== 'undefined' ? masterVocabList : [];
  const tiers = { NEW:0, FAMILIAR:0, DEVELOPING:0, COMPETENT:0, PROFICIENT:0, MASTERED:0 };
  vocab.forEach(w => {
    const stat = (wordStats||{})[w.id];
    tiers[stat ? (stat.tier || calculateTierFromStat(stat)) : 'NEW']++;
  });
  return tiers;
}

// Enhanced Stats Renderer
function renderEnhancedStats() {
  const velocity = calculateLearningVelocity();
  const retention = calculateRetentionRate();
  const weakAreas = detectWeakAreas();
  const examReady = predictExamReadiness();
  const tierDist = getTierDistribution();
  const vocab = typeof masterVocabList !== 'undefined' ? masterVocabList : [];

  // Streak
  const streak = typeof calculateStreak === 'function' ? calculateStreak() : 0;
  const streakEl = document.getElementById('streak-count');
  if (streakEl) streakEl.textContent = streak;

  const badges = [];
  if (streak >= 3) badges.push({icon:'🔥',name:'3일 연속'});
  if (streak >= 7) badges.push({icon:'⭐',name:'1주 연속'});
  if (streak >= 30) badges.push({icon:'🏆',name:'1개월 연속'});
  if (streak >= 100) badges.push({icon:'💎',name:'100일 연속'});

  const badgesEl = document.getElementById('streak-badges');
  if (badgesEl) badgesEl.innerHTML = badges.map(b => `<span class="badge-earned bg-white/20 backdrop-blur px-2 py-1 rounded-full text-xs">${b.icon} ${b.name}</span>`).join('');

  // Tier bars
  const tierHTML = Object.entries(tierDist).map(([tier,count]) => {
    const pct = vocab.length ? Math.round((count/vocab.length)*100) : 0;
    const tierKo = {NEW:'새로운',FAMILIAR:'낯익은',DEVELOPING:'발전중',COMPETENT:'능숙',PROFICIENT:'숙련',MASTERED:'완벽'}[tier]||tier;
    return `<div class="flex items-center gap-2 mb-1"><span class="tier-badge tier-${tier} w-20 justify-center">${tierKo}</span><div class="flex-1 bg-gray-200 rounded-full h-2"><div class="h-2 rounded-full bg-indigo-500" style="width:${pct}%"></div></div><span class="text-xs text-gray-500 w-12 text-right">${count}개</span></div>`;
  }).join('');

  // Exam readiness
  const examHTML = Object.entries(examReady).map(([level,data]) => {
    const col = data.status==='ready'?'green':data.status==='almost'?'yellow':'indigo';
    return `<div class="analytics-card mb-2 p-3"><div class="flex justify-between items-center"><span class="font-bold text-lg">${level}</span><span class="text-${col}-600 text-sm font-semibold">${data.message}</span></div><div class="w-full bg-gray-200 rounded-full h-2 mt-2"><div class="h-2 rounded-full bg-${col}-500" style="width:${data.percentage}%"></div></div><p class="text-xs text-gray-500 mt-1">${data.mastered}/${data.total} 마스터</p></div>`;
  }).join('');

  // Weak words
  const weakHTML = weakAreas.weakestWords.slice(0,10).map(w => `<div class="weak-area-indicator mb-2 py-1"><span class="font-semibold">${w.word}</span> <span class="text-gray-500 text-sm">${w.meaning}</span><span class="text-red-500 text-sm ml-2">${w.accuracy}% (${w.correct}/${w.attempts})</span></div>`).join('');

  // POS accuracy
  const posHTML = Object.entries(weakAreas.byPartOfSpeech).map(([pos,data]) => {
    const posKo = pos==='Noun'?'명사':pos==='Verb'?'동사':'형용사';
    const col = data.accuracy>=80?'green':data.accuracy>=60?'yellow':'red';
    return `<div class="flex items-center justify-between mb-2"><span class="text-sm font-medium">${posKo}</span><div class="flex items-center gap-2"><div class="w-24 bg-gray-200 rounded-full h-2"><div class="h-2 rounded-full bg-${col}-500" style="width:${data.accuracy}%"></div></div><span class="text-sm font-semibold">${data.accuracy}%</span></div></div>`;
  }).join('');

  let container = document.getElementById('analytics-container');
  if (!container) {
    const statsView = document.getElementById('view-stats');
    if (statsView) {
      container = document.createElement('div');
      container.id = 'analytics-container';
      statsView.appendChild(container);
    }
  }
  if (container) {
    container.innerHTML = `<div class="space-y-4 mt-4 px-1">
      <h3 class="font-bold text-lg">📊 학습 분석</h3>
      <div class="grid grid-cols-3 gap-3">
        <div class="analytics-card text-center"><p class="stat-number text-indigo-600">${velocity.daily}</p><p class="stat-label">일 평균</p></div>
        <div class="analytics-card text-center"><p class="stat-number text-purple-600">${velocity.weekly}</p><p class="stat-label">주간</p></div>
        <div class="analytics-card text-center"><p class="stat-number text-pink-600">${velocity.monthly}</p><p class="stat-label">월간</p></div>
      </div>
      <h3 class="font-bold text-lg mt-4">🏅 단어 숙련도</h3>
      <div class="analytics-card p-3">${tierHTML}</div>
      <h3 class="font-bold text-lg mt-4">🎯 Goethe 시험 준비도</h3>${examHTML}
      <h3 class="font-bold text-lg mt-4">📈 품사별 성과</h3>
      <div class="analytics-card p-3">${posHTML || '<p class="text-gray-400 text-sm">데이터 수집 중...</p>'}</div>
      <h3 class="font-bold text-lg mt-4">⚠️ 약점 단어 TOP 10</h3>
      <div class="analytics-card p-3">${weakHTML || '<p class="text-gray-400 text-sm">아직 데이터가 부족합니다</p>'}</div>
    </div>`;
  }
}

// Data Export
function exportUserData() {
  const data = {
    exportDate: new Date().toISOString(),
    appVersion: 'V7',
    wordStats: wordStats || {},
    dailyHistory: dailyHistory || {},
    quizHistory: JSON.parse(localStorage.getItem('germanVocab_quizHistory') || '[]'),
    settings: { darkMode: localStorage.getItem('germanVocab_darkMode') === 'true' }
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `deutschvoca-backup-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  alert('데이터가 다운로드되었습니다! 💾');
}

function importUserData() {
  document.getElementById('import-file-input').click();
}

function handleImportFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.wordStats || !data.dailyHistory) { alert('올바른 백업 파일이 아닙니다.'); return; }
      if (confirm('현재 데이터를 백업 데이터로 교체하시겠습니까?')) {
        wordStats = data.wordStats;
        dailyHistory = data.dailyHistory;
        if (data.quizHistory) localStorage.setItem('germanVocab_quizHistory', JSON.stringify(data.quizHistory));
        saveState();
        alert('데이터가 복원되었습니다! ✅');
        location.reload();
      }
    } catch(err) { alert('파일 오류: ' + err.message); }
  };
  reader.readAsText(file);
  event.target.value = '';
}
