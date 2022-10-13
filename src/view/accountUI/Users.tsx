import React, { useState } from 'react';
import { Box } from '@mui/material';
import { DEFAULT_DASHBOARD_FILTERS } from '../../utils/constants';
import { SitesDashboardFilters } from '../../types';
import { UsersHeader } from '../../layouts/UsersHeader';
import { UsersTable } from '../../components/Tables/UsersTable';

const styles = {
	screenContent: {
		width: '100%',
		padding: '42px 65px 65px 32px',
		display: 'flex',
		flexDirection: 'column',
	},
};

export const Users = () => {
	const [filters, setFilters] = useState<SitesDashboardFilters>(DEFAULT_DASHBOARD_FILTERS);
	return (
		<Box sx={styles.screenContent}>
			<UsersHeader filters={filters} setFilters={setFilters} />
			<Box>
				<UsersTable filters={filters} />
			</Box>
		</Box>
	);
};
