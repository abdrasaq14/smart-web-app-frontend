import { ApiChart, ChartSchema, getDashboardData } from '../../../../apiUtils';
import { mockResponse } from './mock';

const apiRoute = 'operations-dashboard/average-daily-pf';

export const getAverageDailyPFChartData = getDashboardData<ApiChart>({
	localUseRealData: true,
	apiRoute,
	schema: ChartSchema,
	mockResponse,
});
