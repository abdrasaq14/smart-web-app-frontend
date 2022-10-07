import React, { useState } from 'react';
import { Box } from '@mui/material';
import { TransactionHistoryTable } from '../../components/Tables/TransactionHistoryTable';
import { SitesHeader } from '../../layouts/SitesHeader';
import { SitesDashboardFilters } from '../../types';
import { DEFAULT_DASHBOARD_FILTERS } from '../../utils/constants';

const styles = {
	screenContent: {
		width: '100%',
		padding: '42px 65px 65px 32px',
		display: 'flex',
		flexDirection: 'column',
	},
};

export const Transactions = () => {
	const [filters, setFilters] = useState<SitesDashboardFilters>(DEFAULT_DASHBOARD_FILTERS);

	return (
		<Box sx={styles.screenContent}>
			<SitesHeader filters={filters} setFilters={setFilters} />
			<Box>
				<TransactionHistoryTable filters={filters} />
			</Box>
		</Box>
	);
};
