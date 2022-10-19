import React, { useState } from 'react';
import { Box } from '@mui/material';
import { SitesDashboardFilters } from '../../types';
import SitesDashboardHeader from '../../layouts/SitesDashboardHeader';
import { DEFAULT_DASHBOARD_FILTERS } from '../../utils/constants';
import { OperationsOverview } from '../../components/OperationsOverview';

const styles = {
	screenContent: {
		width: '100%',
		padding: '42px 65px 65px 32px',
		display: 'flex',
		flexDirection: 'column',
		overflowY: 'auto',
	},
};

export const Home = () => {
	const [filters, setFilters] = useState<SitesDashboardFilters>(DEFAULT_DASHBOARD_FILTERS);

	return (
		<Box sx={styles.screenContent}>
			<SitesDashboardHeader filters={filters} setFilters={setFilters} />
			<OperationsOverview filters={filters} />
		</Box>
	);
};
