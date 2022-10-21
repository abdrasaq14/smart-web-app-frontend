import React, { useState } from 'react';
import { Box } from '@mui/material';
import { SitesDashboardFilters } from '../../types';
import { DEFAULT_DASHBOARD_FILTERS } from '../../utils/constants';
import { SearchHeader } from '../../layouts/SearchHeader';
import AddCompanyForm from '../../components/Forms/AddCompanyForm';
import { CompaniesTable } from '../../components/Tables/CompaniesTable';

const styles = {
	screenContent: {
		width: '100%',
		padding: '42px 65px 65px 32px',
		display: 'flex',
		flexDirection: 'column',
	},
};

export const Companies = () => {
	const [filters, setFilters] = useState<SitesDashboardFilters>(DEFAULT_DASHBOARD_FILTERS);

	return (
		<Box sx={styles.screenContent}>
			<SearchHeader
				filters={filters}
				setFilters={setFilters}
				searchPlaceholder="Search for alert, deals and more..."
			/>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '32px' }}>
				<Box>
					<CompaniesTable filters={filters} />
				</Box>
				<Box sx={{ width: '320px' }}>
					<AddCompanyForm />
				</Box>
			</Box>
		</Box>
	);
};
