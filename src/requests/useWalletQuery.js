import { useQuery } from "@tanstack/react-query";
import getWallet from "./getWallet";

export const useWalletQuery = () => {
  const res = useQuery({ queryKey: ["walletData"], queryFn: getWallet });
  return res;
};
