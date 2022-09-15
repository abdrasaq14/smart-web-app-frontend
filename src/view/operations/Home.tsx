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
import { getCardsDataForOperationsHome } from '../../api/operationsHome/cardsData';
import SitesMonitored from '../../components/Charts/SitesMonitoredChart';
import LoadProfileChart from '../../components/Charts/LoadProfileChart';
import PowerConsumptionChart from '../../components/Charts/PowerConsumptionChart';
import { formatToUSlocale } from '../../utils/formatters';

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
	lastRow: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
		marginTop: '32px',
		height: '360px',
	},
	alertHistoryTable: { width: '784px', height: '100%' },
	lastRowCards: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '100%',
	},
};

export const Home = () => {
	const navigate = useNavigate();
	const {
		data: cardsData,
		isLoading: isCardsDataLoading,
		isError: isCardsDataError,
	} = useQuery(['operationsHomeCardsData'], getCardsDataForOperationsHome);

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

			<Box>
				<Box sx={styles.cardRow}>
					<ValueCard
						value={formatToUSlocale(cardsData?.totalConsumption)}
						label="Total Consumtion (kWh)"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
					<ValueCard
						value={formatToUSlocale(cardsData?.currentLoad)}
						label="Current Load (kW)"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
					<ValueCard
						value={`${cardsData?.avgAvailability} hrs`}
						label="Avg. Availability"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
					<ValueCard
						value={cardsData?.powerCuts}
						label="Power Cut"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
				</Box>
				<Box sx={styles.chartsRow}>
					<SitesMonitored />
					<LoadProfileChart />
					<PowerConsumptionChart />
				</Box>
				<Box sx={styles.lastRow}>
					<Box sx={styles.alertHistoryTable}>
						<GraphCard title="Alert History">
							<AlertHistoryTable />
						</GraphCard>
					</Box>
					<Box sx={styles.lastRowCards}>
						<ValueCard
							value={cardsData?.overloadedDTs}
							label="Overloaded DTs"
							isLoading={isCardsDataLoading}
							isError={isCardsDataError}
						/>
						<ValueCard
							value={cardsData?.sitesUnderMaintenance}
							label="Sites under maintenance"
							isLoading={isCardsDataLoading}
							isError={isCardsDataError}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
