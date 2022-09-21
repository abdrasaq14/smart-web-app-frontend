import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { mockResponse } from './mock';
import { ApiPowerConsumptionChart, PowerConsumptionSchema } from './types';
import { get } from '../../apiUtils';
import { useQuery } from 'react-query';

const USE_REAL_DATA = true;

const operationsPowerConsumptionChartApiRoute = 'operations/power-consumption-chart';

export async function getPowerConsumptionChartData(): Promise<ApiPowerConsumptionChart> {
	const response = USE_REAL_DATA
		? await get(operationsPowerConsumptionChartApiRoute)
		: mockResponse;
	const validatedResponse = PowerConsumptionSchema.parse(response);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 1.5);
	return validatedResponse;
}

export const useGetPowerConsumptionChartData = () =>
	useQuery([operationsPowerConsumptionChartApiRoute], getPowerConsumptionChartData);
