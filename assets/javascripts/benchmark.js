//document.addEventListener("DOMContentLoaded", function () {
//    const options = document.querySelectorAll(".option");
//    const correctAnswer = "<input type='checkbox'>";
//
//    options.forEach(option => {
//        option.addEventListener("click", function () {
//            if (option.textContent.trim() === correctAnswer) {
//                alert("Correct answer!");
//            } else {
//                alert("Wrong answer! Try again.");
//            }
//        });
//    });
//});
// Array di domande con risposte e soluzione corretta
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
    question: "Which of the following is NOT a valid JavaScript variable name?",
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
