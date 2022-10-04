import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { sleep } from '../../../../utils/utils';
import { mockResponse } from './mock';
import { ApiRevenueLossBreakdown, RevenueLossBreakDownSchema } from './types';
import { get, getFiltersQueryParams, globalUseRealData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';

const USE_REAL_DATA = true;

const apiRoute = 'operations-dashboard/revenue-loss';

export async function getRevenueLossBreakdownChartData(
	options?: DashboardQueryProps
): Promise<ApiRevenueLossBreakdown> {
	const filtersQueryParams = getFiltersQueryParams(options);

	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData
		? await get(apiRoute, { queryParams: filtersQueryParams })
		: mockResponse;
	const validatedResponse = RevenueLossBreakDownSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetRevenueLossBreakdownChartData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getRevenueLossBreakdownChartData(options));
