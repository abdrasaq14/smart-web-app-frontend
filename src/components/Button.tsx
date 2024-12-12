import React from 'react';
import { Button } from '@mui/material';

interface RegularButtonProps {
	label: string;
	onClick: () => void;
	disabled?: boolean;
	extraStyles?: any;
}

const styles = {
	button: {
		display: 'flex',
		width: '180px',
		height: '40px',
		color: '#ffffff',
		marginTop: '8px',
		marginBottom: '8px',
		borderRadius: '8px',
		backgroundColor: '#444444',
		'&:hover': {
			backgroundColor: '#b6b6b6',
			borderRadius: '8px',
		},
	},
};

export const RegularButton = ({ label, onClick, disabled, extraStyles }: RegularButtonProps) => (
	<Button variant="contained" sx={{...styles.button, ...extraStyles}} onClick={onClick} disabled={!!disabled}>
		{label}
	</Button>
);
