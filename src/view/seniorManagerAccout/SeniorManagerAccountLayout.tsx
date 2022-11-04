import React from 'react';
import { Sidebar } from '../../layouts/Sidebar';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { PersonOutlined, SaveOutlined, SettingsOutlined } from '@mui/icons-material';
import { AppMenuButton } from '../../types';

const buttonDefinitions: Array<AppMenuButton> = [
	{
		id: 1,
		label: 'Home',
		icon: <SaveOutlined />,
		path: '/senior-manager-account/home',
	},
	{
		id: 2,
		label: 'Operations',
		icon: <SettingsOutlined />,
		path: '/senior-manager-account/operations',
	},
	{
		id: 3,
		label: 'Finance',
		icon: <PersonOutlined />,
		path: '/senior-manager-account/finance',
	},
	{
		id: 4,
		label: 'Activity Log',
		icon: <PersonOutlined />,
		path: '/senior-manager-account/activity-log',
	},
	{
		id: 5,
		label: 'Account',
		icon: <PersonOutlined />,
		path: '/account',
	},
];

export const SeniorManagerAccountLayout = () => (
	<Box sx={{ display: 'flex' }}>
		<Sidebar buttonDefinitions={buttonDefinitions} />
		<Outlet />
	</Box>
);
