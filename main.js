/* * ==========================================================================
 * 1. DATA SECTION (Master Vocabulary List)
 * ========================================================================== */
const masterVocabList = [
    // === Level A1: Nouns ===
    { id: 1001, word: "Mann", meaning: "남자/남편", english: "Man", partOfSpeech: "Noun", gender: "der", level: "A1" },
    { id: 1002, word: "Frau", meaning: "여자/아내", english: "Woman", partOfSpeech: "Noun", gender: "die", level: "A1" },
    { id: 1003, word: "Kind", meaning: "아이", english: "Child", partOfSpeech: "Noun", gender: "das", level: "A1" },
    { id: 1201, word: "Haus", meaning: "집", english: "House", partOfSpeech: "Noun", gender: "das", level: "A1" },
    { id: 1301, word: "Essen", meaning: "음식", english: "Food", partOfSpeech: "Noun", gender: "das", level: "A1" },

    // === Level A1: Verbs ===
    { id: 1601, word: "sein", meaning: "~이다, 있다", english: "to be", partOfSpeech: "Verb", level: "A1" },
    { id: 1602, word: "haben", meaning: "가지다", english: "to have", partOfSpeech: "Verb", level: "A1" },
    { id: 1603, word: "werden", meaning: "~이 되다", english: "to become", partOfSpeech: "Verb", level: "A1" },
    { id: 1604, word: "können", meaning: "~할 수 있다", english: "can, to be able to", partOfSpeech: "Verb", level: "A1" },
    { id: 1605, word: "müssen", meaning: "~해야 한다", english: "must, to have to", partOfSpeech: "Verb", level: "A1" },

    // === Level A1: Adjectives ===
    { id: 1701, word: "gut", meaning: "좋은", english: "good", partOfSpeech: "Adjective", level: "A1" },
    { id: 1702, word: "schlecht", meaning: "나쁜", english: "bad", partOfSpeech: "Adjective", level: "A1" },
    { id: 1703, word: "groß", meaning: "큰", english: "big, large", partOfSpeech: "Adjective", level: "A1" },
    { id: 1704, word: "klein", meaning: "작은", english: "small, little", partOfSpeech: "Adjective", level: "A1" },
    { id: 1705, word: "neu", meaning: "새로운", english: "new", partOfSpeech: "Adjective", level: "A1" },

    // === Level A2: Nouns ===
    { id: 2011, word: "Baum", meaning: "나무", english: "Tree", partOfSpeech: "Noun", gender: "der", level: "A2" },
    { id: 2101, word: "Ding", meaning: "물건", english: "Thing", partOfSpeech: "Noun", gender: "das", level: "A2" },
    { id: 2201, word: "Schule", meaning: "학교", english: "School", partOfSpeech: "Noun", gender: "die", level: "A2" },

    // === Level A2: Verbs ===
    { id: 2601, word: "laufen", meaning: "달리다, 걷다", english: "to run, walk", partOfSpeech: "Verb", level: "A2" },
    { id: 2602, word: "lesen", meaning: "읽다", english: "to read", partOfSpeech: "Verb", level: "A2" },
    { id: 2603, word: "schreiben", meaning: "쓰다", english: "to write", partOfSpeech: "Verb", level: "A2" },

    // === Level A2: Adjectives ===
    { id: 2701, word: "schnell", meaning: "빠른", english: "fast", partOfSpeech: "Adjective", level: "A2" },
    { id: 2702, word: "langsam", meaning: "느린", english: "slow", partOfSpeech: "Adjective", level: "A2" },
    { id: 2703, word: "wichtig", meaning: "중요한", english: "important", partOfSpeech: "Adjective", level: "A2" },
    
    // ... (Add many more words here)
];

/* * ==========================================================================
 * 2. STATE MANAGEMENT (Global Variables)
 * ========================================================================== */
let currentVocabList = [];
let deletedHistory = [];
let isMeaningHidden = false;
let activeFilter = null; // Changed from activeGenderFilter
let wordStats = {}; // SRS: { id: { interval: 0, nextReview: timestamp } }

/* * ==========================================================================
 * 3. INITIALIZATION LOGIC (80:20 Rule & Daily Reset)
 * ========================================================================== */
function initApp() {
    const today = new Date().toDateString();
    
    const savedState = localStorage.getItem('germanVocabState_AllPOS');
    if (savedState) {
        const state = JSON.parse(savedState);
        wordStats = state.wordStats || {};
        
        if (state.lastDate !== today) {
            console.log("🌞 New Day: Generating 80:20 list...");
            generateDailyList();
        } else {
            currentVocabList = state.currentList;
        }
    } else {
        currentVocabList = masterVocabList.slice(0, 100);
    }

    saveState();
    renderWords();
    updateLevelTitle();
}

