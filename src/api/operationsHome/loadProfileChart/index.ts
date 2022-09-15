import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { mockResponse } from './mock';
import { ApiLoadProfileChart, LoadProfileChartSchema } from './types';

export async function getLoadProfileChartData(): Promise<ApiLoadProfileChart> {
	const response = LoadProfileChartSchema.parse(mockResponse);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 2.3);
	return response;
}
