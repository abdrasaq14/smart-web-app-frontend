import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();

  useEffect(() => {
    logout({
      returnTo: `${window.location.origin}/auth/login`,
    });
  }, []);

  return <Box>Logging out...</Box>;
};

export default Logout;
