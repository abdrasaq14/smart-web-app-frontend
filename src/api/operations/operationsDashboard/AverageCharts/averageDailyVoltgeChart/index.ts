import { ApiChart, ChartSchema, getDashboardData } from '../../../../apiUtils';
import { mockResponse } from './mock';

const apiRoute = 'operations-dashboard/average-daily-voltage';

export const getAverageDailyVoltageChartData = getDashboardData<ApiChart>({
	localUseRealData: true,
	apiRoute,
	schema: ChartSchema,
	mockResponse,
});
