/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { ROLE } from "../../utils/constants";
import { useFetchData } from "../../customHooks/useGetDashboardData";
import Loader from "../../components/feedBacks/loader";
import { useAppDispatch } from "../../store/hooks";
import { login } from "../../store/authSlice";

const API_ROUTE = "users/me";
const PostLogin = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, isLoading, getAccessTokenSilently, logout } =
    useAuth0();
  const [receivedToken, setReceivedToken] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await getAccessTokenSilently();
        localStorage.setItem("auth0Token", token);
        console.log("tokenizationset", token);
        setReceivedToken(true);
      } catch (error) {
        console.error("Error while fetching token: ", error);
        logout({
          returnTo: `${window.location.origin}/auth/login`,
        });
      }
    };

    if (isAuthenticated && !receivedToken) {
      getToken();
    }
  }, [receivedToken, isAuthenticated, getAccessTokenSilently]);
  const {
    data: me,
    isLoading: isUserInfoLoading,
    error: userError,
    isSuccess,
  } = useFetchData(
    API_ROUTE,
    {}, // No query params
    {
      enabled: !!receivedToken,
      queryKey: [API_ROUTE],
    }
  );
  if (isLoading || !receivedToken || isUserInfoLoading) {
    return <Loader />;
  }
  if (isSuccess) {
    console.log("User data fetched successfully2:", me);
  }
  // Handle errors in fetching user data
  if (userError) {
    logout({
      returnTo: `${window.location.origin}/auth/login`,
    });
    console.log(
      "This is absolute nonsenseError fetching user info:",
      userError
    );
    return <Box>Error fetching user data. Redirecting to login...</Box>;
  }

  // Handle the navigation logic based on the user's role
  if (isAuthenticated && !isUserInfoLoading && me != null) {
    dispatch(login(me));
    //@ts-ignore

    const role = me?.access_level;

    switch (role) {
      case ROLE.ADMIN:
        navigate("/dashboard/home");
        break;
      case ROLE.MANAGER:
        navigate("/dashboard/senior-manager/home");
        break;
      case ROLE.FINANCE:
        navigate("/dashboard/finance/home");
        break;
      case ROLE.OPERATIONS:
        navigate("/dashboard/operations/home");
        break;
      case ROLE.OTHER:
        navigate("/sbee");
        break;
      default:
        logout({
          returnTo: `${window.location.origin}/auth/login`,
        });
        console.log("User does not have the required role to access the app");
        return (
          <Box>User does not have the required role to access the app</Box>
        );
    }
  } else {
    console.log(
      "I don't know this user",
      isAuthenticated,
      isUserInfoLoading,
      me
    );
    logout({
      returnTo: `${window.location.origin}/auth/login`,
    });
    console.log(
      "I don't know this user",
      isAuthenticated,
      isUserInfoLoading,
      me
    );
    // console.log('User is not authenticated');
    return <Box>I don&apos;t know this user</Box>;
  }
  return <Box>Checking user...</Box>;
};

export default PostLogin;
// headers {'alg': 'dir', 'enc': 'A256GCM', 'iss': 'https://dev-mgw72jpas4obd84e.us.auth0.com/'}
