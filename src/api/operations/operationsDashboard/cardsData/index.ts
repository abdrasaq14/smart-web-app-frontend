import { ApiCardsDataForOperationsDashboard, CardsDataForOperationsDashboardSchema } from './types';
import { getDashboardData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';
import { mockResponse } from './mock';

const apiRoute = 'operations-dashboard/cards-data';

const getCardsDataForOperationsDashboard = getDashboardData<ApiCardsDataForOperationsDashboard>({
	localUseRealData: true,
	apiRoute,
	schema: CardsDataForOperationsDashboardSchema,
	mockResponse,
});

export const useGetOperationsDashboardCardsData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getCardsDataForOperationsDashboard(options));
