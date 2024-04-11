import { useQuery } from "@tanstack/react-query";
import getTransactions from "./getTransactions";

export const useTransactionsQuery = () => {
  const res = useQuery({
    queryKey: ["transactionsData"],
    queryFn: getTransactions,
  });
  return res;
};
