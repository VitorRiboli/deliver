import "./styles.css";

import { useState } from "react";
import AsyncSelect from "react-select/async";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

import { fetchLocalMapBox } from "../../services/product-service";



const initialPosition = {
  lat: -29.7624454,
  lng: -51.1385077
}

type Place = {
  label?: string;
  value?: string;
  position: {
    lat: number;
    lng: number;
  } 
}

export default function OrderLocation() {

  const [address, setAddress] = useState<Place>({
    position: initialPosition
  });

  const loadOptions : any = async (inputValue: string, callback: (places: Place[]) => void) => {
    const response = await fetchLocalMapBox(inputValue);
  
    const places = response.data.features.map((item: any) => {
      return ({
        label: item.place_name,
        value: item.place_name,
        position: {
          lat: item.center[1],
          lng: item.center[0]
        },
      });
    });
  
    callback(places);
  };
  
  const handleChangeSelect = (place: Place) => {
    setAddress(place);
    /*
    onChangeLocation({
      latitude: place.position.lat,
      longitude: place.position.lng,
      address: place.label!
    });
    */
  };


  return (
    <main className="order-location-container">
      <div className="order-location-content">
        <h3 className="order-location-title">Selecione o local de entrega.</h3>
        
        <div className="filter-container">
          <AsyncSelect 
            placeholder="Digite o endereço"
            className="filter"
            loadOptions={loadOptions}
            onChange={value => handleChangeSelect(value as Place)}
          />
        </div>

        <MapContainer
          key={address.position.lat}
          center={address.position}
          zoom={15}
          scrollWheelZoom
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={address.position}>
            <Popup>
              {address.label}
            </Popup>
          </Marker>
        </MapContainer>

      </div>
    </main>
  );
}
