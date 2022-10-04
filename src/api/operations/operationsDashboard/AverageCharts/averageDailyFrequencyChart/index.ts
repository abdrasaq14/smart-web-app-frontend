import { ApiChart, ChartSchema, getDashboardData } from '../../../../apiUtils';
import { mockResponse } from './mock';

const apiRoute = 'operations/averageDailyFrequency';

export const getAverageDailyFrequencyChartData = getDashboardData<ApiChart>({
	localUseRealData: false,
	apiRoute,
	schema: ChartSchema,
	mockResponse,
});
