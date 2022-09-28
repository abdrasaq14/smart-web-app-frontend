import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { sleep } from '../../../../utils/utils';
import { mockResponse } from './mock';
import { ApiRevenueLossBreakdown, RevenueLossBreakDownSchema } from './types';
import { get, globalUseRealData } from '../../../apiUtils';
import { useQuery } from 'react-query';

const USE_REAL_DATA = false;

const revenueLossBreakdownChartDataApiRoute = 'operations/revenue-loss-breakdown';

export async function getRevenueLossBreakdownChartData(): Promise<ApiRevenueLossBreakdown> {
	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData ? await get(revenueLossBreakdownChartDataApiRoute) : mockResponse;
	const validatedResponse = RevenueLossBreakDownSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetRevenueLossBreakdownChartData = () =>
	useQuery([revenueLossBreakdownChartDataApiRoute], getRevenueLossBreakdownChartData);
