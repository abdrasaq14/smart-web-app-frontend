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
			xAxis: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
			yAxis: [
				[15, 12, 13, 14, 16, 14, 20, 19, 18, 17, 22, 24, 25, 26],
				[13, 12, 11, 12, 13, 10, 12, 9, 10, 11, 10, 13, 14, 15],
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
