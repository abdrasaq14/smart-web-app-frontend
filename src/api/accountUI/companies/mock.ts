import { ApiGetCompanies } from './types';

export const mockResponse: ApiGetCompanies = {
	count: 100,
	next: null,
	previous: null,
	results: [
		{
			id: 1,
			name: 'KBG Russia',
			company_type: 'car_energy',
			service_type: 'energy_monitoring',
			phone_number: '1234567890',
			email: 'email@email.com',
			address: 'Address',
			renewal_date: '2022-10-20',
			users: [
				{
					id: 1,
					name: 'James Lopez',
					date: 'Sun · 14 April, 04:25 AM',
				},
				{
					id: 2,
					name: 'Private Ryan',
					date: 'Sun · 14 April, 04:25 AM',
				},
				{
					id: 3,
					name: 'Colnel Pantry',
					date: 'Sun · 14 April, 04:25 AM',
				},
			],
		},
	],
};
