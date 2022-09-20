import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { ApiCardsDataForOperationsHome, CardsDataForOperationsHomeSchema } from './types';
import { mockResponse } from './mock';
import { get } from '../../apiUtils';

const USE_REAL_DATA = true;

export async function getCardsDataForOperationsHome(): Promise<ApiCardsDataForOperationsHome> {
	const response = USE_REAL_DATA
		? await get('http://127.0.0.1:8000/api/operations/cards-data/')
		: mockResponse;
	const validatedResponse = CardsDataForOperationsHomeSchema.parse(response);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 1.8);
	return validatedResponse;
}
