import React, { useState } from 'react';
import { Box } from '@mui/material';
import { SitesDashboardFilters } from '../../types';
import { DEFAULT_DASHBOARD_FILTERS } from '../../utils/constants';
import { SearchHeader } from '../../layouts/SearchHeader';
import { Spinner } from '../../components/Spinner';
import { Link, useParams } from 'react-router-dom';
import { useGetDevices } from '../../api/accountUI/devices';
import AddDeviceForm from '../../components/Forms/AddDeviceForm';

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
	const { data: devices, isLoading, isError } = useGetDevices({ filters });

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
					{devices?.results?.map((device) => (
						<Box key={device.id} sx={{ padding: '32px' }}>
							<Box sx={{ padding: '32px' }}>
								<Link to={device.id.toString()}>{device.name}</Link>
							</Box>
						</Box>
					))}
				</Box>
				<Box sx={{ width: '320px' }}>
					<AddDeviceForm filters={filters} />
				</Box>
			</Box>
		</Box>
	);
};
