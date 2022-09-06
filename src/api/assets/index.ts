import { MOCK_RESPONSE_SLEEP_TIME } from '../../utils/constants';
import { sleep } from '../../utils/utils';
import { AssetsResponseSchema, ApiAssets } from './types';
import { mockResponse } from './mock';

export async function getAssets(): Promise<ApiAssets> {
	const response = AssetsResponseSchema.parse(mockResponse);
	await sleep(MOCK_RESPONSE_SLEEP_TIME);
	return response;
}
