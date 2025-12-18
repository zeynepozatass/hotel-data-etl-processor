document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const statusMessage = document.getElementById('statusMessage');
    const hotelTable = document.getElementById('hotelTable');
    const tbody = hotelTable.querySelector('tbody');

    statusMessage.innerText = "⏳ Processing and sorting data, please wait...";
    statusMessage.style.color = "orange";
    tbody.innerHTML = "";
    hotelTable.style.display = "none";

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) throw new Error('Server error occurred.');

        const result = await response.json();
        statusMessage.innerText = result.message;
        statusMessage.style.color = "green";

        if (result.data && result.data.length > 0) {
            hotelTable.style.display = "table";
            result.data.forEach(hotel => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><strong>${hotel.name}</strong></td>
                    <td class="stars-cell">${"⭐".repeat(hotel.stars)} (${hotel.stars})</td>
                    <td><a href="${hotel.url}" target="_blank" class="hotel-link">Visit Website</a></td>
                `;
                tbody.appendChild(row);
            });
        } else {
            statusMessage.innerText = "⚠️ Processing complete, but no valid hotels found.";
            statusMessage.style.color = "red";
        }

    } catch (error) {
        statusMessage.innerText = "❌ Error: " + error.message;
        statusMessage.style.color = "red";
    }
});