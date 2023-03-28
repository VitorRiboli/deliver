import { BASE_URL } from "../utils/system";
import axios from "axios";


export function findAllProducts() {
  return axios(`${BASE_URL}/products`)
}