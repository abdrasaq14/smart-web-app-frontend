import { ApiAssets, AssetsResponseSchema } from './types';
import { mockResponse } from './mock';
import { getDashboardData } from '../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../types';

const apiRoute = 'sites';

const getSites = getDashboardData<ApiAssets>({
	localUseRealData: true,
	apiRoute,
	schema: AssetsResponseSchema,
	mockResponse,
});

export const useGetSites = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getSites(options));
