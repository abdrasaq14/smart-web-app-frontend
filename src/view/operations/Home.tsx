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
import { getDataForOperationsHome } from '../../api/operationsHome';
import { ApiOperationsHome } from '../../api/operationsHome/types';
import SitesMonitored from '../../components/Charts/SitesMonitoredChart';
import LoadProfileChart from '../../components/Charts/LoadProfileChart';
import { Spinner } from '../../componentes/Spinner';
import PowerConsumptionChart from '../../components/Charts/PowerConsumptionChart';

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
	chartsRow: { display: 'flex', justifyContent: 'space-between' },
	lastRow: { display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '32px' },
	alertHistoryTable: { width: '784px' },
	lastRowCards: { display: 'flex', flexDirection: 'column' },
};

export const Home = () => {
	const navigate = useNavigate();
	const { data, isLoading, isError } = useQuery(['operationsHome'], getDataForOperationsHome);

	const SuccessCell = ({ data }: { data: ApiOperationsHome }) => {
		return (
			<Box>
				<Box sx={styles.cardRow}>
					<ValueCard value={data.cardsData.totalConsumption} label="Total Consumtion (kWh)" />
					<ValueCard value={data.cardsData.currentLoad} label="Current Load (kW)" />
					<ValueCard value={`${data.cardsData.avgAvailability} hrs`} label="Avg. Availability" />
					<ValueCard value={data.cardsData.powerCuts} label="Power Cut" />
				</Box>
				<Box sx={styles.chartsRow}>
					<SitesMonitored data={data.chartsData.sitesMonitored} />
					<LoadProfileChart title="Load Profile (KW)" data={data.chartsData.loadProfile.data} />
					<PowerConsumptionChart />
				</Box>
				<Box sx={styles.lastRow}>
					<Box sx={styles.alertHistoryTable}>
						<GraphCard title="Alert History">
							<AlertHistoryTable />
						</GraphCard>
					</Box>
					<Box sx={styles.lastRowCards}>
						<ValueCard value={data.cardsData.overloadedDTs} label="Overloaded DTs" />
						<ValueCard
							value={data.cardsData.sitesUnderMaintenance}
							label="Sites under maintenance"
						/>
					</Box>
				</Box>
			</Box>
		);
	};

	const renderCell = () => {
		if (isError) {
			return <div>There was an error...</div>;
		} else if (isLoading) {
			return <Spinner />;
		} else if (data != null) {
			return <SuccessCell data={data} />;
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

			{renderCell()}
		</Box>
	);
};
