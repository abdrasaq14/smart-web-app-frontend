import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { ROLE } from '../../utils/auth';
import { useGetMe } from '../../api/me';
import { Spinner } from '../../components/Spinner';

const PostLogin = () => {
	const { isAuthenticated, isLoading, getAccessTokenSilently, logout } = useAuth0();
	const [receivedToken, setReceivedToken] = useState(false);
	const { data: me, isLoading: isUserInfoLoading } = useGetMe({
		enabled: !!receivedToken,
	});
	console.log('me: ', me);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLoading && !isAuthenticated) {
		}
	}, [isAuthenticated, isLoading]);

	useEffect(() => {
		const getToken = async () => {
			try {
				const token = await getAccessTokenSilently();
				localStorage.setItem('auth0Token', token);
				setReceivedToken(true);
			} catch (error) {
				console.error('Error while fetching token: ', error);
			}
		};
		if (isAuthenticated && !receivedToken) {
			getToken();
		}
	}, [receivedToken, isAuthenticated]);

	if (isLoading || !receivedToken || isUserInfoLoading) {
		return <Spinner />;
	} else if (isAuthenticated && !isUserInfoLoading && me != null) {
		const role = me?.access_level;

		if (role === ROLE.ADMIN) {
			navigate('/account-ui');
		} else if (role === ROLE.MANAGER) {
			navigate('/senior-manager-account');
		} else if (role === ROLE.FINANCE) {
			navigate('/finance');
		} else if (role === ROLE.OPERATIONS) {
			navigate('/operations');
		} else {
			logout({ returnTo: `${window.location.origin}/login` });
			console.log('User does not have the required role to access the app');
			return <Box>User does not have the required role to access the app</Box>;
		}
	} else {
		logout({ returnTo: `${window.location.origin}/login` });
		console.log('User is not authenticated');
		return <Box>User is not authenticated</Box>;
	}

	// const navigate = useNavigate();
	return <Box>Checking user...</Box>;
};

export default PostLogin;
