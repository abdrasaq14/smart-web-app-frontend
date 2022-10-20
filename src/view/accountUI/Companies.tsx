import React, { useState } from 'react';
import { Box } from '@mui/material';
import { SitesDashboardFilters } from '../../types';
import { DEFAULT_DASHBOARD_FILTERS } from '../../utils/constants';
import { SearchHeader } from '../../layouts/SearchHeader';
import { useGetCompanies } from '../../api/accountUI/companies';
import { Spinner } from '../../components/Spinner';
import { Link } from 'react-router-dom';

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
	const { data: companies, isLoading, isError } = useGetCompanies({ filters });

	if (isLoading) {
		return <Spinner />;
	} else if (isError) {
		return <Box>Error fetching data...</Box>;
	}

	return (
		<Box sx={styles.screenContent}>
			<SearchHeader
				filters={filters}
				setFilters={setFilters}
				searchPlaceholder="Search for alert, deals and more..."
			/>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '32px' }}>
				<Box>
					{companies?.results?.map((company) => (
						<Box key={company.id} sx={{ padding: '32px' }}>
							<Box sx={{ padding: '32px' }}>
								<Link to={company.id.toString()}>{company.name}</Link>
							</Box>
							<ul>
								{company.users.map((user) => (
									<li>{`${user.name}  ${user.date}`}</li>
								))}
							</ul>
						</Box>
					))}
				</Box>
				<Box sx={{ width: '320px' }}>Create company form</Box>
			</Box>
		</Box>
	);
};
