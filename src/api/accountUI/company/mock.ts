import { ApiGetCompany } from './types';

export const mockResponse: ApiGetCompany = {
	id: 1,
	name: 'KGB Russia',
	company_type: 'Car Energy', // set of options
	phone_number: '+40 11223344',
	email: 'kgb@russia.ru',
	address: 'somewhere in Russia',
	renewal_date: 'Sun · 14 April, 04:25 AM',
	service_type: 'Energy monitoring', // set of options
	users: [],
};
