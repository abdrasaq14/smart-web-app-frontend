import React from 'react';
import { SitesDashboardFilters } from '../types';
import { Box, Grid } from '@mui/material';
import { formatToUSlocale } from '../utils/formatters';
import SitesMonitored from './Charts/SitesMonitoredChart';
import LoadProfileChart from './Charts/LoadProfileChart';
import PowerConsumptionChart from './Charts/PowerConsumptionChart';
import { GraphCard } from './GraphCard';
import { AlertHistoryTable } from './Tables/AlertHistoryTable';
import ValueCardSolo from './ValueCardSolo';
import { CARD_HANDLER } from '../api/cardsHandlers';
import PendingAlertsValueCard from './PendingAlertsValueCard';

const styles = {
	table: { width: '100%' },
	displayCenter: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
};

export const OperationsOverview = ({ filters }: { filters: SitesDashboardFilters }) => {
	return (
		<Grid container spacing={1}>
			<Grid item lg={3} md={6} sm={12} sx={styles.displayCenter}>
				<ValueCardSolo
					cardType="total_consumption"
					field="total_consumption"
					label="Total Consumtion (kWh)"
					handler={CARD_HANDLER.OPERATIONS}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
			</Grid>
			<Grid item lg={3} md={6} sm={12} sx={styles.displayCenter}>
				<ValueCardSolo
					cardType="current_load"
					field="current_load"
					label="Current Load (kW)"
					handler={CARD_HANDLER.OPERATIONS}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
			</Grid>
			<Grid item lg={3} md={6} sm={12} sx={styles.displayCenter}>
				<ValueCardSolo
					cardType="availability"
					field="avg_availability"
					label="Avg. Availability (hrs)"
					handler={CARD_HANDLER.OPERATIONS}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
			</Grid>
			<Grid item lg={3} md={6} sm={12} sx={styles.displayCenter}>
				<ValueCardSolo
					cardType="availability"
					field="power_cuts"
					label="Power Cut"
					handler={CARD_HANDLER.OPERATIONS}
					filters={filters}
				/>
			</Grid>

			<Grid item lg={3} md={12} sm={12} sx={styles.displayCenter}>
				<SitesMonitored filters={filters} />
			</Grid>
			<Grid item lg={6} md={12} sm={12} sx={styles.displayCenter}>
				<LoadProfileChart filters={filters} />
			</Grid>
			<Grid item lg={3} md={12} sm={12} sx={styles.displayCenter}>
				<PowerConsumptionChart filters={filters} />
			</Grid>

			<Grid item lg={9} md={12} sm={12}>
				<Box sx={styles.table}>
					<GraphCard title="Alert History">
						<AlertHistoryTable filters={filters} />
					</GraphCard>
				</Box>
			</Grid>
			<Grid item lg={3} md={12} sm={12}>
				<Grid container spacing={1}>
					<Grid item lg={12} md={6} sm={6}>
						<ValueCardSolo
							cardType="overloaded_dts"
							field="overloaded_dts"
							label="Overloaded DTs"
							handler={CARD_HANDLER.OPERATIONS}
							filters={filters}
						/>
					</Grid>
					<Grid item lg={12} md={6} sm={6}>
						<PendingAlertsValueCard
							// cardType="sites"
							field="count"
							label="Sites under maintenance"
							handler={CARD_HANDLER.PENDING_ALERTS}
							filters={{ ...filters, status: 'pending' }}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
