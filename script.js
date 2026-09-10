const SOURCE_WEEKLY = "https://www.macromicro.me/blog/mm-weekly-premarket-update-nonfarm-payrolls-returned-to-growth-range-as-expected-this-week-s-cpi-will-be-the-decisive-factor";
const SOURCE_JACKSON = "https://www.macromicro.me/blog/mm-weekly-premarket-update-warsh-reiterates-commitment-to-combating-inflation-at-central-bank-meeting-focus-this-week-on-nonfarm";

const questions = [
  {
    topic: "台灣景氣",
    question: "台灣景氣燈號維持高檔，而且內外需求都在成長。這代表什麼？",
    options: [
      "景氣仍有動能，內外需求都有支撐",
      "只有出口變好，內需正在轉弱",
      "景氣主要依靠政府支出",
      "景氣已開始明顯降溫"
    ],
    correct: 0,
    explanation: "內需與外需同時成長，代表整體景氣仍然穩健。",
    source: SOURCE_JACKSON,
    sourceLabel: "MacroMicro 8/30 一週盤前"
  },
  {
    topic: "美國就業",
    question: "美國新增就業高於預期，但薪資成長放慢。市場最合理的結論是什麼？",
    options: [
      "經濟仍有支撐，但利率方向還要搭配通膨數據判斷",
      "經濟即將衰退，聯準會應立即降息",
      "薪資成長放慢，代表通膨一定會快速下降",
      "就業高於預期，代表聯準會一定會升息"
    ],
    correct: 0,
    explanation: "新增就業強勁，顯示美國經濟並不弱；但薪資成長放慢，沒有出現通膨壓力同步升高的訊號。因此，這份就業報告不足以直接決定利率方向，市場還需要觀察接下來的 CPI。",
    source: SOURCE_WEEKLY,
    sourceLabel: "MacroMicro 9/6 一週盤前"
  },
  {
    topic: "政策判讀",
    question: "如果接下來公布的美國消費者物價指數（CPI）高於市場預期，最可能如何影響市場對利率的看法？",
    options: [
      "市場可能預期利率維持高檔更久",
      "市場可能提高近期降息的預期",
      "市場會認為就業數據失去參考價值",
      "市場會認為通膨已經回到目標"
    ],
    correct: 0,
    explanation: "CPI 高於預期，代表物價壓力比市場原先想得更強，聯準會就比較沒有空間降息。因此，市場可能預期利率會在高檔停留更久。",
    source: SOURCE_WEEKLY,
    sourceLabel: "MacroMicro 9/6 一週盤前"
  },
  {
    topic: "能源市場",
    question: "中東衝突升溫時，西德州中級原油（WTI）價格上漲，主要反映哪種風險？",
    options: [
      "原油需求快速下降",
      "美元匯率變動",
      "原油供應可能中斷",
      "美國企業獲利下降"
    ],
    correct: 2,
    explanation: "市場擔心衝突影響原油生產或運輸，因此先推高油價。",
    source: SOURCE_WEEKLY,
    sourceLabel: "MacroMicro 9/6 一週盤前"
  },
  {
    topic: "黃金市場",
    question: "聯準會理事 Christopher Waller（華勒）釋出偏鴿訊號後，黃金一度上漲。最合理的原因是？",
    options: [
      "市場對升息的預期下降，持有黃金的成本降低",
      "市場預期黃金產量即將減少",
      "市場預期通膨會立刻消失",
      "市場預期原油價格將大幅下跌"
    ],
    correct: 0,
    explanation: "利率壓力降低時，不會配息的黃金相對更有吸引力。",
    source: SOURCE_WEEKLY,
    sourceLabel: "MacroMicro 9/6 一週盤前"
  },
  {
    topic: "債務與成長",
    question: "面對高利率與龐大債務，為什麼美國的經濟成長很重要？",
    options: [
      "經濟成長較強時，債務負擔比較容易承受",
      "經濟成長後，政府就不需要再借錢",
      "經濟成長會讓利率立刻下降",
      "經濟成長與債務負擔沒有關係"
    ],
    correct: 0,
    explanation: "經濟規模與收入增加後，支付債務和利息會相對容易。",
    source: SOURCE_JACKSON,
    sourceLabel: "MacroMicro 8/30 一週盤前"
  }
];

