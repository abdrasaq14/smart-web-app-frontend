import { User } from '../accountUI/users/types';

export const mockResponse: User = {
	id: 1,
	first_name: 'David',
	last_name: 'Usman',
	phone_number: '1',
	companies: [
		{
			id: 1,
			name: 'KBG Russia',
			company_type: 'car_energy',
			service_type: 'energy_monitoring',
			phone_number: '1234567890',
			email: 'email@email.com',
			address: 'Address',
			renewal_date: '2022-10-20',
		},
	],
	employee_id: 'SM11098',
	email: 'drakefinn@smarterise.com',
	access_level: 'admin',
	time: 'Sun · 14 April, 04:25 AM',
};
