import { z } from 'zod';

const stringOrNumberSchema = z.union([z.string(), z.number()]);
export const ChartDatasetDataSchema = z.array(z.array(stringOrNumberSchema));

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

export function get(url: string) {
	const requestOptions = {
		method: 'GET',
	};
	return fetch(url, requestOptions).then(handleResponse);
}
