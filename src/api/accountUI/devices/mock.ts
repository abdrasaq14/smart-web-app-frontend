import { ApiDevice } from './types';

export const mockResponse: ApiDevice = {
	count: 100,
	next: null,
	previous: null,
	results: [
		{
			id: 1,
			device_id: 'David ABU-235LK',
			name: 'David ABU-235LK',
			company: 'Smarterise',
			asset_type: 'Transformer', // set of options
			asset_capacity: 300,
			time: 'Sun · 14 April, 04:25 AM',
		},
		{
			id: 2,
			device_id: 'David ABU-235LK',
			name: 'Daniel ABU-235LK',
			company: 'EKGB',
			asset_type: 'Generator',
			asset_capacity: 300,
			time: 'Sun · 14 April, 04:25 AM',
		},
		{
			id: 3,
			device_id: 'David ABU-235LK',
			name: 'Emmanuel ABU-235LK',
			company: 'Vercase',
			asset_type: 'Solar PV',
			asset_capacity: 300,
			time: 'Sun · 14 April, 04:25 AM',
		},
		{
			id: 4,
			device_id: 'David ABU-235LK',
			name: 'Jerry ABU-235LK',
			company: 'Jim Ltd',
			asset_type: 'Baterry',
			asset_capacity: 300,
			time: 'Sun · 14 April, 04:25 AM',
		},
	],
};
