import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { sleep } from '../../../../utils/utils';
import { AlertHistoryResponseSchema, ApiAlertHistory } from './types';
import { get, globalUseRealData } from '../../../apiUtils';
import { mockResponse } from './mock';
import { useQuery } from 'react-query';

const USE_REAL_DATA = true;

const alertHistoryApiRoute = 'alerts';

export async function getAlertHistory(page: number, rowsPerPage: number): Promise<ApiAlertHistory> {
	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData
		? await get(alertHistoryApiRoute, { queryParams: { page: page + 1, page_size: rowsPerPage } })
		: mockResponse;
	const validatedResponse = AlertHistoryResponseSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetAlertHistory = (page: number, rowsPerPage: number) => {
	return useQuery([alertHistoryApiRoute, page, rowsPerPage], () =>
		getAlertHistory(page, rowsPerPage)
	);
};
