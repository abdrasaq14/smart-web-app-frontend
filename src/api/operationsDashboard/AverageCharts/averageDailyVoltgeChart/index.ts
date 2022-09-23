import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { sleep } from '../../../../utils/utils';
import { mockResponse } from './mock';
import { ApiChart, ChartSchema, get, globalUseRealData } from '../../../apiUtils';

const USE_REAL_DATA = false;

const averageDailyVoltageChartApiRoute = 'operations/averageDailyVoltage';

export async function getAverageDailyVoltageChartData(): Promise<ApiChart> {
	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData ? await get(averageDailyVoltageChartApiRoute) : mockResponse;
	const validatedResponse = ChartSchema.parse(response);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 2.3);
	return validatedResponse;
}
