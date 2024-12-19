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
		// backgroundColor: 'red',
	},
	loginCard: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		maxWidth: '550px',
		minWidth: 343,
		height: 150,
		padding: '40px',
		borderRadius: '16px',
		marginTop: '-100px',
		borderColor: '#E6E6E6',
		backgroundColor: '#F7F7F7',
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
    const handlecontinue = () => { 
        window.location.href =
					'https://eu-west-2.quicksight.aws.amazon.com/embed/ee9de79629594ec7afff7c64cc1d8c68/dashboards/53d6cc6b-7454-4ae1-8702-a5b7142aafa1?identityprovider=quicksight&isauthcode=true&code=AYABeBO14dvlm7G7mcvK46f-688AAAABAAdhd3Mta21zAEthcm46YXdzOmttczpldS13ZXN0LTI6NjQ5MTA0MjA5NDE4OmtleS9lZGQ0ZjBlNC03M2U0LTQ4NGEtYjBmYy0yYjEzNDI0YThlODUAuAECAQB40arshFNPPoBUAbB9hRxqalRsdpuiVanS5r6RYzejOEIBrBmHvaZXgfdx4P2cxEYHNwAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDLweJfwVTxsLrNFuQAIBEIA788bbgXBDP6o80-dm93jL5OTpE86gJ8PLtmP5gLOiZTiMpgUi3FzjeMAW1FtgcUK7FLXgc38rzzFIiAECAAAAAAwAABAAAAAAAAAAAAAAAAAA4MZq5q22qEcgINBeFrP1-v____8AAAABAAAAAAAAAAAAAAABAAAAm4Y1Sikd7RrSuZA7clvV33PDyIvGv5O2Nn5sf_iTwfegQk72huTA03hy52Ja2CT20sQiewQ6mL31vussvaEPCmGePtRSfHdywyWWWSeB47LwMfzOtDGgNpCojdExi1tUjQIxkp72jsrVIgC_ifySiprY4ED4AAYkfIjvLHamNb2xpHCY8PGLJ7ezd7R2atyYznq-CwnbdwsTm7LvusiLCOwTj91uFd8Tv1DHQw%3D%3D';
    }

	return (
		<RegularButton
			extraStyles={{
				backgroundColor: '#FFC000',
				color: '#000000',
				'&:hover': {
					backgroundColor: '#FFC000',
					borderRadius: '8px',
					color: '#000000',
				},
			}}
			label="Login"
			onClick={handlecontinue}
		/>
	);
};

export const SBEE = () => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', padding: '40px' }}>
			<Box sx={{ height: '133px' }}>
				<img src="logo.png" alt="Smarterise" style={styles.logo} />
			</Box>
			<Box sx={styles.container}>
				<Card sx={styles.loginCard} variant="outlined">
					<Box sx={styles.title}>Click the button below to continue</Box>
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
