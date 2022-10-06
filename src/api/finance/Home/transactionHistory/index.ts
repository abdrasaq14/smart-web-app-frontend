import { ApiTransactionHistory, TransactionHistoryResponseSchema } from './types';
import { mockResponse } from './mock';
import { useQuery } from 'react-query';
import { getDashboardData } from '../../../apiUtils';
import { DashboardQueryProps } from '../../../../types';

const apiRoute = 'transaction-history';

const getTransactionHistory = getDashboardData<ApiTransactionHistory>({
	localUseRealData: true,
	apiRoute,
	schema: TransactionHistoryResponseSchema,
	mockResponse,
});

export const useGetTransactionsHistory = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getTransactionHistory(options));
