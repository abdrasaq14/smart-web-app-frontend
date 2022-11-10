import { Box, Card } from '@mui/material';
import React from 'react';
import { Spinner } from './Spinner';
import { CARD_HANDLER } from '../api/cardsHandlers';
import { SitesDashboardFilters } from '../types';

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

const ValueCard = ({
	handler,
	label,
	cardType,
	filters,
	formatter = (value) => (value != null ? value.toString() : ''),
	field,
}: {
	cardType: string;
	field: string;
	label: string;
	handler: typeof CARD_HANDLER[keyof typeof CARD_HANDLER];
	filters: SitesDashboardFilters;
	formatter?: (value?: number) => string;
}) => {
	const { data, isLoading, isError } = handler({ ...filters, card_type: cardType });

	const renderValue = () => {
		if (isError) {
			return <Box>Error fetching data...</Box>;
		} else if (isLoading) {
			return <Spinner />;
		} else {
			// @ts-ignore
			return <Box sx={styles.value}>{data ? formatter(data[field]) : ''}</Box>;
		}
	};

	return (
		<Card sx={styles.container} variant="outlined">
			{renderValue()}
			<Box sx={styles.label}>{label}</Box>
		</Card>
	);
};

export default ValueCard;
