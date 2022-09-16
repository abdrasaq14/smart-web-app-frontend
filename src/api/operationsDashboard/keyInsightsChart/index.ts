import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { ApiKeyInsightsChart, KeyInsightsChartSchema } from './types';
import { mockResponse } from './mock';

export async function getKeyInsightsChart(): Promise<ApiKeyInsightsChart> {
	const response = KeyInsightsChartSchema.parse(mockResponse);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 1.1);
	return response;
}
