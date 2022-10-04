import { AlertHistoryResponseSchema, ApiAlertHistory } from './types';
import { getDashboardData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';
import { mockResponse } from './mock';

const apiRoute = 'alerts';

const getAlertHistory = getDashboardData<ApiAlertHistory>({
	localUseRealData: true,
	apiRoute,
	schema: AlertHistoryResponseSchema,
	mockResponse,
});

export const useGetAlertHistory = (options?: DashboardQueryProps) => {
	return useQuery([apiRoute, options], () => getAlertHistory(options));
};
