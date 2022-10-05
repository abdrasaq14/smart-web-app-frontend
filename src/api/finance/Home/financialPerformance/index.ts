import { mockResponse } from './mock';
import { ApiFinancialPerformanceChart, FinancialPerformanceChartSchema } from './types';
import { getDashboardData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';

const apiRoute = 'finance/financial-performance';

const getFinancialPerformanceChartData = getDashboardData<ApiFinancialPerformanceChart>({
	localUseRealData: false,
	apiRoute,
	schema: FinancialPerformanceChartSchema,
	mockResponse,
});

export const useGetFinancialPerformanceChartData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getFinancialPerformanceChartData(options));
