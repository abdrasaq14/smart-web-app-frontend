import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { sleep } from '../../../../utils/utils';
import { AlertHistoryResponseSchema, ApiAlertHistory } from './types';
import { get, globalUseRealData } from '../../../apiUtils';
import { mockResponse } from './mock';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';

const USE_REAL_DATA = true;

const apiRoute = 'alerts';

export async function getAlertHistory(options?: DashboardQueryProps): Promise<ApiAlertHistory> {
	const pagination = options?.pagination;
	const useRealData = USE_REAL_DATA && globalUseRealData();
	let queryParams = {};
	if (pagination) {
		queryParams = {
			...queryParams,
			page: pagination.page + 1,
			page_size: pagination.page_size,
		};
	}
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
