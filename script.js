// ===============================
// ELEMENTI
// ===============================

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");

const studyModeBtn = document.getElementById("studyModeBtn");
const examModeBtn = document.getElementById("examModeBtn");
const mistakesBtn = document.getElementById("mistakesBtn");
const favoritesModeBtn = document.getElementById("favoritesModeBtn");

const questionCounter = document.getElementById("questionCounter");
const scoreElement = document.getElementById("score");
const categoryName = document.getElementById("categoryName");

const progressFill = document.getElementById("progressFill");

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("optionsContainer");

const feedback = document.getElementById("feedback");
const explanation = document.getElementById("explanation");

const nextBtn = document.getElementById("nextBtn");

const finalScore = document.getElementById("finalScore");
const grade = document.getElementById("grade");

const restartBtn = document.getElementById("restartBtn");
const homeBtn = document.getElementById("homeBtn");

const favoriteBtn = document.getElementById("favoriteBtn");
const quitBtn = document.getElementById("quitBtn");

const dashboardBest = document.getElementById("dashboardBest");
const dashboardMistakes = document.getElementById("dashboardMistakes");
const dashboardFavorites = document.getElementById("dashboardFavorites");
const dashboardAccuracy = document.getElementById("dashboardAccuracy");

// ===============================
// STANJE APLIKACIJE
// ===============================

let gameMode = "study";

let questions = [];
let currentQuestion = 0;
let score = 0;

let quizReview = [];

const SUBJECT = QUESTIONS[0].subject;

let wrongQuestions =
  JSON.parse(localStorage.getItem(`wrongQuestions-${SUBJECT}`)) || [];

let favorites = JSON.parse(localStorage.getItem(`favorites-${SUBJECT}`)) || [];

let categoryStats =
  JSON.parse(localStorage.getItem(`categoryStats-${SUBJECT}`)) || {};

function getQuestionKey(question) {
  return `${question.subject}-${question.id}`;
}

function getCategoryKey(question) {
  return `${question.subject}-${question.category}`;
}

// ===============================
// IZBIRA NAČINA
// ===============================

function setActiveMode(activeButton) {
  [studyModeBtn, examModeBtn, mistakesBtn, favoritesModeBtn].forEach((btn) => {
    if (btn) {
      btn.classList.remove("active");
    }
  });

  activeButton.classList.add("active");
}

// ===============================
// GUMBI ZA NAČIN
// ===============================

studyModeBtn.addEventListener("click", () => {
  gameMode = "study";

  setActiveMode(studyModeBtn);
});

examModeBtn.addEventListener("click", () => {
  gameMode = "exam";

  setActiveMode(examModeBtn);
});

mistakesBtn.addEventListener("click", () => {
  gameMode = "mistakes";

  setActiveMode(mistakesBtn);
});

favoritesModeBtn.addEventListener("click", () => {
  gameMode = "favorites";

  setActiveMode(favoritesModeBtn);
});

// privzeto

setActiveMode(studyModeBtn);

// ===============================
// ZAČNI KVIZ
// ===============================

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  score = 0;
  currentQuestion = 0;
  quizReview = [];

  const selectedCategories = [
    ...document.querySelectorAll(".categories-grid input:checked"),
  ].map((cb) => cb.value);

  const filteredQuestions = QUESTIONS.filter((q) =>
    selectedCategories.includes(q.category),
  );

  // Izbira načina kviza

  if (gameMode === "mistakes") {
    questions = filteredQuestions.filter((q) =>
      wrongQuestions.includes(getQuestionKey(q)),
    );
  } else if (gameMode === "favorites") {
    questions = filteredQuestions.filter((q) =>
      favorites.includes(getQuestionKey(q)),
    );
  } else {
    questions = filteredQuestions;
  }

  // Premešaj vprašanja
  shuffleArray(questions);

  // Izpitni način: samo 30 vprašanj
  if (gameMode === "exam") {
    questions = questions.slice(0, 30);
  }

  // Če ni vprašanj
  if (questions.length === 0) {
    let message = "Ni vprašanj za izbran način.";

    if (gameMode === "mistakes") {
      message = "🎉 Trenutno nimaš vprašanj za ponavljanje napak!";
    } else if (gameMode === "favorites") {
      message = "⭐ Nimaš označenih vprašanj.";
    }

    alert(message);

    return;
  }

  // Prikaži kviz
  startScreen.classList.add("hidden");

  resultScreen.classList.add("hidden");

  quizScreen.classList.remove("hidden");

  showQuestion();
}

// ===============================
// PRIKAŽI VPRAŠANJE
// ===============================

function showQuestion() {
  resetQuestion();

  const q = questions[currentQuestion];

  updateFavoriteButton();

  questionCounter.textContent = `${currentQuestion + 1} / ${questions.length}`;

  scoreElement.textContent = score;

  categoryName.textContent = capitalize(q.category);

  questionElement.textContent = q.question;

  progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

  // naključno premešaj odgovore

  const shuffledOptions = q.options.map((option, index) => ({
    option,
    originalIndex: index,
  }));

  shuffleArray(shuffledOptions);

  if (q.options.length === 2) {
    optionsContainer.classList.add("truefalse");
  } else {
    optionsContainer.classList.remove("truefalse");
  }

  shuffledOptions.forEach((item) => {
    const btn = document.createElement("button");

    btn.classList.add("option-btn");

    btn.textContent = item.option;

    btn.addEventListener("click", () => {
      selectAnswer(btn, item.originalIndex);
    });

    optionsContainer.appendChild(btn);
  });
}

