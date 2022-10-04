import { ApiCardsDataForOperationsHome, CardsDataForOperationsHomeSchema } from './types';
import { getDashboardData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';
import { mockResponse } from './mock';

const apiRoute = 'operations/cards-data';

const getCardsDataForOperationsHome = getDashboardData<ApiCardsDataForOperationsHome>({
	localUseRealData: true,
	apiRoute,
	schema: CardsDataForOperationsHomeSchema,
	mockResponse,
});

export const useGetOperationsHomeCardsData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getCardsDataForOperationsHome(options));
