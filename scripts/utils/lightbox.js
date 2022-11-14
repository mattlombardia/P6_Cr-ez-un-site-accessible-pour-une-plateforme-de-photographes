function initLightbox() {
    const lightbox = document.getElementById('lightbox');

    const allMedia = document.querySelectorAll('.lightboxMedia');
    const util = this;

    allMedia.forEach((media, index) => {
        media.addEventListener('click', () => {
            lightbox.classList.add('active');

            // Use the function to show media
            util.showMedia(index);
        });
        media.addEventListener('keydown', (e) => {
            if (e.code === 'Enter') {
                lightbox.classList.add('active');
                // Use the function to show media
                util.showMedia(index);
            }
        });
    });
}

// Get the media at his index
function showMedia(index) {
    const util = this;

    // reset la lightbox
    document.getElementById('lightbox').innerHTML = '';

    const allMedia = document.querySelectorAll('.lightboxMedia');

    const source = allMedia[index].src;

    // If media = image
    if (source.split('.').pop() === 'jpg') {
        const container = document.createElement('div');
        container.setAttribute('class', 'container');

        const img = document.createElement('img');
        img.src = allMedia[index].src;
        img.setAttribute('alt', allMedia[index].alt);

        const caption = document.createElement('h2');
        caption.setAttribute('class', 'title');
        caption.innerHTML = allMedia[index].alt;

        document.getElementById('lightbox').appendChild(container);
        container.appendChild(img);
        container.appendChild(caption);

        // If media = video
    } else if (allMedia[index].querySelector('source').src.split('.').pop() === 'mp4') {
        const container = document.createElement('div');
        container.setAttribute('class', 'container');

        const video = document.createElement('video');
        const sourceVideo = document.createElement('source');

        video.setAttribute('controls', '');
        sourceVideo.src = allMedia[index].querySelector('source').src;
        sourceVideo.setAttribute('type', 'video/mp4');

        const captionContainer = document.createElement('div');
        captionContainer.setAttribute('class', 'captionContainer');

        const caption = document.createElement('h2');
        caption.setAttribute('class', 'title');
        caption.innerHTML = allMedia[index].parentNode.querySelector('div >p').innerHTML;

        document.getElementById('lightbox').appendChild(container);
        container.appendChild(video);
        video.appendChild(sourceVideo);
        container.appendChild(caption);
    }
    // ferme avec la croix
    const closeCursor = document.createElement('span');
    closeCursor.setAttribute('id', 'close');
    closeCursor.setAttribute('aria-label', 'Close dialog');
    closeCursor.addEventListener('click', () => {
        document.getElementById('lightbox').classList.remove('active');
    });
    closeCursor.innerHTML = '&times;';

    // Previous arrow
    const prev = document.createElement('a');
    prev.setAttribute('id', 'previousMedia');
    prev.setAttribute('class', 'prev');
    prev.setAttribute('aria-label', 'Previous image');
    prev.innerHTML = '&#10094;';

    prev.addEventListener('click', () => {
        if (index === 0) {
            util.showMedia(allMedia.length - 1);
        } else {
            util.showMedia(index - 1);
        }
    });

    // Next arrow
    const next = document.createElement('a');
    next.setAttribute('id', 'nextMedia');
    next.setAttribute('class', 'next');
    next.setAttribute('aria-label', 'Next image');
    next.innerHTML = '&#10095;';
    next.addEventListener('click', () => {
        // If index is higher than the number of media we go back to the first media
        if (index === allMedia.length - 1) {
            util.showMedia(0);
        } else {
            util.showMedia(index + 1);
        }
    });

    // HTML Layout
    document.getElementById('lightbox').appendChild(closeCursor);
    document.getElementById('lightbox').appendChild(prev);
    document.getElementById('lightbox').appendChild(next);
}

// Use lightbox through keyboard


document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
    switch (e.key) {
        case 'ArrowLeft':
            document.getElementById('previousMedia') ? document.getElementById('previousMedia').click() : '';
            break;

        case 'ArrowRight':
            document.getElementById('nextMedia') ? document.getElementById('nextMedia').click() : '';
            break;

        case 'Escape':
            document.getElementById('close') ? document.getElementById('close').click() : '';
            break;
            // no default
    }
});