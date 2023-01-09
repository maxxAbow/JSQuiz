//Questions as variables
var questions = [
    {
        question: "What is the answer?",
        answers: {
            a: 'Yes',
            b: 'No',
            c: 'Maybe',
            d: 'Who cares'
        },
        correctAnswer: 'd'
    }
]

var secondQuestion = [
    {
        question: "Which came first?",
        answers: {
            a: 'Chicken',
            b: 'Egg',
            c: 'Lizard',
            d: 'Road'
        },
        correctAnswer: 'c'
    }
];


//Variables
//Quiz
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
//Score input
const scoreInput = document.getElementById("results");
const initials = document.getElementById("initials");
const initialsBtn = document.getElementById("submitInitials");
const userScore = document.getElementById("score");
//High Score
const highscores = document.querySelector("#highScores");
const scores = document.querySelector("#scores");
const clearScoresBtn = document.querySelector("#clearScores");
// const seeHighScoresBtn = document.querySelector("#viewHighScores");
let score = 0;
let currentQ = 0;
let highScores = [];
let interval;
let timeGiven = 75;
let secondsElapsed = 0;


// Hide element
function hide(element) {
  element.style.display = "none";
}

// Show element
function show(element) {
  element.style.display = "block";
}

// Reset variable
function reset() {
  score = 0;
  currentQ = 0;
  secondsElapsed = 0;
  timer.textContent = 0;
}


//Build Question
function buildQuestion() {
  question.textContent = questions[currentQ].title;
  for (i = 0; i < answers.children.length; i++) {
      answers.children[i].children[0].textContent = `${(i + 1)}: ${questions[currentQ].choices[i]}`;
  }
}

//Store high scores locally
function writeHighScores() {
  // clear
  scores.innerHTML = "";
  show(highscores);
  highScores = JSON.parse(localStorage.getItem("scores"));
  for (let i = 0; i < highScores.length; i++) {
      let scoreItem = document.createElement("div");
      scoreItem.className += "row mb-3 p-2";
      console.log(scoreItem)
      scoreItem.setAttribute("style", "background-color:#FFDBE9;");
      scoreItem.textContent = `${(i + 1)}. ${highScores[i].username} - ${highScores[i].usrScore}`;
      scores.appendChild(scoreItem);
  }
};


//Check answer, update score
function checkAnswer(answer) {
  if (questions[currentQ].answer == questions[currentQ].choices[answer.id]) {
      score += 5;
      displayMessage("Correct! ✅");
  }
  else {
      secondsElapsed += 10;
      displayMessage("Wrong! ❌");
  }
};

//Next Question
//Update score if there was a prev question
function nextQuestion() {
  currentQ++;
  if (currentQ < questions.length) {
      renderQuestion();
  } else {
      stopTime();
      if ((timeGiven - secondsElapsed) > 0)
          score += (timeGiven - secondsElapsed);
      usrScore.textContent = score;
      hide(quiz);
      show(inputScore);
      timer.textContent = 0;
  }
};


//Show high scores
seeHighScoresBtn.addEventListener("click", function () {
  hide(welcome);
  hide(quiz);
  hide(inputScore);
  renderHighScores();
  stopTime();
  reset();
});

//Start quiz
startQuizBtn.addEventListener("click", function () {
  hide(welcome);
  startTime();
  renderQuestion();
  show(quiz);
});

//Check answer, next question
answers.addEventListener("click", function (e) {
  if (e.target.matches("button")) {
      checkAnswer(e.target);
      nextQuestion();
  }
});

//Call to show high scores
submitInitialsBtn.addEventListener("click", function () {
  let initValue = initials.value.trim();
  if (initValue) {
      let usrScore = { username: initValue, usrScore: score };
      initials.value = '';
      highScores = JSON.parse(localStorage.getItem("scores")) || [];
      highScores.push(usrScore)
      localStorage.setItem("scores", JSON.stringify(highScores));
      hide(inputScore);
      renderHighScores();
      reset();
  }
});


//Clear local storage
clearScoresBtn.addEventListener("click", function () {
  highScores = [];
  localStorage.setItem("scores", JSON.stringify(highScores));
  renderHighScores();
});