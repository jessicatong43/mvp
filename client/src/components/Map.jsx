import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  const position = [37.78, -122.39];

  const customIcon = new Icon({
    iconUrl: '/assets/MapIcon.png',
    iconSize: [50, 50],
    iconAnchor: [25, 45],
  });

  return (
    <section className="map-component">
      <div id="map" className="map">
        <MapContainer center={position} zoom={14} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              🐻🍻🎉
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}
