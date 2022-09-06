import React from 'react';
import { Box } from '@mui/material';
import { DatePickerDropdown } from '../../components/DatePickerDropdown';
import { Dropdown } from '../../components/Dropdown';
import { Logout, NotificationsOutlined, PersonOutlined } from '@mui/icons-material';
import { ValueCard } from '../../components/ValueCard';
import { GraphCard } from '../../components/GraphCard';
import { AlertHistoryTable } from '../../components/AlertHistoryTable';
import { RegularButton } from '../../components/Button';
import { IconButton } from '../../components/IconButton';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getAlertHistory } from '../../api/alertHistory';
import PieChart from '../../components/PieChart';
import PerformanceChart from '../../components/PerformanceChart';

const styles = {
	screenContent: {
		width: '100%',
		padding: '42px 65px 65px 32px',
		display: 'flex',
		flexDirection: 'column',
		overflowY: 'auto',
	},
	header: { display: 'flex', justifyContent: 'space-between', width: '100%', height: '56px' },
	filters: { display: 'flex', width: '730px', justifyContent: 'space-between' },
	headerIcons: { display: 'flex', alignItems: 'center' },
	cardRow: { display: 'flex', justifyContent: 'space-between', paddingTop: '36px' },
	chartsRow: { display: 'flex', justifyContent: 'space-around' },
};

export const Home = () => {
	const navigate = useNavigate();
	const { data, isLoading, isError } = useQuery(['operationsHome'], getAlertHistory);

	const renderCell = () => {
		if (isError) {
			return <div>There was an error...</div>;
		} else if (isLoading) {
			return <div>Loading...</div>;
		} else if (data && data.length > 0) {
			return <AlertHistoryTable data={data} />;
		} else {
			return <div>Empty data</div>;
		}
	};

	return (
		<Box sx={styles.screenContent}>
			<Box sx={styles.header}>
				<Box sx={styles.filters}>
					<Dropdown label="Site(s)" options={['site 1', 'site 2', 'site 3']} />
					<DatePickerDropdown label="Start Date" />
					<DatePickerDropdown label="End Date" />
					<RegularButton label="Download" onClick={() => {}} />
				</Box>
				<Box sx={styles.headerIcons}>
					<IconButton light Icon={NotificationsOutlined} onClick={() => {}} />
					<IconButton
						round
						Icon={PersonOutlined}
						onClick={() => navigate('/operations/myAccount')}
					/>
					<IconButton round Icon={Logout} onClick={() => navigate('/login')} />
				</Box>
			</Box>
			<Box sx={styles.cardRow}>
				<ValueCard value="32,727,658" label="Total Consumtion (kWh)" />
				<ValueCard value="2,727,121" label="Current Load (kW)" />
				<ValueCard value="20hrs" label="Avg. Availability" />
				<ValueCard value="5" label="Power Cut" />
			</Box>
			<Box sx={styles.chartsRow}>
				<PieChart cardTitle="Site monitored" pieTitle="12k Locations" />
				<PerformanceChart title="Load Profile (KW)" />
			</Box>
			<GraphCard title="Alert History">{renderCell()}</GraphCard>
		</Box>
	);
};
