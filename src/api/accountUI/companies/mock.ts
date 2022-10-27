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
					first_name: 'David1',
					last_name: 'Usman1',
					phone_number: '1',
					employee_id: 'SM11098',
					email: 'drakefinn@smarterise.com',
					access_level: 'operations',
					time: 'Sun · 14 April, 04:25 AM',
				},
				{
					id: 2,
					first_name: 'David2',
					last_name: 'Usman2',
					phone_number: '2',
					employee_id: 'SM11098',
					email: 'drakefinn@smarterise.com',
					access_level: 'operations',
					time: 'Sun · 14 April, 04:25 AM',
				},
				{
					id: 3,
					first_name: 'David3',
					last_name: 'Usman3',
					phone_number: '3',
					employee_id: 'SM11098',
					email: 'drakefinn@smarterise.com',
					access_level: 'operations',
					time: 'Sun · 14 April, 04:25 AM',
				},
			],
		},
	],
};
