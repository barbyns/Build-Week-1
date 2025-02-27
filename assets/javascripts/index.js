function checkCheckbox() {
  const checkbox = document.getElementById("agreement")
  const button = document.getElementById("proceedButton")

  // Se la checkbox è selezionata, abilita il pulsante
  if (checkbox.checked) {
    button.href = "benchmark.html" // Imposta il link
    button.classList.toggle("button-type1") // Aggiunge la classe attivata
  } else {
    button.href = "#" // Blocca il link
    button.classList.toggle("button-type1") // Rimuove la classe attivata
  }
}
//fa che prima che la pagina carichi i checkboxes vanno tolti
window.onbeforeunload = function () {
  const checkboxes = document.getElementById("agreement")
  if (checkboxes.type === "checkbox") {
    checkboxes.checked = false
  }
}
