function photographerFactory(data) {
  const {
    id,
    name,
    portrait,
    city,
    country,
    tagline,
    price,
    likes,
    image,
    video,
    title,
  } = data;

  const picture = `assets/photographers/${portrait}`;

  // index.html : Création HTML Layout

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

    ahref.appendChild(article);
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(p);

    return ahref;
  }

  // photographer-page.html : Création HTML Layout
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

    // METHODE appendChild pour ajouter un nœud à la fin de la liste des enfants d'un nœud parent spécifié.
    mainInfos.appendChild(div);
    div.appendChild(nomPrenom);
    div.appendChild(location);
    div.appendChild(slogan);

    mainInfos.appendChild(contactButton);
    mainInfos.appendChild(photographer_picture);

    return mainInfos;
  }

  // photographer-page.html : layout for media
  function getMediaPage() {
    const jpg = `assets/images/${image}`;

    const mp4 = `assets/images/${video}`;

    const album = document.createElement("article");
    album.setAttribute("class", "album");

    const caption = document.createElement("div");
    caption.setAttribute("class", "caption");

    const albumTitle = document.createElement("h2");
    albumTitle.setAttribute("class", "mediaTitle");
    if (title.length > 20) {
      albumTitle.textContent = `${title.substring(0, 24)}...`;
    } else {
      albumTitle.textContent = title;
    }

    const like = document.createElement("p");
    like.setAttribute("class", "like");

    const compteur = document.createElement("span");
    compteur.setAttribute("class", "compteur");
    compteur.textContent = `${likes} `;

    const heart = document.createElement("span");
    heart.setAttribute("aria-label", "likes");
    heart.setAttribute("class", "fas fa-heart incrementLike");
    heart.setAttribute("tabindex", "0");

    //  PAGE PHOTOGRAPHES If JPG -> <img>
    if (jpg.split(".").pop() === "jpg") {
      const img = document.createElement("img");
      img.setAttribute("class", "lightboxMedia");
      img.setAttribute("src", jpg);
      img.setAttribute("alt", title);
      img.setAttribute("tabindex", "0");

      album.appendChild(img);
      album.appendChild(caption);
      caption.appendChild(albumTitle);
      caption.appendChild(like);
      like.appendChild(compteur);
      like.appendChild(heart);
    }

    //  PAGE PHOTOGRAPHES If MP4 -> <video>
    if (mp4.split(".").pop() === "mp4") {
      const videoPlayer = document.createElement("video");
      videoPlayer.setAttribute("controls", "");
      videoPlayer.setAttribute("class", "lightboxMedia");
      const source = document.createElement("source");
      source.setAttribute("src", mp4);
      source.setAttribute("type", "video/mp4");
      source.setAttribute("class", "lightboxImg");
      source.setAttribute("tabindex", "0");

      album.appendChild(videoPlayer);
      videoPlayer.appendChild(source);
      album.appendChild(caption);
      caption.appendChild(albumTitle);
      caption.appendChild(like);
      like.appendChild(compteur);
      like.appendChild(heart);
    }

    return album;
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
    getMediaPage,
  };
}

// Get likes of every media and add it to the sidebar
function getTotalLikes() {
  let totalLikes = 0;

  data.forEach((media) => {
    totalLikes += media.likes;
  });
  // eslint-disable-next-line no-useless-concat
  document.querySelector(".compteurLikeTotal").innerHTML =
    `${totalLikes} ` + "<span class='fas fa-heart'></span>";
}
