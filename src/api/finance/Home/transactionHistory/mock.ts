import { ApiTransactionHistory } from './types';

export const mockResponse: ApiTransactionHistory = {
	count: 100,
	next: null,
	previous: null,
	results: [
		{
			id: 1,
			time: 'Sun · 14 April, 04:25 AM',
			site_name: 'Eko Hotel',
			site: 1,
			subscription: 'Paid',
			amount_billed: 100000000,
			amount_bought: 50000000,
			days: 2,
		},
		{
			id: 2,
			time: 'Sun · 14 April, 04:25 AM',
			site_name: 'Head Office',
			site: 2,
			subscription: 'Paid',
			amount_billed: 300000000,
			amount_bought: 150000000,
			days: 3,
		},
		{
			id: 3,
			time: 'Sun · 14 April, 04:25 AM',
			site_name: 'Apapa',
			site: 3,
			subscription: 'Pending',
			amount_billed: 10000000,
			amount_bought: 5000000,
			days: 2,
		},
		{
			id: 4,
			time: 'Sun · 14 April, 04:25 AM',
			site_name: 'Surulere',
			site: 4,
			subscription: 'Paid',
			amount_billed: 3000000,
			amount_bought: 1500000,
			days: 3,
		},
	],
};
