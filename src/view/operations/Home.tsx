import React, { useState } from 'react';
import { Box } from '@mui/material';
import { SitesDashboardFilters } from '../../types';
import SitesDashboardHeader from '../../layouts/SitesDashboardHeader';
import { DEFAULT_DASHBOARD_FILTERS } from '../../utils/constants';
import { OperationsOverview } from '../../components/OperationsOverview';
import { useGetMe } from '../../api/me';

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
	const { data: me } = useGetMe();
	const myCompanies = me ? me?.companies.map((company:any) => company.id) : null;
	const myCompaniesDefaultFilters = myCompanies
		? {
				...DEFAULT_DASHBOARD_FILTERS,
				companies: myCompanies,
		  }
		: DEFAULT_DASHBOARD_FILTERS;
	const [filters, setFilters] = useState<SitesDashboardFilters>(myCompaniesDefaultFilters);

	return (
		<Box sx={styles.screenContent}>
			<SitesDashboardHeader filters={filters} setFilters={setFilters} />
			<OperationsOverview filters={filters} />
		</Box>
	);
};
