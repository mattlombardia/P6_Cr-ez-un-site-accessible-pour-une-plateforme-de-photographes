// Event to add likes
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('incrementLike')) {
        let tag = e.target;
        if (tag.classList.contains('liked')) {
            decrementLike(e.target);
            tag.classList.remove('liked');
        } else {
            incrementLike(e.target);
            tag.classList.add('liked');
        }

    }
});

// Add ❤ to "media/photograph"
// FUNCTION ET SON (PARAMETRE)
function incrementLike(coeurIcon) {

    const compteur = coeurIcon.parentNode.querySelector('.compteur');
    console.log(compteur)
    compteur.innerHTML = `${parseInt(compteur.innerHTML, 10) + 1} `;

    const compteurLikeTotal = document.querySelector('.compteurLikeTotal');
    console.log(compteurLikeTotal)
    compteurLikeTotal.innerHTML = `${parseInt(compteurLikeTotal.innerHTML, 10) + 1} ` + '<span class=\'fas fa-heart\'></span>';
}

function decrementLike(coeurIcon) {

    const compteur = coeurIcon.parentNode.querySelector('.compteur');
    console.log(compteur)
    compteur.innerHTML = `${parseInt(compteur.innerHTML, 10) - 1} `;

    const compteurLikeTotal = document.querySelector('.compteurLikeTotal');
    console.log(compteurLikeTotal)
    compteurLikeTotal.innerHTML = `${parseInt(compteurLikeTotal.innerHTML, 10) - 1} ` + '<span class=\'fas fa-heart\'></span>';
}
// Get likes of every media and add it to the sidebar
function getTotalLikes(data) {
    // console.log("data", data);
    let totalLikes = 0;

    data.forEach((media) => {
        totalLikes += media.likes;
    });
    // eslint-disable-next-line no-useless-concat
    document.querySelector('.compteurLikeTotal').innerHTML = `${totalLikes} ` + '<span class=\'fas fa-heart\'></span>';
}