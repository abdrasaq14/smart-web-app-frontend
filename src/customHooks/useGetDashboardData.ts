/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, UseQueryOptions, QueryKey } from "@tanstack/react-query";
import apiFetcher from "../utils/apiFetcher";

/**
 * Fetch data using React Query
 * @template TData - The type of the response data.
 * @template TError - The type of the error object.
 * @param {string} route - The API endpoint route.
 * @param {Record<string, any>} [queryParams={}] - Query parameters for the API call.
 * @param {UseQueryOptions<TData, TError>} [options] - Optional React Query options.
 * @returns {object} Query result containing `data`, `isLoading`, `error`, etc.
 */
export const useFetchData = <TData = unknown, TError = unknown>(
  queryKey: QueryKey,
  route: string,
  queryParams: Record<string, any> = {},
  options?: UseQueryOptions<TData, TError>
) => {
  return useQuery<TData, TError>({
    queryKey, // Unique query key
    queryFn: async () => {
      try {
        const response = await apiFetcher.get(route, { params: queryParams });
        console.log("User data fetched successfully:", response);
        return response as TData;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Ensure the error propagates to React Query
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes in milliseconds
    retry: 3, // Retry failed queries up to 3 times (customizable)
    ...options, // Spread additional options
  });
};
