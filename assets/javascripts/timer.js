let timeLeft = 60;
      let timer;
      const timerText = document.getElementById("timer");
      const progressForeground = document.querySelector(".progress-foreground");

      const goTimer = function () {
        clearInterval(timer); // Ferma il timer precedente. setInterval viene usato per far funzionare il timer che conta i secondi rimanenti per rispondere a ogni domanda 
        timeLeft = 60; // Reimposta il timer a 60 sec
        timerText.textContent = timeLeft;
        updateProgress();

        timer = setInterval(() => {
          timeLeft = timeLeft - 1;
          timerText.textContent = timeLeft;
          updateProgress();

          if (timeLeft === 0) {
            clearInterval(timer);
            nextQuest();
          }
        }, 1000);
      };

      const updateProgress = function () {
        let progress = (timeLeft / 60) * 360;
        progressForeground.style.background = `conic-gradient(#00ffff ${progress}deg, transparent 0deg)`;
      };
      goTimer();

  
      /* DA QUI IN POI DA SCRIVERE quando è pronta la parte JS del banchmark
// Funzione per caricare una nuova domanda. 
/* const loadQuestion = function() {
     if (currentQuest >= questions.length) {
        endQuiz(); // Se non ci sono più domande, termina il quiz
        return;
    }

    goTimer(); // Avvia il timer per la nuova domanda
};


// Funzione per passare alla domanda successiva
const nextQuest = (points = 0) => {
    score = score + points; // Se il tempo è scaduto, aggiunge 0 punti
    currentQuest = currentQuest + 1 // Incrementa indice della domanda
    if (currentQuest >= questions.length) {
        endQuiz(); // Se finite le domande, chiude il quiz
    } else {
         loadQuestion(); // Altrimenti carica la prossima domanda
    }
};

  // Funzione che termina il quiz e manda alla pagina dei risultati
 const endQuiz = function () {
      clearInterval(timer); // Ferma il timer
      window.location.href = "results.html" + score; // Reindirizza alla pagina dei risultati con il punteggio
  }
 */
