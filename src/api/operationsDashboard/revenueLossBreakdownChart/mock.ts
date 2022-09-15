import { ApiRevenueLossBreakdown } from './types';

export const mockResponse: ApiRevenueLossBreakdown = {
	total: 200000,
	dataset: [
		{ key: 'billing', value: 60 },
		{ key: 'collection', value: 20 },
		{ key: 'downtime', value: 20 },
	],
};
