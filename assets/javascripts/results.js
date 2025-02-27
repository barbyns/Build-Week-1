document.addEventListener("DOMContentLoaded", function () {
  // Recupera i dati dal localStorage
  const correctAnswers = localStorage.getItem("correctAnswers");
  const wrongAnswers = localStorage.getItem("wrongAnswers");
  const correctAnswersPercentage = localStorage.getItem("correctAnswers") * 10;
  const wrongAnswersPercentage = localStorage.getItem("wrongAnswers") * 10;
  // Verifica se i dati esistono nel localStorage (nel caso in cui l'utente non abbia completato il quiz)
  if (correctAnswers === null || wrongAnswers === null) {
    document.getElementById("results-text").textContent =
      "No quiz results found. Please take the quiz first.";
  } else {
    // Mostra i risultati all'utente
    const correct = document.getElementById("correct");
    const wrong = document.getElementById("wrong");
    const resultText = document.getElementById("results-text");
    const resultWrong = document.getElementById("result-wrong");
    const correctP = document.getElementById("resultTextP");
    const wrongP = document.getElementById("resultWrongP");

    correct.style.display = "inline";
    wrong.style.display = "inline";
    resultText.style.color = "white";
    resultText.style.fontSize = "50px";
    resultText.style.whiteSpace = "pre-line";
    resultWrong.style.color = "white";
    resultWrong.style.fontSize = "50px";
    resultWrong.style.whiteSpace = "pre-line";

    resultText.textContent = `${correctAnswersPercentage}% `;
    resultWrong.textContent = `${wrongAnswersPercentage}% `;
    correctP.textContent = `${correctAnswers}/10 question`;
    wrongP.textContent = `${wrongAnswers}/10 question`;
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
      var ctx = document.getElementById("myDoughnutChart").getContext("2d");
      var myDoughnutChart = new Chart(ctx, {
        type: "doughnut", // Tipo di grafico
        data: {
          datasets: [
            {
              data: [wrongAnswersPercentage, correctAnswersPercentage], // Dati percentuali (devono sommarsi a 100)
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
              ],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
          },
        },
      });
    };

    resultExam();

    // Pulisce il localStorage dopo aver visualizzato i risultati
    localStorage.clear();
  }
});
