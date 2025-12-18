const fs = require('fs');

function saveAsXML(data, filename) { 
    let xmlContent= '<?xml version="1.0" encoding="UTF-8"?>\n<hotels>\n'; 

    for (let i = 0; i < data.length; i++) {
        const hotel = data[i];
        xmlContent += '  <hotel>\n';
        xmlContent += '    <name>' + hotel.name + '</name>\n';
        xmlContent += '    <url>' + hotel.url + '</url>\n';
        xmlContent += '    <stars>' + hotel.stars + '</stars>\n';
        xmlContent += '  </hotel>\n';
    }

    xmlContent += '</hotels>';

    fs.writeFile(filename, xmlContent, 'utf8', (err) => {
        if (err) {
            console.error('Error while saving XML file:', err);
        } else {
            console.log('XML file saved successfully.');
        }   
});
}
module.exports = { saveAsXML };
