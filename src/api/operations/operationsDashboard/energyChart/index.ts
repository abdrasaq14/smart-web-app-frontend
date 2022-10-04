import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { sleep } from '../../../../utils/utils';
import { mockResponse } from './mock';
import { ApiEnergyChart, EnergyChartSchema } from './types';
import { get, getFiltersQueryParams, globalUseRealData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';

const USE_REAL_DATA = true;

const apiRoute = 'operations-dashboard/energy-chart';

export async function getEnergyChartData(options?: DashboardQueryProps): Promise<ApiEnergyChart> {
	const filtersQueryParams = getFiltersQueryParams(options);

	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData
		? await get(apiRoute, { queryParams: filtersQueryParams })
		: mockResponse;
	const validatedResponse = EnergyChartSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetEnergyChartData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getEnergyChartData(options));
