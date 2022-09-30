import React from 'react';
import { AppMenu } from '../../components/SeniorManagerAccountAppMenu';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const SeniorManagerAccountLayout = () => (
	<Box sx={{ display: 'flex' }}>
		<AppMenu />
		<Outlet />
	</Box>
);
