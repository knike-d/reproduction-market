import { useSuspenseQuery } from "@tanstack/react-query";
import type { AreaSelect } from "@/model/location/location.type";

const url = "/api/location";

export const useFetchAreaSelectLocation = () => {
  const searchParams = new URLSearchParams({
    isGrouped: "true",
  });
  return useSuspenseQuery<AreaSelect.Location[]>({
    queryKey: [`${url}?${searchParams.toString()}`],
  });
};
