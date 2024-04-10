import axios from "axios";
import { BASE_URL } from "./constants";

export default async function getTransactions() {
  const res = await axios.get(`${BASE_URL}/transactions`);
  return res;
}
