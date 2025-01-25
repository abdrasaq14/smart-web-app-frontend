/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import apiFetcher from "../utils/apiFetcher";

type RequestMethod = "POST" | "PUT" | "DELETE" | "PATCH";

interface UsePostDataOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
  onSettled?: (data: any, error: any) => void;
}

/**
 * Custom hook to handle data submission using React Query's useMutation
 * @param {string} route - The API endpoint route.
 * @param {RequestMethod} method - HTTP request method (POST, PUT, DELETE, PATCH).
 * @param {UsePostDataOptions} options - Optional handlers for success, error, and settled states.
 * @returns {object} Mutation object containing mutate, isLoading, error, etc.
 */
export const usePostData = (
  route: string,
  method: RequestMethod = "POST",
  options: UsePostDataOptions = {}
) => {
  return useMutation<any>({
    mutationFn: async (payload: any) => {
      switch (method) {
        case "POST":
          return apiFetcher.post(route, payload);
        case "PUT":
          return apiFetcher.put(route, payload);
        case "DELETE":
          return apiFetcher.delete(route, { data: payload });
        case "PATCH":
          return apiFetcher.patch(route, payload);
        default:
          throw new Error(`Unsupported request method: ${method}`);
      }
    },

    onSuccess: options?.onSuccess,
    onError: options?.onError,
    onSettled: options?.onSettled,
  });
};
