import { ApiPowerConsumptionChart, PowerConsumptionSchema } from './types';
import { getDashboardData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';
import { mockResponse } from './mock';

const apiRoute = 'operations/power-consumption-chart';

const getPowerConsumptionChartData = getDashboardData<ApiPowerConsumptionChart>({
	localUseRealData: true,
	apiRoute,
	schema: PowerConsumptionSchema,
	mockResponse,
});

export const useGetPowerConsumptionChartData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getPowerConsumptionChartData(options));
