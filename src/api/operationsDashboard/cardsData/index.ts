import { MOCK_RESPONSE_SLEEP_TIME } from '../../../utils/constants';
import { sleep } from '../../../utils/utils';
import { ApiCardsDataForOperationsDashboard, CardsDataForOperationsDashboardSchema } from './types';
import { mockResponse } from './mock';
import { get } from '../../apiUtils';
import { useQuery } from 'react-query';

const USE_REAL_DATA = false;

const operationsDashboardCardsDataApiRoute = 'operations/dashboard-cards-data';

export async function getCardsDataForOperationsDashboard(): Promise<ApiCardsDataForOperationsDashboard> {
	const response = USE_REAL_DATA ? await get(operationsDashboardCardsDataApiRoute) : mockResponse;
	const validatedResponse = CardsDataForOperationsDashboardSchema.parse(response);
	await sleep(MOCK_RESPONSE_SLEEP_TIME * 1.1);
	return validatedResponse;
}

export const useGetOperationsDashboardCardsData = () =>
	useQuery([operationsDashboardCardsDataApiRoute], getCardsDataForOperationsDashboard);
