import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { sleep } from '../../../../utils/utils';
import { ApiCardsDataForOperationsHome, CardsDataForOperationsHomeSchema } from './types';
import { mockResponse } from './mock';
import { get, globalUseRealData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';
import { formatDateForFilter } from '../../../../utils/formatters';

const USE_REAL_DATA = true;

const operationsCardsDataApiRoute = 'operations/cards-data';

export async function getCardsDataForOperationsHome(
	options?: DashboardQueryProps
): Promise<ApiCardsDataForOperationsHome> {
	const filters = options?.filters;
	console.log('new filters: ', filters);
	let queryParams = {};
	if (filters) {
		if (filters.sites && filters.sites?.length > 0) {
			queryParams = {
				...queryParams,
				sites: filters.sites.join(','),
			};
		}
		if (filters.start_date != null) {
			queryParams = {
				...queryParams,
				start_date: formatDateForFilter(filters.start_date),
			};
		}
		if (filters.end_date != null) {
			queryParams = {
				...queryParams,
				end_date: formatDateForFilter(filters.end_date),
			};
		}
	}
	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData
		? await get(operationsCardsDataApiRoute, { queryParams })
		: mockResponse;
	const validatedResponse = CardsDataForOperationsHomeSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetOperationsHomeCardsData = (options?: DashboardQueryProps) =>
	useQuery([operationsCardsDataApiRoute, options], () => getCardsDataForOperationsHome(options));
