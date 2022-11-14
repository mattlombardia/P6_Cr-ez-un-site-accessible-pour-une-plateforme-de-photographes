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

// INSERTION NOM PHOTOGRAPHE DANS MODAL

function namePhotographer(name) {
  const h2 = document.createElement("h2");
  h2.textContent = `${name}`;
  ahref.appendChild(div);
  article.appendChild(h2);
  return ahref;

}




const modalBtn = document.querySelectorAll(".modal-btn");
// const modalclose = document.querySelector(".close");

// modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// modalclose.addEventListener("click", closeModal);

/* Récupération de tous les champs du formulaire ainsi que l'assignation à une constante */
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const textArea = document.getElementById("text");

let data = {};

const resetFormData = () => {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  textArea.value = "";

};

// launch modal event
/* This is creating a modal that will be used to display the form data. */
// modalBtn.forEach((btn) =>
//   btn.addEventListener("click", () => (modalbg.style.display = "block"))
// );
// modalclose.addEventListener("click", () => {
//   resetFormData();
//   modalbg.style.display = "none";
// });

const form = document.getElementById("form");

form.addEventListener("submit", (event) => validateForm(event));

/**************************/

// Création d'une fonction de validation du formulaire avec comme paramètre event
// @event l'evenement du formulaire (l'envoi et les présumés données)

const validateForm = (event) => {
  // la fonction preventDefault() annule l'action de l'évènement :
  // ex : lorsque l'on va appuyer sur le bouton submit, le fomulaire ne s'enverra pas
  event.preventDefault();

  data = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
  };
  console.log(data)



  // Initialisation d'une liste d'erreurs vide
  const errors = [];

  // firstname
  data.firstName.length < 2 ?
    errors.push([
      firstNameInput,
      "Vous devez renseigner un prénom valide (2 caractères ou plus).",
    ]) :
    null;

  // lastname
  data.lastName.length < 2 ?
    errors.push([
      lastNameInput,
      "Vous devez renseigner un nom valide (2 caractères ou plus).",
    ]) :
    null;


  // Email
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  !data.email.match(emailRegex) ?
    errors.push([emailInput, "Veuillez entrer une adresse mail valide."]) :
    null;

  // TEXTE AREA
  data.textArea.length < 10 ?
    errors.push([
      textAreaInput,
      "Votre message doit contenir 10 caractères ou plus.",
    ]) :
    null;


  formData.forEach((element) => {
    element.setAttribute("data-error-visible", false);
    element.setAttribute("data-error", "");
  });

  errors.forEach((error) => {
    const element = error[0];
    const errorMessage = error[1];
    element.parentNode.setAttribute("data-error-visible", true);
    element.parentNode.setAttribute("data-error", errorMessage);
  });

  console.log(errors);
  console.log(data);

  if (errors.length <= 0) {
    confirmForm(event);
  }
};

// envoi confirmation

const confirmForm = (event) => {
  event.preventDefault();
  console.log("Validations effectuées");
  form.style.display = "none";
  const endModal = document.getElementById("end-modal");
  const confirmButton = document.getElementById("mess-end");

  endModal.style.display = "block";
  endModal.style.paddingBottom = "16px";

  confirmButton.addEventListener("click", () => form.submit());
  modalclose.addEventListener("click", () => form.submit());

};


// FONCTION QUI APPELLE OBJET DATA