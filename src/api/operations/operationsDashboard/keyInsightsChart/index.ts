import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { sleep } from '../../../../utils/utils';
import { ApiKeyInsightsChart, KeyInsightsChartSchema } from './types';
import { mockResponse } from './mock';
import { get, getFiltersQueryParams, globalUseRealData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';

const USE_REAL_DATA = true;

const apiRoute = 'operations-dashboard/key-insights';

export async function getKeyInsightsChart(
	options?: DashboardQueryProps
): Promise<ApiKeyInsightsChart> {
	const filtersQueryParams = getFiltersQueryParams(options);

	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData
		? await get(apiRoute, { queryParams: filtersQueryParams })
		: mockResponse;
	const validatedResponse = KeyInsightsChartSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetKeyInsightsChartData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getKeyInsightsChart(options));
