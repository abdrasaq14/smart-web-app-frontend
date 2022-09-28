import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { sleep } from '../../../../utils/utils';
import { mockResponse } from './mock';
import { ApiRevenueChart, RevenueSchema } from './types';
import { get, globalUseRealData } from '../../../apiUtils';
import { useQuery } from 'react-query';

const USE_REAL_DATA = false;

const apiRoute = 'finance/revenue-chart';

export async function getRevenueChartData(): Promise<ApiRevenueChart> {
	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData ? await get(apiRoute) : mockResponse;
	const validatedResponse = RevenueSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetRevenueChartData = () => useQuery([apiRoute], getRevenueChartData);
