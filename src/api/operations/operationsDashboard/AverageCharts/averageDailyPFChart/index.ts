import { ApiChart, ChartSchema, getDashboardData } from '../../../../apiUtils';
import { mockResponse } from './mock';

const apiRoute = 'operations/averageDailyPF';

export const getAverageDailyPFChartData = getDashboardData<ApiChart>({
	localUseRealData: false,
	apiRoute,
	schema: ChartSchema,
	mockResponse,
});
