import React, { useState } from 'react';
import { Box } from '@mui/material';
import { TransactionHistoryTable } from '../../components/Tables/TransactionHistoryTable';
import { SitesDashboardFilters } from '../../types';
import { DEFAULT_DASHBOARD_FILTERS } from '../../utils/constants';
import { TransactionsHeaders } from '../../layouts/TransactionsHeader';
import { useGetMe } from '../../api/me';

const styles = {
	screenContent: {
		width: '100%',
		padding: '42px 65px 65px 32px',
		display: 'flex',
		flexDirection: 'column',
	},
};

export const Transactions = () => {
	const { data: me } = useGetMe();
	const myCompanies = me ? me?.companies.map((company) => company.id) : null;
	const myCompaniesDefaultFilters = myCompanies
		? {
				...DEFAULT_DASHBOARD_FILTERS,
				companies: myCompanies,
		  }
		: DEFAULT_DASHBOARD_FILTERS;
	const [filters, setFilters] = useState<SitesDashboardFilters>(myCompaniesDefaultFilters);

	return (
		<Box sx={styles.screenContent}>
			<TransactionsHeaders filters={filters} setFilters={setFilters} />
			<Box>
				<TransactionHistoryTable filters={filters} />
			</Box>
		</Box>
	);
};
