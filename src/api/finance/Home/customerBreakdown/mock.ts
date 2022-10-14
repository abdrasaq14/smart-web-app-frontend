import { ApiPieChart } from '../../../apiUtils';

export const mockResponse: ApiPieChart = {
	total: 720000,
	dataset: [
		{ key: 'paying', value: 288000 },
		{ key: 'defaulting', value: 432000 },
	],
};
