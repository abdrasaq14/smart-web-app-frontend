import { getDashboardData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';
import { mockResponse } from './mock';
import { ApiCardsDataForManagerHome, CardsDataForManagerHomeSchema } from './types';

const apiRoute = 'manager/cards-data';

const getCardsDataForManagerHome = getDashboardData<ApiCardsDataForManagerHome>({
	localUseRealData: true,
	apiRoute,
	schema: CardsDataForManagerHomeSchema,
	mockResponse,
});

export const useGetManagerHomeCardsData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getCardsDataForManagerHome(options));
