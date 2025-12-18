function validateHotel(hotel) {
    const errors = [];

    if (!hotel.name || hotel.name.trim() === "") {
        errors.push("Hotel name is required.");
    }

    const urlPattern = /^(http|https):\/\/[^ "]+$/;
    if (!hotel.url || !urlPattern.test(hotel.url)) {
        errors.push('Hotel URL must start with "http://" or "https://".');
    }

    const stars = parseInt(hotel.stars, 10);
    if (isNaN(stars)) {
        errors.push("Rating must be a number.");
    } else if (stars < 0 || stars > 5) {
        errors.push("Rating must be between 0 and 5.");
    }

    return {
        isValid: errors.length === 0,
        errors: errors.join(", ")
    };
}

module.exports = { validateHotel };