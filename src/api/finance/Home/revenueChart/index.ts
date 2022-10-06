import { mockResponse } from './mock';
import { ApiRevenueChart, RevenueSchema } from './types';
import { getDashboardData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';

const apiRoute = 'finance/revenue';

const getRevenueChartData = getDashboardData<ApiRevenueChart>({
	localUseRealData: true,
	apiRoute,
	schema: RevenueSchema,
	mockResponse,
});

export const useGetRevenueChartData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getRevenueChartData(options));