// ===============================
// ODGOVOR
// ===============================

function selectAnswer(button, selectedIndex) {
  const q = questions[currentQuestion];
  const selectedAnswerText = q.options[selectedIndex];
  const correctAnswerText = q.options[q.answer];

  const buttons = document.querySelectorAll(".option-btn");

  // Onemogoči vse gumbe
  buttons.forEach((btn) => {
    btn.disabled = true;
  });

  // Inicializacija statistike
  const categoryKey = getCategoryKey(q);

  if (!categoryStats[categoryKey]) {
    categoryStats[categoryKey] = {
      correct: 0,
      total: 0,
    };
  }

  categoryStats[categoryKey].total++;

  // ==========================
  // PRAVILEN ODGOVOR
  // ==========================

  if (selectedIndex === q.answer) {
    button.classList.add("correct");

    feedback.textContent = "Pravilen odgovor!";

    categoryStats[categoryKey].correct++;

    score++;

    scoreElement.textContent = score;

    // Če smo v načinu "Ponavljaj napake",
    // odstrani vprašanje iz napak
    if (gameMode === "mistakes") {
      wrongQuestions = wrongQuestions.filter((id) => id !== getQuestionKey(q));
      localStorage.setItem(
        `wrongQuestions-${SUBJECT}`,
        JSON.stringify(wrongQuestions),
      );
    }
  }

  // ==========================
  // NAPAČEN ODGOVOR
  // ==========================
  else {
    button.classList.add("wrong");

    feedback.textContent = "❌ Napačen odgovor.";

    // Shrani med napake
    const key = getQuestionKey(q);

    if (!wrongQuestions.includes(key)) {
      wrongQuestions.push(key);
      localStorage.setItem(
        `wrongQuestions-${SUBJECT}`,
        JSON.stringify(wrongQuestions),
      );
    }

    // Označi pravilen odgovor
    buttons.forEach((btn) => {
      if (btn.textContent === q.options[q.answer]) {
        btn.classList.add("correct");
      }
    });
  }

  // ==========================
  // SHRANI STATISTIKO
  // ==========================

  localStorage.setItem(
    `categoryStats-${SUBJECT}`,
    JSON.stringify(categoryStats),
  );

  // ==========================
  // RAZLAGA
  // ==========================

  if (gameMode === "study" && q.explanation) {
    explanation.classList.remove("hidden");

    explanation.innerHTML = `<strong>Razlaga:</strong><br>${q.explanation}`;
  }

  quizReview.push({
    question: q.question,
    selected: selectedAnswerText,
    correct: correctAnswerText,
    explanation: q.explanation || "",
    isCorrect: selectedIndex === q.answer,
  });

  // ==========================
  // GUMB NASLEDNJE
  // ==========================

  nextBtn.classList.remove("hidden");
}

// ===============================
// NASLEDNJE VPRAŠANJE
// ===============================

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
});

// ===============================
// ZAKLJUČEK KVIZA
// ===============================

function finishQuiz() {
  quizScreen.classList.add("hidden");

  resultScreen.classList.remove("hidden");

  finalScore.textContent = `${score} / ${questions.length}`;

  const percentage = (score / questions.length) * 100;

  if (gameMode === "mistakes" && wrongQuestions.length === 0) {
    grade.textContent = "🎉 Odpravil si vse svoje napake!";
  } else {
    grade.textContent = getGrade(percentage);
  }

  // odstrani staro statistiko

  document.querySelectorAll(".stats").forEach((el) => el.remove());

  // ustvari novo statistiko

  const currentSubject = questions[0].subject;

  const statsText = Object.entries(categoryStats)

    .filter(([key]) => key.startsWith(`${currentSubject}-`))

    .map(([key, stat]) => {
      const category = key.replace(`${currentSubject}-`, "");

      const percent = Math.round((stat.correct / stat.total) * 100);

      return `
            <div class="stats-row">
                <span>${capitalize(category)}</span>
                <strong>${percent}%</strong>
            </div>
        `;
    })

    .join("");

  document
    .querySelector(".result-card")

    .insertAdjacentHTML(
      "beforeend",

      `
            <div class="stats">

                <h3>📊 Statistika</h3>

                ${statsText}

            </div>
            `,
    );

  document.querySelectorAll(".review-section").forEach((el) => el.remove());

  const mistakes = quizReview.filter((item) => !item.isCorrect);

  if (mistakes.length > 0) {
    const reviewHTML = mistakes
      .map(
        (item) => `
    <div class="review-item">
      <h4>❌ ${item.question}</h4>

      <p>
        <strong>Tvoj odgovor:</strong><br>
        ${item.selected}
      </p>

      <p>
        <strong>Pravilen odgovor:</strong><br>
        ${item.correct}
      </p>

      ${
        item.explanation
          ? `
        <div class="review-explanation">
          ${item.explanation}
        </div>
      `
          : ""
      }
    </div>
  `,
      )
      .join("");

    document.querySelector(".result-card").insertAdjacentHTML(
      "beforeend",
      `
      <div class="review-section">
        <h3>📚 Pregled napačnih odgovorov</h3>

        ${reviewHTML}
      </div>
      `,
    );
  }

  saveBestScore();
  updateDashboard();
}

