import { mockResponse } from './mock';
import { ApiTopRevenuesChart, TopRevenuesSchema } from './types';
import { getDashboardData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';

const apiRoute = 'account-home/top-revenues';

const getTopRevenuesChartData = getDashboardData<ApiTopRevenuesChart>({
	localUseRealData: true,
	apiRoute,
	schema: TopRevenuesSchema,
	mockResponse,
});

export const useGetTopRevenuesChartData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getTopRevenuesChartData(options));
