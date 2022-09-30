// Function et (UNE VARIABABLE qui est un paramètre)
function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}
console.table(displayModal);

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

// Ouverture de la modal
// function openModal() {
//   const modal = document.getElementById("contact_modal");
//   modal.style.display = "block";
// }
// console.table(openModal);

// openModal.addEventListener("click", () => {
//   modal.show();
// });

// const contact_modal = document.getElementById("contact_modal");

// modal.forEach((contact_modal) =>
//   modal.addEventListener("click", togglecontact_modal)
// );

// function togglecontact_modal() {
//   modal.Conainer.classList.toggle("active");
// }

// openBtn.addEventListener("click", () => {
//   modal.show();
// });
