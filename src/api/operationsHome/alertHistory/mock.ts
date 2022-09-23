import { ApiAlertHistory } from './types';

export const mockResponse: ApiAlertHistory = {
	count: 100,
	next: null,
	previous: null,
	results: [
		{
			id: 1,
			time: 'Sun · 14 April, 04:25 AM',
			alert_id: 'ABU-235LK',
			site: 'Oshodi',
			zone: 'Oshodi',
			district: 'District A',
			activity: 'Overloading',
			status: 'Pending',
		},
		{
			id: 2,
			time: 'Sun · 14 April, 04:25 AM',
			alert_id: 'ABU-235LK',
			site: 'Agure',
			zone: 'Agure',
			district: 'District B',
			activity: 'Downtime',
			status: 'Resolved',
		},
		{
			id: 3,
			time: 'Sun · 14 April, 04:25 AM',
			alert_id: 'ABU-235LK',
			site: 'Terise',
			zone: 'Terise',
			district: 'District C',
			activity: 'Surge',
			status: 'Pending',
		},
		{
			id: 4,
			time: 'Sun · 14 April, 04:25 AM',
			alert_id: 'ABU-235LK',
			site: 'Valley',
			zone: 'Valley',
			district: 'District D',
			activity: 'High temp.',
			status: 'Resolved',
		},
	],
};
