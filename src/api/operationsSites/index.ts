import { MOCK_RESPONSE_SLEEP_TIME } from '../../utils/constants';
import { sleep } from '../../utils/utils';
import { AssetsResponseSchema, ApiAssets } from './types';
import { mockResponse } from './mock';
import { get, globalUseRealData } from '../apiUtils';
import { useQuery } from 'react-query';

const USE_REAL_DATA = true;

const apiRoute = 'sites';

export async function getSites(): Promise<ApiAssets> {
	const useRealData = USE_REAL_DATA && globalUseRealData();
	const response = useRealData ? await get(apiRoute) : mockResponse;
	const validatedResponse = AssetsResponseSchema.parse(response);
	if (!useRealData) {
		await sleep(MOCK_RESPONSE_SLEEP_TIME);
	}
	return validatedResponse;
}

export const useGetSites = () => useQuery([apiRoute], getSites);
