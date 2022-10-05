import { z } from 'zod';
import { formatDateForFilter } from '../utils/formatters';
import { DashboardQueryProps } from '../types';
import { sleep } from '../utils/utils';
import { MOCK_RESPONSE_SLEEP_TIME } from '../utils/constants';

const BASE_URL = 'http://127.0.0.1:8000/api/';

const stringOrNumberSchema = z.union([z.string(), z.number()]);
export const ChartDatasetDataSchema = z.array(z.array(stringOrNumberSchema));
export const ChartSchema = z.object({
	dataset: ChartDatasetDataSchema,
});
export type ApiChart = z.infer<typeof ChartSchema>;

export const PieChartSchema = z.object({
	total: z.number(),
	dataset: z.array(
		z.object({
			key: z.string(),
			value: z.number(),
		})
	),
});
export type ApiPieChart = z.infer<typeof PieChartSchema>;

function handleResponse(response: any) {
	return response.text().then((text: string) => {
		const data = text && JSON.parse(text);

		if (!response.ok) {
			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data;
	});
}

export function get(relativeUrl: string, options?: any) {
	const requestOptions = {
		method: 'GET',
	};
	const url = new URL(`${BASE_URL}${relativeUrl}/`);
	if (options?.queryParams) {
		url.search = new URLSearchParams(options?.queryParams).toString();
	}
	return fetch(url, requestOptions).then(handleResponse);
}

export function getFiltersQueryParams(options?: DashboardQueryProps) {
	const filters = options?.filters;
	let queryParams = {};
	if (filters) {
		if (filters.sites && filters.sites?.length > 0) {
			queryParams = {
				...queryParams,
				sites: filters.sites.join(','),
			};
		}
		if (filters.start_date != null) {
			queryParams = {
				...queryParams,
				start_date: formatDateForFilter(filters.start_date),
			};
		}
		if (filters.end_date != null) {
			queryParams = {
				...queryParams,
				end_date: formatDateForFilter(filters.end_date),
			};
		}
	}
	return queryParams;
}

export function getPaginationQueryParams(options?: DashboardQueryProps) {
	let queryParams = {};
	if (options?.pagination) {
		queryParams = {
			...queryParams,
			page: options?.pagination.page + 1,
			page_size: options?.pagination.page_size,
		};
	}
	return queryParams;
}

export function getQueryParams(options?: DashboardQueryProps) {
	return { ...getPaginationQueryParams(options), ...getFiltersQueryParams(options) };
}

type GetDashboardDataProps = {
	localUseRealData: boolean;
	apiRoute: string;
	schema: any;
	mockResponse: any;
};

export function getDashboardData<DataType>({
	localUseRealData,
	apiRoute,
	schema,
	mockResponse,
}: GetDashboardDataProps) {
	return async function (options?: DashboardQueryProps): Promise<DataType> {
		const filtersQueryParams = getQueryParams(options);

		const useRealData = localUseRealData && globalUseRealData();
		const response = useRealData
			? await get(apiRoute, { queryParams: filtersQueryParams })
			: mockResponse;
		const validatedResponse = schema.parse(response);
		if (!useRealData) {
			await sleep(MOCK_RESPONSE_SLEEP_TIME);
		}
		return validatedResponse;
	};
}

export function globalUseRealData() {
	return true;
}
