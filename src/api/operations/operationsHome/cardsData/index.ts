import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { sleep } from '../../../../utils/utils';
import { ApiCardsDataForOperationsHome, CardsDataForOperationsHomeSchema } from './types';
import { mockResponse } from './mock';
import { get, getFiltersQueryParams, globalUseRealData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';

const USE_REAL_DATA = true;

const operationsCardsDataApiRoute = 'operations/cards-data';

export async function getCardsDataForOperationsHome(
	options?: DashboardQueryProps
): Promise<ApiCardsDataForOperationsHome> {
	const filtersQueryParams = getFiltersQueryParams(options);

	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData
		? await get(operationsCardsDataApiRoute, { queryParams: filtersQueryParams })
		: mockResponse;
	const validatedResponse = CardsDataForOperationsHomeSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetOperationsHomeCardsData = (options?: DashboardQueryProps) =>
	useQuery([operationsCardsDataApiRoute, options], () => getCardsDataForOperationsHome(options));
