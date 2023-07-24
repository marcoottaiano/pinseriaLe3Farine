import React, { useEffect } from 'react'
import L from 'leaflet';

function Map() {
  useEffect(() => {
    // Crea la mappa e imposta le coordinate e il livello di zoom desiderati
    const map = L.map('map').setView([45.48924279881977, 9.01071689701251], 17);

    // Aggiungi un layer di mappa utilizzando OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Mappa fornita da <a href="https://www.openstreetmap.org">OpenStreetMap</a>',
    }).addTo(map);

    var marker = L.marker([45.48924279881977, 9.01071689701251]).addTo(map);

  }, [])


  return (
    <div id="map" className='map-container'></div>
  )
}

export default Map