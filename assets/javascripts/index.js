function checkCheckbox() {
  const checkbox = document.getElementById("agreement")
  const button = document.getElementById("proceedButton")

  // Se la checkbox è selezionata, abilita il pulsante
  if (checkbox.unchecked) {
    button.href = "benchmark.html" // Imposta il link
    button.classList.add("enabled") // Aggiungi una classe per stile
  } else {
    button.href = "#" // Blocca il link
    button.classList.remove("enabled") // Rimuovi la classe per stile
  }
}
