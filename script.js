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

// ===============================
// STANJE APLIKACIJE
// ===============================

let gameMode = "study";

let questions = [];
let currentQuestion = 0;
let score = 0;

let wrongQuestions = JSON.parse(localStorage.getItem("wrongQuestions")) || [];

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

let categoryStats = JSON.parse(localStorage.getItem("categoryStats")) || {};

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

  const selectedCategories = [
    ...document.querySelectorAll(".category input:checked"),
  ].map((cb) => cb.value);

  const filteredQuestions = QUESTIONS.filter((q) =>
    selectedCategories.includes(q.category),
  );

  // Izbira načina kviza

  if (gameMode === "mistakes") {
    questions = filteredQuestions.filter((q) => wrongQuestions.includes(q.id));
  } else if (gameMode === "favorites") {
    questions = filteredQuestions.filter((q) => favorites.includes(q.id));
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

  const buttons = document.querySelectorAll(".option-btn");

  // Onemogoči vse gumbe
  buttons.forEach((btn) => {
    btn.disabled = true;
  });

  // Inicializacija statistike
  if (!categoryStats[q.category]) {
    categoryStats[q.category] = {
      correct: 0,
      total: 0,
    };
  }

  categoryStats[q.category].total++;

  // ==========================
  // PRAVILEN ODGOVOR
  // ==========================

  if (selectedIndex === q.answer) {
    button.classList.add("correct");

    feedback.textContent = "✅ Pravilen odgovor!";

    categoryStats[q.category].correct++;

    score++;

    scoreElement.textContent = score;

    // Če smo v načinu "Ponavljaj napake",
    // odstrani vprašanje iz napak
    if (gameMode === "mistakes") {
      wrongQuestions = wrongQuestions.filter((id) => id !== q.id);

      localStorage.setItem("wrongQuestions", JSON.stringify(wrongQuestions));
    }
  }

  // ==========================
  // NAPAČEN ODGOVOR
  // ==========================
  else {
    button.classList.add("wrong");

    feedback.textContent = "❌ Napačen odgovor.";

    // Shrani med napake
    if (!wrongQuestions.includes(q.id)) {
      wrongQuestions.push(q.id);

      localStorage.setItem("wrongQuestions", JSON.stringify(wrongQuestions));
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

  localStorage.setItem("categoryStats", JSON.stringify(categoryStats));

  // ==========================
  // RAZLAGA
  // ==========================

  if (gameMode === "study" && q.explanation) {
    explanation.classList.remove("hidden");

    explanation.innerHTML = `<strong>Razlaga:</strong><br>${q.explanation}`;
  }

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

  const statsText = Object.entries(categoryStats)

    .map(([cat, stat]) => {
      const percent = Math.round((stat.correct / stat.total) * 100);

      return `
                <div class="stats-row">
                    <span>${capitalize(cat)}</span>
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

  saveBestScore();
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
  const best = localStorage.getItem("bestScore");

  if (best === null || score > Number(best)) {
    localStorage.setItem("bestScore", score);
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

    if (!favorites.includes(q.id)) {
      favorites.push(q.id);
    } else {
      favorites = favorites.filter((id) => id !== q.id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    updateFavoriteButton();
  });
}

function updateFavoriteButton() {
  if (!favoriteBtn) return;

  const q = questions[currentQuestion];

  if (!q) return;

  if (favorites.includes(q.id)) {
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
