/**
 * gustav.js
 * 마스코트 구스타프(StudyBuddyGustav) 웹 컴포넌트, 에빙하우스 망각곡선 게이지 컴포넌트,
 * Web Audio API 효과음 신디사이저, 그리고 연상 암기 기본 DB를 제공합니다.
 */

// ==========================================================================
// 1. 기본 독일어 연상법 DB (Mnemonics)
// ==========================================================================
const DEFAULT_MNEMONICS = {
  "Mann": "남자답게 일하는 '만(Mann)'능 재주꾼 남편",
  "Frau": "아내가 차려준 '프라우(Frau)'드(proud)한 아침 식사",
  "Kind": "아이는 항상 부드럽고 '카인드(Kind)'하게 대하자",
  "Vater": "아버지는 우리 집의 '파더(Vater - 발음 파터)'",
  "Mutter": "어머니의 사랑은 '무터(Mutter - 발음 무터)'보다 깊다",
  "Haus": "우리 가족이 도란도란 모여 사는 집은 '하우스(Haus)'",
  "Wasser": "물 한 잔을 '바서(Wasser - 발음 바서)' 시원하게 들이켠다",
  "Brot": "빵에 달콤한 버터를 '브롯(Brot)'어서 먹자",
  "Apfel": "아침에 먹는 사과는 '아펠(Apfel - 발음 아펠)'로 참 유익하다",
  "Schule": "학교에 가면 신나서 발걸음이 '슐레(Schule - 발음 슐레)'슐레 흔들린다",
  "Zeit": "시간은 흘러가니 '차이트(Zeit - 발음 차이트)'를 잘 지켜야 해",
  "Hand": "손은 영어로 '핸드(Hand)'",
  "Freund": "친구는 나의 진정한 '프로인트(Freund - 발음 프로인트)'십",
  "Stadt": "도시는 발달해서 차들이 '슈타트(Stadt - 발음 슈타트)'가 빠르다",
  "Land": "드넓은 국토를 가진 나라와 땅은 '랜드(Land)'",
  "Auge": "눈이 동그랗고 예쁜 내 동생 '아우게(Auge)'",
  "Name": "내 이름은 영어로 '네임(Name)'",
  "Tag": "오늘 하루도 '탁(Tag)' 치고 힘차게 시작해 보자!",
  "Nacht": "밤에는 편안하게 '나흐트(Nacht)' 잠을 자자",
  "Mund": "입은 굳게 닫힌 성의 '문트(Mund)'처럼 닫혀 있다",
  "Hund": "셰퍼드 강아지가 '훈트(Hund)'훈하게 꼬리를 흔들며 맞이하네",
  "gehen": "가기 위해 '개(geh)'가 '흔(hen)'들거리며 걸어간다",
  "kommen": "이리 '코멘(kommen)' 오너라 어서 오너라",
  "sehen": "사물을 뚜렷하게 보려고 눈을 '제엔(sehen)'다",
  "essen": "맛있게 '에센(essen)' 뽀득 소시지를 먹다",
  "trinken": "갈증이 나니 드링크를 '트링켄(trinken)' 마신다"
};

/**
 * 특정 단어의 기본 연상 힌트를 가져옵니다.
 */
function getSystemMnemonic(word) {
  // 공백이나 대소문자 차이 보정
  const key = word ? word.trim() : "";
  return DEFAULT_MNEMONICS[key] || "";
}


// ==========================================================================
// 2. Web Audio API 기반 오디오 신디사이저 (SoundEngine)
// ==========================================================================
class SoundSynth {
  constructor() {
    this.audioCtx = null;
    this.muted = localStorage.getItem("germanVocabSoundMuted") === "true";
  }

  init() {
    if (!this.audioCtx) {
      // User Interaction 후에 초기화할 수 있도록 처리
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
  }

  isMuted() {
    return this.muted;
  }

  setMute(isMuted) {
    this.muted = isMuted;
    localStorage.setItem("germanVocabSoundMuted", isMuted ? "true" : "false");
  }

  // 맑은 아르페지오 (정답)
  playSuccess() {
    this.init();
    if (this.muted || !this.audioCtx) return;
    
    // Resume context if suspended (browser security)
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const now = this.audioCtx.currentTime;
    // 도4 (261.63Hz), 미4 (329.63Hz), 솔4 (392.00Hz), 도5 (523.25Hz)
    const notes = [261.63, 329.63, 392.00, 523.25];
    notes.forEach((freq, index) => {
      const osc = this.audioCtx.createOscillator();
      const gainNode = this.audioCtx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + index * 0.08);
      
      gainNode.gain.setValueAtTime(0, now + index * 0.08);
      gainNode.gain.linearRampToValueAtTime(0.15, now + index * 0.08 + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.3);
      
      osc.connect(gainNode);
      gainNode.connect(this.audioCtx.destination);
      
      osc.start(now + index * 0.08);
      osc.stop(now + index * 0.08 + 0.3);
    });
  }

