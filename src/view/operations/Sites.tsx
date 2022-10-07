import React, { useState } from 'react';
import { Box } from '@mui/material';
import { SitesTable } from '../../components/Tables/SitesTable';
import { useGetSites } from '../../api/operations/operationsSites';
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
	cardRow: { display: 'flex', justifyContent: 'space-between', paddingTop: '36px' },
};

export const Sites = () => {
	const [filters, setFilters] = useState<SitesDashboardFilters>(DEFAULT_DASHBOARD_FILTERS);
	const { data, isLoading, isError } = useGetSites({ filters });

	const renderCell = () => {
		if (isError) {
			return <div>There was an error...</div>;
		} else if (isLoading) {
			return <div>Loading...</div>;
		} else if (data && data.results.length > 0) {
			return <SitesTable filters={filters} />;
		} else {
			return <div>Empty data</div>;
		}
	};

	return (
		<Box sx={styles.screenContent}>
			<SitesHeader filters={filters} setFilters={setFilters} />
			<Box>{renderCell()}</Box>
		</Box>
	);
};
