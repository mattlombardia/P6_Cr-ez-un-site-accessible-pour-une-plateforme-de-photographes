function mediaFilter(mediaListArrayFiltered, photographerItem) {

    console.log(mediaListArrayFiltered, photographerItem);




    if (photographerItem === 'date') {
        const mediaListArrayFilteredByUser = mediaListArrayFiltered.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        });
        return mediaListArrayFilteredByUser;


    }

    if (photographerItem === 'popularite') {
        const mediaListArrayFilteredByUser = mediaListArrayFiltered.sort(function (a, b) {
            let x = a.likes
            let y = b.likes;
            if (x < y) return 1;
            if (x > y) return -1;
            return 0;
        });
        return mediaListArrayFilteredByUser;


    }

    if (photographerItem === 'titre') {
        const mediaListArrayFilteredByUser = mediaListArrayFiltered.sort(function (a, b) {
            let x = a.title;
            let y = b.title;
            if (x < y) return 1;
            if (x > y) return -1;
            return 0;
        });
        return mediaListArrayFilteredByUser;


    }

}