const profiles = [
  {
    min: 0,
    max: 1,
    name: "經濟小白",
    kicker: "STEP 1 · 建立觀察習慣",
    description: "你對總經世界還在起步，但每位投資高手都曾經是新手。先抓住就業、通膨與央行三條主線，你會很快看見數據之間的關係。",
    image: "assets/economy-newbie.png?v=2",
    alt: "經濟小白，答對 0 到 1 題角色圖"
  },
  {
    min: 2,
    max: 3,
    name: "總經入門",
    kicker: "STEP 2 · 串起數據邏輯",
    description: "你已經有底子，能辨認重要數據與市場反應。下一步試著追蹤數據的前值、預期值與公布值，建立更完整的判讀脈絡。",
    image: "assets/macro-starter.png?v=2",
    alt: "總經入門，答對 2 到 3 題角色圖"
  },
  {
    min: 4,
    max: 5,
    name: "總經達人",
    kicker: "DATA FLUENCY · 靈活判讀",
    description: "你已能靈活運用數據進行判斷，知道單一指標不能獨立解讀。持續交叉觀察景氣、政策與資產價格，就能讓訊號更立體。",
    image: "assets/macro-master.png?v=2",
    alt: "總經達人，答對 4 到 5 題角色圖"
  },
  {
    min: 6,
    max: 6,
    name: "總經大神",
    kicker: "MACRO EXPERT · 全面掌握",
    description: "你就是總經知識的代言人！不只掌握關鍵數據，也理解它們如何牽動央行、利率與跨資產市場，總經雷達全開。",
    image: "assets/macro-god.png?v=2",
    alt: "總經大神，6 題全對角色圖"
  }
];

const screens = {
  start: document.querySelector("#start-screen"),
  quiz: document.querySelector("#quiz-screen"),
  result: document.querySelector("#result-screen")
};

const els = {
  startBtn: document.querySelector("#start-btn"),
  exitBtn: document.querySelector("#exit-btn"),
  nextBtn: document.querySelector("#next-btn"),
  restartBtn: document.querySelector("#restart-btn"),
  progressLabel: document.querySelector("#progress-label"),
  progressBar: document.querySelector("#progress-bar"),
  topicTag: document.querySelector("#topic-tag"),
  questionTitle: document.querySelector("#question-title"),
  options: document.querySelector("#options"),
  selectionHint: document.querySelector("#selection-hint"),
  scoreValue: document.querySelector("#score-value"),
  resultImage: document.querySelector("#result-image"),
  resultKicker: document.querySelector("#result-kicker"),
  resultName: document.querySelector("#result-name"),
  resultDescription: document.querySelector("#result-description"),
  correctCount: document.querySelector("#correct-count"),
  reviewList: document.querySelector("#review-list"),
  copyBtn: document.querySelector("#copy-btn"),
  toast: document.querySelector("#toast")
};

let currentQuestion = 0;
let answers = [];
let selected = null;

