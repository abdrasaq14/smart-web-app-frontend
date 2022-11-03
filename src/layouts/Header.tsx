import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { IconButton } from '../components/IconButton';
import { Logout, NotificationsOutlined, PersonOutlined } from '@mui/icons-material';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const styles = {
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
		height: '56px',
	},
	headerIcons: { display: 'flex', alignItems: 'center' },
};

export const Header = ({ children }: any) => {
	const navigate = useNavigate();
	const { logout } = useAuth0();
	return (
		<Box sx={styles.header}>
			{children}
			<Box sx={styles.headerIcons}>
				<IconButton light Icon={NotificationsOutlined} onClick={() => {}} />
				<IconButton round Icon={PersonOutlined} onClick={() => navigate('/account')} />
				<IconButton
					round
					Icon={Logout}
					onClick={() => logout({ returnTo: `${window.location.origin}/login` })}
				/>
			</Box>
		</Box>
	);
};
