import { ApiTransactionHistory } from './types';

export const mockResponse: ApiTransactionHistory = [
	{
		time: 'Sun · 14 April, 04:25 AM',
		site: 'Eko Hotel',
		subscription: 'Paid',
		amountBilled: '100,000,000',
		amountBought: '50,000,000',
		duration: '2 days',
	},
	{
		time: 'Sun · 14 April, 04:25 AM',
		site: 'Head Office',
		subscription: 'Paid',
		amountBilled: '300,000,000',
		amountBought: '150,000,000',
		duration: '3 days',
	},
	{
		time: 'Sun · 14 April, 04:25 AM',
		site: 'Apapa',
		subscription: 'Pending',
		amountBilled: '10,000,000',
		amountBought: '5,000,000',
		duration: '2 days',
	},
	{
		time: 'Sun · 14 April, 04:25 AM',
		site: 'Surulere',
		subscription: 'Paid',
		amountBilled: '3,000,000',
		amountBought: '1,500,000',
		duration: '3 days',
	},
];
