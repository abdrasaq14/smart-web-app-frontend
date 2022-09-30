import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Logout, NotificationsOutlined, PersonOutlined } from '@mui/icons-material';
import { ValueCard } from '../../components/ValueCard';
import { GraphCard } from '../../components/GraphCard';
import { AlertHistoryTable } from '../../components/Tables/AlertHistoryTable';
import { RegularButton } from '../../components/Button';
import { IconButton } from '../../components/IconButton';
import { useNavigate } from 'react-router-dom';
import { useGetOperationsHomeCardsData } from '../../api/operations/operationsHome/cardsData';
import SitesMonitored from '../../components/Charts/SitesMonitoredChart';
import LoadProfileChart from '../../components/Charts/LoadProfileChart';
import PowerConsumptionChart from '../../components/Charts/PowerConsumptionChart';
import { formatToUSlocale } from '../../utils/formatters';
import { useGetSites } from '../../api/operations/operationsSites';
import { ControlledDropdown } from '../../components/ControlledDropdown';
import ControlledDatePicker from '../../components/ControlledDatePicker';

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
		height: '380px',
	},
	table: { width: '784px', height: '100%' },
	lastRowCards: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '100%',
	},
};

export const Home = () => {
	const [sites, setSites] = useState([]);
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const navigate = useNavigate();
	const filters = { sites, start_date: startDate, end_date: endDate };
	const {
		data: cardsData,
		isLoading: isCardsDataLoading,
		isError: isCardsDataError,
	} = useGetOperationsHomeCardsData({
		filters,
	});
	const { data: sitesData } = useGetSites();

	return (
		<Box sx={styles.screenContent}>
			<Box sx={styles.header}>
				<Box sx={styles.filters}>
					<ControlledDropdown
						multiselect={true}
						label="Site(s)"
						options={sitesData?.results.map((site) => ({ label: site.name, value: site.id })) ?? []}
						value={sites}
						setValue={setSites}
					/>
					<ControlledDatePicker label="Start Date" value={startDate} setValue={setStartDate} />
					<ControlledDatePicker label="End Date" value={endDate} setValue={setEndDate} />
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
						value={formatToUSlocale(cardsData?.total_consumption)}
						label="Total Consumtion (kWh)"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
					<ValueCard
						value={formatToUSlocale(cardsData?.current_load)}
						label="Current Load (kW)"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
					<ValueCard
						value={`${cardsData?.avg_availability} hrs`}
						label="Avg. Availability"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
					<ValueCard
						value={cardsData?.power_cuts}
						label="Power Cut"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
				</Box>
				<Box sx={styles.chartsRow}>
					<SitesMonitored filters={filters} />
					<LoadProfileChart filters={filters} />
					<PowerConsumptionChart filters={filters} />
				</Box>
				<Box sx={styles.lastRow}>
					<Box sx={styles.table}>
						<GraphCard title="Alert History">
							<AlertHistoryTable filters={filters} />
						</GraphCard>
					</Box>
					<Box sx={styles.lastRowCards}>
						<ValueCard
							value={cardsData?.overloaded_dts}
							label="Overloaded DTs"
							isLoading={isCardsDataLoading}
							isError={isCardsDataError}
						/>
						<ValueCard
							value={cardsData?.sites_under_maintenance}
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
