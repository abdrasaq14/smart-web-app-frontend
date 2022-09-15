import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { ApiCardsDataForOperationsDashboard, CardsDataForOperationsDashboardSchema } from './types';
import { mockResponse } from './mock';

export async function getCardsDataForOperationsDashboard(): Promise<ApiCardsDataForOperationsDashboard> {
	const response = CardsDataForOperationsDashboardSchema.parse(mockResponse);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 1.1);
	return response;
}
