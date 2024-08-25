// Initialisation de la carte
const map = L.map('map').setView([48.8566, 2.3522], 13); // Centrer la carte sur Paris avec un zoom de 13

// Ajouter une couche de fond à la carte
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Liste des points à ajouter
const points = [

    {
        lat: 50.4611454,
        lon: 2.9501791,
        adresse: '42 Av. du Général Leclerc, Courrières, Hauts-de-France',
        etat: 4,
        type: 'Maison',
        histoire: 'Beaucoup de squateur, meuble voler. Histoire : dame décéder de vieillesse',
        image: 'file:///C:/Users/FortXglitch/Desktop/urbex%20image/42%20Av.%20du%20G%C3%A9n%C3%A9ral%20Leclerc,%20Courri%C3%A8res,%20Hauts-de-France.png'
    },
    // Ajoutez d'autres points ici
];

// Ajouter les points à la carte
points.forEach(point => {
    const marker = L.marker([point.lat, point.lon]).addTo(map);
    const imageContent = point.image ? `<img src="${point.image}" class="popup-image" alt="Image">` : 'non';
    marker.bindPopup(`
        <b>Adresse :</b> ${point.adresse} <br>
        <b>État :</b> ${point.etat} sur 5 étoiles <br>
        <b>Type :</b> ${point.type} <br>
        <b>Histoire :</b> ${point.histoire} <br>
        <b>Image :</b> ${imageContent}
    `);
});
