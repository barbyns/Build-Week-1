let correctAnswers = 0;
let wrongAnswers = 0;
let timeLeft = 60;
let timer;
document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      question: "How can I create a checkbox in HTML?",
      answers: [
        { text: 'input type = "check"', correct: false },
        { text: 'input type = "checkbox"', correct: true },
        { text: "checkbox", correct: false },
        { text: 'input type = "button"', correct: false },
      ],
    },
    {
      question: "What does CSS stand for?",
      answers: [
        { text: "Cascading Style Sheets", correct: true },
        { text: "Computer Style Sheets", correct: false },
        { text: "Creative Style Sheets", correct: false },
        { text: "Colorful Style Sheets", correct: false },
      ],
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      answers: [
        { text: "<script>", correct: false },
        { text: "<css>", correct: false },
        { text: "<style>", correct: true },
        { text: "<link>", correct: false },
      ],
    },
    {
      question: "What does the `querySelector` method do in JavaScript?",
      answers: [
        { text: "Selects all elements with a given class", correct: false },
        { text: "Selects the first matching element", correct: true },
        { text: "Creates a new HTML element", correct: false },
        { text: "Removes an element from the DOM", correct: false },
      ],
    },
    {
      question:
        "Which of the following is NOT a valid JavaScript variable name?",
      answers: [
        { text: "let _name", correct: false },
        { text: "let 2name", correct: true },
        { text: "let $name", correct: false },
        { text: "let name1", correct: false },
      ],
    },
    {
      question: "Which CSS property controls the text size?",
      answers: [
        { text: "text-style", correct: false },
        { text: "font-size", correct: true },
        { text: "text-size", correct: false },
        { text: "font-style", correct: false },
      ],
    },
    {
      question: "What is the correct way to declare a JavaScript function?",
      answers: [
        { text: "function: myFunction()", correct: false },
        { text: "function myFunction()", correct: true },
        { text: "function = myFunction()", correct: false },
        { text: "myFunction function()", correct: false },
      ],
    },
    {
      question: "Which symbol is used for comments in CSS?",
      answers: [
        { text: "// This is a comment", correct: false },
        { text: "<!-- This is a comment -->", correct: false },
        { text: "/* This is a comment */", correct: true },
        { text: "# This is a comment", correct: false },
      ],
    },
    {
      question: "What is the default display value for a `<div>` element?",
      answers: [
        { text: "inline", correct: false },
        { text: "block", correct: true },
        { text: "inline-block", correct: false },
        { text: "flex", correct: false },
      ],
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      answers: [
        { text: "Number", correct: false },
        { text: "String", correct: false },
        { text: "Boolean", correct: false },
        { text: "Character", correct: true },
      ],
    },
  ];

  // Variabile che tiene traccia della domanda corrente
  let currentQuestionIndex = 0;

  // Seleziona gli elementi HTML in cui verranno mostrate le domande e le opzioni
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const questionNumber = document.getElementById("question-number");
  const mainContainer = document.querySelector("main");
  const timerText = document.getElementById("timer");
  const progressForeground = document.querySelector(".progress-foreground");
  function goTimer() {
    clearInterval(timer);
    timeLeft = 60;
    timerText.textContent = timeLeft;
    updateProgress();

    timer = setInterval(() => {
      timeLeft = timeLeft - 1;
      timerText.textContent = timeLeft;
      updateProgress();

      if (timeLeft === 0) {
        clearInterval(timer);
        wrongAnswers++;
        currentQuestionIndex++;
        loadQuestion();
      }
    }, 1000);
  }

  function updateProgress() {
    let progress = (timeLeft / 60) * 360;
    progressForeground.style.background = `conic-gradient(#00ffff ${progress}deg, transparent 0deg)`;
  }

  // Funzione per caricare una nuova domanda
  function loadQuestion() {
    // Se ci sono ancora domande disponibili...
    if (currentQuestionIndex < questions.length) {
      // Recupera la domanda attuale
      const currentQuestion = questions[currentQuestionIndex];

      // Mostra il testo della domanda
      questionText.textContent = currentQuestion.question;

      // Pulisce le risposte precedenti
      optionsContainer.innerHTML = "";

      // Usa un ciclo for per creare i bottoni delle risposte
      for (let i = 0; i < currentQuestion.answers.length; i++) {
        const button = document.createElement("button");
        button.classList.add("button-type-question");
        button.textContent = currentQuestion.answers[i].text;

        // Aggiunge un evento click per controllare la risposta
        button.addEventListener("click", function () {
          checkAnswer(currentQuestion.answers[i]);
        });

        // Aggiunge il bottone al contenitore delle risposte
        optionsContainer.appendChild(button);
      }

      // Aggiorna il numero della domanda
      questionNumber.textContent = `Question ${currentQuestionIndex + 1}/${
        questions.length
      }`;
      goTimer();
    } else {
      // Se le domande sono finite, mostra il pulsante dei risultati
      showResultsButton();
    }
  }

  function checkAnswer(selectedAnswer) {
    if (selectedAnswer.correct) {
      correctAnswers++; // Incrementa il punteggio delle risposte corrette
    } else {
      wrongAnswers++; // Incrementa il punteggio delle risposte sbagliate
    }

    currentQuestionIndex++; // Passa alla domanda successiva

    if (currentQuestionIndex < questions.length) {
      loadQuestion(); // Carica la prossima domanda
    } else {
      document.querySelector(".progress-foreground").style.display = "none";
      document.querySelector(".progress-background").style.display = "none";
      document.querySelector(".text_bottom").style.display = "none";
      document.querySelector(".text_top").style.display = "none";
      document.querySelector("#timer").style.display = "none";
      // Salva i risultati per la pagina dei risultati
      localStorage.setItem("correctAnswers", correctAnswers);
      localStorage.setItem("wrongAnswers", wrongAnswers);
      showResultsButton(); // Mostra il pulsante per vedere i risultati
    }
  }

  // Funzione per mostrare il bottone che porta alla pagina dei risultati
  function showResultsButton() {
    // Pulisce il contenitore principale
    mainContainer.innerHTML = "";

    // Crea un nuovo bottone per visualizzare i risultati
    const resultsButton = document.createElement("button");
    resultsButton.textContent = "Vai ai risultati";
    resultsButton.classList.add("button-type3");

    // Aggiunge un evento per reindirizzare alla pagina dei risultati
    resultsButton.addEventListener("click", function () {
      window.location.href = "results.html";
    });

    // Aggiunge il bottone alla pagina
    mainContainer.appendChild(resultsButton);
  }

  // Avvia la prima domanda quando la pagina è caricata
  loadQuestion();
});

