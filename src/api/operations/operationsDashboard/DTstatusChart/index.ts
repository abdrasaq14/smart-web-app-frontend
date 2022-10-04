import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { sleep } from '../../../../utils/utils';
import { ApiDTstatusChart, DTstatusChartSchema } from './types';
import { mockResponse } from './mock';
import { get, getFiltersQueryParams, globalUseRealData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';

const USE_REAL_DATA = true;

const apiRoute = 'operations-dashboard/dt-status';

export async function getDTstatusChartData(
	options?: DashboardQueryProps
): Promise<ApiDTstatusChart> {
	const filtersQueryParams = getFiltersQueryParams(options);

	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData
		? await get(apiRoute, { queryParams: filtersQueryParams })
		: mockResponse;
	const validatedResponse = DTstatusChartSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetDTstatusChartData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getDTstatusChartData(options));
