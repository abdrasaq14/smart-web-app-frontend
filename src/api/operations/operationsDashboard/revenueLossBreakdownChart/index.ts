import { ApiRevenueLossBreakdown, RevenueLossBreakDownSchema } from './types';
import { getDashboardData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';
import { mockResponse } from './mock';

const apiRoute = 'operations-dashboard/revenue-loss';

const getRevenueLossBreakdownChartData = getDashboardData<ApiRevenueLossBreakdown>({
	localUseRealData: true,
	apiRoute,
	schema: RevenueLossBreakDownSchema,
	mockResponse,
});

export const useGetRevenueLossBreakdownChartData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getRevenueLossBreakdownChartData(options));
