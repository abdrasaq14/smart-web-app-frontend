// import { mockResponse } from './mock';
// import { useQuery } from 'react-query';
// import { User, UserSchema } from '../accountUI/users/types';
// import { getDashboardData } from '../apiUtils';

// const apiRoute = 'users/me';

// const getMe = getDashboardData<User>({
// 	localUseRealData: true,
// 	apiRoute,
// 	schema: UserSchema,
// 	mockResponse,
// });

// export const useGetMe = (options?: any) =>
// 	useQuery([apiRoute], () => getMe(), { staleTime: Infinity, ...options });



import { mockResponse } from './mock';
import { useQuery } from 'react-query';
import { User, UserSchema } from '../accountUI/users/types';
import { getDashboardData } from '../apiUtils';

const apiRoute = 'users/me';

// Log the API route being called
console.log(`Preparing to fetch data from API route: ${apiRoute}`);

const getMe = getDashboardData<User>({
	localUseRealData: true,
	apiRoute,
	schema: UserSchema,
	mockResponse,
});

// Log the configuration of the getMe function
console.log("getMe configuration:", getMe);

// Define a function to log the response
const logResponse = (response:any) => {
	if (response.error) {
		console.error('Error fetching user data:', response.error);
	} else {
		console.log('User data fetched successfully:', response.data);
	}
};

export const useGetMe = (options?: any) =>
	useQuery(
		[apiRoute], 
		async () => {
			try {
				console.log("Preparing to hit route");
			const response = await getMe();
			logResponse(response); // Log the response after the API call

			console.log("finished to hit route", response);
			return response;
		} catch (error) {
				console.log("finished to hit route with Error", error);
				
			}
		}, 
		{ staleTime: Infinity, ...options }
	);
