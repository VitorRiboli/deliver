import axios from "axios";
import { BASE_URL } from "../utils/system";
import { OrderPayload } from "../utils/types";


const mapboxToken = "pk.eyJ1Ijoidml0b3JyaWJvbGkiLCJhIjoiY2xmemVzN3N0MTAzNzNlcDZqNjRmeGZnaiJ9.6noztaAXzZaHOHtRxXI5pw";


export function findAllProducts() {
  return axios(`${BASE_URL}/products`)
}

export function fetchLocalMapBox(local: string) {
  return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload : OrderPayload) {
  return axios.post(`${BASE_URL}/orders`, payload);
}
