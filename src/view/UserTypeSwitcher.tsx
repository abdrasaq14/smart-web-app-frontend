import React from 'react';
import { Sidebar } from '../layouts/Sidebar';
import { AppMenuButton } from '../types';
import { Box } from '@mui/material';
import { ROLE } from '../utils/auth';
import { useGetMe } from '../api/me';
import { useAuth0 } from '@auth0/auth0-react';

const Switcher = () => {
	const { logout } = useAuth0();
	const { data: me, isLoading: isUserInfoLoading } = useGetMe();

	const buttonDefinitions: Array<AppMenuButton> = [];

	if (isUserInfoLoading) {
		return <Box>Loading ...</Box>;
	} else if (!isUserInfoLoading && me != null) {
		const role = me?.access_level;
		if (role === ROLE.ADMIN || role === ROLE.OPERATIONS) {
			buttonDefinitions.push({
				id: 1,
				label: 'Operations',
				path: '/operations/home',
			});
		}
		if (role === ROLE.ADMIN || role === ROLE.FINANCE) {
			buttonDefinitions.push({
				id: 2,
				label: 'Finance',
				path: '/finance/home',
			});
		}
		if (role === ROLE.ADMIN || role === ROLE.MANAGER) {
			buttonDefinitions.push({
				id: 3,
				label: 'Senior Manager',
				path: '/senior-manager-account/home',
			});
		}
		if (role === ROLE.ADMIN) {
			buttonDefinitions.push({
				id: 4,
				label: 'Smarterise Account UI',
				path: '/account-ui/home',
			});
		}
	} else {
		logout({ returnTo: `${window.location.origin}/login` });
		console.log('User is not authenticated or no proper role');
		return <Box>User is not authenticated</Box>;
	}

	return <Sidebar buttonDefinitions={buttonDefinitions} />;
};

export default Switcher;
