import axios from "axios";
import { BASE_URL } from "./constants";

export default async function getUser() {
  const res = await axios.get(`${BASE_URL}/user`);
  return res;
}
