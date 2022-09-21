import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { ApiCardsDataForOperationsHome, CardsDataForOperationsHomeSchema } from './types';
import { mockResponse } from './mock';
import { get } from '../../apiUtils';
import { useQuery } from 'react-query';

const USE_REAL_DATA = true;

const operationsCardsDataApiRoute = 'operations/cards-data';

export async function getCardsDataForOperationsHome(): Promise<ApiCardsDataForOperationsHome> {
	const response = USE_REAL_DATA ? await get(operationsCardsDataApiRoute) : mockResponse;
	const validatedResponse = CardsDataForOperationsHomeSchema.parse(response);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 1.8);
	return validatedResponse;
}

export const useGetOperationsHomeCardsData = () =>
	useQuery([operationsCardsDataApiRoute], getCardsDataForOperationsHome);
