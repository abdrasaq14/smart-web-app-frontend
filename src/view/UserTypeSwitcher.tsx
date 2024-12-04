import React from 'react';
import { Sidebar } from '../layouts/Sidebar';
import { AppMenuButton } from '../types';
import { Box } from '@mui/material';
import { ROLE } from '../utils/auth';
import { useGetMe } from '../api/me';
import { useAuth0 } from '@auth0/auth0-react';
import UserType from './auth/UserType';
import { Home as OperationsHome } from './operations/Home';
import { Home as FinanceHome } from './finance/Home';
import { Home as SeniorManagerAccountHome } from './seniorManagerAccout/Home';
const Switcher = () => {
	const { logout } = useAuth0();
	const { data: me, isLoading: isUserInfoLoading } = useGetMe();
	console.log("meAccessLevel", me)
	const buttonDefinitions: Array<AppMenuButton> = [];

	if (isUserInfoLoading) {
		return <Box>Loading ...</Box>;
	} else if (!isUserInfoLoading && me != null) {
		const role = me?.access_level;
		if (role === ROLE.OPERATIONS) {
			return <OperationsHome />;
		}
		if (role === ROLE.FINANCE) {
			return <FinanceHome />;
		}
		if (role === ROLE.MANAGER) {
			return <SeniorManagerAccountHome />;
		}
		if (role === ROLE.ADMIN) {
			return <UserType name={me?.first_name} />;
		}
	} else {
		logout({ returnTo: `${window.location.origin}/login` });
		console.log('User is not authenticated or no proper role');
		return <Box>User is not authenticated</Box>;
	}

};

export default Switcher;