//rileva le domande e le mette nella const giusta
//const pointAdder = function () {
//  const correctAnswers = 0;
//  const wrongAnswers = 0;
//  if (questions.answers === true) {
//    correctAnswers = correctAnswers + 1;
//    return correctAnswers;
//  } else if (questions.answers === false) {
//    wrongAnswers = wrongAnswers + 1;
//    return wrongAnswers;
//  }
//};
////funzione per mettere dinamicamente il punteggio giusto nella pagina results
//const correctPoints = function () {
//  const aim = document.getElementById("Correct");
//  aim.innerText = `${correctAnswers}/10 questions`;
//}; //funzione per mettere la percentuale nell'punteggio della pagina
//const correctPercentage = function () {
//  const operation = ((correctAnswers - 10) / 10) * 100;
//  const aim = document.getElementById("CorrectPercentage");
//  aim.innerText = operation`\u0025`;
//};
//
////funzione per mettere dinamicamente il punteggio sbagliato nella pagina results
//const wrongPoints = function () {
//  const aim = document.getElementById("Wrong");
//  aim.innerText = `${wrongAnswers}/10 questions`;
//};
////funzione per mettere dinamicamente la percentuale sbagliata nella pagina results
//const wrongPercentage = function () {
//  const operation = ((wrongAnswers - 10) / 10) * 100;
//  const aim = document.getElementById("WrongPercentage");
//  aim.innerText = operation`\u0025`;
//};
//Non credo serva qui, così salva già i risultati
