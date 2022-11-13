import { Button, Drawer } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppMenuButton } from '../types';

const SIDEBAR_WIDTH = '250px';

const styles = {
	drawerContainer: {
		width: SIDEBAR_WIDTH,
		flexShrink: 0,
		'& .MuiDrawer-paper': {
			// width: SIDEBAR_WIDTH,
			boxSizing: 'border-box',
			display: 'flex',
			alignItems: 'center',
		},
		overflowX: 'none',
	},
	logo: { cursor: 'pointer', width: SIDEBAR_WIDTH },
	button: {
		base: {
			width: SIDEBAR_WIDTH,
			justifyContent: 'flex-start',
			paddingLeft: '25px',
			marginTop: '15px',
			marginBottom: '15px',
			borderRadius: '32px',
			'&:hover': {
				backgroundColor: '#b6b6b6',
				borderRadius: '32px',
			},
			// fontFamily: 'Inter',
			fontSize: '16px',
			fontWeight: '500',
			lineHeight: '19px',
			letterSpacing: '0.01em',
			textAlign: 'left',
			color: '#6E7883',
		},
		selected: {
			backgroundColor: '#929292',
			borderRadius: '32px',
		},
	},
};

export const Sidebar = ({ buttonDefinitions }: { buttonDefinitions: Array<AppMenuButton> }) => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<Drawer sx={styles.drawerContainer} variant="permanent" anchor="left">
			<img
				src="logo.png"
				alt="Smarterise"
				style={styles.logo}
				onClick={() => {
					navigate('/');
				}}
			/>
			{buttonDefinitions.map((buttonDefinition: AppMenuButton) => (
				<Button
					key={buttonDefinition.id}
					variant="text"
					sx={[
						styles.button.base,
						buttonDefinition.path === location.pathname && styles.button.selected,
					]}
					startIcon={buttonDefinition.icon}
					onClick={() => {
						navigate(buttonDefinition.path);
					}}
				>
					{buttonDefinition.label}
				</Button>
			))}
		</Drawer>
	);
};
