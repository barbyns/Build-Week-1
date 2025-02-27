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
    const resultText = document.getElementById("results-text");
    const resultWrong = document.getElementById("result-wrong");
    const correctP = document.getElementById("resultTextP");
    const wrongP = document.getElementById("resultWrongP");
    console.log(correctP);
    resultText.style.color = "white";
    resultText.style.fontSize = "50px";
    resultText.style.whiteSpace = "pre-line";
    resultWrong.style.color = "white";
    resultWrong.style.fontSize = "50px";
    resultWrong.style.whiteSpace = "pre-line";

    resultText.textContent = `Correct ${correctAnswersPercentage}% `;
    resultWrong.textContent = `Wrong answers: ${wrongAnswersPercentage} % `;
    correctP.textContent = `${correctAnswers}/10 question`;
    wrongP.textContent = `${wrongAnswers}/10 question`;
    const resultExam = function () {
      const exam = document.getElementById("result-exam");
      if (correctAnswers > wrongAnswers) {
        exam.style.fontSize = "50px";

        exam.innerText = "You passed the exam!";
      } else {
        exam.style.fontSize = "50px";

        exam.innerText = "Please, try again ";
      }
    };
    resultExam();

    // Pulisce il localStorage dopo aver visualizzato i risultati
    localStorage.clear();
  }
});

var ctx = document.getElementById("myDoughnutChart").getContext("2d");
var myDoughnutChart = new Chart(ctx, {
  type: "doughnut", // Tipo di grafico
  data: {
    labels: ["Rosso", "Blu", "Giallo"], // Etichette delle sezioni
    datasets: [
      {
        label: "Esempio di Grafico a Ciambella",
        data: [30, 50, 20], // Dati percentuali (devono sommarsi a 100)
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
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
