import React, { useState } from 'react';
import { Box } from '@mui/material';
import { ValueCard } from '../../components/ValueCard';
import { GraphCard } from '../../components/GraphCard';
import { AlertHistoryTable } from '../../components/Tables/AlertHistoryTable';
import { useGetOperationsHomeCardsData } from '../../api/operations/operationsHome/cardsData';
import SitesMonitored from '../../components/Charts/SitesMonitoredChart';
import LoadProfileChart from '../../components/Charts/LoadProfileChart';
import PowerConsumptionChart from '../../components/Charts/PowerConsumptionChart';
import { formatToUSlocale } from '../../utils/formatters';
import { SitesDashboardFilters } from '../../types';
import SitesDashboardHeader from '../../layouts/SitesDashboardHeader';
import { DEFAULT_DASHBOARD_FILTERS } from '../../utils/constants';

const styles = {
	screenContent: {
		width: '100%',
		padding: '42px 65px 65px 32px',
		display: 'flex',
		flexDirection: 'column',
		overflowY: 'auto',
	},

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
	const [filters, setFilters] = useState<SitesDashboardFilters>(DEFAULT_DASHBOARD_FILTERS);

	const {
		data: cardsData,
		isLoading: isCardsDataLoading,
		isError: isCardsDataError,
	} = useGetOperationsHomeCardsData({ filters });

	return (
		<Box sx={styles.screenContent}>
			<SitesDashboardHeader filters={filters} setFilters={setFilters} />

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
