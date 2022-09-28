import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { sleep } from '../../../../utils/utils';
import { ApiCardsDataForFinanceHome, CardsDataForFinanceHomeSchema } from './types';
import { mockResponse } from './mock';
import { get, globalUseRealData } from '../../../apiUtils';
import { useQuery } from 'react-query';

const USE_REAL_DATA = false;

const financeCardsDataApiRoute = 'finance/cards-data';

export async function getCardsDataForFinanceHome(): Promise<ApiCardsDataForFinanceHome> {
	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData ? await get(financeCardsDataApiRoute) : mockResponse;
	const validatedResponse = CardsDataForFinanceHomeSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetFinanceHomeCardsData = () =>
	useQuery([financeCardsDataApiRoute], getCardsDataForFinanceHome);
