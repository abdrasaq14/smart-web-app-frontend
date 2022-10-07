import { ApiEventLogs, EventLogsResponseSchema } from './types';
import { mockResponse } from './mock';
import { getDashboardData } from '../../../apiUtils';
import { DashboardQueryProps } from '../../../../types';
import { useQuery } from 'react-query';

const apiRoute = 'event-logs';

const getEventLogs = getDashboardData<ApiEventLogs>({
	localUseRealData: true,
	apiRoute,
	schema: EventLogsResponseSchema,
	mockResponse,
});

export const useGetEventLogs = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getEventLogs(options));
