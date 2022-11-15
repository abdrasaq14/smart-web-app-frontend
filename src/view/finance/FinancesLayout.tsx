import React from 'react';
import { Sidebar } from '../../layouts/Sidebar';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { PersonOutlined, SaveOutlined, SettingsOutlined } from '@mui/icons-material';
import { AppMenuButton } from '../../types';
import { useGetMe } from '../../api/me';
import { Spinner } from '../../components/Spinner';

const buttonDefinitions: Array<AppMenuButton> = [
	{
		id: 1,
		label: 'Home',
		icon: <SaveOutlined />,
		path: '/finance/home',
	},
	{
		id: 2,
		label: 'Transaction',
		icon: <SettingsOutlined />,
		path: '/finance/transaction',
	},
	{
		id: 3,
		label: 'My Account',
		icon: <PersonOutlined />,
		path: '/account',
	},
];

export const FinancesLayout = () => {
	const { isLoading: isUserInfoLoading } = useGetMe();
	if (isUserInfoLoading) {
		return <Spinner />;
	}
	return (
		<Box sx={{ display: 'flex' }}>
			<Sidebar buttonDefinitions={buttonDefinitions} />
			<Outlet />
		</Box>
	);
};
