const { validateHotel } = require('../src/validator');

describe('Hotel Validator Tests', () => {
    
    test('Should accept valid hotel data', () => {
        const validHotel = { name: "Kolin Hotel", url: "https://kolin.com", stars: 5 };
        const result = validateHotel(validHotel);
        expect(result.isValid).toBe(true);
    });

    test('Should reject invalid URL schema (missing http/https)', () => {
        const invalidUrl = { name: "Bad URL Hotel", url: "www.invalid-link.com", stars: 4 };
        const result = validateHotel(invalidUrl);
        expect(result.isValid).toBe(false);
        expect(result.errors).toContain("Hotel URL must start with");
    });

    test('Should reject negative star ratings', () => {
        const negativeStars = { name: "Negative Hotel", url: "https://hotel.com", stars: -1 };
        const result = validateHotel(negativeStars);
        expect(result.isValid).toBe(false);
    });

    test('Should reject star ratings greater than 5', () => {
        const tooManyStars = { name: "Super Hotel", url: "https://hotel.com", stars: 6 };
        const result = validateHotel(tooManyStars);
        expect(result.isValid).toBe(false);
    });

    test('Should reject missing hotel names', () => {
        const noName = { name: "", url: "https://hotel.com", stars: 3 };
        const result = validateHotel(noName);
        expect(result.isValid).toBe(false);
    });
});