import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { mockResponse } from './mock';
import { ApiSitesMonitored, SitesMonitoredSchema } from './types';

export async function getSitesMonitoredChartData(): Promise<ApiSitesMonitored> {
	const response = SitesMonitoredSchema.parse(mockResponse);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 2.7);
	return response;
}
