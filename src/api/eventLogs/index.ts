import { MOCK_RESPONSE_SLEEP_TIME } from '../../utils/constants';
import { sleep } from '../../utils/utils';
import { ApiEventLogs, EventLogsResponseSchema } from './types';
import { mockResponse } from './mock';

export async function getEventLogs(): Promise<ApiEventLogs> {
	const response = EventLogsResponseSchema.parse(mockResponse);
	await sleep(MOCK_RESPONSE_SLEEP_TIME);
	return response;
}
