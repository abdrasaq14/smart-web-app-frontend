import { mockResponse } from './mock';
import { useQuery } from 'react-query';
import { User, UserSchema } from '../accountUI/users/types';
import { getDashboardData } from '../apiUtils';

const apiRoute = 'users/me';

const getMe = getDashboardData<User>({
	localUseRealData: true,
	apiRoute,
	schema: UserSchema,
	mockResponse,
});

export const useGetMe = (options?: any) =>
	useQuery([apiRoute], () => getMe(), { staleTime: Infinity, ...options });
