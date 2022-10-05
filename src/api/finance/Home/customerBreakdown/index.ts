import { mockResponse } from './mock';
import { ApiPieChart, getDashboardData, PieChartSchema } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';

const apiRoute = 'finance/customer-breakdown';

const getCustomerBreakdownChartData = getDashboardData<ApiPieChart>({
	localUseRealData: false,
	apiRoute,
	schema: PieChartSchema,
	mockResponse,
});

export const useGetCustomerBreakdownChartData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getCustomerBreakdownChartData(options));
