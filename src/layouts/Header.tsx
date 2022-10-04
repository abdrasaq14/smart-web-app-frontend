import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { IconButton } from '../components/IconButton';
import { Logout, NotificationsOutlined, PersonOutlined } from '@mui/icons-material';
import React from 'react';

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
	return (
		<Box sx={styles.header}>
			{children}
			<Box sx={styles.headerIcons}>
				<IconButton light Icon={NotificationsOutlined} onClick={() => {}} />
				<IconButton round Icon={PersonOutlined} onClick={() => navigate('/operations/myAccount')} />
				<IconButton round Icon={Logout} onClick={() => navigate('/login')} />
			</Box>
		</Box>
	);
};
