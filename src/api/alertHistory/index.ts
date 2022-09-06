import { MOCK_RESPONSE_SLEEP_TIME } from '../../utils/constants';
import { sleep } from '../../utils/utils';
import { AlertHistoryResponseSchema, ApiAlertHistory } from './types';
import { mockResponse } from './mock';

export async function getAlertHistory(): Promise<ApiAlertHistory> {
	const response = AlertHistoryResponseSchema.parse(mockResponse);
	await sleep(MOCK_RESPONSE_SLEEP_TIME);
	return response;
}
