import { ApiAlertHistory, ApiOperationsHome } from './types';

const mockResponseForTableData: ApiAlertHistory = [
	{
		time: 'Sun · 14 April, 04:25 AM',
		id: 'ABU-235LK',
		site: 'Oshodi',
		zone: 'Oshodi',
		district: 'District A',
		activity: 'Overloading',
		status: 'Pending',
	},
	{
		time: 'Sun · 14 April, 04:25 AM',
		id: 'ABU-235LK',
		site: 'Agure',
		zone: 'Agure',
		district: 'District B',
		activity: 'Downtime',
		status: 'Resolved',
	},
	{
		time: 'Sun · 14 April, 04:25 AM',
		id: 'ABU-235LK',
		site: 'Terise',
		zone: 'Terise',
		district: 'District C',
		activity: 'Surge',
		status: 'Pending',
	},
	{
		time: 'Sun · 14 April, 04:25 AM',
		id: 'ABU-235LK',
		site: 'Valley',
		zone: 'Valley',
		district: 'District D',
		activity: 'High temp.',
		status: 'Resolved',
	},
];

export const mockResponse: ApiOperationsHome = {
	cardsData: {
		totalConsumption: 32727658,
		currentLoad: 2727121,
		avgAvailability: 20,
		powerCuts: 5,
		overloadedDTs: 10,
		sitesUnderMaintenance: 2,
	},
	tableData: mockResponseForTableData,
	chartsData: {
		sitesMonitored: {
			total: 12000,
			data: [
				{ key: 'active', value: 40 },
				{ key: 'offline', value: 60 },
			],
		},
		loadProfile: {
			data: [
				['day', 'profile1', 'profile2'],
				[0, 17, 14],
				[2, 15, 13],
				[4, 12, 12],
				[6, 13, 11],
				[8, 14, 12],
				[10, 16, 13],
				[12, 14, 10],
				[14, 20, 12],
				[16, 19, 9],
				[18, 18, 10],
				[20, 17, 11],
				[22, 22, 10],
				[24, 24, 13],
			],
		},
		powerConsumption: {
			data: [
				['district', 'consumption'],
				['District E', 850],
				['District D', 200],
				['District C', 300],
				['District B', 500],
				['District A', 800],
			],
		},
	},
};
