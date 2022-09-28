import { MOCK_RESPONSE_SLEEP_TIME } from '../../../../utils/constants';
import { sleep } from '../../../../utils/utils';
import { mockResponse } from './mock';
import { ApiPieChart, get, globalUseRealData, PieChartSchema } from '../../../apiUtils';
import { useQuery } from 'react-query';

const USE_REAL_DATA = false;

const apiRoute = 'finance/customer-breakdown';

export async function getCustomerBreakdownChartData(): Promise<ApiPieChart> {
	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData ? await get(apiRoute) : mockResponse;
	const validatedResponse = PieChartSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetCustomerBreakdownChartData = () =>
	useQuery([apiRoute], getCustomerBreakdownChartData);
