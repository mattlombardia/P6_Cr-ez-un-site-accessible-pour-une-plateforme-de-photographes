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
    const photographHeader = document.createElement("div");
    photographHeader.setAttribute("class", "photograph-header");

    const mainInfos = document.createElement("div");
    mainInfos.setAttribute("class", "photograph-infos");
    mainInfos.setAttribute("tabindex", "0");

    const nomPrenom = document.createElement("h1");
    nomPrenom.setAttribute("class", "names");
    nomPrenom.textContent = name;

    const location = document.createElement("div");
    location.setAttribute("class", "location");
    const villePays = document.createElement("span");
    villePays.textContent = city.concat(", ", country);
    const bio = document.createElement("p");
    bio.textContent = tagline;

    const contactButton = document.createElement("button");
    contactButton.setAttribute("id", "contact_button");
    contactButton.setAttribute("class", "contact_button");
    contactButton.setAttribute("onclick", "displayModal()");
    contactButton.textContent = "Contactez-moi";

    const profileImg = document.createElement("img");
    profileImg.setAttribute("src", `assets/photographers/${portrait}`);
    profileImg.setAttribute("class", "photographImg");
    profileImg.setAttribute("alt", name);
    profileImg.setAttribute("tabindex", "0");

    const priceLikes = document.createElement("div");
    priceLikes.setAttribute("class", "price");
    const likesSpan = document.createElement("span");
    likesSpan.setAttribute("class", "compteurLikeTotal");

    const heart = document.createElement("span");
    heart.setAttribute("aria-label", "likes");
    heart.setAttribute("class", "fas fa-heart");
    const priceDay = document.createElement("span");
    priceDay.textContent = `${price}€ /jour`;

    photographHeader.appendChild(mainInfos);
    mainInfos.appendChild(nomPrenom);
    mainInfos.appendChild(location);
    location.appendChild(villePays);
    location.appendChild(bio);
    photographHeader.appendChild(contactButton);
    photographHeader.appendChild(profileImg);

    photographHeader.appendChild(priceLikes);
    priceLikes.appendChild(likesSpan);
    likesSpan.appendChild(heart);
    priceLikes.appendChild(priceDay);

    return photographHeader;
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
