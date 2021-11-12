var timerEl = $("#timer");
var answerButton1 = $('#option1');
var answerButton2 = $('#option2');
var answerButton3 = $('#option3');
var answerButton4 = $('#option4');
var questionText = $('.questionText');
var questionBox = $('.questionBox');
var mainSpace = $('.mainSpace');
var startButton = $('<input type="button" value="Start" class="btn btn-primary my-5 fs-1 fw-bold" />');
var selectedAnswer = $('.btn-group')
var questionNumber = $('.questionNumber')
var youLost = $('<input type="button" value="Start" class="btn btn-primary my-5 fs-1 fw-bold" />');

var score = 0;
i = 0;


var timer;
var timerCount = 10;


// questions array with object question and question answers answers
var questions = [
  {
    question: "What is 1+1?",
    answerOptions: {
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
    },
    answer: "2"
      
  },
  {
    question: "What is 1+2?",
    answerOptions: {
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
    },
    answer: "3"
      
  },
  {
    question: "What is 2+2?",
    answerOptions: {
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
    },
    answer: "4"
      
  },
  {
    question: "What is 3+1?",
    answerOptions: {
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
    },
    answer: "4"
      
  },
  {
    question: "What is 3-1?",
    answerOptions: {
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
    },
    answer: "2"
      
  }
];

// hide the initial question button div and player div and append start button
function hide() {
  $('.questionBox').hide()
  $('.player').hide()
  startButton.appendTo($(".start"));
}

hide()

// function from START click
function mainfunction(event) {
  // START timer function
  startTimer()
    // show initial question button div -hide the START
  startButton.hide(200, "swing")
  $('.questionBox').show(800, "linear")
  // function for questions
      // .text jquery in the questions from the array
  function addAnswers() {
    questionNumber.text('Question ' + (i + 1) )
    questionText.text(questions[i].question)
    answerButton1.text(questions[i].answerOptions.option1);
    answerButton2.text(questions[i].answerOptions.option2);
    answerButton3.text(questions[i].answerOptions.option3);
    answerButton4.text(questions[i].answerOptions.option4);

    selectedAnswer.on('click', checkAnswer)
  }
  addAnswers();
 
  // check user answer
  function checkAnswer(event) {
    selectedAnswer.unbind()
    var userChoice = event.target.textContent;
    console.log(userChoice)
    if (userChoice === questions[i].answer) {
      score++
      questionBox.removeClass('border border-danger border-5')
      questionBox.addClass('border border-success border-5')
      timerCount++;
      console.log(score)
    } else {
      score--
      questionBox.removeClass('border border-success border-5')
      questionBox.addClass('border border-danger border-5')
      console.log(score)
    }
    i++
    if (i < questions.length) { 
      addAnswers()
    } else {
      $('.questionBox').hide()
      $('.player').show()
      clearInterval(timer);
      timerEl.prepend('Finished with ')
      // youLost.appendTo($(".start"))
    }
  }  
  
  function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerEl.text(timerCount + " Seconds Left")

    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      $('.questionBox').hide()
      $('.player').show()
      timerEl.text('Time is Up')
      // youLost.appendTo($(".start"))
    }
  }, 1000);
}
}
  
// display correct or incorrect

  // STORE PLAYER, Time left, AND SCORE, DISPLAY IN HIGHSCORE, CLEAR PLAYER and SCORE





// Event listener for new start button

// selectedAnswer.on('click', checkAnswer)

startButton.on('click', mainfunction)

