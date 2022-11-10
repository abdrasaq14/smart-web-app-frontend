import React from 'react';
import { SitesDashboardFilters } from '../types';
import { Box } from '@mui/material';
import { formatToUSlocale } from '../utils/formatters';
import SitesMonitored from './Charts/SitesMonitoredChart';
import LoadProfileChart from './Charts/LoadProfileChart';
import PowerConsumptionChart from './Charts/PowerConsumptionChart';
import { GraphCard } from './GraphCard';
import { AlertHistoryTable } from './Tables/AlertHistoryTable';
import ValueCardSolo from './ValueCardSolo';
import { CARD_HANDLER } from '../api/cardsHandlers';

const styles = {
	cardRow: { display: 'flex', justifyContent: 'space-between', paddingTop: '36px' },
	chartsRow: { display: 'flex', justifyContent: 'space-between' },
	lastRow: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
		marginTop: '32px',
		height: '430px',
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
	return (
		<Box>
			<Box sx={styles.cardRow}>
				<ValueCardSolo
					cardType="total_consumption"
					field="total_consumption"
					label="Total Consumtion (kWh)"
					handler={CARD_HANDLER.OPERATIONS}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
				<ValueCardSolo
					cardType="current_load"
					field="current_load"
					label="Current Load (kW)"
					handler={CARD_HANDLER.OPERATIONS}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
				<ValueCardSolo
					cardType="availability"
					field="avg_availability"
					label="Avg. Availability"
					handler={CARD_HANDLER.OPERATIONS}
					filters={filters}
					formatter={(value) => `${value} hrs`}
				/>
				<ValueCardSolo
					cardType="availability"
					field="power_cuts"
					label="Power Cut"
					handler={CARD_HANDLER.OPERATIONS}
					filters={filters}
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
					<ValueCardSolo
						cardType="overloaded_dts"
						field="overloaded_dts"
						label="Overloaded DTs"
						handler={CARD_HANDLER.OPERATIONS}
						filters={filters}
					/>
					<ValueCardSolo
						cardType="sites"
						field="sites_under_maintenance"
						label="Sites under maintenance"
						handler={CARD_HANDLER.OPERATIONS}
						filters={filters}
					/>
				</Box>
			</Box>
		</Box>
	);
};
