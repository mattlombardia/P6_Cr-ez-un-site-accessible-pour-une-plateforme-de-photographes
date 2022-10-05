// Function et (UNE VARIABABLE qui est un paramètre)
function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}
console.table(displayModal);

// OUVERTURE / FERMETURE MODAL CONTACT
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Function et (UNE VARIABABLE qui est un paramètre)
function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}
console.table(closeModal);