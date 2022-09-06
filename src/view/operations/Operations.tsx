import React from 'react';
import { AppMenu } from '../../components/AppMenu';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const Operations = () => (
    <Box sx={{ display: 'flex' }}>
        <AppMenu/>
        <Outlet/>
    </Box>
);