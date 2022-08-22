function photographerFactory(data) {
  const { id, name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  // PAGE ACCUEIL : Création HTML Layout avec data photographers

  function getUserCardDOM() {
    const article = document.createElement("article");

    const img = document.createElement("img");
    img.setAttribute("src", picture);

    const h2 = document.createElement("h2");
    h2.textContent = name;

    // Utilisation du template strings pour 2 valeurs utilisées
    // Utilisation du place holder `${nomvariable}

    const h3 = document.createElement("h3");
    h3.textContent = `${city}, ${country}`;

    const h4 = document.createElement("h4");
    h4.textContent = tagline;

    const p = document.createElement("p");
    p.textContent = `${price}€/jour`;

    const ahref = document.createElement("a");
    ahref.setAttribute("class", "link");
    ahref.setAttribute("aria-label", `${name}`);
    ahref.setAttribute("href", `photographer.html?id=${id}`);

    // const article = document.createElement("article");
    // const img = document.createElement("img");

    // article.setAttribute("class", "card-photographer");

    ahref.appendChild(article);
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(p);

    // article.appendChild(cityCountry);
    // article.appendChild(tagline);
    // article.appendChild(price);

    return ahref;
  }

  function getProfilePage() {
    const mainInfos = document.createElement("main");
    mainInfos.setAttribute("class", "photographer_header");

    const div = document.createElement("div");
    div.setAttribute("class", "photographer_identity");

    const nomPrenom = document.createElement("h2");
    nomPrenom.setAttribute("class", "photographer_name");
    nomPrenom.textContent = name;

    const location = document.createElement("h3");
    location.setAttribute("class", "photographer_location");
    location.textContent = `${city}, ${country}`;

    const slogan = document.createElement("h4");
    slogan.setAttribute("class", "photographer_slogan");
    slogan.textContent = tagline;

    const contactButton = document.createElement("button");
    contactButton.setAttribute("class", "photographer_modal");
    contactButton.textContent = "Contactez-moi";

    const photographer_picture = document.createElement("img");
    photographer_picture.setAttribute(
      "src",
      `assets/photographers/${portrait}`
    );
    photographer_picture.setAttribute("class", "photographer_picture");
    photographer_picture.setAttribute("alt", name);

    mainInfos.appendChild(div);
    div.appendChild(nomPrenom);
    div.appendChild(location);
    div.appendChild(slogan);

    mainInfos.appendChild(contactButton);
    mainInfos.appendChild(photographer_picture);

    return mainInfos;
  }
  return {
    id,
    name,
    picture,
    city,
    country,
    tagline,
    price,
    getUserCardDOM,
    getProfilePage,
  };
}

// Récupérer le lien du photographe
// Create HTML Layout with photograph data

// méthode URLSEARCH PARAMS

// Récupérer médias du Photographe

// static getPhotographerById(id) {
//     return this.getPhotographerList().then((photographers) =>
//       photographers.find((photographer) => photographer.id == id)
//     );
//   }
// Création du DOM après avoir structuré et stylisé la page en HTML/CSS

// const headerPhotograph = document.querySelector(".photographer_header");
// headerPhotograph.innerHTML = "";

// console.group(headerPhotograph);

// console.groupCollapsed(headerPhotograph);

// console.profile(headerPhotograph);

// const identityContainer = document.createElement("div");
// identityContainer.classList.add("photographer_identity");

// const photographerName = document.createElement("h2");
// photographerName.classList.add("photographer_name");
// photographerName.textContent = "Name First Name";

// const photographerLocation = document.createElement("h3");
// photographerLocation.classList.add("photographer_location");
// photographerLocation.textContent = "City, Country";

// const photographerSlogan = document.createElement("h4");
// photographerSlogan.classList.add("photographer_slogan");
// photographerSlogan.textContent = "Lorem ipsum dolor sit amet";

// const photographerContactModal = document.createElement("button");
// photographerContactModal.classList.add("photographer_modal");
// photographerContactModal.textContent = "Contactez-moi";

// const photographerPicture = document.createElement("img");
// photographerPicture.classList.add("photographer_picture");
// photographerPicture.setAttribute("src", "./assets/photographers/MimiKeel.jpg");
// photographerPicture.setAttribute("alt", "Photographer picture");

// headerPhotograph.appendChild(identityContainer);
// identityContainer.appendChild(photographerName);
// identityContainer.appendChild(photographerLocation);
// identityContainer.appendChild(photographerSlogan);
// headerPhotograph.appendChild(photographerContactModal);
// headerPhotograph.appendChild(photographerPicture);
