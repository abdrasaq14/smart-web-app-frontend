import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { mockResponse } from './mock';
import { ApiRevenueLossBreakdown, RevenueLossBreakDownSchema } from './types';

export async function getRevenueLossBreakdownChartData(): Promise<ApiRevenueLossBreakdown> {
	const response = RevenueLossBreakDownSchema.parse(mockResponse);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 2.7);
	return response;
}
