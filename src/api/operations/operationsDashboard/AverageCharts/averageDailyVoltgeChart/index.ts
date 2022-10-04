import { ApiChart, ChartSchema, getDashboardData } from '../../../../apiUtils';
import { mockResponse } from './mock';

const apiRoute = 'operations/averageDailyVoltage';

export const getAverageDailyVoltageChartData = getDashboardData<ApiChart>({
	localUseRealData: false,
	apiRoute,
	schema: ChartSchema,
	mockResponse,
});
