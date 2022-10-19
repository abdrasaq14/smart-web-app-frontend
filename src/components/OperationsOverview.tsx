import React from 'react';
import { SitesDashboardFilters } from '../types';
import { useGetOperationsHomeCardsData } from '../api/operations/operationsHome/cardsData';
import { Box } from '@mui/material';
import { ValueCard } from './ValueCard';
import { formatToUSlocale } from '../utils/formatters';
import SitesMonitored from './Charts/SitesMonitoredChart';
import LoadProfileChart from './Charts/LoadProfileChart';
import PowerConsumptionChart from './Charts/PowerConsumptionChart';
import { GraphCard } from './GraphCard';
import { AlertHistoryTable } from './Tables/AlertHistoryTable';

const styles = {
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

export const OperationsOverview = ({ filters }: { filters: SitesDashboardFilters }) => {
	const {
		data: cardsData,
		isLoading: isCardsDataLoading,
		isError: isCardsDataError,
	} = useGetOperationsHomeCardsData({ filters });

	return (
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
	);
};
