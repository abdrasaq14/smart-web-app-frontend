import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { sleep } from '../../../../utils/utils';
import { ApiTransactionHistory, TransactionHistoryResponseSchema } from './types';
import { mockResponse } from './mock';
import { useQuery } from 'react-query';
import { get, globalUseRealData } from '../../../apiUtils';

const USE_REAL_DATA = false;

const apiRoute = 'transactions';

export async function getTransactionHistory(
	page: number,
	rowsPerPage: number
): Promise<ApiTransactionHistory> {
	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData
		? await get(apiRoute, { queryParams: { page: page + 1, page_size: rowsPerPage } })
		: mockResponse;
	const validatedResponse = TransactionHistoryResponseSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetTransactionsHistory = (page: number, rowsPerPage: number) => {
	return useQuery([apiRoute, page, rowsPerPage], () => getTransactionHistory(page, rowsPerPage));
};
