import React, { useRef } from 'react';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';

export default function Map({ data }) {
  const mapRef = useRef();
  // const position = [37.7876511, -122.3966700];
  const position = [data.latitude, data.longitude];

  const customIcon = new Icon({
    iconUrl: '/assets/images/MapIcon.png',
    iconSize: [50, 50],
    iconAnchor: [25, 45],
  });

  return (
    <div className="map-component">
      <div id="map" className="map">
        <MapContainer ref={mapRef} center={position} zoom={18} scrollWheelZoom>
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
    </div>
  );
}

Map.propTypes = {
  data: PropTypes.shape.isRequired,
};
