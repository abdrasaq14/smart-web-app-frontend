import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { sleep } from '../../../../utils/utils';
import { mockResponse } from './mock';
import { ApiLoadProfileChart, LoadProfileChartSchema } from './types';
import { get, getFiltersQueryParams, globalUseRealData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';

const USE_REAL_DATA = true;

const operationsProfileChartApiRoute = 'operations/profile-chart';

export async function getLoadProfileChartData(
	options?: DashboardQueryProps
): Promise<ApiLoadProfileChart> {
	const filtersQueryParams = getFiltersQueryParams(options);
	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData
		? await get(operationsProfileChartApiRoute, { queryParams: filtersQueryParams })
		: mockResponse;
	const validatedResponse = LoadProfileChartSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetLoadProfileChartData = (options?: DashboardQueryProps) =>
	useQuery([operationsProfileChartApiRoute, options], () => getLoadProfileChartData(options));
