import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { mockResponse } from './mock';
import { ApiLoadProfileChart, LoadProfileChartSchema } from './types';
import { get } from '../../apiUtils';

const USE_REAL_DATA = true;

export async function getLoadProfileChartData(): Promise<ApiLoadProfileChart> {
	const response = USE_REAL_DATA
		? await get('http://127.0.0.1:8000/api/operations/profile-chart/')
		: mockResponse;
	const validatedResponse = LoadProfileChartSchema.parse(response);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 2.3);
	return validatedResponse;
}
