import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { SitesDashboardFilters } from '../../types';
import { DEFAULT_DASHBOARD_FILTERS } from '../../utils/constants';
import SitesDashboardHeader from '../../layouts/SitesDashboardHeader';
import { useGetCompany } from '../../api/accountUI/company';
import { Spinner } from '../../components/Spinner';
import { CompanyOverview } from '../../components/CompanyOverview';

export const styles = {
	screenContent: {
		width: '100%',
		padding: '42px 65px 65px 32px',
		display: 'flex',
		flexDirection: 'column',
		overflowY: 'auto',
	},
	companyBreadcrumb: { paddingTop: '36px' },
};

export const Company = () => {
	let { id: companyId } = useParams();

	const [filters, setFilters] = useState<SitesDashboardFilters>(DEFAULT_DASHBOARD_FILTERS);
	const { data: company, isLoading: isLoadingCompany } = useGetCompany(companyId ?? '0', {
		filters,
	});

	return (
		<Box sx={styles.screenContent}>
			<SitesDashboardHeader filters={filters} setFilters={setFilters} />

			{isLoadingCompany ? (
				<Spinner />
			) : (
				<Box>
					<Box sx={styles.companyBreadcrumb}>Company {company?.name ?? ''}</Box>
					<CompanyOverview filters={filters} />
				</Box>
			)}
		</Box>
	);
};
