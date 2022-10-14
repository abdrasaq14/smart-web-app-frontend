import React from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const styles = {
	screenContent: {
		width: '100%',
		padding: '42px 65px 65px 32px',
		display: 'flex',
		flexDirection: 'column',
	},
};

export const Company = () => {
	let { id } = useParams();
	// const [filters, setFilters] = useState<SitesDashboardFilters>(DEFAULT_DASHBOARD_FILTERS);
	// const { data: companies, isLoading, isError } = useGetCompanies({ filters });

	// if (isLoading) {
	//     return <Spinner />;
	// } else if (isError) {
	//     return <Box>Error fetching data...</Box>;
	// }

	return <Box sx={styles.screenContent}>Company {id}</Box>;
};
