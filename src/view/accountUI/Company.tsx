import React, { useState } from 'react';
import { Box, Grid, Tab, Tabs } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { SitesDashboardFilters } from '../../types';
import { DEFAULT_DASHBOARD_FILTERS } from '../../utils/constants';
import SitesDashboardHeader from '../../layouts/SitesDashboardHeader';
import { useGetCompany } from '../../api/accountUI/company';
import { Spinner } from '../../components/Spinner';
import { ManagerOverview } from '../../components/ManagerOverview';
import { a11yProps, TabPanel } from '../../components/TabPanel';
import { OperationsOverview } from '../../components/OperationsOverview';
import { FinanceOverview } from '../../components/FinanceOverview';
import { UserLogsTable } from '../../components/Tables/UserLogsTable';
import { RegularButton } from '../../components/Button';
import { handleEmailClick } from '../../utils/utils';

export const styles = {
	screenContent: {
		width: '90%',
		// padding: '16px',
		margin: '16px',
		paddingRight: '8px',
		display: 'flex',
		flexDirection: 'column',
		overflowY: 'auto',
	},
	companyBreadcrumb: { paddingTop: '18px' },
};

export const Company = () => {
	const { id: companyId } = useParams();
	const navigate = useNavigate();

	const companyDefaultFilters = companyId
		? {
				...DEFAULT_DASHBOARD_FILTERS,
				companies: [companyId],
		  }
		: DEFAULT_DASHBOARD_FILTERS;

	const [filters, setFilters] = useState<SitesDashboardFilters>(companyDefaultFilters);
	const { data: company, isLoading: isLoadingCompany } = useGetCompany(companyId ?? '0');

	const [tabValue, setTabValue] = React.useState(0);

	const handleTabValueChange = (event: React.SyntheticEvent, newValue: number) => {
		setTabValue(newValue);
	};

	return (
		<Box sx={styles.screenContent}>
			<SitesDashboardHeader filters={filters} setFilters={setFilters} />

			{isLoadingCompany ? (
				<Spinner />
			) : (
				<Box>
					<Box sx={styles.companyBreadcrumb}>Company {company?.name ?? ''}</Box>
					<Grid container spacing={1} sx={{ marginBottom: '16px' }}>
						<Grid item lg={7} md={12} sm={12} order={{ lg: 1, md: 2, sm: 2, xs: 2 }}>
							<Tabs
								value={tabValue}
								onChange={handleTabValueChange}
								aria-label="basic tabs example"
							>
								<Tab label="Overview" {...a11yProps(0)} />
								<Tab label="Operation" {...a11yProps(1)} />
								<Tab label="Finance" {...a11yProps(2)} />
								<Tab label="Log Book" {...a11yProps(3)} />
							</Tabs>
						</Grid>
						<Grid
							item
							lg={5}
							md={12}
							sm={12}
							order={{ lg: 2, md: 1, sm: 1, xs: 1 }}
							sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
						>
							<Box sx={{ display: 'flex', justifyContent: 'space-between', width: '370px' }}>
								<RegularButton
									label="Add device"
									onClick={() => {
										navigate(`/account-ui/companies/${companyId}/add-device`);
										// handleEmailClick("device")
									}}
								/>
								<RegularButton
									label="Add employee"
									onClick={() => {
										navigate(`/account-ui/companies/${companyId}/add-employee`);
										// handleEmailClick("employee")
									}}
								/>
							</Box>
						</Grid>
					</Grid>
					<Box>
						<TabPanel value={tabValue} index={0}>
							<ManagerOverview filters={filters} />
						</TabPanel>
						<TabPanel value={tabValue} index={1}>
							<OperationsOverview filters={filters} />
						</TabPanel>
						<TabPanel value={tabValue} index={2}>
							<FinanceOverview filters={filters} />
						</TabPanel>
						<TabPanel value={tabValue} index={3}>
							<UserLogsTable filters={filters} />
						</TabPanel>
					</Box>
				</Box>
			)}
		</Box>
	);
};
