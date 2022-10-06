import { ApiCardsDataForFinanceHome, CardsDataForFinanceHomeSchema } from './types';
import { mockResponse } from './mock';
import { getDashboardData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';

const apiRoute = 'finance/cards-data';

const getCardsDataForFinanceHome = getDashboardData<ApiCardsDataForFinanceHome>({
	localUseRealData: true,
	apiRoute,
	schema: CardsDataForFinanceHomeSchema,
	mockResponse,
});

export const useGetFinanceHomeCardsData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getCardsDataForFinanceHome(options));
