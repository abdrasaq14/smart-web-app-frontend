import React from 'react';
import { Sidebar } from '../../layouts/Sidebar';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import {
	PersonOutlined,
	SaveOutlined,
	BusinessOutlined,
	MemoryOutlined,
} from '@mui/icons-material';
import { AppMenuButton } from '../../types';

const buttonDefinitions: Array<AppMenuButton> = [
	{
		id: 1,
		label: 'Home',
		icon: <SaveOutlined />,
		path: '/account-ui/home',
	},
	{
		id: 2,
		label: 'Companies',
		icon: <BusinessOutlined />,
		path: '/account-ui/companies',
	},
	{
		id: 3,
		label: 'Users',
		icon: <PersonOutlined />,
		path: '/account-ui/users',
	},
	{
		id: 4,
		label: 'Devices',
		icon: <MemoryOutlined />,
		path: '/account-ui/devices',
	},
];

export const AccountUiLayout = () => (
	<Box sx={{ display: 'flex' }}>
		<Sidebar buttonDefinitions={buttonDefinitions} />
		<Outlet />
	</Box>
);
