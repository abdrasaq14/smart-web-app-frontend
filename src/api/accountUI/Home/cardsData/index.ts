import { getDashboardData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';
import { mockResponse } from './mock';
import { ApiCardsDataForAccountUiHome, CardsDataForAccountUiHomeSchema } from './types';

const apiRoute = 'account-home/cards-data';

const getCardsDataForAccountUiHome = getDashboardData<ApiCardsDataForAccountUiHome>({
	localUseRealData: true,
	apiRoute,
	schema: CardsDataForAccountUiHomeSchema,
	mockResponse,
});

export const useGetAccountUiHomeCardsData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getCardsDataForAccountUiHome(options));
