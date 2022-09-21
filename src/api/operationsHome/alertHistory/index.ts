import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { AlertHistoryResponseSchema, ApiAlertHistory } from './types';
import { get } from '../../apiUtils';
import { mockResponse } from './mock';
import { useQuery } from 'react-query';

const USE_REAL_DATA = true;

const alertHistoryApiRoute = 'alerts';

export async function getAlertHistory(): Promise<ApiAlertHistory> {
	const response = USE_REAL_DATA ? await get(alertHistoryApiRoute) : mockResponse;
	const validatedResponse = AlertHistoryResponseSchema.parse(response);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 2);
	return validatedResponse;
}

export const useGetAlertHistory = () => useQuery([alertHistoryApiRoute], getAlertHistory);
