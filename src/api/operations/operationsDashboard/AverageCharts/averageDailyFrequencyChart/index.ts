import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../../utils/constants';
import { sleep } from '../../../../../utils/utils';
import { mockResponse } from './mock';
import { ApiChart, ChartSchema, get, globalUseRealData } from '../../../../apiUtils';

const USE_REAL_DATA = false;

const averageDailyFrequencyChartApiRoute = 'operations/averageDailyFrequency';

export async function getAverageDailyFrequencyChartData(): Promise<ApiChart> {
	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData ? await get(averageDailyFrequencyChartApiRoute) : mockResponse;
	const validatedResponse = ChartSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}
