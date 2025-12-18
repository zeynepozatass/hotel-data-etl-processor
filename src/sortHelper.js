function sortByStarsDescending(hotels) {
    return hotels.sort((a, b) => b.stars - a.stars);
}

function sortByStarsAscending(hotels) {

    return hotels.sort((a, b) => a.stars - b.stars);
}

module.exports = { sortByStarsDescending, sortByStarsAscending };