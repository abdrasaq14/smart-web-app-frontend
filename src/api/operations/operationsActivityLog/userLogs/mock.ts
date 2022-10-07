import { ApiUserLogs } from './types';

export const mockResponse: ApiUserLogs = {
	count: 100,
	next: null,
	previous: null,
	results: [
		{
			id: 1,
			alert_id: 'A34509',
			modified_by: 'David Usman',
			employee_id: 'SM11098',
			email_address: 'drakefinn@smarterise.com',
			time: '04:25 AM Sun - 14 April, 2022',
		},
		{
			id: 2,
			alert_id: 'A34509',
			modified_by: 'Daniel Osas',
			employee_id: 'SM23490',
			email_address: 'godwinife@smarterise.com',
			time: '04:25 AM Sun - 14 April, 2022',
		},
		{
			id: 3,
			alert_id: 'A34509',
			modified_by: 'Emmanuel Akpabio',
			employee_id: 'SM67891',
			email_address: 'leosimon@smarterise.com',
			time: '04:25 AM Sun - 14 April, 2022',
		},
		{
			id: 4,
			alert_id: 'A34509',
			modified_by: 'Jerry Ubrahim',
			employee_id: 'SM23456',
			email_address: 'tedcyrus@smarterise.com',
			time: '04:25 AM Sun - 14 April, 2022',
		},
	],
};
