import { Box, Card } from '@mui/material';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { RegularButton } from '../components/Button';
import { SIDEBAR_WIDTH } from '../utils/constants';

const styles = {
	container: {
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	loginCard: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		maxWidth: 343,
		minWidth: 343,
		height: 244,
		padding: '44px 93px 44px 93px',
		borderRadius: '16px',
		borderColor: '#E6E6E6',
	},
	title: { fontSize: '24px', fontWeight: 500, marginBottom: '20px' },
	helperRow: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
	},
	forgotPassButton: {
		cursor: 'pointer',
	},
	logo: { cursor: 'pointer', width: SIDEBAR_WIDTH },
};

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	return <RegularButton label="Login" onClick={() => loginWithRedirect()} />;
};

export const Login = () => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column' }}>
			<Box sx={{ height: '133px' }}>
				<img src="logo.png" alt="Smarterise" style={styles.logo} />
			</Box>
			<Box sx={styles.container}>
				<Card sx={styles.loginCard} variant="outlined">
					<Box sx={styles.title}>Login to continue</Box>
					{/*<TextField sx={{ width: '100%' }} id="user" type="text" placeholder='Email'/>*/}
					{/*<TextField sx={{ width: '100%' }} id="password" type="password" placeholder='Password'/>*/}
					{/*<Box sx={styles.helperRow}>*/}
					{/*    <FormControlLabel*/}
					{/*        control={<Checkbox checked={rememberMe} onChange={() => setRememberMe(!rememberMe)}/>}*/}
					{/*        label="Remember me"*/}
					{/*    />*/}
					{/*    <Box sx={styles.forgotPassButton} onClick={() => {*/}
					{/*    }}>Forgot Password?*/}
					{/*    </Box>*/}
					{/*</Box>*/}
					<LoginButton />
				</Card>
			</Box>
		</Box>
	);
};
