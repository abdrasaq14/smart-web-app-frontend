import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { IconButton } from '../components/IconButton';
import { Logout, NotificationsOutlined, PersonOutlined } from '@mui/icons-material';
import React from 'react';
import GoogleTranslate from '../components/GoogleTranslate';

const HeaderIcons = () => {
	const location = useLocation();
	const urlParts = location.pathname.split('/');
	const mainCategory = urlParts.length > 1 ? urlParts[1] : '';
	const navigate = useNavigate();
	const { logout } = useAuth0();

	return (
		<>
			{mainCategory !== 'finance' ? (
				<IconButton
					light
					Icon={NotificationsOutlined}
					onClick={() => {
						navigate(`/operations/activityLog`);
					}}
				/>
			) : null}
			<IconButton round Icon={PersonOutlined} onClick={() => navigate('/account')} />
			<IconButton
				round
				Icon={Logout}
				onClick={() => logout({ returnTo: `${window.location.origin}/login` })}
			/>
			{/* <GoogleTranslate /> */}
		</>
	);
};

export default HeaderIcons;
