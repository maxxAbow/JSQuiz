// //TIMER
// let startEl=getElementById('start');
// let submitEl=getElementById('submit');
// let counter = 0;
// let timeout;
// let timer_on = 0;

// function timedCount() {
//   document.getElementById("time").value = counter;
//   counter++;
//   timeout = setTimeout(timedCount, 1000);
// }
// //When start button is clicked, start timer
// startEl.addEventListener('click', function startTimer() {
//   if (!timer_on) {
//     timer_on = 1;
//     timedCount();
//   }
// });
// //when submit button is clicked, end timer
// submitEl.addEventListener('click', function stopTimer() {
//   clearTimeout(timeout);
//   timer_on = 0;
// });

var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("sumbit");
var stopwatch = {
    // (A) PROPERTIES
    time : null,
    reset : null,
    go : null,
    timer : null,
    now : 0,
  };

// (B) INITIALIZE
init : () => {
    // (B1) GET HTML ELEMENTS
    stopwatch.time = document.getElementById("sw-time");
    stopwatch.reset = document.getElementById("submit");
    stopwatch.go = document.getElementById("start");
   
  window.addEventListener("load", stopwatch.init);
};
  // (C) START!
function start() {
    stopwatch.timer = setInterval(stopwatch.tick, 1000);
  };
   
  // (D) STOP
  function stop() {
    clearInterval(stopwatch.timer);
    stopwatch.timer = null;
  };
// (E) TIMER ACTION
tick : () => {
    // (E1) CALCULATE HOURS, MINS, SECONDS
    stopwatch.now++;
    let hours = 0, mins = 0, secs = 0,
    remain = stopwatch.now;
    hours = Math.floor(remain / 3600);
    remain -= hours * 3600;
    mins = Math.floor(remain / 60);
    remain -= mins * 60;
    secs = remain;
   
    // (E2) UPDATE THE DISPLAY TIMER
    if (hours<10) { hours = "0" + hours; }
    if (mins<10) { mins = "0" + mins; }
    if (secs<10) { secs = "0" + secs; }
    stopwatch.time.innerHTML = hours + ":" + mins + ":" + secs;
  };

// (F) RESET
reset : () => {
    if (stopwatch.timer != null) { stopwatch.stop(); }
    stopwatch.now = -1;
    stopwatch.tick();
};

startBtn.addEventListener('click',start());
submitBtn.addEventListener('click',stop());





// //Questions as variables
// var firstQuestion = [
//     {
//         question: "What is the answer?",
//         answers: {
//             a: 'Yes',
//             b: 'No',
//             c: 'Maybe',
//             d: 'Who cares'
//         },
//         correctAnswer: 'd'
//     }
// ]

// var secondQuestion = [
//     {
//         question: "Which came first?",
//         answers: {
//             a: 'Chicken',
//             b: 'Egg',
//             c: 'Lizard',
//             d: 'Road'
//         },
//         correctAnswer: 'c'
//     }
// ]

// var quizContainer = document.getElementById('quiz');
// var resultsContainer = document.getElementById('results');
// var submitButton = document.getElementById('submit');
// var startQuiz = document.getElementById('start');

// generateQuiz(firstQuestion, quizContainer, resultsContainer, submitButton);



// //Generate Quiz functions
// startEl.addEventListener('click', function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

// 	function showQuestions(questions, quizContainer){
// 		var output = [];
//         var answers;

//         for(var i=0;i<questions.length;i++){
//             answers = [];
//             for(letter in questions[i].answers){
//                 answers.push(
//                     '<label>'
//                     + '<input type="radio" name="question'+i+'" value="'+letter+'">'
//                     + letter + ': '
//                     + questions[i].answers[letter]
//                     + '</label'
//                 );
//             }
            
//             output.push(
//             '<div class="question">' + questions[i].question + '</div>'
//             + '<div class="answers">' + answers.join('') + '</div>'
//             );
//         }
//         quizContainer.innerHTML = output.join('');
// 	}
//     showQuestions(questions, quizContainer);
// });


// //When user clicks submit, show results
// // submitButton.onclick = function(){
// // 	showResults(questions, quizContainer, resultsContainer)