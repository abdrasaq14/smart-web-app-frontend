import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { ApiCardsDataForOperationsHome, CardsDataForOperationsHomeSchema } from './types';
import { mockResponse } from './mock';

export async function getCardsDataForOperationsHome(): Promise<ApiCardsDataForOperationsHome> {
	const response = CardsDataForOperationsHomeSchema.parse(mockResponse);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 1.8);
	return response;
}
