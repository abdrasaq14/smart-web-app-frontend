/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import apiFetcher from "../utils/apiFetcher";

/**
 * Fetch data using React Query
 * @param {string} route - The API endpoint route.
 * @param {object} queryParams - Query parameters for the API call.
 * @param {UseQueryOptions} options - Optional React Query options.
 * @returns {object} Query result containing `data`, `isLoading`, `error`, etc.
 */
export const useFetchData = (
  route: string,
  queryParams: Record<string, any> = {},
  options?: UseQueryOptions<any, Error, any, [string, Record<string, any>]>
) => {
  return useQuery({
    queryKey: [route, queryParams], // Unique query key
    queryFn: () =>
      apiFetcher.get(route, { params: queryParams }).then((res) => res.data),
    staleTime: 300000, // 5 minutes
    ...options, // Merge any additional options passed as arguments
  });
};
