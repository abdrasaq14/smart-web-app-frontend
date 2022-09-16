import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { mockResponse } from './mock';
import { ApiAverageDailyVoltageChart, AverageDailyVoltageSchema } from './types';

export async function getAverageDailyVoltageChartData(): Promise<ApiAverageDailyVoltageChart> {
	const response = AverageDailyVoltageSchema.parse(mockResponse);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 2.3);
	return response;
}
