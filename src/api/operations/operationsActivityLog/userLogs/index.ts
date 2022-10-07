import { ApiUserLogs, UserLogsResponseSchema } from './types';
import { mockResponse } from './mock';
import { getDashboardData } from '../../../apiUtils';
import { DashboardQueryProps } from '../../../../types';
import { useQuery } from 'react-query';

const apiRoute = 'user-logs';

const getUserLogs = getDashboardData<ApiUserLogs>({
	localUseRealData: true,
	apiRoute,
	schema: UserLogsResponseSchema,
	mockResponse,
});

export const useGetUserLogs = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getUserLogs(options));