  // 무겁고 짧은 하강음 (오답)
  playFailure() {
    this.init();
    if (this.muted || !this.audioCtx) return;

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gainNode = this.audioCtx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.linearRampToValueAtTime(100, now + 0.25);

    gainNode.gain.setValueAtTime(0.12, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    // 저역 필터 추가하여 날카로움 억제
    const filter = this.audioCtx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(400, now);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  // 퀘스트 완료 (경쾌한 상승 아르페지오 및 코드)
  playQuestComplete() {
    this.init();
    if (this.muted || !this.audioCtx) return;

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const now = this.audioCtx.currentTime;
    const chord = [261.63, 329.63, 392.00, 523.25, 659.25]; // C메이저 9 화음 계열
    chord.forEach((freq, index) => {
      const osc = this.audioCtx.createOscillator();
      const gainNode = this.audioCtx.createGain();
      
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + index * 0.06);
      
      gainNode.gain.setValueAtTime(0, now + index * 0.06);
      gainNode.gain.linearRampToValueAtTime(0.1, now + index * 0.06 + 0.03);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + index * 0.06 + 0.4);
      
      osc.connect(gainNode);
      gainNode.connect(this.audioCtx.destination);
      
      osc.start(now + index * 0.06);
      osc.stop(now + index * 0.06 + 0.4);
    });
  }

  // 쓰다듬기 (구스타프가 기분 좋을 때의 귀여운 숏 차임)
  playPet() {
    this.init();
    if (this.muted || !this.audioCtx) return;

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gainNode = this.audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(392.00, now); // G4
    osc.frequency.exponentialRampToValueAtTime(587.33, now + 0.15); // D5

    gainNode.gain.setValueAtTime(0.1, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  // 레벨업 (화려한 팡파레 느낌의 소리)
  playLevelUp() {
    this.init();
    if (this.muted || !this.audioCtx) return;

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const now = this.audioCtx.currentTime;
    const scale = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25, 659.25, 783.99, 1046.50];
    scale.forEach((freq, index) => {
      const osc = this.audioCtx.createOscillator();
      const gainNode = this.audioCtx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + index * 0.05);
      
      gainNode.gain.setValueAtTime(0, now + index * 0.05);
      gainNode.gain.linearRampToValueAtTime(0.08, now + index * 0.05 + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + index * 0.05 + 0.3);
      
      osc.connect(gainNode);
      gainNode.connect(this.audioCtx.destination);
      
      osc.start(now + index * 0.05);
      osc.stop(now + index * 0.05 + 0.35);
    });
  }
}

const SoundEngine = new SoundSynth();


