import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { mockResponse } from './mock';
import { ApiEnergyChart, EnergyChartSchema } from './types';

export async function getEnergyChartData(): Promise<ApiEnergyChart> {
	const response = EnergyChartSchema.parse(mockResponse);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 1.5);
	return response;
}
