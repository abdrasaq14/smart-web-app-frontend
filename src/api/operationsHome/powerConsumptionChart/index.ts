import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { mockResponse } from './mock';
import { ApiPowerConsumptionChart, PowerConsumptionSchema } from './types';

export async function getPowerConsumptionChartData(): Promise<ApiPowerConsumptionChart> {
	const response = PowerConsumptionSchema.parse(mockResponse);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 1.5);
	return response;
}
