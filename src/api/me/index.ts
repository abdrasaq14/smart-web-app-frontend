import { mockResponse } from './mock';
import { useQuery } from 'react-query';
import { UpdateUserApi, UpdateUserSchema } from '../accountUI/users/types';
import { getDashboardData } from '../apiUtils';
import { z } from 'zod';

const apiRoute = 'users/me';

const getMe = getDashboardData<UpdateUserApi[]>({
	localUseRealData: true,
	apiRoute,
	schema: z.array(UpdateUserSchema),
	mockResponse,
});

export const useGetMe = (options?: any) => useQuery([apiRoute], () => getMe(), options);
