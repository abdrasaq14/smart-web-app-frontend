import { ApiGetCompany } from './types';

export const mockResponse: ApiGetCompany = {
	id: 1,
	name: 'KGB Russia',
	type: 'Car Energy', // set of options
	phone_number: '+40 11223344',
	email_address: 'kgb@russia.ru',
	address: 'somewhere in Russia',
	renewal_date: 'Sun · 14 April, 04:25 AM',
	type_of_service: 'Energy monitoring', // set of options
};
