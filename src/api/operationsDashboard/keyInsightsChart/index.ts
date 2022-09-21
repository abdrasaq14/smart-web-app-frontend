import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { ApiKeyInsightsChart, KeyInsightsChartSchema } from './types';
import { mockResponse } from './mock';
import { get } from '../../apiUtils';
import { useQuery } from 'react-query';

const USE_REAL_DATA = false;

const keyInsightsChartDataApiRoute = 'operations/key-insight';

export async function getKeyInsightsChart(): Promise<ApiKeyInsightsChart> {
	const response = USE_REAL_DATA ? await get(keyInsightsChartDataApiRoute) : mockResponse;
	const validatedResponse = KeyInsightsChartSchema.parse(response);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 1.1);
	return validatedResponse;
}

export const useGetKeyInsightsChartData = () =>
	useQuery([keyInsightsChartDataApiRoute], getKeyInsightsChart);
