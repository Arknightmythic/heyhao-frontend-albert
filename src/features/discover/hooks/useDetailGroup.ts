import { useQuery } from "@tanstack/react-query";
import { getDetailGroup } from "../api/getDetailGroup";

export const useDetailGroups = (id?:string) => {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["detail-groups", id],
    queryFn: () => getDetailGroup(id??""),
    select: (data) => data.data,
    enabled: id !== ""
  });

  return { data, isLoading, isError, error };
};
