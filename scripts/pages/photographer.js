// Mettre le code JavaScript lié à la page photographer.html

//  "URL Search Params" Method

// Function et (UNE VARIABABLE qui est un paramètre)
async function getPhotographer() {
  const str = window.location.href;
  const url = new URL(str);
  const id = url.searchParams.get("id");

  console.log(id);

  const photographerData = await fetch("./data/photographers.json").then(
    (response) => response.json()
  );

  console.log(photographerData);

  photographerData.photographers = photographerData.photographers.filter(
    (photographer) => photographer.id == id
  )[0];
  photographerData.media = photographerData.media.filter(
    (media) => media.photographerId == id
  );
  console.log(photographerData);

  return photographerData;
}

// Function et (UNE VARIABABLE qui est un paramètre)
async function init() {
  // Récupère les datas des photographes
  const photographer = await getPhotographer();
  console.log(photographer);
  displayData(photographer.photographers);
  displayMedias(photographer.media);
}

// Fonction appelée quand page chargée
// Function et (UNE VARIABABLE qui est un paramètre)
function displayData(photographer) {
  const photographersSection = document.getElementById("photographeInfos");
  const profileModel = photographerFactory(photographer);
  const profiles = profileModel.getProfilePage();
  photographersSection.appendChild(profiles);
}

// Fonction qui fait appraitre les médias
// Function et (UNE VARIABABLE qui est un paramètre)
function displayMedias(medias) {
  const mediaslist = document.getElementById("mediaslist");
  medias.forEach((media) => {
    const mediaModel = photographerFactory(media);
    const displaymedia = mediaModel.getMediaPage();
    mediaslist.appendChild(displaymedia);
  });
}

init();

/* Fonction factory */
