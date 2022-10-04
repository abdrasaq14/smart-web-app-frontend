import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { sleep } from '../../../../utils/utils';
import { ApiCardsDataForOperationsDashboard, CardsDataForOperationsDashboardSchema } from './types';
import { mockResponse } from './mock';
import { get, getFiltersQueryParams, globalUseRealData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';

const USE_REAL_DATA = true;

const apiRoute = 'operations-dashboard/cards-data';

export async function getCardsDataForOperationsDashboard(
	options?: DashboardQueryProps
): Promise<ApiCardsDataForOperationsDashboard> {
	const filtersQueryParams = getFiltersQueryParams(options);

	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData
		? await get(apiRoute, { queryParams: filtersQueryParams })
		: mockResponse;
	const validatedResponse = CardsDataForOperationsDashboardSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetOperationsDashboardCardsData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getCardsDataForOperationsDashboard(options));
