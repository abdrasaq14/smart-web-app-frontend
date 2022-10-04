import { ApiChart, ChartSchema, getDashboardData } from '../../../../apiUtils';
import { mockResponse } from './mock';

const apiRoute = 'operations/averageDailyLoad';

export const getAverageDailyLoadChartData = getDashboardData<ApiChart>({
	localUseRealData: false,
	apiRoute,
	schema: ChartSchema,
	mockResponse,
});
