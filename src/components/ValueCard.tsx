import { Box, Card } from '@mui/material';
import React from 'react';

const styles = {
	container: {
		width: '220px',
		height: '140px',
		borderRadius: '16px',
		padding: '16px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	value: { paddingTop: '8px', fontWeight: 'bold', fontSize: '32px', lineHeight: '48px' },
	label: { paddingTop: '20px', fontSize: '14px', color: '#6E7883', lineHeight: '48px' },
};

export const ValueCard = ({ value, label }: { value: string | number; label: string }) => {
	return (
		<Card sx={styles.container} variant="outlined">
			<Box sx={styles.value}>{value}</Box>
			<Box sx={styles.label}>{label}</Box>
		</Card>
	);
};