// ===============================
// OCENA
// ===============================

function getGrade(percent) {
  if (percent >= 90) {
    return "🏆 Odlično!";
  }

  if (percent >= 80) {
    return "🥇 Prav dobro!";
  }

  if (percent >= 65) {
    return "👍 Dobro!";
  }

  if (percent >= 50) {
    return "📚 Zadostno.";
  }

  return "💪 Poskusi ponovno.";
}

// ===============================
// SHRANI REKORD
// ===============================

function saveBestScore() {
  const best = localStorage.getItem(`bestScore-${SUBJECT}`);

  if (best === null || score > Number(best)) {
    localStorage.setItem(`bestScore-${SUBJECT}`, score);
  }
}

// ===============================
// IGRAJ ZNOVA
// ===============================

restartBtn.addEventListener("click", () => {
  startQuiz();
});

// ===============================
// DOMOV
// ===============================

homeBtn.addEventListener("click", () => {
  quizScreen.classList.add("hidden");

  resultScreen.classList.add("hidden");

  startScreen.classList.remove("hidden");
});

// ===============================
// RESET VPRAŠANJA
// ===============================

function resetQuestion() {
  feedback.textContent = "";

  explanation.textContent = "";

  explanation.classList.add("hidden");

  nextBtn.classList.add("hidden");

  optionsContainer.innerHTML = "";

  optionsContainer.classList.remove("truefalse");
}

// ===============================
// FAVORITES
// ===============================

if (favoriteBtn) {
  favoriteBtn.addEventListener("click", () => {
    const q = questions[currentQuestion];

    const key = getQuestionKey(q);

    if (!favorites.includes(key)) {
      favorites.push(key);
    } else {
      favorites = favorites.filter((id) => id !== key);
    }
    localStorage.setItem(`favorites-${SUBJECT}`, JSON.stringify(favorites));
    updateFavoriteButton();
  });
}

function updateFavoriteButton() {
  if (!favoriteBtn) return;

  const q = questions[currentQuestion];

  if (!q) return;

  if (favorites.includes(getQuestionKey(q))) {
    favoriteBtn.textContent = "⭐ Označeno";
  } else {
    favoriteBtn.textContent = "☆ Označi vprašanje";
  }
}

// ===============================
// POMOŽNE FUNKCIJE
// ===============================

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

quitBtn.addEventListener("click", () => {
  const confirmQuit = confirm("Ali želiš končati kviz?");

  if (!confirmQuit) return;

  quizScreen.classList.add("hidden");

  resultScreen.classList.add("hidden");

  startScreen.classList.remove("hidden");
});

const categoriesModal = document.getElementById("categoriesModal");

document.getElementById("openCategoriesBtn").onclick = () => {
  categoriesModal.classList.add("active");
};

document.getElementById("closeCategoriesBtn").onclick = () => {
  categoriesModal.classList.remove("active");
};

document.getElementById("saveCategoriesBtn").onclick = () => {
  const checked = document.querySelectorAll(
    ".categories-grid input:checked",
  ).length;

  if (checked === 0) {
    alert("Izberi vsaj eno poglavje.");
    return;
  }

  categoriesModal.classList.remove("active");

  updateSelectedCount();
};

document.getElementById("selectAllBtn").onclick = () => {
  document
    .querySelectorAll(".categories-grid input")
    .forEach((cb) => (cb.checked = true));

  updateSelectedCount();
};

document.getElementById("clearAllBtn").onclick = () => {
  document
    .querySelectorAll(".categories-grid input")
    .forEach((cb) => (cb.checked = false));

  updateSelectedCount();
};

function updateSelectedCount() {
  const checked = document.querySelectorAll(
    ".categories-grid input:checked",
  ).length;

  const total = document.querySelectorAll(".categories-grid input").length;

  document.getElementById("selectedCount").textContent =
    checked === total
      ? `Vsa poglavja (${total})`
      : `${checked} od ${total} poglavij`;
}

function updateDashboard() {
  const best = localStorage.getItem(`bestScore-${SUBJECT}`) || 0;

  dashboardBest.textContent = best;

  dashboardMistakes.textContent = wrongQuestions.length;

  dashboardFavorites.textContent = favorites.length;

  let totalCorrect = 0;
  let totalAnswered = 0;

  Object.values(categoryStats).forEach((stat) => {
    totalCorrect += stat.correct;
    totalAnswered += stat.total;
  });

  const accuracy =
    totalAnswered === 0 ? 0 : Math.round((totalCorrect / totalAnswered) * 100);

  dashboardAccuracy.textContent = `${accuracy}%`;
}

updateDashboard();
updateSelectedCount();
