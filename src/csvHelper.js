function parseCSV(csvText) {
    const cleanText = csvText.replace(/^\uFEFF/, '').trim();
    const lines = cleanText.split(/\r?\n/); 
    
    if (lines.length < 2) return [];

    
    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());

    const results = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        
        const regex = /,(?=(?:(?:[^"]*"){2})*[^"]*$)/;
        const values = line.split(regex);

        const obj = {};
        headers.forEach((header, index) => {
            let val = values[index] ? values[index].trim() : '';
            
            val = val.replace(/^"|"$/g, '');
            obj[header] = val;
        });

        results.push(obj);
    }
    return results;
}

module.exports = { parseCSV };