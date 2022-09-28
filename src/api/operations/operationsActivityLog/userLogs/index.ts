import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { sleep } from '../../../../utils/utils';
import { ApiUserLogs, UserLogsResponseSchema } from './types';
import { mockResponse } from './mock';

export async function getUserLogs(): Promise<ApiUserLogs> {
	const response = UserLogsResponseSchema.parse(mockResponse);
	await sleep(MOCK_RESPONSE_SLEEP_TIME);
	return response;
}
