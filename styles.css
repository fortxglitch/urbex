// Initialisation de la carte
const map = L.map('map').setView([50.445634, 2.815201], 13);

// Ajouter les tuiles de la carte (exemple avec OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Liste des points à ajouter
const points = [
    {
        lat: 50.445634,
        lon: 2.815201,
        adresse: '36 Rue Fénelon, Lens, Hauts-de-France',
        etat: 'aucune information',
        type: 'Maison',
        histoire: 'Aucune information sur la maison ou même son histoire. La seule chose que l\'on sait, c\'est que ce bâtiment est protégé par des caméras de sécurité.',
        image: '',
        name: 'Maison Lens' // Ajout d'un nom pour la recherche
    },
    {
        lat: 50.4611454,
        lon: 2.9501791,
        adresse: '42 Av. du Général Leclerc, Courrières, Hauts-de-France',
        etat: 4,
        type: 'Maison',
        histoire: 'Beaucoup de squatteurs, meubles volés. Histoire : dame décédée de vieillesse.',
        image: '',
        name: 'Maison Courrières' // Ajout d'un nom pour la recherche
    }
];

// Créer une liste de marqueurs pour les points
const markers = points.map(point => {
    const marker = L.marker([point.lat, point.lon]);
    const imageContent = point.image ? `<img src="${point.image}" class="popup-image" alt="Image">` : 'Image : non';
    marker.bindPopup(`
        <b>Adresse :</b> ${point.adresse} <br>
        <b>État :</b> ${point.etat} sur 5 étoiles <br>
        <b>Type :</b> ${point.type} <br>
        <b>Histoire :</b> ${point.histoire} <br>
        <b>Image :</b> ${imageContent}
    `);
    return { marker, name: point.name, lat: point.lat, lon: point.lon };
});

// Ajouter tous les marqueurs à la carte par défaut
markers.forEach(({ marker }) => marker.addTo(map));

// Fonction de recherche
function searchPoints(query) {
    const lowerCaseQuery = query.toLowerCase();
    let latLngToZoom = null;

    // Vérifiez chaque marqueur
    markers.forEach(({ marker, name, lat, lon }) => {
        if (name.toLowerCase().includes(lowerCaseQuery)) {
            if (!map.hasLayer(marker)) {
                marker.addTo(map); // Ajoute le marqueur à la carte si la recherche correspond
            }
            latLngToZoom = [lat, lon]; // Enregistrez la position pour le zoom
        } else {
            if (map.hasLayer(marker)) {
                // Laissez les marqueurs visibles si la recherche correspond à la position
            }
        }
    });

    // Zoom sur le point trouvé avec animation douce
    if (latLngToZoom) {
        map.flyTo(latLngToZoom, 15, {
            animate: true,
            duration: 3 // La durée de l'animation en secondes
        });
    } else {
        alert('Aucun point trouvé pour votre recherche.');
    }
}

// Gestion de la recherche
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    searchPoints(query);
});

document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});

// Gestion de l'affichage du message d'information
document.getElementById('info-button').addEventListener('click', function() {
    const infoMessage = document.getElementById('info-message');
    infoMessage.classList.toggle('visible');
});
