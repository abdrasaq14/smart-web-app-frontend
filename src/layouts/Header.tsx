import { Grid } from '@mui/material';
import React from 'react';
import HeaderIcons from './HeaderIcons';

export const Header = ({ children }: any) => {
	return (
		<Grid container spacing={1} sx={{ marginBottom: '16px' }}>
			<Grid item lg={9} md={12} sm={12} order={{ lg: 1, md: 2, sm: 2, xs: 2 }}>
				{children}
			</Grid>
			<Grid
				item
				lg={3}
				md={12}
				sm={12}
				order={{ lg: 2, md: 1, sm: 1, xs: 1 }}
				sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
			>
				<HeaderIcons />
			</Grid>
		</Grid>
	);
};
