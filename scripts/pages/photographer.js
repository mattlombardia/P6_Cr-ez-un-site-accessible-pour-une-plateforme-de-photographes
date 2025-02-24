// Mettre le code JavaScript lié à la page photographer.html

//  "URL Search Params" Method


// Function et (UNE VARIABABLE qui est un paramètre)
// Récupère l'ID du photographe
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

  // Création fonction pour "Tri/Filtre des médias" popularité, date, titre
  selectbox.addEventListener("change", (e) => {
    let photographerMediaList = mediaFilter(photographer.media, e.target.value);
    console.log("photographer media", photographerMediaList);
    // Appel de la function Tri/Filtre
    displayMedias(photographerMediaList);
  });

  // Event to add likes
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      if (e.target.classList.contains('incrementLike')) {
        incrementLike(e.target);
      }
    }
  });

  // Init Lightbox on click
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('lightboxMedia')) {
      initLightbox();
    }
  });
  // Init Lightbox with keyboard
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      if (e.target.classList.contains('lightboxMedia')) {
        initLightbox();
      }
    }
  });
}


// Fonction appelée quand page chargée
// Function et (UNE VARIABABLE qui est un paramètre)
function displayData(photographer) {
  const photographersSection = document.getElementById("photographeInfos");
  const profileModel = photographerFactory(photographer);
  const profiles = profileModel.getProfilePage();
  photographersSection.appendChild(profiles);
  profileModel.getModalTitle()
}

// Fonction qui fait appraitre les médias
// Function et (UNE VARIABABLE qui est un paramètre)
function displayMedias(medias) {
  const mediaslist = document.getElementById("mediaslist");
  // Ajout medialist pour modifier le HTML
  mediaslist.innerHTML = "";
  medias.forEach((media) => {
    const mediaModel = photographerFactory(media);
    const displaymedia = mediaModel.getMediaPage();
    mediaslist.appendChild(displaymedia);
  });
  getTotalLikes(medias);
}

init();