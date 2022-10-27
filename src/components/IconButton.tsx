import { Button } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import React from 'react';

interface IconButtonProps {
	Icon: SvgIconComponent;
	round?: boolean;
	light?: boolean;
	onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const IconButton = ({ Icon, round, light, onClick }: IconButtonProps) => (
	<Button
		variant="contained"
		sx={{
			display: 'flex',
			minWidth: '48px',
			height: '48px',
			color: '#6E7883',
			padding: 0,
			marginRight: '25px',
			borderRadius: round ? '64px' : '16px',
			backgroundColor: light ? '#F2F2F2' : '#C4C4C4',
			'&:hover': {
				backgroundColor: '#b6b6b6',
				borderRadius: round ? '64px' : '16px',
			},
		}}
		onClick={onClick}
	>
		<Icon />
	</Button>
);
