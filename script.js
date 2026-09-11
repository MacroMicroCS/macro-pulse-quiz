const SOURCE_CYCLE = "https://www.macromicro.me/blog/quant-report-ecocycle-11-industry";
const SOURCE_WEEKLY = "https://www.macromicro.me/blog/mm-weekly-premarket-update-nonfarm-payrolls-returned-to-growth-range-as-expected-this-week-s-cpi-will-be-the-decisive-factor";
const SOURCE_AI = "https://www.macromicro.me/blog/market-update-ai-breaks-cycle-manufacturing-and-productivity-resonate-and-rise";
const SOURCE_BONDS = "https://www.macromicro.me/blog/market-update-global-longterm-bond-yields-surge-are-bonds-still-a-good-investment-option";
const SOURCE_MACROMICRO = "https://www.macromicro.me/";

const questions = [
  {
    topic: "景氣循環",
    question: "根據財經 M 平方網站的景氣循環圖，假設目前景氣落在「擴張」象限，代表經濟成長動能與通膨壓力同步升溫。此時哪一組資產配置邏輯較合理？",
    options: [
      "擴張象限通常代表股市表現優於債市",
      "擴張象限通常代表股票與債券都應減碼",
      "不論景氣在哪個階段，股票長期報酬較高，因此都應該加碼股票",
      "景氣循環只影響經濟，不會影響不同資產的相對表現"
    ],
    correct: 0,
    explanation: "景氣循環圖反映經濟成長與通膨的不同組合。景氣位於「擴張」象限時，經濟成長動能通常仍強，企業獲利有支撐，股票表現往往優於債券；同時通膨與利率上升，債券價格可能承壓。進入「趨緩」後，股債表現可能同時轉弱；到了「衰退」階段，債券等防禦性資產通常更受青睞。不同階段的受惠資產不同，配置也應隨景氣位置調整。",
    source: SOURCE_CYCLE,
    sourceLabel: "財經 M 平方：景氣循環下的產業輪動"
  },
  {
    topic: "台灣 GDP",
    question: "假設今年台灣 GDP 年增率預估來到約 12%，同時台股大幅上漲。若想了解這波經濟成長背後最重要的推力，GDP 的哪個項目最值得優先觀察？",
    options: [
      "民間消費",
      "政府消費",
      "出口與淨出口",
      "房屋租金"
    ],
    correct: 2,
    explanation: "台灣是高度出口導向的經濟體。當全球 AI、半導體與電子產品需求強勁時，出口與淨出口往往會成為 GDP 成長的重要推力，也可能反映在科技業營收與企業獲利上。因此，看到 GDP 很強，不能只看總數，更要拆解是哪個 GDP 組成項目帶動成長。",
    source: SOURCE_MACROMICRO,
    sourceLabel: "財經 M 平方：台灣 GDP 與總體資料"
  },
  {
    topic: "通膨與利率",
    question: "近期通膨數據重新升溫，市場開始擔心美國聯準會（Fed）可能再次升息。其他條件不變，哪一組市場反應最合理？",
    options: [
      "債券價格承壓，股票估值可能下降",
      "債券價格上漲、股票估值上升，美元走弱",
      "主要影響美國銀行，對股票與債券投資人的影響有限",
      "通膨升溫代表經濟轉強，因此風險性資產通常會同步上漲"
    ],
    correct: 0,
    explanation: "通膨升溫可能讓美國聯準會延後降息，甚至重新考慮升息。利率上升會提高資金成本與折現率，因此可能壓低股票估值；債券殖利率上升時，既有債券價格則面臨下跌壓力；較高的美元利率通常也會對美元形成支撐。聯準會的利率決策會影響股票、債券、匯率與整體資產配置。",
    source: SOURCE_WEEKLY,
    sourceLabel: "財經 M 平方：通膨與聯準會政策觀察"
  },
  {
    topic: "AI 投資",
    question: "科技巨頭持續擴大 AI 資本支出、資料中心越蓋越多，AI 類股也一路上漲。此時投資人最應該追蹤什麼？",
    options: [
      "哪家公司的 AI 資本支出最大",
      "AI 類股成交量是否繼續增加",
      "AI 投資最後能否轉化成訂單、營收與獲利",
      "哪家公司今年的股價漲幅最高"
    ],
    correct: 2,
    explanation: "AI 投資可以創造龐大的供應鏈需求，但長期行情最終仍要回到「資本支出 → 訂單 → 營收 → 獲利」。如果投資持續增加，卻沒有帶來相應的商業化與獲利成長，就要留意市場期待是否跑得太快。",
    source: SOURCE_AI,
    sourceLabel: "財經 M 平方：AI、製造業與生產力循環"
  },
  {
    topic: "長債風險",
    question: "朋友跟你說：「美債殖利率都這麼高了，現在買長天期債券 ETF 應該很安全吧？」你會怎麼回答？",
    options: [
      "沒錯，殖利率高代表債券價格一定已經到底",
      "不一定，如果殖利率繼續上升，長債價格仍可能明顯下跌",
      "只要美國聯準會不升息，長債就不可能下跌",
      "債券 ETF 有配息，因此不必在意價格漲跌"
    ],
    correct: 1,
    explanation: "「殖利率很高」不等於「殖利率不會更高」。長天期債券對利率變化尤其敏感；即使美國聯準會沒有升息，通膨、政府發債或期限溢價上升，都可能繼續推高長端殖利率，造成長債價格下跌。",
    source: SOURCE_BONDS,
    sourceLabel: "財經 M 平方：全球長債殖利率與債券配置"
  },
  {
    topic: "全球市場",
    question: "截至 2026 年 9 月上旬，若以各市場常用基準的當地貨幣價格報酬比較，以下哪個市場今年以來表現最好？",
    options: [
      "黃金",
      "台股",
      "韓股",
      "美國那斯達克（Nasdaq）"
    ],
    correct: 2,
    explanation: "不同市場的表現會受到產業結構、企業獲利、資金流向、利率、匯率與市場情緒影響。韓股受到半導體與 AI 供應鏈題材帶動，相關企業獲利與市場預期改善，推升整體股市表現。比較市場績效時，仍應確認期間、計價幣別，以及採用價格報酬或含息報酬，才能公平判斷。",
    source: SOURCE_MACROMICRO,
    sourceLabel: "財經 M 平方：南韓總經成績單"
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
