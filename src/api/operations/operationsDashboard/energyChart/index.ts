import { ApiEnergyChart, EnergyChartSchema } from './types';
import { getDashboardData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';
import { mockResponse } from './mock';

const apiRoute = 'operations-dashboard/energy-chart';

const getEnergyChartData = getDashboardData<ApiEnergyChart>({
	localUseRealData: true,
	apiRoute,
	schema: EnergyChartSchema,
	mockResponse,
});

export const useGetEnergyChartData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getEnergyChartData(options));
