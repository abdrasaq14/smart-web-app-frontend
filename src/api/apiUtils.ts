import { z } from 'zod';

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

export function get(relativeUrl: string, options: any) {
	const requestOptions = {
		method: 'GET',
	};
	const url = new URL(`${BASE_URL}${relativeUrl}/`);
	if (options?.queryParams) {
		url.search = new URLSearchParams(options?.queryParams).toString();
	}
	return fetch(url, requestOptions).then(handleResponse);
}

export function globalUseRealData() {
	return false;
}