function generateDailyList() {
    const now = Date.now();
    
    const reviewCandidates = masterVocabList.filter(w => {
        const stat = wordStats[w.id];
        return stat && stat.nextReview <= now;
    });
    
    const newCandidates = masterVocabList.filter(w => !wordStats[w.id]);

    const targetTotal = 100;
    const targetReviewCount = 80; 
    
    let todaysList = reviewCandidates.slice(0, targetReviewCount);
    
    let remainingSlots = targetTotal - todaysList.length;
    if (newCandidates.length > 0) {
        const newWordsToAdd = newCandidates.slice(0, remainingSlots);
        todaysList = [...todaysList, ...newWordsToAdd];
    }
    
    if (todaysList.length < targetTotal) {
        const allReviewable = masterVocabList.filter(w => !todaysList.includes(w));
        shuffleArray(allReviewable);
        const extraFill = allReviewable.slice(0, targetTotal - todaysList.length);
        todaysList = [...todaysList, ...extraFill];
    }
    
    shuffleArray(todaysList);
    currentVocabList = todaysList;
    
    const reviewCount = todaysList.filter(w => wordStats[w.id]).length;
    const newCount = todaysList.length - reviewCount;
    setTimeout(() => {
        alert(`📅 새로운 하루!\n복습: ${reviewCount}개 + 새단어: ${newCount}개\n총 ${todaysList.length}단어 로딩 완료!`);
    }, 500);
}

/* * ==========================================================================
 * 4. SRS ALGORITHM (Spaced Repetition System)
 * ========================================================================== */
function handleSwipeLeft(item) {
    const stat = wordStats[item.id] || { interval: 0, nextReview: 0 };
    
    let newInterval = 1;
    if (stat.interval === 0) newInterval = 1;
    else if (stat.interval === 1) newInterval = 3;
    else if (stat.interval === 3) newInterval = 7;
    else if (stat.interval === 7) newInterval = 15;
    else newInterval = stat.interval * 2;
    
    const nextReviewDate = Date.now() + (newInterval * 24 * 60 * 60 * 1000);
    
    wordStats[item.id] = {
        interval: newInterval,
        nextReview: nextReviewDate
    };
    
    removeWord(item);
}

function handleSwipeRight(item) {
    wordStats[item.id] = {
        interval: 0,
        nextReview: Date.now()
    };
    moveWordToBack(item);
}

/* * ==========================================================================
 * 5. CORE FUNCTIONS (Save, Render, Create Card)
 * ========================================================================== */
function saveState() {
    const state = {
        lastDate: new Date().toDateString(),
        currentList: currentVocabList,
        wordStats: wordStats
    };
    localStorage.setItem('germanVocabState_AllPOS', JSON.stringify(state));
    updateCounts();
    updateUndoButton();
}

function renderWords() {
    const container = document.getElementById('word-container');
    container.innerHTML = '';

    let listToRender = currentVocabList;
    if (activeFilter) {
        listToRender = currentVocabList.filter(item => item.partOfSpeech === activeFilter);
    }

    if (listToRender.length === 0 && currentVocabList.length === 0) {
        triggerCelebration();
        container.innerHTML = `
            <div class="text-center py-20">
                <div class="text-6xl mb-4">🏆</div>
                <h2 class="text-2xl font-bold text-gray-700">오늘의 학습 완료!</h2>
                <button onclick="resetList()" class="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
                    전체 리셋
                </button>
            </div>
        `;
        return;
    }

    listToRender.forEach((item, index) => {
        const card = createCard(item, index);
        container.appendChild(card);
    });
}

