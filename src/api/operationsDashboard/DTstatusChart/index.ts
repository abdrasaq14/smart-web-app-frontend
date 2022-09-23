import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { ApiDTstatusChart, DTstatusChartSchema } from './types';
import { mockResponse } from './mock';
import { get, globalUseRealData } from '../../apiUtils';
import { useQuery } from 'react-query';

const USE_REAL_DATA = false;

const DTstatusChartDataApiRoute = 'operations/dt-status-chart';

export async function getDTstatusChartData(): Promise<ApiDTstatusChart> {
	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData ? await get(DTstatusChartDataApiRoute) : mockResponse;
	const validatedResponse = DTstatusChartSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetDTstatusChartData = () =>
	useQuery([DTstatusChartDataApiRoute], getDTstatusChartData);
