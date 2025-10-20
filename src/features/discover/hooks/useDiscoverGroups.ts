import { useQuery } from "@tanstack/react-query";
import { getDisccoverGroups } from "../api/getDiscoverGroups";

export const useDiscoverGroups = (isEnabled: boolean, name = "") => {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["search-groups", name],
    queryFn: () => getDisccoverGroups(name),
    select: (data) => data.data,
    enabled: isEnabled,
  });

  return { data, isLoading, isError, error };
};
