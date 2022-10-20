import { ApiDevice, DeviceResponseSchema } from './types';
import { mockResponse } from './mock';
import { getDashboardData } from '../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../types';

const apiRoute = 'devices';

const getDevices = getDashboardData<ApiDevice>({
	localUseRealData: true,
	apiRoute,
	schema: DeviceResponseSchema,
	mockResponse,
});

export const useGetDevices = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getDevices(options));
