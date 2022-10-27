import { ApiGetCompany, GetCompanySchema } from './types';
import { mockResponse } from './mock';
import { getDashboardData } from '../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../types';

const apiRoute = 'company';

const getCompany = (companyId: string) =>
	getDashboardData<ApiGetCompany>({
		localUseRealData: true,
		apiRoute: `${apiRoute}/${companyId}`,
		schema: GetCompanySchema,
		mockResponse,
	});

export const useGetCompany = (companyId: string, options?: DashboardQueryProps) =>
	useQuery([apiRoute, companyId, options], () => getCompany(companyId)(options));
