import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { mockResponse } from './mock';
import { ApiEnergyChart, EnergyChartSchema } from './types';
import { get } from '../../apiUtils';
import { useQuery } from 'react-query';

const USE_REAL_DATA = false;

const energyChartDataApiRoute = 'operations/energy-chart';

export async function getEnergyChartData(): Promise<ApiEnergyChart> {
	const response = USE_REAL_DATA ? await get(energyChartDataApiRoute) : mockResponse;
	const validatedResponse = EnergyChartSchema.parse(response);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 1.5);
	return validatedResponse;
}

export const useGetEnergyChartData = () => useQuery([energyChartDataApiRoute], getEnergyChartData);
