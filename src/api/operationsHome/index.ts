import { MOCK_RESPONSE_SLEEP_TIME } from '../../utils/constants';
import { sleep } from '../../utils/utils';
import {ApiOperationsHome, OperationsHomeSchema} from './types';
import { mockResponse } from './mock';

export async function getDataForOperationsHome(): Promise<ApiOperationsHome> {
	const response = OperationsHomeSchema.parse(mockResponse);
	await sleep(MOCK_RESPONSE_SLEEP_TIME);
	return response;
}
