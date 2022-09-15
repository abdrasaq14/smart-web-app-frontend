import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { ApiDTstatusChart, DTstatusChartSchema } from './types';
import { mockResponse } from './mock';

export async function getDTstatusChartData(): Promise<ApiDTstatusChart> {
	const response = DTstatusChartSchema.parse(mockResponse);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 1.1);
	return response;
}
