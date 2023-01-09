//STOPWATCH
var hours =0;
var mins =0;
var seconds =0;

$('#start').click(function(){
      startTimer();
});

$('#submit').click(function(){
      clearTimeout(timex);
});

$('#reset').click(function(){
      hours =0;      mins =0;      seconds =0;
  $('#hours','#mins').html('00:');
  $('#seconds').html('00');
});

function startTimer(){
  timex = setTimeout(function(){
      seconds++;
    if(seconds >59){seconds=0;mins++;
       if(mins>59) {
       mins=0;hours++;
         if(hours <10) {$("#hours").text('0'+hours+':')} else $("#hours").text(hours+':');
        }
                       
    if(mins<10){                     
      $("#mins").text('0'+mins+':');}       
       else $("#mins").text(mins+':');
                   }    
    if(seconds <10) {
      $("#seconds").text('0'+seconds);} else {
      $("#seconds").text(seconds);
      }
     
    
      startTimer();
  },1000);
};



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

