const questions = [
  {
    question: "Which team win the ipl on 2023?",
    answers: [
      { text: "Mumbai Inadians",correct: false},
      { text: "Chennai super kings",correct: true},
      { text: "Rajasthan Royals",correct: false},
      { text: "Delhi capitals",correct: false},
    ]
    },
  
    {
      question: "who is the director of ratchasan?",
      answers: [
      { text: "Ram kumar",correct: true},
      { text: "Jaya ram",correct: false},
      { text: "Manoj",correct: false},
      { text: "Karthik raj",correct: false},
      ]
    },
    {
      question: "what is virat kohli jessy number?",
      answers: [
        { text: 45,correct: false},
        { text: 7,correct: false},
        { text: 18,correct: true},
        { text: 10,correct: false},
      ]
    },
    {
      question: "what is the capital of america?",
      answers: [
        { text: "Washington",correct: false},
        { text: "california",correct: false},
        { text: "New york",correct: true},
        { text: "los angals",correct: false},
      ]
    },
     {
      question:"Which is the smallest continent inthe world?",
      answers: [
        { text: "Asia",correct: false},
        { text: "Australia",correct: true},
        { text: "Arctic",correct: false},
        { text: "Africa",correct: false},
      ]
     }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0 ;
let score = 0 ;

 function startQuiz(){
  currentQuestionIndex = 0 ;
  score = 0 ;
  nextButton.innerHTML = "Next";
  showQuestion();

 }
  function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
      const button = document.createElement("button");
      button.innerHTML =answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if(answer.correct){
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click",selectAnswer);
    });
  }
  function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;
    }else{
      selectedBtn.classList.add("incorrect");
    }
  
    Array.from(answerButtons.children).forEach(button => {
      if(button.dataset.correct === "true"){
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  function showScore(){
    resetState();
    questionElement.innerHTML = `You get score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

  }

  function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
      showQuestion();
    }else{
      showScore();
    }
  }

  nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
      handleNextButton();
    }else{
      startQuiz();
    }
  })
  

    startQuiz();
  
  




  