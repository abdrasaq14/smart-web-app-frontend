import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { hasRole, ROLE } from '../../utils/auth';

const PostLogin = () => {
	const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
	const [receivedToken, setReceivedToken] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const getToken = async () => {
			try {
				console.log('in getToken');
				const token = await getAccessTokenSilently();
				console.log('received token: ', token);
				setReceivedToken(true);
				localStorage.setItem('auth0Token', token);
			} catch (error) {
				console.error('Error while fetching token: ', error);
			}
		};
		if (isAuthenticated && !receivedToken) {
			getToken();
		}
	}, [receivedToken, isAuthenticated]);

	if (isLoading || !receivedToken) {
		return <Box>Loading ...</Box>;
	} else if (isAuthenticated) {
		if (hasRole(user, ROLE.ADMIN)) {
			navigate('/account-ui');
		} else if (hasRole(user, ROLE.MANAGER)) {
			navigate('/senior-manager-account');
		} else if (hasRole(user, ROLE.FINANCE)) {
			navigate('/finance');
		} else if (hasRole(user, ROLE.OPERATIONS)) {
			navigate('/operations');
		} else {
			return <Box>User does not have the required role to access the app</Box>;
		}
	} else {
		return <Box>User is not authenticated</Box>;
	}

	// const navigate = useNavigate();
	return <Box>Checking user...</Box>;
};

export default PostLogin;
