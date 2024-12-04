import { Box, Card } from '@mui/material';
import React from 'react';

const styles = {
	container: {
		borderRadius: '16px',
		padding: '16px',
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
	},
	content: { paddingTop: '8px', fontWeight: 'bold', fontSize: '14px', lineHeight: '17px' },
};
interface GraphCardProps {
	title: string;
	extraStyling?: object; // Optional prop for additional styling
	children: React.ReactNode;
}
export const GraphCard: React.FC<GraphCardProps> = ({ title, extraStyling, children }) => {
	return (
		<Card sx={{ ...styles.container, ...extraStyling }} variant="outlined">
			<Box sx={styles.content}>{title}</Box>
			{children}
		</Card>
	);
};