import "./styles.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const position = {
  lat: -29.7624454,
  lng: -51.1385077
}

export default function OrderLocation() {
  return (
    <main className="order-location-container">
      <div className="order-location-content">
        <h3 className="order-location-title">Selecione o local de entrega.</h3>
        <div className="filter-container"></div>

        <MapContainer
          center={[-29.7624454, -51.1385077]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-29.7624454, -51.1385077]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>

      </div>
    </main>
  );
}
