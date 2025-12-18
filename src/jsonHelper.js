const fs = require('fs');

function saveAsJSON(data, filename){ 
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile(filename, jsonData, 'utf8', (err) => {
        if (err) {
            console.error('Error while saving JSON file:', err);
        } else {
            console.log('JSON file saved successfully.');
        }
    });
}
    module.exports = { saveAsJSON };
