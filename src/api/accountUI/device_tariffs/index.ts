import { ApiDeviceTariffs, DeviceTariffsResponseSchema } from './types';
import { mockResponse } from './mock';
import { getDashboardData } from '../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../types';

const apiRoute = 'device-tariffs';

const getDeviceTariffs = getDashboardData<ApiDeviceTariffs>({
	localUseRealData: true,
	apiRoute,
	schema: DeviceTariffsResponseSchema,
	mockResponse,
});

export const useGetDeviceTariffs = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getDeviceTariffs(options));
