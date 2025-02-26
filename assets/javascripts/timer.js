let currentQuest = 0; // Indice della domanda corrente
  let score = 0; // Punteggio totale dell'utente
  let timer; // Variabile per il timer
  let timeLeft = 60; // Tempo rimanente per ogni domanda

  // Funzione per avviare il timer. 
  const goTimer = function() {
    clearInterval(timer); // Ferma il timer precedente
      timeLeft = 60; // Reimposta il timer a 60 sec 
      document.getElementById("timer-text").textContent = timeLeft;

      timer = setInterval(() => { // setInterval viene usato per far funzionare il timer che conta i secondi rimanenti per rispondere a ogni domanda 
          timeLeft = timeLeft - 1;
          document.getElementById("timer-text").textContent = timeLeft;
          if (timeLeft === 0) {
            clearInterval(timer)
              nextQuest(); // Passa automaticamente alla domanda successiva se il tempo scade
          }
      }, 1000);
  }
    
// Funzione per caricare una nuova domanda. DA COMPLETARE perché bisogna prendere la domanda dall'array.
const loadQuestion = function() {
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