function showScreen(name) {
  Object.entries(screens).forEach(([key, screen]) => screen.classList.toggle("is-active", key === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function beginQuiz() {
  currentQuestion = 0;
  answers = [];
  selected = null;
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const item = questions[currentQuestion];
  selected = answers[currentQuestion] ?? null;
  els.progressLabel.textContent = `QUESTION ${String(currentQuestion + 1).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`;
  els.progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  els.topicTag.textContent = item.topic;
  els.questionTitle.textContent = item.question;
  els.options.innerHTML = "";

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option${selected === index ? " is-selected" : ""}`;
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", selected === index ? "true" : "false");
    button.innerHTML = `<span class="option-key">${String.fromCharCode(65 + index)}</span><span>${option}</span>`;
    button.addEventListener("click", () => chooseAnswer(index));
    els.options.appendChild(button);
  });

  els.nextBtn.disabled = selected === null;
  els.nextBtn.firstChild.textContent = currentQuestion === questions.length - 1 ? "查看結果 " : "下一題 ";
  els.selectionHint.textContent = selected === null ? "請選擇一個答案" : `已選擇 ${String.fromCharCode(65 + selected)}`;
  els.questionTitle.focus({ preventScroll: true });
}

function chooseAnswer(index) {
  selected = index;
  [...els.options.children].forEach((button, i) => {
    button.classList.toggle("is-selected", i === index);
    button.setAttribute("aria-checked", i === index ? "true" : "false");
  });
  els.nextBtn.disabled = false;
  els.selectionHint.textContent = `已選擇 ${String.fromCharCode(65 + index)}`;
}

function advance() {
  if (selected === null) return;
  answers[currentQuestion] = selected;
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const correct = questions.reduce((total, item, index) => total + (answers[index] === item.correct ? 1 : 0), 0);
  const profile = profiles.find(item => correct >= item.min && correct <= item.max) || profiles[0];

  els.scoreValue.textContent = correct;
  els.correctCount.textContent = correct;
  els.resultImage.src = profile.image;
  els.resultImage.alt = profile.alt;
  els.resultKicker.textContent = profile.kicker;
  els.resultName.textContent = profile.name;
  els.resultDescription.textContent = profile.description;
  renderReview();
  showScreen("result");
}

function renderReview() {
  els.reviewList.innerHTML = "";
  questions.forEach((item, index) => {
    const isCorrect = answers[index] === item.correct;
    const details = document.createElement("details");
    details.className = "review-item";
    details.innerHTML = `
      <summary>
        <span class="review-index">Q${String(index + 1).padStart(2, "0")}</span>
        <span class="status-dot ${isCorrect ? "correct" : "wrong"}" aria-label="${isCorrect ? "答對" : "答錯"}">${isCorrect ? "✓" : "×"}</span>
        <span class="review-question">${item.question}</span>
        <span class="review-toggle" aria-hidden="true">＋</span>
      </summary>
      <div class="review-body">
        <p>你的答案：<strong>${item.options[answers[index]]}</strong></p>
        ${isCorrect ? "" : `<p>正確答案：<strong>${item.options[item.correct]}</strong></p>`}
        <p>${item.explanation}</p>
        <p><a href="${item.source}" target="_blank" rel="noreferrer">資料來源：${item.sourceLabel} ↗</a></p>
      </div>`;
    els.reviewList.appendChild(details);
  });
}

async function copyPromo() {
  try {
    await navigator.clipboard.writeText("CAREERFEST");
  } catch (_) {
    const temp = document.createElement("textarea");
    temp.value = "CAREERFEST";
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
  }
  els.copyBtn.textContent = "已複製";
  els.toast.classList.add("is-visible");
  window.setTimeout(() => {
    els.copyBtn.textContent = "複製兌換碼";
    els.toast.classList.remove("is-visible");
  }, 1800);
}

els.startBtn.addEventListener("click", beginQuiz);
els.exitBtn.addEventListener("click", () => showScreen("start"));
els.nextBtn.addEventListener("click", advance);
els.restartBtn.addEventListener("click", beginQuiz);
els.copyBtn.addEventListener("click", copyPromo);

document.addEventListener("keydown", event => {
  if (!screens.quiz.classList.contains("is-active")) return;
  const key = event.key.toLowerCase();
  if (["a", "b", "c", "d"].includes(key)) chooseAnswer(key.charCodeAt(0) - 97);
  if (event.key === "Enter" && !els.nextBtn.disabled) advance();
});
