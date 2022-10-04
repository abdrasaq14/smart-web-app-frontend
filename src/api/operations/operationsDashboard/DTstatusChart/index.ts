import { ApiDTstatusChart, DTstatusChartSchema } from './types';
import { getDashboardData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';
import { mockResponse } from './mock';

const apiRoute = 'operations-dashboard/dt-status';

const getDTstatusChartData = getDashboardData<ApiDTstatusChart>({
	localUseRealData: true,
	apiRoute,
	schema: DTstatusChartSchema,
	mockResponse,
});

export const useGetDTstatusChartData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getDTstatusChartData(options));
