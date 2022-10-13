import { getDashboardData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';
import { mockResponse } from './mock';
import { ApiCardsDataForAccountUiHome, CardsDataForAccountUiHomeSchema } from './types';

const apiRoute = 'manager/cards-data';

const getCardsDataForAccountUiHome = getDashboardData<ApiCardsDataForAccountUiHome>({
	localUseRealData: false,
	apiRoute,
	schema: CardsDataForAccountUiHomeSchema,
	mockResponse,
});

export const useGetAccountUiHomeCardsData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getCardsDataForAccountUiHome(options));
