import { useQuery } from "@tanstack/react-query";
import { getDiscoverPeoples } from "../api/getDiscoverPeople";

export const useDiscoverPeoples = (isEnabled: boolean, name = "") => {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["search-peoples", name],
    queryFn: () => getDiscoverPeoples(name),
    select: (data) => data.data,
    enabled: isEnabled,
  });

  return { data, isLoading, isError, error };
};