// ==========================================================================
// 3. <study-buddy-gustav> 웹 컴포넌트
// ==========================================================================
class StudyBuddyGustav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.level = 1;
    this.petCount = 0;
    this.speechTimeout = null;

    // 말풍선 데이터
    this.quotes = {
      idle: [
        "대현 님, 오늘도 화이팅이에요! 멍멍!",
        "단어 5개만 훑어봐도 복습 진도가 실시간 저장돼요!",
        "기억도가 낮은 단어는 제가 귀신같이 골라낼게요!",
        "독일어 어렵지 않아요! 저랑 같이 매일 10초씩 해봐요!",
        "공부하다 힘들면 저를 한번 쓰다듬어 주세요! 기분이 좋아진답니다!"
      ],
      pet: [
        "헤헤, 대현 님이 쓰다듬어 주니까 너무 행복해요! 멍!",
        "앗, 간지러워요! 기분 좋은 스킨십이에요! 왈왈!",
        "쓰담쓰담 완료! 오늘 퀘스트를 향해 더 힘내봐요!",
        "대현 님 손길은 따뜻해요! 독일어 공부 힘내세요!"
      ],
      levelUp: [
        "와아! 레벨업했어요! 저한테 멋진 장식이 생겼네요!",
        "대현 님 덕분에 제가 한 걸음 더 멋진 유학견이 되었어요!",
        "멍멍! 제 선물이 마음에 드시나요? 최고의 독일어 파트너가 될게요!"
      ]
    };
  }

  static get observedAttributes() {
    return ["level"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "level" && oldValue !== newValue) {
      this.level = parseInt(newValue) || 1;
      this.render();
    }
  }

  connectedCallback() {
    this.level = parseInt(this.getAttribute("level")) || 1;
    this.render();
    this.shadowRoot.querySelector(".mascot-svg-wrapper").addEventListener("click", () => this.handlePet());
    this.startRandomIdleSay();
  }

  disconnectedCallback() {
    if (this.speechTimeout) clearTimeout(this.speechTimeout);
  }

  handlePet() {
    // Web Audio 효과음 재생
    SoundEngine.playPet();

    // 쓰다듬기 카운트 증가
    this.petCount++;
    
    // 쓰다듬기 커스텀 이벤트 전송 (main.js에서 퀘스트 연동)
    this.dispatchEvent(new CustomEvent("gustav-pet", {
      bubbles: true,
      composed: true,
      detail: { petCount: this.petCount }
    }));

    // 하트 피어오르는 애니메이션 효과
    this.spawnHearts();
    this.spawnSparkles();

    // 점프 애니메이션 구동
    const wrapper = this.shadowRoot.querySelector(".mascot-svg-wrapper");
    if (wrapper) {
      wrapper.classList.remove("jumping");
      void wrapper.offsetWidth; // Trigger reflow to restart animation
      wrapper.classList.add("jumping");
    }

    // 말풍선 대사 출력
    const petQuotes = this.quotes.pet;
    const randomQuote = petQuotes[Math.floor(Math.random() * petQuotes.length)];
    this.say(randomQuote, 3000);
  }

  spawnHearts() {
    const container = this.shadowRoot.querySelector(".effect-container");
    for (let i = 0; i < 4; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerHTML = "❤️";
      heart.style.left = `${30 + Math.random() * 40}%`;
      heart.style.bottom = "20%";
      heart.style.fontSize = `${12 + Math.random() * 10}px`;
      heart.style.animationDelay = `${i * 0.15}s`;
      container.appendChild(heart);
      
      // 애니메이션 완료 후 삭제
      setTimeout(() => heart.remove(), 850);
    }
  }

  spawnSparkles() {
    const container = this.shadowRoot.querySelector(".effect-container");
    const sparkles = ["✨", "⭐", "🎉", "🌟"];
    for (let i = 0; i < 6; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
      sparkle.style.left = `${20 + Math.random() * 60}%`;
      sparkle.style.bottom = `${30 + Math.random() * 40}%`;
      sparkle.style.fontSize = `${10 + Math.random() * 12}px`;
      sparkle.style.setProperty("--dx", `${(Math.random() - 0.5) * 80}px`);
      sparkle.style.setProperty("--dy", `-${40 + Math.random() * 60}px`);
      sparkle.style.animationDelay = `${i * 0.08}s`;
      container.appendChild(sparkle);
      
      setTimeout(() => sparkle.remove(), 1100);
    }
  }

  say(message, duration = 4000) {
    const bubble = this.shadowRoot.querySelector(".speech-bubble");
    if (!bubble) return;

    bubble.innerHTML = message;
    bubble.classList.add("visible");

    if (this.speechTimeout) clearTimeout(this.speechTimeout);
    this.speechTimeout = setTimeout(() => {
      bubble.classList.remove("visible");
    }, duration);
  }

  triggerLevelUpEffect() {
    // 폭죽 소리 대신 레벨업 차임
    SoundEngine.playLevelUp();
    this.spawnConfetti();
    const quotes = this.quotes.levelUp;
    this.say(quotes[Math.floor(Math.random() * quotes.length)], 5000);
  }

  spawnConfetti() {
    const container = this.shadowRoot.querySelector(".effect-container");
    const colors = ["#ff5964", "#35a7ff", "#38b000", "#ffc300", "#e0aaff"];
    for (let i = 0; i < 20; i++) {
      const p = document.createElement("div");
      p.className = "confetti";
      p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      p.style.left = `50%`;
      p.style.bottom = `40%`;
      const angle = Math.random() * Math.PI * 2;
      const velocity = 3 + Math.random() * 5;
      p.style.setProperty("--dx", `${Math.cos(angle) * velocity * 20}px`);
      p.style.setProperty("--dy", `-${Math.sin(angle) * velocity * 20 + 50}px`);
      container.appendChild(p);
      setTimeout(() => p.remove(), 1000);
    }
  }

  startRandomIdleSay() {
    const loop = () => {
      // 20~35초마다 무작위 한마디
      const delay = 20000 + Math.random() * 15000;
      this.speechTimeout = setTimeout(() => {
        const bubble = this.shadowRoot.querySelector(".speech-bubble");
        if (bubble && !bubble.classList.contains("visible")) {
          const quotes = this.quotes.idle;
          const quote = quotes[Math.floor(Math.random() * quotes.length)];
          this.say(quote, 4500);
        }
        loop();
      }, delay);
    };
    loop();
  }

  render() {
    // 레벨에 따른 악세사리 렌더링 여부 결정
    const showSunglasses = this.level >= 2 ? "block" : "none";
    const showBavarianHat = this.level >= 3 ? "block" : "none";
    const showGraduateItems = this.level >= 4 ? "block" : "none";

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: 140px;
          height: 140px;
          position: relative;
          user-select: none;
          font-family: inherit;
        }
        
        .mascot-container {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .mascot-svg-wrapper {
          width: 100px;
          height: 100px;
          cursor: pointer;
          position: relative;
          z-index: 10;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .mascot-svg-wrapper:hover {
          transform: scale(1.08);
        }

        .mascot-svg-wrapper:active {
          transform: scale(0.92);
        }

        .mascot-svg-wrapper.jumping {
          animation: gustav-jump 0.85s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes gustav-jump {
          0% { transform: scale(1) translateY(0); }
          15% { transform: scale(1.2, 0.75) translateY(6px); }
          35% { transform: scale(0.85, 1.25) translateY(-30px) rotate(6deg); }
          55% { transform: scale(1.05, 0.92) translateY(-30px) rotate(-6deg); }
          75% { transform: scale(0.82, 1.15) translateY(0); }
          90% { transform: scale(1.06, 0.95) translateY(0); }
          100% { transform: scale(1) translateY(0); }
        }

        /* SVG 애니메이션 */
        .ear-left {
          transform-origin: 35px 40px;
          animation: twitch-left 6s infinite alternate;
        }
        .ear-right {
          transform-origin: 65px 40px;
          animation: twitch-right 6s infinite alternate;
        }
        .pupil {
          transform-origin: center;
          animation: eye-look 8s infinite ease-in-out;
        }
        .tail {
          transform-origin: 30px 85px;
          animation: wag 1.2s infinite ease-in-out;
        }
        .body-group {
          transform-origin: bottom center;
        }
        .mascot-svg-wrapper:hover .body-group {
          animation: bounce 0.5s infinite alternate;
        }
        .mascot-svg-wrapper:hover .tail {
          animation: wag-fast 0.4s infinite ease-in-out;
        }

        @keyframes twitch-left {
          0%, 90%, 100% { transform: rotate(0deg); }
          93% { transform: rotate(-8deg); }
          96% { transform: rotate(2deg); }
        }
        @keyframes twitch-right {
          0%, 85%, 100% { transform: rotate(0deg); }
          88% { transform: rotate(8deg); }
          92% { transform: rotate(-2deg); }
        }
        @keyframes eye-look {
          0%, 60%, 100% { transform: translate(0, 0); }
          10%, 15% { transform: translate(-1.5px, 0.5px); }
          30%, 35% { transform: translate(1.5px, -0.5px); }
          75%, 80% { transform: translate(0, -1px); }
        }
        @keyframes wag {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(15deg); }
        }
        @keyframes wag-fast {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(25deg); }
        }
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-4px); }
        }

        /* 말풍선 스타일 */
        .speech-bubble {
          position: absolute;
          bottom: 105px;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border: 1.5px solid #e2e8f0;
          color: #1e293b;
          padding: 8px 12px;
          border-radius: 14px;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.4;
          width: 160px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          opacity: 0;
          pointer-events: none;
          z-index: 50;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .speech-bubble.visible {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }

        .speech-bubble::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 6px;
          border-style: solid;
          border-color: rgba(255, 255, 255, 0.95) transparent transparent transparent;
        }

        /* 이펙트 컨테이너 */
        .effect-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 20;
        }

        .heart {
          position: absolute;
          animation: float-heart 0.85s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          opacity: 0.95;
          pointer-events: none;
        }

        @keyframes float-heart {
          0% { transform: translateY(0) scale(0.5) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-60px) scale(1.3) rotate(20deg); opacity: 0; }
        }

        .sparkle {
          position: absolute;
          animation: float-sparkle 1.1s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
          opacity: 0.95;
          pointer-events: none;
        }

        @keyframes float-sparkle {
          0% { transform: translate(0, 0) scale(0.5) rotate(0deg); opacity: 1; }
          100% { transform: translate(var(--dx), var(--dy)) scale(1.4) rotate(270deg); opacity: 0; }
        }

        .confetti {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          animation: scatter 1.1s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
        }

        @keyframes scatter {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(var(--dx), var(--dy)) scale(0.2); opacity: 0; }
        }
      </style>

      <div class="mascot-container">
        <!-- 말풍선 -->
        <div class="speech-bubble">독일어 공부 시작해볼까멍?</div>
        
        <!-- 강아지 SVG 그래픽 -->
        <div class="mascot-svg-wrapper">
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <!-- 정의 영역 -->
            <defs>
              <!-- 털 그라데이션 -->
              <linearGradient id="fur-body" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#b07d5b" /> <!-- 갈색 -->
                <stop offset="100%" stop-color="#734a2c" />
              </linearGradient>
              <linearGradient id="fur-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3d3a37" /> <!-- 검은색 -->
                <stop offset="100%" stop-color="#1f1e1c" />
              </linearGradient>
            </defs>

            <!-- 꼬리 -->
            <g class="tail">
              <path d="M 28 85 C 15 80, 10 65, 12 55 C 14 53, 18 55, 17 62 C 16 70, 22 76, 30 78 Z" fill="url(#fur-body)" />
              <path d="M 12 55 C 10 60, 11 68, 14 73 C 15 70, 16 63, 13 58 Z" fill="url(#fur-dark)" />
            </g>

            <g class="body-group">
              <!-- 뒷발 -->
              <ellipse cx="32" cy="90" rx="9" ry="5" fill="url(#fur-dark)" />
              <ellipse cx="68" cy="90" rx="9" ry="5" fill="url(#fur-dark)" />

              <!-- 몸통 -->
              <ellipse cx="50" cy="78" rx="22" ry="16" fill="url(#fur-body)" />
              <!-- 검은 등무늬 -->
              <path d="M 32 72 Q 50 64 68 72 Q 62 88 50 88 Q 38 88 32 72" fill="url(#fur-dark)" />

              <!-- 앞발 -->
              <ellipse cx="43" cy="92" rx="7" ry="5" fill="url(#fur-body)" />
              <ellipse cx="57" cy="92" rx="7" ry="5" fill="url(#fur-body)" />
              <circle cx="43" cy="92" r="6" fill="url(#fur-dark)" clip-path="polygon(0 0, 12 0, 12 6, 0 6)" />
              
              <!-- 가슴 털 -->
              <path d="M 42 66 Q 50 75 58 66 Q 50 80 42 66" fill="#fceade" />

              <!-- 목줄 -->
              <path d="M 36 62 Q 50 69 64 62 Q 64 64 50 71 Q 36 64 36 62" fill="#d90429" />
              <!-- 방울(메달) -->
              <circle cx="50" cy="70" r="4.5" fill="#ffb703" />
              <circle cx="50" cy="70" r="1.5" fill="#ffffff" opacity="0.6" />

              <!-- 왼쪽 귀 -->
              <g class="ear-left">
                <path d="M 28 45 L 20 18 Q 30 25 36 38 Z" fill="url(#fur-dark)" />
                <path d="M 29 42 L 23 23 Q 29 28 33 37 Z" fill="#ffb5a7" /> <!-- 귓속 -->
              </g>

              <!-- 오른쪽 귀 -->
              <g class="ear-right">
                <path d="M 72 45 L 80 18 Q 70 25 64 38 Z" fill="url(#fur-dark)" />
                <path d="M 71 42 L 77 23 Q 71 28 67 37 Z" fill="#ffb5a7" /> <!-- 귓속 -->
              </g>

              <!-- 머리 -->
              <circle cx="50" cy="48" r="21" fill="url(#fur-body)" />
              <!-- 검은 머리 덮개 무늬 -->
              <path d="M 32 38 Q 50 32 68 38 Q 66 52 50 56 Q 34 52 32 38" fill="url(#fur-dark)" />

              <!-- 얼굴 무늬 (눈가 갈색 포인트) -->
              <ellipse cx="40" cy="48" rx="7" ry="8" fill="url(#fur-body)" />
              <ellipse cx="60" cy="48" rx="7" ry="8" fill="url(#fur-body)" />

              <!-- 눈 백그라운드 -->
              <circle cx="41" cy="47" r="4" fill="#ffffff" />
              <circle cx="59" cy="47" r="4" fill="#ffffff" />

              <!-- 눈동자 -->
              <g class="pupil">
                <circle cx="41" cy="47" r="2.8" fill="#1f1e1c" />
                <circle cx="59" cy="47" r="2.8" fill="#1f1e1c" />
                <!-- 하이라이트 -->
                <circle cx="39.8" cy="45.8" r="1" fill="#ffffff" />
                <circle cx="57.8" cy="45.8" r="1" fill="#ffffff" />
              </g>

              <!-- 눈썹 -->
              <path d="M 36 41 Q 41 40 45 42" stroke="url(#fur-dark)" stroke-width="2" stroke-linecap="round" fill="none" />
              <path d="M 64 41 Q 59 40 55 42" stroke="url(#fur-dark)" stroke-width="2" stroke-linecap="round" fill="none" />

              <!-- 주둥이와 코 -->
              <ellipse cx="50" cy="55" rx="8" ry="6" fill="#fceade" />
              <path d="M 46 53 Q 50 56 54 53" fill="none" stroke="#734a2c" stroke-width="1.5" stroke-linecap="round" />
              <!-- 코 -->
              <path d="M 47 52 Q 50 49 53 52 Q 50 55 47 52" fill="#1f1e1c" />
              
              <!-- 입 (혀 빼꼼) -->
              <path d="M 48 56 Q 50 59 52 56" fill="none" stroke="#1f1e1c" stroke-width="1" />
              <path d="M 49.2 57 Q 50 61 50.8 57 Z" fill="#ff5964" />

              <!-- 볼터치 -->
              <circle cx="33" cy="53" r="2.5" fill="#ff5964" opacity="0.35" />
              <circle cx="67" cy="53" r="2.5" fill="#ff5964" opacity="0.35" />

              <!-- ========================================== -->
              <!-- 레벨별 꾸미기 악세사리 (조건부 렌더링) -->
              <!-- ========================================== -->

              <!-- LV.2 선글라스 (베를린 여행자) -->
              <g id="accessory-sunglasses" style="display: ${showSunglasses}">
                <!-- 안경알 -->
                <path d="M 33 46 Q 41 42 45 46 Q 44 54 36 53 Q 32 50 33 46" fill="#1e293b" opacity="0.95" stroke="#ffb703" stroke-width="1" />
                <path d="M 67 46 Q 59 42 55 46 Q 56 54 64 53 Q 68 50 67 46" fill="#1e293b" opacity="0.95" stroke="#ffb703" stroke-width="1" />
                <!-- 선글라스 다리/연결부 -->
                <path d="M 45 46 Q 50 44 55 46" fill="none" stroke="#ffb703" stroke-width="2.2" stroke-linecap="round" />
                <path d="M 30 47 L 33 46" fill="none" stroke="#ffb703" stroke-width="1.5" />
                <path d="M 70 47 L 67 46" fill="none" stroke="#ffb703" stroke-width="1.5" />
                <!-- 렌즈 하이라이트 -->
                <path d="M 35 47 L 38 49" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.6" stroke-linecap="round" />
                <path d="M 57 47 L 60 49" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.6" stroke-linecap="round" />
              </g>

              <!-- LV.3 바이에른 전통 모자 (옥토버페스트 멤버) -->
              <g id="accessory-bavarian-hat" style="display: ${showBavarianHat}; transform-origin: 50px 30px; transform: rotate(-5deg);">
                <!-- 모자 몸통 (초록) -->
                <path d="M 32 30 C 32 20, 68 20, 68 30 C 64 33, 36 33, 32 30" fill="#2d6a4f" />
                <!-- 챙 -->
                <ellipse cx="50" cy="31" rx="20" ry="3.5" fill="#1b4332" />
                <!-- 모자 띠 (빨간색) -->
                <path d="M 34 29 Q 50 27 66 29 C 65 31, 35 31, 34 29" fill="#c1121f" />
                <!-- 깃털 (오른쪽 뒤편에 장식) -->
                <path d="M 62 28 Q 69 13 71 11 Q 67 17 63 26" fill="#e0e1dd" stroke="#780000" stroke-width="0.5" />
              </g>

              <!-- LV.4 괴테 학사모 & 책 (괴테 학자) -->
              <g id="accessory-graduate" style="display: ${showGraduateItems}">
                <!-- 학사모 (머리 위) -->
                <g style="transform-origin: 50px 30px; transform: translateY(-4px);">
                  <!-- 학사모 캡 (아래 베이스) -->
                  <path d="M 40 30 Q 50 33 60 30 L 60 25 Q 50 28 40 25 Z" fill="#1d3557" />
                  <!-- 윗면 평판 (다이아몬드) -->
                  <polygon points="50,15 76,22 50,29 24,22" fill="#1d3557" stroke="#457b9d" stroke-width="1" />
                  <!-- 수슬 (금색 테슬) -->
                  <circle cx="50" cy="22" r="1.5" fill="#fca311" />
                  <path d="M 50 22 Q 32 23 27 34" fill="none" stroke="#fca311" stroke-width="1.2" stroke-linecap="round" />
                  <polygon points="27,34 25,38 29,38" fill="#fca311" />
                </g>
                <!-- 한쪽 발 옆의 독일어 책 -->
                <g style="transform: translate(70px, 75px) scale(0.9);">
                  <!-- 책 본체 -->
                  <rect x="0" y="0" width="16" height="20" rx="2" fill="#660708" stroke="#ba181b" stroke-width="1" />
                  <!-- 책 페이지 부분 -->
                  <rect x="14" y="2" width="2" height="16" fill="#f5f3f4" />
                  <!-- 책 표지 문양 (금박 독일 수능 1등급 느낌의 십자성) -->
                  <line x1="8" y1="6" x2="8" y2="14" stroke="#fca311" stroke-width="1" />
                  <line x1="4" y1="10" x2="12" y2="10" stroke="#fca311" stroke-width="1" />
                  <circle cx="8" cy="10" r="1.2" fill="#fca311" />
                </g>
              </g>

            </g>
          </svg>
        </div>

        <!-- 이펙트 레이어 -->
        <div class="effect-container"></div>
      </div>
    `;
  }
}
customElements.define("study-buddy-gustav", StudyBuddyGustav);


// ==========================================================================
// 4. <forgetting-curve> 웹 컴포넌트
// ==========================================================================
class ForgettingCurve extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.value = 100; // 0 ~ 100 %
  }

  static get observedAttributes() {
    return ["value"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "value" && oldValue !== newValue) {
      this.value = Math.max(0, Math.min(100, Math.round(parseFloat(newValue)) || 0));
      this.updateGauge();
    }
  }

  connectedCallback() {
    this.value = Math.max(0, Math.min(100, Math.round(parseFloat(this.getAttribute("value"))) || 100));
    this.render();
    this.updateGauge();
  }

  updateGauge() {
    if (!this.shadowRoot) return;
    
    // SVG 웨이브 패스의 수직 위치 (y) 계산
    // value가 100일 때 y = 25 (거의 꽉 참), value가 0일 때 y = 85 (완전 바닥)
    const yVal = 80 - (this.value / 100) * 55;
    
    const wave1 = this.shadowRoot.getElementById("wave-path-1");
    const wave2 = this.shadowRoot.getElementById("wave-path-2");
    const percentText = this.shadowRoot.querySelector(".percentage-text");
    const container = this.shadowRoot.querySelector(".gauge-circle");

    if (wave1 && wave2) {
      // 파동의 d 속성 갱신
      const d1 = `M 0 ${yVal} Q 25 ${yVal - 5}, 50 ${yVal} T 100 ${yVal} L 100 100 L 0 100 Z`;
      const d2 = `M 0 ${yVal} Q 25 ${yVal + 4}, 50 ${yVal} T 100 ${yVal} L 100 100 L 0 100 Z`;
      wave1.setAttribute("d", d1);
      wave2.setAttribute("d", d2);
    }

    if (percentText) {
      percentText.textContent = `${this.value}%`;
    }

    // 값의 구간에 따라 원 테두리 글로우 효과 및 파동 색상 동적 제어
    if (container) {
      container.className = "gauge-circle";
      if (this.value >= 75) {
        container.classList.add("state-high");
      } else if (this.value >= 40) {
        container.classList.add("state-medium");
      } else {
        container.classList.add("state-low");
      }
    }

    this.updateWaveGradients();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: 100px;
          height: 100px;
          position: relative;
        }

        .gauge-circle {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: rgba(15, 23, 42, 0.4); /* 다크 모드 어울리는 반투명 남색 */
          border: 3.5px solid rgba(255, 255, 255, 0.15);
          position: relative;
          box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.3);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* 상태별 보더 컬러 및 글로우 */
        .gauge-circle.state-high {
          border-color: #38b000; /* 활력 넘치는 초록 */
          box-shadow: 0 0 12px rgba(56, 176, 0, 0.4), inset 0 2px 10px rgba(0, 0, 0, 0.3);
        }
        .gauge-circle.state-medium {
          border-color: #fca311; /* 은은한 오렌지/황금색 */
          box-shadow: 0 0 12px rgba(252, 163, 17, 0.4), inset 0 2px 10px rgba(0, 0, 0, 0.3);
        }
        .gauge-circle.state-low {
          border-color: #d90429; /* 경고 빨간색 */
          box-shadow: 0 0 12px rgba(217, 4, 41, 0.5), inset 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .wave-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 5;
        }

        /* 파동 애니메이션 */
        .wave-p1 {
          animation: wave-move-1 2.5s infinite linear;
        }
        .wave-p2 {
          animation: wave-move-2 3.5s infinite linear;
          opacity: 0.55;
        }

        @keyframes wave-move-1 {
          0% { transform: translateX(0); }
          50% { transform: translateX(-4px) scaleY(1.05); }
          100% { transform: translateX(0); }
        }
        @keyframes wave-move-2 {
          0% { transform: translateX(0); }
          50% { transform: translateX(5px) scaleY(0.95); }
          100% { transform: translateX(0); }
        }

        /* 중앙 텍스트 */
        .text-overlay {
          position: relative;
          z-index: 20;
          text-align: center;
          color: #ffffff;
          pointer-events: none;
          text-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.7);
        }

        .percentage-text {
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.5px;
          line-height: 1.1;
        }

        .label-text {
          font-size: 8px;
          font-weight: 700;
          text-transform: uppercase;
          opacity: 0.85;
          letter-spacing: 0.5px;
          margin-top: 1px;
        }
      </style>

      <div class="gauge-circle">
        <!-- SVG 파동 그리기 -->
        <svg class="wave-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <!-- 그라데이션 정의 -->
          <defs>
            <linearGradient id="wave-grad-high" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#38b000" />
              <stop offset="100%" stop-color="#007200" />
            </linearGradient>
            <linearGradient id="wave-grad-medium" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#ffb703" />
              <stop offset="100%" stop-color="#fb8500" />
            </linearGradient>
            <linearGradient id="wave-grad-low" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#ff4d6d" />
              <stop offset="100%" stop-color="#c9184a" />
            </linearGradient>
          </defs>

          <!-- 동적으로 생성/갱신되는 두 파동 패스 -->
          <path id="wave-path-2" class="wave-p2" fill="url(#wave-grad-medium)" d="M 0 50 Q 25 54, 50 50 T 100 50 L 100 100 L 0 100 Z" />
          <path id="wave-path-1" class="wave-p1" fill="url(#wave-grad-high)" d="M 0 50 Q 25 45, 50 50 T 100 50 L 100 100 L 0 100 Z" />
        </svg>

        <!-- 텍스트 레이아웃 -->
        <div class="text-overlay">
          <div class="percentage-text">100%</div>
          <div class="label-text">기억 유지</div>
        </div>
      </div>
    `;
  }

  // 파동 색상을 현재 값 구간에 맞춰 교체해줍니다.
  updateWaveGradients() {
    const wave1 = this.shadowRoot.getElementById("wave-path-1");
    const wave2 = this.shadowRoot.getElementById("wave-path-2");
    if (!wave1 || !wave2) return;

    if (this.value >= 75) {
      wave1.setAttribute("fill", "url(#wave-grad-high)");
      wave2.setAttribute("fill", "url(#wave-grad-high)");
    } else if (this.value >= 40) {
      wave1.setAttribute("fill", "url(#wave-grad-medium)");
      wave2.setAttribute("fill", "url(#wave-grad-medium)");
    } else {
      wave1.setAttribute("fill", "url(#wave-grad-low)");
      wave2.setAttribute("fill", "url(#wave-grad-low)");
    }
  }
}
customElements.define("forgetting-curve", ForgettingCurve);

// 전역 스코프에 바인딩하여 다른 스크립트에서도 자유롭게 사용 가능케 함
window.getSystemMnemonic = getSystemMnemonic;
window.SoundEngine = SoundEngine;
