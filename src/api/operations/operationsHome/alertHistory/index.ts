import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { sleep } from '../../../../utils/utils';
import { AlertHistoryResponseSchema, ApiAlertHistory } from './types';
import { get, getQueryParams, globalUseRealData } from '../../../apiUtils';
import { mockResponse } from './mock';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';

const USE_REAL_DATA = true;

const apiRoute = 'alerts';

export async function getAlertHistory(options?: DashboardQueryProps): Promise<ApiAlertHistory> {
	const useRealData = USE_REAL_DATA && globalUseRealData();
	const queryParams = getQueryParams(options);
	console.log('queryParams: ', queryParams);
	const response = useRealData ? await get(apiRoute, { queryParams }) : mockResponse;
	const validatedResponse = AlertHistoryResponseSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetAlertHistory = (options?: DashboardQueryProps) => {
	return useQuery([apiRoute, options], () => getAlertHistory(options));
};
