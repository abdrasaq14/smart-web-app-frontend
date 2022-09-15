import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { mockResponse } from './mock';
import { AlertHistoryResponseSchema, ApiAlertHistory } from './types';

export async function getAlertHistory(): Promise<ApiAlertHistory> {
	const response = AlertHistoryResponseSchema.parse(mockResponse);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 2);
	return response;
}
