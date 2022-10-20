import { ApiGetCompanies, GetCompaniesSchema } from './types';
import { mockResponse } from './mock';
import { getDashboardData } from '../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../types';

const apiRoute = 'companies';

const getCompanies = getDashboardData<ApiGetCompanies>({
	localUseRealData: true,
	apiRoute,
	schema: GetCompaniesSchema,
	mockResponse,
});

export const useGetCompanies = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getCompanies(options));
