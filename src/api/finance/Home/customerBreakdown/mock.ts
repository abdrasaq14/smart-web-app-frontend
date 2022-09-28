import { ApiPieChart } from '../../../apiUtils';

export const mockResponse: ApiPieChart = {
	total: 720000,
	dataset: [
		{ key: 'paying', value: 40 },
		{ key: 'defaulting', value: 60 },
	],
};
