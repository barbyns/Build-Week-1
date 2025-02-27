document.addEventListener("DOMContentLoaded", function () {
  // Recupera i dati dal localStorage
  const correctAnswers = localStorage.getItem("correctAnswers");
  const wrongAnswers = localStorage.getItem("wrongAnswers");
  // Verifica se i dati esistono nel localStorage (nel caso in cui l'utente non abbia completato il quiz)
  if (correctAnswers === null || wrongAnswers === null) {
    document.getElementById("results-text").textContent =
      "No quiz results found. Please take the quiz first.";
  } else {
    // Mostra i risultati all'utente
    const resultText = document.getElementById("results-text");
    resultText.style.color = "white";
    resultText.style.fontSize = "50px";
    resultText.style.whiteSpace = "pre-line";

    resultText.textContent = `Correct answers: ${correctAnswers} \n
     Wrong answers: ${wrongAnswers}`;

    const resultExam = function () {
      const exam = document.getElementById("result-exam");
      if (correctAnswers > wrongAnswers) {
        exam.style.fontSize = "50px";
        exam.innerText =
          "You passed the exam! \nWe'll send you the certificate in the few minutes. Check your email (Including promotions / spam) ";
      } else {
        exam.style.whiteSpace = "pre-line";
        exam.style.fontSize = "50px";

        exam.innerText = "Please, try again ";
      }
    };
    resultExam();

    // Pulisce il localStorage dopo aver visualizzato i risultati
    localStorage.clear();
  }
});
