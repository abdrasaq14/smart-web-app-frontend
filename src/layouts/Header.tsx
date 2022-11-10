import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import { IconButton } from '../components/IconButton';
import { Logout, NotificationsOutlined, PersonOutlined } from '@mui/icons-material';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const Header = ({ children }: any) => {
	const navigate = useNavigate();
	const { logout } = useAuth0();
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
				<IconButton light Icon={NotificationsOutlined} onClick={() => {}} />
				<IconButton round Icon={PersonOutlined} onClick={() => navigate('/account')} />
				<IconButton
					round
					Icon={Logout}
					onClick={() => logout({ returnTo: `${window.location.origin}/login` })}
				/>
			</Grid>
		</Grid>
	);
};
