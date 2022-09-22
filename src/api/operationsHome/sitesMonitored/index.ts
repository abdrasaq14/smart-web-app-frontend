import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { mockResponse } from './mock';
import { ApiSitesMonitored, SitesMonitoredSchema } from './types';
import { get, globalUseRealData } from '../../apiUtils';
import { useQuery } from 'react-query';

const USE_REAL_DATA = true;

const operationsSitesMonitoredChartApiRoute = 'operations/sites-monitored';

export async function getSitesMonitoredChartData(): Promise<ApiSitesMonitored> {
	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData ? await get(operationsSitesMonitoredChartApiRoute) : mockResponse;
	const validatedResponse = SitesMonitoredSchema.parse(response);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 2.7);
	return validatedResponse;
}

export const useGetSitesMonitoredChartData = () =>
	useQuery([operationsSitesMonitoredChartApiRoute], getSitesMonitoredChartData);
