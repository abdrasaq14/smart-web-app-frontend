import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { mockResponse } from './mock';
import { ApiAverageDailyVoltageChart, AverageDailyVoltageSchema } from './types';
import { get } from '../../apiUtils';
import { useQuery } from 'react-query';

const USE_REAL_DATA = false;

const averageDailyVoltageChartApiRoute = 'operations/averageDailyVoltage';

export async function getAverageDailyVoltageChartData(): Promise<ApiAverageDailyVoltageChart> {
	const response = USE_REAL_DATA ? await get(averageDailyVoltageChartApiRoute) : mockResponse;
	const validatedResponse = AverageDailyVoltageSchema.parse(response);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 2.3);
	return validatedResponse;
}

export const useGetAverageDailyVoltageChartData = () =>
	useQuery([averageDailyVoltageChartApiRoute], getAverageDailyVoltageChartData);
