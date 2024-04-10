import axios from "axios";
import { BASE_URL } from "./constants";

export default async function getWallet() {
  const res = await axios.get(`${BASE_URL}/wallet`);
  return res;
}
