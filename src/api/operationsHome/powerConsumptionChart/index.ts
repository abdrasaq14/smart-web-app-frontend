import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { mockResponse } from './mock';
import { ApiPowerConsumptionChart, PowerConsumptionSchema } from './types';
import { get } from '../../apiUtils';

const USE_REAL_DATA = true;

export async function getPowerConsumptionChartData(): Promise<ApiPowerConsumptionChart> {
	const response = USE_REAL_DATA
		? await get('http://127.0.0.1:8000/api/operations/power-consumption-chart/')
		: mockResponse;
	const validatedResponse = PowerConsumptionSchema.parse(response);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 1.5);
	return validatedResponse;
}
