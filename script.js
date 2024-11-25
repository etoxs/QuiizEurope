const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        options: ["Paris", "Londres", "Berlin", "Madrid"],
        answer: "Paris",
    },
    {
        question: "Quelle est la capitale de l'Allemagne ?",
        options: ["Vienne", "Berlin", "Bruxelles", "Prague"],
        answer: "Berlin",
    },
    {
        question: "Quelle est la capitale de l'Espagne ?",
        options: ["Madrid", "Lisbonne", "Rome", "Athènes"],
        answer: "Madrid",
    },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const totalEl = document.getElementById("total");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.classList.add("option");
        btn.textContent = option;
        btn.addEventListener("click", () => selectOption(btn, q.answer));
        optionsEl.appendChild(btn);
    });
}

function selectOption(button, answer) {
    Array.from(optionsEl.children).forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
    nextBtn.disabled = false;
    nextBtn.onclick = () => {
        if (button.textContent === answer) score++;
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
        nextBtn.disabled = true;
    };
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    resultEl.style.display = "block";
    scoreEl.textContent = score;
    totalEl.textContent = questions.length;
}

restartBtn.onclick = () => {
    currentQuestion = 0;
    score = 0;
    resultEl.style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
};

loadQuestion();