function createCard(item, index) {
    const card = document.createElement('div');
    card.className = "bg-white p-4 rounded-xl shadow-sm border-l-4 card-touch flex flex-col relative overflow-hidden select-none mb-3";
    
    let borderColor, textColor, mainText;
    switch(item.partOfSpeech) {
        case 'Noun':
            borderColor = "border-blue-500";
            textColor = "text-blue-700";
            mainText = `${item.gender.charAt(0).toUpperCase() + item.gender.slice(1)} ${item.word}`;
            break;
        case 'Verb':
            borderColor = "border-red-500";
            textColor = "text-red-700";
            mainText = item.word;
            break;
        case 'Adjective':
            borderColor = "border-green-500";
            textColor = "text-green-700";
            mainText = item.word;
            break;
        default:
            borderColor = "border-gray-500";
            textColor = "text-gray-700";
            mainText = item.word;
    }
    card.classList.add(borderColor);

    const hintLeft = `<div class="swipe-hint hint-left font-bold text-red-500">삭제 🗑️</div>`; 
    const hintRight = `<div class="swipe-hint hint-right font-bold text-green-500">맨뒤로 🔄</div>`; 

    let breakdownHTML = '';
    if (item.breakdown) {
        breakdownHTML = `
            <div class="mt-2 pt-2 border-t border-dashed border-gray-100 breakdown transition-opacity duration-300 ${isMeaningHidden ? '' : 'revealed'}">
                <span class="text-[10px] bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded font-bold">🔍 분석</span>
                <span class="text-xs text-gray-500 ml-1">${item.breakdown}</span>
            </div>
        `;
    }
    let cognateBadge = item.cognate ? `<span class="ml-2 text-[10px] text-green-700 bg-green-100 border border-green-200 px-1.5 py-0.5 rounded-full font-bold">🌱 동일어원</span>` : '';
    
    let levelColor = "bg-gray-100 text-gray-600";
    if (item.level === "A1") levelColor = "bg-yellow-100 text-yellow-800";
    if (item.level === "A2") levelColor = "bg-orange-100 text-orange-800";
    if (item.level === "B1") levelColor = "bg-blue-100 text-blue-800";
    if (item.level === "B2") levelColor = "bg-purple-100 text-purple-800";
    const levelBadge = `<span class="text-[10px] ${levelColor} px-1.5 py-0.5 rounded font-bold ml-auto">${item.level}</span>`;

    const speakText = item.partOfSpeech === 'Noun' ? `${item.gender} ${item.word}` : item.word;

    card.innerHTML = `
        ${hintLeft}
        ${hintRight}
        <div class="flex justify-between items-start w-full pointer-events-none mb-1">
             <span class="font-bold text-xl ${textColor}">${mainText}</span>
             ${levelBadge}
        </div>
        
        <div class="flex justify-between items-end w-full pointer-events-none">
            <div class="flex flex-col w-full meaning-container transition-opacity duration-300 ${isMeaningHidden ? '' : 'revealed'}">
                <span class="text-gray-800 font-medium text-lg leading-tight">${item.meaning}</span>
                <div class="flex items-center mt-1">
                    <span class="text-gray-500 text-sm font-semibold">${item.english}</span>
                    ${cognateBadge}
                </div>
            </div>
            
            <button class="speaker-btn pointer-events-auto text-gray-400 hover:text-indigo-600 active:bg-gray-100 rounded-full p-2 transition z-10" onclick="event.stopPropagation(); speak('${speakText}')">
                <span class="text-2xl">🔊</span>
            </button>
        </div>
        ${breakdownHTML}
    `;

    attachSwipeEvents(card, item, index);
    return card;
}

/* * ==========================================================================
 * 6. EVENT HANDLERS & HELPERS
 * ========================================================================== */
function attachSwipeEvents(card, item, index) {
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    const threshold = 100; 

    card.addEventListener('touchstart', (e) => {
        if (e.target.closest('.speaker-btn')) return;
        startX = e.touches[0].clientX;
        isDragging = true;
        card.style.transition = 'none'; 
    }, {passive: true});

    card.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        const diffX = currentX - startX;
        card.style.transform = `translateX(${diffX}px)`;

        const hintL = card.querySelector('.hint-left'); 
        const hintR = card.querySelector('.hint-right'); 

        if (diffX < 0) { 
            hintL.style.opacity = Math.min(Math.abs(diffX) / 100, 1);
            hintR.style.opacity = 0;
        } else { 
            hintL.style.opacity = 0;
            hintR.style.opacity = Math.min(Math.abs(diffX) / 100, 1);
        }
    }, {passive: true});

    card.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        const diffX = currentX - startX;

        if (Math.abs(diffX) < 5) {
            card.style.transform = ''; 
            toggleCardMeaning(card);
            return;
        }

        if (diffX < -threshold) { 
            card.style.transform = 'translateX(-120%)';
            card.style.opacity = '0';
            setTimeout(() => handleSwipeLeft(item), 300); 
        } else if (diffX > threshold) { 
            card.style.transform = 'translateX(120%)';
            card.style.opacity = '0';
            setTimeout(() => handleSwipeRight(item), 300); 
        } else {
            card.style.transition = 'transform 0.3s';
            card.style.transform = 'translateX(0)';
            card.querySelectorAll('.swipe-hint').forEach(el => el.style.opacity = 0);
        }
        startX = 0;
    });
}

function removeWord(item) {
    const index = currentVocabList.indexOf(item);
    if (index > -1) {
        deletedHistory.push(item);
        currentVocabList.splice(index, 1);
        renderWords();
        saveState();
    }
}

function moveWordToBack(item) {
    const index = currentVocabList.indexOf(item);
    if (index > -1) {
        const removedItem = currentVocabList.splice(index, 1)[0];
        currentVocabList.push(removedItem);
        renderWords();
        saveState();
    }
}

