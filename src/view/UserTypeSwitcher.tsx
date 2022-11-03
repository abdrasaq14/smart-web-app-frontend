import React from 'react';
import { Sidebar } from '../layouts/Sidebar';
import { AppMenuButton } from '../types';
import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/material';
import { hasRole, ROLE } from '../utils/auth';

const Switcher = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	const buttonDefinitions: Array<AppMenuButton> = [];

	if (isLoading) {
		return <Box>Loading ...</Box>;
	} else if (isAuthenticated) {
		if (hasRole(user, ROLE.ADMIN) || hasRole(user, ROLE.OPERATIONS)) {
			buttonDefinitions.push({
				id: 1,
				label: 'Operations',
				path: '/operations/home',
			});
		}
		if (hasRole(user, ROLE.ADMIN) || hasRole(user, ROLE.FINANCE)) {
			buttonDefinitions.push({
				id: 2,
				label: 'Finance',
				path: '/finance/home',
			});
		}
		if (hasRole(user, ROLE.ADMIN) || hasRole(user, ROLE.MANAGER)) {
			buttonDefinitions.push({
				id: 3,
				label: 'Senior Manager',
				path: '/senior-manager-account/home',
			});
		}
		if (hasRole(user, ROLE.ADMIN)) {
			buttonDefinitions.push({
				id: 4,
				label: 'Smarterise Account UI',
				path: '/account-ui/home',
			});
		}
	} else {
		return <Box>User is not authenticated</Box>;
	}

	return <Sidebar buttonDefinitions={buttonDefinitions} />;
};

export default Switcher;
