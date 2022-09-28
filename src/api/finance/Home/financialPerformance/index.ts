import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { sleep } from '../../../../utils/utils';
import { mockResponse } from './mock';
import { ApiFinancialPerformanceChart, FinancialPerformanceChartSchema } from './types';
import { get, globalUseRealData } from '../../../apiUtils';
import { useQuery } from 'react-query';

const USE_REAL_DATA = false;

const apiRoute = 'finance/financial-performance';

export async function getFinancialPerformanceChartData(): Promise<ApiFinancialPerformanceChart> {
	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData ? await get(apiRoute) : mockResponse;
	const validatedResponse = FinancialPerformanceChartSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetFinancialPerformanceChartData = () =>
	useQuery([apiRoute], getFinancialPerformanceChartData);
