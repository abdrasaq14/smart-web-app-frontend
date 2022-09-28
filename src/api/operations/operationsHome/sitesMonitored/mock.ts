import { ApiSitesMonitored } from './types';

export const mockResponse: ApiSitesMonitored = {
	total: 12000,
	dataset: [
		{ key: 'active', value: 40 },
		{ key: 'offline', value: 60 },
	],
};
