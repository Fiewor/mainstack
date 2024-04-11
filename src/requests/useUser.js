import { useQuery } from "@tanstack/react-query";
import getUser from "./getUser";

export const useUserQuery = () => {
  const res = useQuery({
    queryKey: ["userData"],
    queryFn: getUser,
  });
  return res;
};
