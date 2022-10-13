import { mockResponse } from './mock';
import { ApiTopSavingsChart, TopSavingsSchema } from './types';
import { getDashboardData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';

const apiRoute = 'account-ui/top-savings';

const getTopSavingsChartData = getDashboardData<ApiTopSavingsChart>({
	localUseRealData: false,
	apiRoute,
	schema: TopSavingsSchema,
	mockResponse,
});

export const useGetTopSavingsChartData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getTopSavingsChartData(options));
