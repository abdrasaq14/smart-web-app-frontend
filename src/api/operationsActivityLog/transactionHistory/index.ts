import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { ApiTransactionHistory, TransactionHistoryResponseSchema } from './types';
import { mockResponse } from './mock';

export async function getTransactionHistory(): Promise<ApiTransactionHistory> {
	const response = TransactionHistoryResponseSchema.parse(mockResponse);
	await sleep(MOCK_RESPONSE_SLEEP_TIME);
	return response;
}
