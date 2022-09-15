import { ApiOperationsHome } from './types';

export const mockResponse: ApiOperationsHome = {
	cardsData: {
		totalConsumption: 32727658,
		currentLoad: 2727121,
		avgAvailability: 20,
		powerCuts: 5,
		overloadedDTs: 10,
		sitesUnderMaintenance: 2,
	},
	chartsData: {
		sitesMonitored: {
			total: 12000,
			data: [
				{ key: 'active', value: 40 },
				{ key: 'offline', value: 60 },
			],
		},
	},
};
