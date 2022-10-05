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


/* Récupération de tous les champs du formulaire ainsi que l'assignation à une constante */
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const touInput = document.getElementById("checkbox1");
const radioInput = document.querySelectorAll(".radio-input");