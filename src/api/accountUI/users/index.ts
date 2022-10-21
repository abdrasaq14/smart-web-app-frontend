import { ApiUsers, UserResponseSchema } from './types';
import { mockResponse } from './mock';
import { getDashboardData } from '../../apiUtils';
import { useQuery } from 'react-query';
import { DashboardQueryProps } from '../../../types';

const apiRoute = 'users';

const getUsers = getDashboardData<ApiUsers>({
	localUseRealData: true,
	apiRoute,
	schema: UserResponseSchema,
	mockResponse,
});

export const useGetUsers = (options?: DashboardQueryProps) =>
	useQuery([apiRoute, options], () => getUsers(options));

export const getUserName = (user: { first_name: string; last_name: string }) =>
	`${user.first_name} ${user.last_name}`;
