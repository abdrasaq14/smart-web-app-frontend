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
  const { data: me, isLoading: isUserInfoLoading, error: userError } = useGetMe({
    enabled: !!receivedToken,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await getAccessTokenSilently();
        localStorage.setItem('auth0Token', token);
      console.log("tokenizationset", token)
        setReceivedToken(true);
      } catch (error) {
        console.error('Error while fetching token: ', error);
        logout({ returnTo: `${window.location.origin}/login` });  // Log out if token retrieval fails
      }
    };

    if (isAuthenticated && !receivedToken) {
      getToken();
    }
  }, [receivedToken, isAuthenticated, getAccessTokenSilently, logout]);

  if (isLoading || !receivedToken || isUserInfoLoading) {
    return <Spinner />;
  }

  // Handle errors in fetching user data
  if (userError) {
    alert("Error fetching user info")
    logout({ returnTo: `${window.location.origin}/login` });
    console.log('This is absolute nonsenseError fetching user info:', userError);
    return <Box>Error fetching user data. Redirecting to login...</Box>;
  }

  // // Handle the navigation logic based on the user's role
  // if (isAuthenticated && !isUserInfoLoading && me != null) {
  //   const role = me?.access_level;

  //   switch (role) {
  //     case ROLE.ADMIN:
  //       navigate('/account-ui');
  //       break;
  //     case ROLE.MANAGER:
  //       navigate('/senior-manager-account');
  //       break;
  //     case ROLE.FINANCE:
  //       navigate('/finance');
  //       break;
  //     case ROLE.OPERATIONS:
  //       navigate('/operations');
  //       break;
  //     default:
  //       logout({ returnTo: `${window.location.origin}/login` });
  //       console.log('User does not have the required role to access the app');
  //       return <Box>User does not have the required role to access the app</Box>;
  //   }
  // } else {
  //   logout({ returnTo: `${window.location.origin}/login` });
  //   console.log('User is not authenticated');
  //   return <Box>User is not authenticated</Box>;
  // }
console.log("checkingauthtoken", isAuthenticated, isUserInfoLoading, me)
  return <Box>Checking user...</Box>;
};

export default PostLogin;
