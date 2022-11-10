import { get, getQueryParams, globalUseRealData } from '../../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../../types';
import { sleep } from '../../../../utils/utils';
import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { z } from 'zod';

// types

export const CardsDataForOperationsHomeSchema = z.object({
	total_consumption: z.number(),
	current_load: z.number(),
	avg_availability: z.number(),
	power_cuts: z.number(),
	overloaded_dts: z.number(),
	sites_under_maintenance: z.number(),
});

export type ApiCardsDataForOperationsHome = z.infer<typeof CardsDataForOperationsHomeSchema>;

// mock

export const mockResponse: ApiCardsDataForOperationsHome = {
	total_consumption: 32727658,
	current_load: 2727121,
	avg_availability: 20,
	power_cuts: 5,
	overloaded_dts: 10,
	sites_under_maintenance: 2,
};

// api

const apiRoute = 'operations/cards-data';

const getCardsDataForOperationsHome = getCardsData<ApiCardsDataForOperationsHome>({
	localUseRealData: true,
	apiRoute,
	schema: CardsDataForOperationsHomeSchema,
	mockResponse,
});

export const useGetOperationsHomeCardsData = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getCardsDataForOperationsHome(options));

type GetDashboardDataProps = {
	localUseRealData: boolean;
	apiRoute: string;
	schema: any;
	mockResponse: any;
	transformFunction?: (x: any) => any;
};

function getCardsData<DataType>({
	localUseRealData,
	apiRoute,
	schema,
	mockResponse,
	transformFunction,
}: GetDashboardDataProps) {
	return async function (options?: DashboardQueryProps): Promise<DataType> {
		const filtersQueryParams = getQueryParams(options);

		const useRealData = localUseRealData && globalUseRealData();
		const responses = useRealData
			? await Promise.all([
					get(apiRoute, {
						queryParams: { ...filtersQueryParams, card_type: 'overloaded_dts' },
					}),
					get(apiRoute, { queryParams: { ...filtersQueryParams, card_type: 'sites' } }),
					get(apiRoute, { queryParams: { ...filtersQueryParams, card_type: 'total_consumption' } }),
					get(apiRoute, { queryParams: { ...filtersQueryParams, card_type: 'current_load' } }),
					get(apiRoute, { queryParams: { ...filtersQueryParams, card_type: 'availability' } }),
			  ])
			: mockResponse;
		const response = responses.reduce((acc: any, res: any) => ({ ...acc, ...res }), {});
		//TODO: hack! remove this
		if (apiRoute === 'users') {
			response.results = response.results.filter((user: any) => user.employee_id != null);
		}
		const validatedResponse = schema.parse(response);
		if (!useRealData) {
			await sleep(MOCK_RESPONSE_SLEEP_TIME);
		}

		if (transformFunction) {
			return transformFunction(validatedResponse);
		} else {
			return validatedResponse;
		}
	};
}
