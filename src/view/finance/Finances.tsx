import React from 'react';
import { AppMenu } from '../../components/FinanceAppMenu';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const Finances = () => (
	<Box sx={{ display: 'flex' }}>
		<AppMenu />
		<Outlet />
	</Box>
);
