import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { mockResponse } from './mock';
import { ApiEnergyChart, EnergyChartSchema } from './types';
import { get, globalUseRealData } from '../../apiUtils';
import { useQuery } from 'react-query';

const USE_REAL_DATA = false;

const energyChartDataApiRoute = 'operations/energy-chart';

export async function getEnergyChartData(): Promise<ApiEnergyChart> {
	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData ? await get(energyChartDataApiRoute) : mockResponse;
	const validatedResponse = EnergyChartSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetEnergyChartData = () => useQuery([energyChartDataApiRoute], getEnergyChartData);
