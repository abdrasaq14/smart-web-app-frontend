import { ApiLoadProfileChart, LoadProfileChartSchema } from './types';
import { getDashboardData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';
import { mockResponse } from './mock';

const apiRoute = 'operations/profile-chart';

const getLoadProfileChartData = getDashboardData<ApiLoadProfileChart>({
	localUseRealData: true,
	apiRoute,
	schema: LoadProfileChartSchema,
	mockResponse,
	// transformFunction: (responseData) => {
	// 	return { dataset: [['time', 'profile'], ...responseData.dataset] };
	// },
});

export const useGetLoadProfileChartData = (options?: DashboardQueryProps) =>
	useQuery([, options], () => getLoadProfileChartData(options));
