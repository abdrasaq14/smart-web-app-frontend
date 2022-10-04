import { ApiSitesMonitored, SitesMonitoredSchema } from './types';
import { getDashboardData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';
import { mockResponse } from './mock';

const apiRoute = 'operations/sites-monitored';

const getSitesMonitoredChartData = getDashboardData<ApiSitesMonitored>({
	localUseRealData: true,
	apiRoute,
	schema: SitesMonitoredSchema,
	mockResponse,
});

export const useGetSitesMonitoredChartData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getSitesMonitoredChartData(options));
