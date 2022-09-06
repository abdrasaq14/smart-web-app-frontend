import { ApiAlertHistory } from './types';

export const mockResponse: ApiAlertHistory = [
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
