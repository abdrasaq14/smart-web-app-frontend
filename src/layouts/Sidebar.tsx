import { Button, Drawer } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppMenuButton } from '../types';
import { SIDEBAR_WIDTH } from '../utils/constants';

const styles = {
	drawerContainer: {
		width: SIDEBAR_WIDTH,
		border: 'none',
		flexShrink: 0,
		marginRight: '30px',
		'& .MuiDrawer-paper': {
			// width: SIDEBAR_WIDTH,
			boxSizing: 'border-box',
			display: 'flex',
			alignItems: 'center',
			backgroundColor: '#F7F7F7',
			border: 'none',
			padding: '20px',
			// marginRight: '250px',
		},
		overflowX: 'none',
	},
	logo: { cursor: 'pointer', width: SIDEBAR_WIDTH, marginBottom: '40px' },
	button: {
		base: {
			display: 'flex',
			width: SIDEBAR_WIDTH,
			justifyContent: 'flex-start',
			paddingLeft: '15px',
			marginTop: '15px',
			marginBottom: '15px',
			borderRadius: '32px',
			'&:hover': {
				backgroundColor: '#FFC000',
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
			backgroundColor: '#FFC000',
			borderRadius: '32px',
			color: '#000000',
		},
	},
};

export const Sidebar = ({ buttonDefinitions }: { buttonDefinitions: Array<AppMenuButton> }) => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<Drawer
			sx={styles.drawerContainer}
			variant="permanent"
			anchor="left"
		>
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
