import { ApiDevice } from './types';

export const mockResponse: ApiDevice = {
	count: 100,
	next: null,
	previous: null,
	results: [
		{
			id: 'David ABU-235LK',
			name: 'David ABU-235LK',
			company: {
				id: 1,
				name: 'KBG Russia',
				company_type: 'car_energy',
				service_type: 'energy_monitoring',
				phone_number: '1234567890',
				email: 'email@email.com',
				address: 'Address',
				renewal_date: '2022-10-20',
				users: [],
			},
			asset_type: 'Transformer', // set of options
			asset_capacity: 300,
			linked_at: 'Sun · 14 April, 04:25 AM',
		},
		{
			id: 'David ABU-235LK',
			name: 'Daniel ABU-235LK',
			company: {
				id: 2,
				name: 'EKB',
				company_type: 'car_energy',
				service_type: 'energy_monitoring',
				phone_number: '1234567890',
				email: 'email@email.com',
				address: 'Address',
				renewal_date: '2022-10-20',
				users: [],
			},
			asset_type: 'Generator',
			asset_capacity: 300,
			linked_at: 'Sun · 14 April, 04:25 AM',
		},
		{
			id: 'David ABU-235LK',
			name: 'Emmanuel ABU-235LK',
			company: {
				id: 3,
				name: 'Vercase',
				company_type: 'car_energy',
				service_type: 'energy_monitoring',
				phone_number: '1234567890',
				email: 'email@email.com',
				address: 'Address',
				renewal_date: '2022-10-20',
				users: [],
			},
			asset_type: 'Solar PV',
			asset_capacity: 300,
			linked_at: 'Sun · 14 April, 04:25 AM',
		},
		{
			id: 'David ABU-235LK',
			name: 'Jerry ABU-235LK',
			company: {
				id: 4,
				name: 'Jim Ltd',
				company_type: 'car_energy',
				service_type: 'energy_monitoring',
				phone_number: '1234567890',
				email: 'email@email.com',
				address: 'Address',
				renewal_date: '2022-10-20',
				users: [],
			},
			asset_type: 'Baterry',
			asset_capacity: 300,
			linked_at: 'Sun · 14 April, 04:25 AM',
		},
	],
};
