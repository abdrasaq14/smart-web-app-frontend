import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { AlertHistoryResponseSchema, ApiAlertHistory } from './types';
import { get } from '../../apiUtils';
import { mockResponse } from './mock';

const USE_REAL_DATA = true;

export async function getAlertHistory(): Promise<ApiAlertHistory> {
	const response = USE_REAL_DATA ? await get('http://127.0.0.1:8000/api/alerts/') : mockResponse;
	const validatedResponse = AlertHistoryResponseSchema.parse(response);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 2);
	return validatedResponse;
}
