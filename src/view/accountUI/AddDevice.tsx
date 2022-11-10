import React, { useState } from 'react';
import { Box } from '@mui/material';
import { SitesDashboardFilters } from '../../types';
import { DEFAULT_DASHBOARD_FILTERS } from '../../utils/constants';
import { SearchHeader } from '../../layouts/SearchHeader';
import { useParams } from 'react-router-dom';
import AddDeviceForm from '../../components/Forms/AddDeviceForm';
import { DevicesTable } from '../../components/Tables/DevicesTable';

const styles = {
	screenContent: {
		width: '100%',
		padding: '42px 65px 65px 32px',
		display: 'flex',
		flexDirection: 'column',
	},
};

export const AddDevice = () => {
	const { id: companyId } = useParams();

	const companyDefaultFilters = companyId
		? {
				...DEFAULT_DASHBOARD_FILTERS,
				companies: [companyId],
		  }
		: DEFAULT_DASHBOARD_FILTERS;
	const [filters, setFilters] = useState<SitesDashboardFilters>(companyDefaultFilters);

	return (
		<Box sx={styles.screenContent}>
			<SearchHeader
				filters={filters}
				setFilters={setFilters}
				searchPlaceholder="Search for alert, deals and more..."
			/>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '32px' }}>
				<Box sx={{ width: '80%', marginRight: '16px' }}>
					<DevicesTable filters={filters} />
				</Box>
				<Box sx={{ width: '320px' }}>
					<AddDeviceForm filters={filters} />
				</Box>
			</Box>
		</Box>
	);
};
