import React, { useState } from 'react';
import { Box } from '@mui/material';
import { SitesDashboardFilters } from '../../types';
import { DEFAULT_DASHBOARD_FILTERS } from '../../utils/constants';
import DateFiltersHeader from '../../layouts/DateFiltersHeader';
import { CompanyOverview } from '../../components/CompanyOverview';

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
			<DateFiltersHeader filters={filters} setFilters={setFilters} />
			<CompanyOverview filters={filters} />
		</Box>
	);
};
