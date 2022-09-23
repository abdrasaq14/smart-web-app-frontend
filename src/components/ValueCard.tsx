import { Box, Card } from '@mui/material';
import React from 'react';
import { Spinner } from './Spinner';

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

export const ValueCard = ({
	value,
	label,
	isLoading,
	isError,
}: {
	value?: string | number;
	label: string;
	isLoading: boolean;
	isError: boolean;
}) => {
	const renderValue = () => {
		if (isError) {
			return <Box>Error fetching data...</Box>;
		} else if (isLoading) {
			return <Spinner />;
		} else {
			return <Box sx={styles.value}>{value}</Box>;
		}
	};

	return (
		<Card sx={styles.container} variant="outlined">
			{renderValue()}
			<Box sx={styles.label}>{label}</Box>
		</Card>
	);
};
