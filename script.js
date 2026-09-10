const SOURCE_WEEKLY = "https://www.macromicro.me/blog/mm-weekly-premarket-update-nonfarm-payrolls-returned-to-growth-range-as-expected-this-week-s-cpi-will-be-the-decisive-factor";
const SOURCE_JACKSON = "https://www.macromicro.me/blog/mm-weekly-premarket-update-warsh-reiterates-commitment-to-combating-inflation-at-central-bank-meeting-focus-this-week-on-nonfarm";

const questions = [
  {
    topic: "台灣景氣",
    question: "台灣 7 月景氣燈號維持高檔，且內外需求同步擴張。下列哪項最符合這個訊號？",
    options: [
      "外需仍強，但內需已明顯轉弱",
      "景氣動能仍具韌性，內外需求共同支撐",
      "景氣主要由庫存回補支撐，終端需求尚未改善",
      "燈號高檔主要反映股市，與實體經濟關聯有限"
    ],
    correct: 1,
    explanation: "7 月景氣燈號持穩 41 分，內外需求同步擴張，顯示景氣動能仍具韌性，而非只靠單一部門支撐。",
    source: SOURCE_JACKSON,
    sourceLabel: "MacroMicro 8/30 一週盤前"
  },
  {
    topic: "美國就業",
    question: "美國 8 月非農就業大幅優於預期，但薪資增速放緩。這組數據最合理的解讀是？",
    options: [
      "就業市場明顯轉弱，通縮風險正在上升",
      "就業仍具韌性，但薪資通膨壓力沒有同步升高",
      "就業與薪資同步過熱，通膨壓力全面升高",
      "新增就業主要來自勞動人口持續退出市場"
    ],
    correct: 1,
    explanation: "8 月非農月增 16.2 萬人，高於市場預期；平均每小時薪資年增率則由 3.2% 放緩至 3.1%，呈現就業具韌性、薪資壓力未同步升高的組合。",
    source: SOURCE_WEEKLY,
    sourceLabel: "MacroMicro 9/6 一週盤前"
  },
  {
    topic: "政策判讀",
    question: "為什麼市場在強勁就業數據公布後，仍高度關注接下來的美國消費者物價指數（CPI）？",
    options: [
      "CPI 將決定美國政府是否增加就業人口",
      "聯準會委員已表明通膨數據是利率決策的重要關鍵",
      "CPI 可以直接預測美股每日漲跌",
      "CPI 將決定美元是否繼續存在"
    ],
    correct: 1,
    explanation: "在就業仍穩定的背景下，通膨是否持續放緩更可能左右利率決策；因此市場把下一份 CPI 視為關鍵驗證。",
    source: SOURCE_WEEKLY,
    sourceLabel: "MacroMicro 9/6 一週盤前"
  },
  {
    topic: "能源市場",
    question: "西德州中級原油（WTI）價格再度站上 90 美元，主要受到中東衝突不確定性推動。這反映油價增加了哪種溢價？",
    options: [
      "全球需求快速復甦帶來的景氣溢價",
      "美元走弱帶來的匯率溢價",
      "地緣政治與供給中斷風險溢價",
      "煉油旺季帶來的季節性溢價"
    ],
    correct: 2,
    explanation: "衝突可能干擾產油或運輸，市場會先把潛在供給中斷反映在價格中，形成地緣政治風險溢價。",
    source: SOURCE_WEEKLY,
    sourceLabel: "MacroMicro 9/6 一週盤前"
  },
  {
    topic: "黃金市場",
    question: "聯準會理事 Christopher Waller（華勒）的偏鴿談話一度帶動黃金反彈。最合理的傳導邏輯是？",
    options: [
      "談話態度降低市場升息預期，降低持有黃金的機會成本",
      "偏鴿訊號代表黃金供給即將中斷",
      "聯準會將直接購買黃金",
      "偏鴿訊號必然使所有商品價格上漲"
    ],
    correct: 0,
    explanation: "黃金不孳息；當偏鴿訊號降低市場對利率的預期，持有黃金的相對機會成本下降，通常有利金價。",
    source: SOURCE_WEEKLY,
    sourceLabel: "MacroMicro 9/6 一週盤前"
  },
  {
    topic: "債務與成長",
    question: "面對美國債務與高利率壓力，為什麼經濟成長仍是重要觀察重點？",
    options: [
      "只要名目國內生產毛額（GDP）成長，任何債務規模都不再構成風險",
      "當成長率足以支撐利息負擔時，債務壓力較容易被消化",
      "經濟成長會讓公債供給自然下降，利率也會同步歸零",
      "債務問題只能等待央行降息，與經濟基本面無關"
    ],
    correct: 1,
    explanation: "債務可持續性可用利率 r 與成長率 g 的相對關係理解；當成長夠強，經濟體更有能力吸收利息與債務負擔。",
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
