import apiFetcher from "../utils/apiFetcher";
import { useEffect, useState } from "react";

export const GetDashboardData = (route: string, query?: Record<string, any>) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiFetcher.get(route, {
          params: query,
        });
        setData(response.data);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message || "An error occurred");
        setIsLoading(false);
      }
    };
    fetchData();
  }, [route, query]);

  return { data, isLoading, error };
};
