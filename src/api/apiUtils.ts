import { z } from 'zod';
import { formatDateForFilter } from '../utils/formatters';
import { DashboardQueryProps } from '../types';
import { sleep } from '../utils/utils';
import { MOCK_RESPONSE_SLEEP_TIME } from '../utils/constants';

const BASE_URL = 'http://127.0.0.1:8000/api/';
// const BASE_URL = 'https://api.demo.powersmarter.net/api/';
export function globalUseRealData() {
	return true;
}

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

function getToken() {
	return localStorage.getItem('auth0Token');
}

export function get(relativeUrl: string, options?: any) {
	const requestOptions = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${getToken()}`,
		},
	};
	const url = new URL(`${BASE_URL}${relativeUrl}`);
	if (options?.queryParams) {
		url.search = new URLSearchParams(options?.queryParams).toString();
	}
	return fetch(url, requestOptions).then(handleResponse);
}

export function post(relativeUrl: string, data: any, options?: any) {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${getToken()}`,
		},
		body: JSON.stringify(data),
	};
	const url = new URL(`${BASE_URL}${relativeUrl}`);
	if (options?.queryParams) {
		url.search = new URLSearchParams(options?.queryParams).toString();
	}
	return fetch(url, requestOptions).then(handleResponse);
}

export function patch(relativeUrl: string, data: any, options?: any) {
	const requestOptions = {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${getToken()}`,
		},
		body: JSON.stringify(data),
	};
	const url = new URL(`${BASE_URL}${relativeUrl}/${data.id}`);
	if (options?.queryParams) {
		url.search = new URLSearchParams(options?.queryParams).toString();
	}
	return fetch(url, requestOptions).then(handleResponse);
}

export function patchWithId(relativeUrl: string, id: string | number, data: any, options?: any) {
	const requestOptions = {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${getToken()}`,
		},
		body: JSON.stringify(data),
	};
	const url = new URL(`${BASE_URL}${relativeUrl}/${id.toString()}`);
	if (options?.queryParams) {
		url.search = new URLSearchParams(options?.queryParams).toString();
	}
	return fetch(url, requestOptions).then(handleResponse);
}

export function del(relativeUrl: string, id: number | string, options?: any) {
	const requestOptions = {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${getToken()}`,
		},
	};
	const url = new URL(`${BASE_URL}${relativeUrl}/${id}`);
	if (options?.queryParams) {
		url.search = new URLSearchParams(options?.queryParams).toString();
	}
	return fetch(url, requestOptions).then(handleResponse);
}

export function getFiltersQueryParams(options?: DashboardQueryProps) {
	const filters = options?.filters;
	let queryParams = {};
	if (filters) {
		if (filters.search && filters.search != '') {
			queryParams = {
				...queryParams,
				search: filters.search,
			};
		}
		if (filters.sites && filters.sites?.length > 0) {
			queryParams = {
				...queryParams,
				sites: filters.sites.join(','),
			};
		}
		if (filters.companies && filters.companies?.length > 0) {
			queryParams = {
				...queryParams,
				companies: filters.companies.join(','),
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
		if (filters.status != null) {
			queryParams = {
				...queryParams,
				status: filters.status,
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
	const params = {
		...getPaginationQueryParams(options),
		...getFiltersQueryParams(options),
		...(options?.card_type ? { card_type: options?.card_type } : {}),
	};
	return params;
}

type GetDashboardDataProps = {
	localUseRealData: boolean;
	apiRoute: string;
	schema: any;
	mockResponse: any;
	transformFunction?: (x: any) => any;
};

export function getDashboardData<DataType>({
	localUseRealData,
	apiRoute,
	schema,
	mockResponse,
	transformFunction,
}: GetDashboardDataProps) {
	return async function (options?: DashboardQueryProps): Promise<DataType> {
		const filtersQueryParams = getQueryParams(options);

		const useRealData = localUseRealData && globalUseRealData();
		const response = useRealData
			? await get(apiRoute, { queryParams: filtersQueryParams })
			: mockResponse;
		//TODO: hack! remove this
		if (apiRoute === 'users') {
			response.results = response.results.filter((user: any) => user.employee_id != null);
		}
		console.log("validatedResponse", response)
		const validatedResponse = schema.parse(response);
		if (!useRealData) {
			await sleep(MOCK_RESPONSE_SLEEP_TIME);
		}

		if (transformFunction) {
			return transformFunction(validatedResponse);
		} else {
			return validatedResponse;
		}
	};
}
