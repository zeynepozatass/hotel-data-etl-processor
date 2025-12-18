const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');


const { parseCSV } = require('./csvHelper');
const { validateHotel } = require('./validator');
const { saveAsXML } = require('./xmlHelper');
const { saveAsJSON } = require('./jsonHelper');
const { sortByStarsDescending, sortByStarsAscending } = require('./sortHelper');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));

const upload = multer({ dest: path.join(__dirname, '../uploads/') });

app.post('/upload', upload.single('csvFile'), (req, res) => {
    if (!req.file) return res.status(400).send('No file uploaded.');

    const sortOrder = req.body.sortOrder; 
    const uploadedPath = req.file.path;

    fs.readFile(uploadedPath, 'utf8', (err, data) => {
        if (err) return res.status(500).send('File reading error.');

        const rawData = parseCSV(data);
        const validHotels = [];

        rawData.forEach(row => {
            const hotel = {
                name: row.name,
                url: row.uri || row.url,
                stars: row.stars
            };

            const validation = validateHotel(hotel);
            if (validation.isValid) {
                hotel.stars = parseInt(hotel.stars, 10);
                validHotels.push(hotel);
            }
        });

        let sortedHotels = (sortOrder === 'asc') 
            ? sortByStarsAscending(validHotels) 
            : sortByStarsDescending(validHotels);

        const outputDir = path.join(__dirname, '../output');
        
        
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        saveAsJSON(sortedHotels, path.join(outputDir, 'clean_hotels.json'));
        saveAsXML(sortedHotels, path.join(outputDir, 'clean_hotels.xml'));

        fs.unlink(uploadedPath, (err) => {
            if (err) console.error("Geçici dosya silinemedi.");
        });

        res.json({ 
            message: `Success! ${sortedHotels.length} hotels processed and sorted successfully. Check your 'output' folder.`,
            data: sortedHotels 
        });
    });
});

app.listen(PORT, () => {
    console.log(`🚀 ETL Server Ready: http://localhost:${PORT}`);
    console.log(`Press Ctrl+C to stop the server.`);
});