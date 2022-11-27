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
    
//Variables
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
