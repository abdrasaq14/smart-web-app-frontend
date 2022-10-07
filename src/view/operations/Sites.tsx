import React, { useState } from 'react';
import { Box } from '@mui/material';
import { SitesTable } from '../../components/Tables/SitesTable';
import { SitesDashboardFilters } from '../../types';
import { DEFAULT_DASHBOARD_FILTERS } from '../../utils/constants';
import { SitesHeader } from '../../layouts/SitesHeader';

const styles = {
	screenContent: {
		width: '100%',
		padding: '42px 65px 65px 32px',
		display: 'flex',
		flexDirection: 'column',
	},
};

export const Sites = () => {
	const [filters, setFilters] = useState<SitesDashboardFilters>(DEFAULT_DASHBOARD_FILTERS);

	return (
		<Box sx={styles.screenContent}>
			<SitesHeader filters={filters} setFilters={setFilters} />
			<Box>
				<SitesTable filters={filters} />
			</Box>
		</Box>
	);
};
