import { ApiEventLogs } from './types';

export const mockResponse: ApiEventLogs = [
	{
		alertId: 'ABU-235LK',
		site: 'Oshodi',
		zone: 'Oshodi',
		district: 'District A',
		activity: 'Overloading',
		time: '04:25 AM Sun - 14 April, 2022',
		status: 'Resolved',
	},
	{
		alertId: 'ABU-235LK',
		site: 'Agure',
		zone: 'Agure',
		district: 'District B',
		activity: 'Downtime',
		time: '04:25 AM Sun - 14 April, 2022',
		status: 'Resolved',
	},
	{
		alertId: 'ABU-235LK',
		site: 'Terise',
		zone: 'Terise',
		district: 'District C',
		activity: 'Surge',
		time: '04:25 AM Sun - 14 April, 2022',
		status: 'Resolved',
	},
	{
		alertId: 'ABU-235LK',
		site: 'Valley',
		zone: 'Valley',
		district: 'District D',
		activity: 'High temperature',
		time: '04:25 AM Sun - 14 April, 2022',
		status: 'Unresolved',
	},
];
