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
    // Aggiungi lo stile all'elemento, da mettere magari in CSS
    const resultsText = document.getElementById("results-text");
    resultsText.style.color = "white"; // Cambia il colore del testo
    resultsText.style.fontSize = "60px"; // Imposta la dimensione del font
    resultsText.style.textAlign = "center"; // Allinea il testo al centro
    resultsText.style.marginTop = "20px"; // Aggiungi uno spazio sopra
    // Crea il bottone per tornare alla pagina precedente
    const backButton = document.createElement("button");
    backButton.textContent = "Back to Benchmark";
    backButton.classList.add("button-type3");
    backButton.onclick = function () {
      window.location.href = "benchmark.html"; // Torna alla pagina benchmark.html
    };

    // Aggiungi il bottone alla pagina (lo inseriamo nel contenitore #flex)
    document.getElementById("flex").appendChild(backButton);

    // Nascondi tutto tranne il bottone e il messaggio
    const elementsToHide = [
      document.getElementById("result-wrong"),
      document.getElementById("resultTextP"),
      document.getElementById("resultWrongP"),
      document.getElementById("chart-container"),
      document.getElementsByClassName("center")[0],
      document.getElementById("result-exam"),
      document.querySelector("aside"), // Nascondi anche il link per la recensione
      document.getElementsByClassName("canvasContainer")[0],
      document.getElementById("wrong-container"),
    ];

    elementsToHide.forEach((element) => {
      if (element) {
        element.style.display = "none"; // Nasconde gli elementi
      }
    });

    // Nascondi anche la parte di grafico

    const chartContainer = document.getElementById("myDoughnutChart");
    if (chartContainer) {
      chartContainer.style.display = "none"; // Nasconde il grafico
    }
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
        let ctx = document.getElementById("myDoughnutChart").getContext("2d");
        let myDoughnutChart = new Chart(ctx, {
          type: "doughnut", // Tipo di grafico
          data: {
            datasets: [
              {
                data: [wrongAnswersPercentage, correctAnswersPercentage], // Dati percentuali (devono sommarsi a 100)
                backgroundColor: ["#C2128D", "#00FFFF"],
                borderColor: ["#C2128D", "#00FFFF"],
                borderWidth: 1,
              },
            ],
          },
          options: {
            cutout: "70%",
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
            },
          },
          plugins: [
            {
              afterDraw: (chart) => {
                const {
                  ctx,
                  chartArea: { width, height },
                } = chart;
                ctx.save();
                ctx.font = "bold 20px Arial";
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText("Congratulations!", width / 2, height / 3);

                ctx.fillStyle = "#00FCFD";
                ctx.fillText("You passed the exam.", width / 2, height / 2.5);

                ctx.font = "15px Arial";
                ctx.fillStyle = "white";
                ctx.fillText(
                  "we'll send you the certificate ",
                  width / 2,
                  height / 1.9
                );
                ctx.fillText("in few minutes.", width / 2, height / 1.75);
                ctx.fillText(
                  "check you email ( including",
                  width / 2,
                  height / 1.6
                );
                ctx.fillText("promotions/spam folder", width / 2, height / 1.5);
              },
            },
          ],
        });
      } else {
        exam.style.whiteSpace = "pre-line";
        let ctx = document.getElementById("myDoughnutChart").getContext("2d");
        let myDoughnutChart = new Chart(ctx, {
          type: "doughnut", // Tipo di grafico
          data: {
            datasets: [
              {
                data: [wrongAnswersPercentage, correctAnswersPercentage], // Dati percentuali (devono sommarsi a 100)
                backgroundColor: ["#C2128D", "#00FFFF"],
                borderColor: ["#C2128D", "#00FFFF"],
                borderWidth: 1,
              },
            ],
          },
          options: {
            cutout: "70%",
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
            },
          },
          plugins: [
            {
              afterDraw: (chart) => {
                const {
                  ctx,
                  chartArea: { width, height },
                } = chart;
                ctx.save();
                ctx.font = "bold 20px Arial";
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText("YOU FAILED, TRY AGAIN", width / 2, height / 2);
              },
            },
          ],
        });
      }
    };
    resultExam();

    // Pulisce il localStorage dopo aver visualizzato i risultati
    localStorage.clear();
  }
});
