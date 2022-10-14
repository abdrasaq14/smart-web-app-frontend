import { ApiUsers } from './types';

export const mockResponse: ApiUsers = {
	count: 100,
	next: null,
	previous: null,
	results: [
		{
			id: 1,
			name: 'David Usman',
			company: 'Stell & Bronze Ltd',
			employee_id: 'SM11098',
			email_address: 'drakefinn@smarterise.com',
			department: 'Operation', // set if options
			time: 'Sun · 14 April, 04:25 AM',
		},
		{
			id: 2,
			name: 'Daniel Osas',
			company: 'KGB N PUDB',
			employee_id: 'SM23490',
			email_address: 'godwinife@smarterise.com',
			department: 'Super User',
			time: 'Sun · 14 April, 04:25 AM',
		},
		{
			id: 3,
			name: 'Emmanuel Akpabio',
			company: 'KGB N PUDB',
			employee_id: 'SM67891',
			email_address: 'leosimon@smarterise.com',
			department: 'Finance',
			time: 'Sun · 14 April, 04:25 AM',
		},
		{
			id: 4,
			name: 'Jerry Ubrahim',
			company: 'KGB N PUDB',
			employee_id: 'SM23456',
			email_address: 'tedcyrus@smarterise.com',
			department: 'Super User',
			time: 'Sun · 14 April, 04:25 AM',
		},
	],
};
