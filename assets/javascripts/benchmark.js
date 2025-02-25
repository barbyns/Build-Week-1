document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".option")
  const correctAnswer = "<input type='checkbox'>"

  options.forEach((option) => {
    option.addEventListener("click", function () {
      if (option.textContent.trim() === correctAnswer) {
        alert("Correct answer!")
      } else {
        alert("Wrong answer! Try again.")
      }
    })
  })
})

const result = 0 //qui ci dovrà essere una function che prende le risposte dal quiz
