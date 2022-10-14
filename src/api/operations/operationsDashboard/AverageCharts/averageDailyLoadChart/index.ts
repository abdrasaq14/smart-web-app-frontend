import { ApiChart, ChartSchema, getDashboardData } from '../../../../apiUtils';
import { mockResponse } from './mock';

const apiRoute = 'operations-dashboard/average-daily-load';

export const getAverageDailyLoadChartData = getDashboardData<ApiChart>({
	localUseRealData: true,
	apiRoute,
	schema: ChartSchema,
	mockResponse,
});
