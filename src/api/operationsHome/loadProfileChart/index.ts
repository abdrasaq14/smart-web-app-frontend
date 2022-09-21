import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { mockResponse } from './mock';
import { ApiLoadProfileChart, LoadProfileChartSchema } from './types';
import { get } from '../../apiUtils';
import { useQuery } from 'react-query';

const USE_REAL_DATA = true;

const operationsProfileChartApiRoute = 'operations/profile-chart';

export async function getLoadProfileChartData(): Promise<ApiLoadProfileChart> {
	const response = USE_REAL_DATA ? await get(operationsProfileChartApiRoute) : mockResponse;
	const validatedResponse = LoadProfileChartSchema.parse(response);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 2.3);
	return validatedResponse;
}

export const useGetLoadProfileChartData = () =>
	useQuery([operationsProfileChartApiRoute], getLoadProfileChartData);
