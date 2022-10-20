import { ApiUsers } from './types';

export const mockResponse: ApiUsers = {
	count: 100,
	next: null,
	previous: null,
	results: [
		{
			id: 1,
			first_name: 'David',
			last_name: 'Usman',
			companies: [1],
			employee_id: 'SM11098',
			email: 'drakefinn@smarterise.com',
			access_level: 'operations',
			time: 'Sun · 14 April, 04:25 AM',
		},
		{
			id: 2,
			first_name: 'Daniel',
			last_name: 'Osas',
			companies: [1],
			employee_id: 'SM23490',
			email: 'godwinife@smarterise.com',
			access_level: 'superuser',
			time: 'Sun · 14 April, 04:25 AM',
		},
		{
			id: 3,
			first_name: 'Emmanuel',
			last_name: 'Akpabio',
			companies: [1],
			employee_id: 'SM67891',
			email: 'leosimon@smarterise.com',
			access_level: 'finance',
			time: 'Sun · 14 April, 04:25 AM',
		},
		{
			id: 4,
			first_name: 'Jerry',
			last_name: 'Ubrahim',
			companies: [1],
			employee_id: 'SM23456',
			email: 'tedcyrus@smarterise.com',
			access_level: 'manager',
			time: 'Sun · 14 April, 04:25 AM',
		},
	],
};
