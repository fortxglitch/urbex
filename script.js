// Initialisation de la carte
const map = L.map('map').setView([50.4611454, 2.9501791], 13); // Centrer la carte sur Paris avec un zoom de 13

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
    },
    // Ajoutez d'autres points ici
        {
        lat: 	50.445634,
        lon: 2.815201,
        adresse: '36 Rue Fénelon, Lens, Hauts-de-France',
        etat: aucune information,
        type: 'Maison',
        histoire: 'aucune information, plus d'information plus tard',
    },
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
    `);
});
