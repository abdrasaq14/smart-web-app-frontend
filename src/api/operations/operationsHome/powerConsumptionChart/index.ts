import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { sleep } from '../../../../utils/utils';
import { mockResponse } from './mock';
import { ApiPowerConsumptionChart, PowerConsumptionSchema } from './types';
import { get, globalUseRealData } from '../../../apiUtils';
import { useQuery } from 'react-query';

const USE_REAL_DATA = true;

const operationsPowerConsumptionChartApiRoute = 'operations/power-consumption-chart';

export async function getPowerConsumptionChartData(): Promise<ApiPowerConsumptionChart> {
	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData ? await get(operationsPowerConsumptionChartApiRoute) : mockResponse;
	const validatedResponse = PowerConsumptionSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetPowerConsumptionChartData = () =>
	useQuery([operationsPowerConsumptionChartApiRoute], getPowerConsumptionChartData);