function undoDelete() {
    if (deletedHistory.length === 0) return;
    const item = deletedHistory.pop();
    currentVocabList.unshift(item);
    renderWords();
    saveState();
}

function toggleMeanings() {
    const btn = document.getElementById('toggleBtn');
    const body = document.body;
    isMeaningHidden = !isMeaningHidden;

    if (isMeaningHidden) {
        btn.innerText = "👁️ 뜻 보이기";
        btn.classList.replace('bg-indigo-600', 'bg-gray-500');
        body.classList.add('hide-meaning');
    } else {
        btn.innerText = "👁️ 뜻 가리기";
        btn.classList.replace('bg-gray-500', 'bg-indigo-600');
        body.classList.remove('hide-meaning');
        document.querySelectorAll('.revealed').forEach(el => el.classList.remove('revealed'));
    }
}

function toggleCardMeaning(card) {
    if(isMeaningHidden) {
        const meaningContainer = card.querySelector('.meaning-container');
        const breakdownDiv = card.querySelector('.breakdown');
        if(meaningContainer) meaningContainer.classList.toggle('revealed');
        if(breakdownDiv) breakdownDiv.classList.toggle('revealed');
    }
}

function toggleFilter(partOfSpeech) {
    activeFilter = (activeFilter === partOfSpeech) ? null : partOfSpeech;
    renderWords();
    updateCounts();
}

function updateCounts() {
    let countNoun = 0, countVerb = 0, countAdjective = 0;
    currentVocabList.forEach(item => {
        if(item.partOfSpeech === 'Noun') countNoun++;
        else if(item.partOfSpeech === 'Verb') countVerb++;
        else if(item.partOfSpeech === 'Adjective') countAdjective++;
    });

    document.getElementById('count-noun').innerText = countNoun;
    document.getElementById('count-verb').innerText = countVerb;
    document.getElementById('count-adjective').innerText = countAdjective;
    document.getElementById('count-total').innerText = currentVocabList.length;

    const btns = ['btn-noun', 'btn-verb', 'btn-adjective', 'btn-total'];
    btns.forEach(id => document.getElementById(id).classList.remove('filter-active', 'ring-2'));
    
    if (activeFilter === 'Noun') document.getElementById('btn-noun').classList.add('filter-active', 'ring-2');
    else if (activeFilter === 'Verb') document.getElementById('btn-verb').classList.add('filter-active', 'ring-2');
    else if (activeFilter === 'Adjective') document.getElementById('btn-adjective').classList.add('filter-active', 'ring-2');
    else document.getElementById('btn-total').classList.add('filter-active', 'ring-2');
}

function updateLevelTitle() {
    if (!currentVocabList || currentVocabList.length === 0) {
        document.getElementById('level-title').innerText = "학습 완료!";
        return;
    }
    const levels = new Set(currentVocabList.map(w => w.level));
    const levelArr = Array.from(levels);
    const levelOrder = { "A1": 1, "A2": 2, "B1": 3, "B2": 4 };
    levelArr.sort((a, b) => levelOrder[a] - levelOrder[b]);

    let titleText = "SRS 단어장";
    if (levelArr.length === 1) titleText = `${levelArr[0]} 레벨`;
    else if (levelArr.length > 1) titleText = `${levelArr[0]}-${levelArr[levelArr.length-1]} 레벨`;
    
    document.getElementById('level-title').innerText = titleText;
}

function updateUndoButton() {
    const btn = document.getElementById('undoBtn');
    btn.classList.toggle('hidden', deletedHistory.length === 0);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
    
function shuffleCurrentList() {
    shuffleArray(currentVocabList);
    renderWords();
}

function resetList() {
    if(confirm('모든 학습 데이터와 SRS 기록을 초기화하시겠습니까?')) {
        localStorage.removeItem('germanVocabState_AllPOS');
        location.reload();
    }
}

function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'de-DE'; 
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("이 브라우저는 음성 합성을 지원하지 않습니다.");
    }
}

function triggerCelebration() {
    const overlay = document.getElementById('celebration-overlay');
    const audio = document.getElementById('applause-sound');
    overlay.classList.add('active');
    audio.play().catch(e => console.log("Audio play failed"));
    createConfetti();
}

function closeCelebration() {
    document.getElementById('celebration-overlay').classList.remove('active');
}

function createConfetti() {
    const overlay = document.getElementById('celebration-overlay');
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f'];
    for(let i=0; i<50; i++) {
        const conf = document.createElement('div');
        conf.className = 'confetti';
        conf.style.left = Math.random() * 100 + '%';
        conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        conf.style.animationDuration = (Math.random() * 2 + 1) + 's';
        conf.style.top = -10 + 'px';
        overlay.appendChild(conf);
    }
}

initApp();
