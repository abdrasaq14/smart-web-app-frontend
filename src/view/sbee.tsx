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
					'https://eu-west-2.quicksight.aws.amazon.com/embed/0d8609c5de79441fb4127254c5434510/dashboards/918888cf-4d7c-4654-9cad-5c9b298748cd?identityprovider=quicksight&isauthcode=true&code=AYABeEQ6geTptcMzfSfwAmU1PRkAAAABAAdhd3Mta21zAEthcm46YXdzOmttczpldS13ZXN0LTI6NjQ5MTA0MjA5NDE4OmtleS9lZGQ0ZjBlNC03M2U0LTQ4NGEtYjBmYy0yYjEzNDI0YThlODUAuAECAQB40arshFNPPoBUAbB9hRxqalRsdpuiVanS5r6RYzejOEIBrxgVdBksopYAIFhKgNPqDAAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDBi7KHpdIABHvyTYygIBEIA7IXns1UzxHBXB8gAWBIoAEkHINYLVmWN98E26mH0MqSyFetlqOS021UXx_zC8jC1aflWaNvEa5ZItRT8CAAAAAAwAABAAAAAAAAAAAAAAAAAAhBpP3gYzlKG_t6cyFLSnEP____8AAAABAAAAAAAAAAAAAAABAAAAm6fUpP239tl2ZXtYcqHf4vhsJoga8VCknI9RxiVUUXGdJBUcrjwhn5gVyQ2LKAcXtqvGojGKx2VZQcMh0JpGO8-ce7BtVbxKy6JR19uFBYuLP5jh4uU0RCjzZzWrhQ_pX-7W-MMehjss6vvHeDZUVF66Yie2-FvKyEw4dJaE05hMnwbsSFNLLB6kiRV3Y0K2oUbQPvCsSTN4wTSPQDmf1qjCLvpGqCsOUPu44g%3D%3D';
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
