import { ApiKeyInsightsChart, KeyInsightsChartSchema } from './types';
import { getDashboardData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';
import { mockResponse } from './mock';

const apiRoute = 'operations-dashboard/key-insights';

const getKeyInsightsChart = getDashboardData<ApiKeyInsightsChart>({
	localUseRealData: true,
	apiRoute,
	schema: KeyInsightsChartSchema,
	mockResponse,
});

export const useGetKeyInsightsChartData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getKeyInsightsChart(options));
