import { Button, Drawer } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppMenuButton } from '../types';

const styles = {
	drawerContainer: {
		width: '287px',
		flexShrink: 0,
		'& .MuiDrawer-paper': {
			width: '287px',
			boxSizing: 'border-box',
			display: 'flex',
			alignItems: 'center',
		},
	},
	button: {
		base: {
			width: '223px',
			color: '#353D46',
			justifyContent: 'flex-start',
			paddingLeft: '25px',
			marginTop: '15px',
			marginBottom: '15px',
			borderRadius: '32px',
			'&:hover': {
				backgroundColor: '#b6b6b6',
				borderRadius: '32px',
			},
		},
		selected: {
			backgroundColor: '#929292',
			borderRadius: '32px',
		},
	},
};

export const Sidebar = ({ buttonDefinitions }: { buttonDefinitions: Array<AppMenuButton> }) => {
	const navigate = useNavigate();
	const [selectedItem, setSelectedItem] = useState<number>(-1);

	return (
		<Drawer sx={styles.drawerContainer} variant="permanent" anchor="left">
			<img src="logo.png" alt="Smarterise" />
			{buttonDefinitions.map((buttonDefinition: AppMenuButton) => (
				<Button
					key={buttonDefinition.id}
					variant="text"
					sx={[styles.button.base, buttonDefinition.id === selectedItem && styles.button.selected]}
					startIcon={buttonDefinition.icon}
					onClick={() => {
						setSelectedItem(buttonDefinition.id);
						navigate(buttonDefinition.path);
					}}
				>
					{buttonDefinition.label}
				</Button>
			))}
		</Drawer>
	);
};
