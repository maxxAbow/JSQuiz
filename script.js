//Questions
var myQuestions = [
{
    question: "What is the answer?",
    answers: {
        a: 'Yes',
        b: 'No',
        c: 'Maybe',
        d: 'Who cares'
    },
    correctAnswer: 'd'
},
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

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

//Generate Quiz function
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var output = [];
        var answers;

        for(var i=0;i<questions.length;i++){
            answers = [];
            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label'
                );
            }
            
            output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
	}

	function showResults(questions, quizContainer, resultsContainer){
        var answerContainers = quizContainer.querySelectorAll('.answers');
        var userAnswer = '';
        var numCorrect = 0;

        for(var i=0; i<questions.length; i++){
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
                answerContainers[i].style.color = 'lightgreen';
            }
            else{
                answerContainers[i].style.color='red';
            }
        }
            resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	//Show the questions
	showQuestions(questions, quizContainer);

	//When user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}


//Timer
let counter = 0;
let timeout;
let timer_on = 0;

function timedCount() {
  document.getElementById("time").value = counter;
  counter++;
  timeout = setTimeout(timedCount, 1000);
}
//When start button is clicked, start timer
function startTimer() {
  if (!timer_on) {
    timer_on = 1;
    timedCount();
  }
}
//when submit button is clicked, end timer
function stopTimer() {
  clearTimeout(timeout);
  timer_on = 0;
}
