import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { AlertHistoryResponseSchema, ApiAlertHistory } from './types';
import { get, globalUseRealData } from '../../apiUtils';
import { mockResponse } from './mock';
import { useQuery } from 'react-query';

const USE_REAL_DATA = true;

const alertHistoryApiRoute = 'alerts';

export async function getAlertHistory(): Promise<ApiAlertHistory> {
	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData ? await get(alertHistoryApiRoute) : mockResponse;
	const validatedResponse = AlertHistoryResponseSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetAlertHistory = () => useQuery([alertHistoryApiRoute], getAlertHistory);
