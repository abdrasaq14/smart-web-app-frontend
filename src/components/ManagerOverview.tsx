import { SitesDashboardFilters } from '../types';
import { Box } from '@mui/material';
import { formatToUSlocale } from '../utils/formatters';
import { GraphCard } from './GraphCard';
import PowerConsumptionChart from './Charts/PowerConsumptionChart';
import RevenueChart from './Charts/RevenueChart';
import React from 'react';
import { CARD_HANDLER } from '../api/cardsHandlers';
import ValueCardSolo from './ValueCardSolo';

export const styles = {
	cardRow: { display: 'flex', justifyContent: 'space-between', paddingTop: '18px' },
	mapCardsAndChartsRow: { display: 'flex', justifyContent: 'space-between', paddingTop: '18px' },
	mapAndCardsColumn: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
	mapRow: { width: '775px', height: '500px' },
	mapImage: {},
	cardsBottomRow: { display: 'flex', justifyContent: 'space-between' },
	chartsColumn: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
};
export const ManagerOverview = ({ filters }: { filters: SitesDashboardFilters }) => {
	return (
		<Box>
			<Box sx={styles.cardRow}>
				<ValueCardSolo
					cardType="revenue_losses"
					field="total_revenue"
					label="Total Revenue (N)"
					handler={CARD_HANDLER.MANAGER}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
				<ValueCardSolo
					cardType="revenue_losses"
					field="atc_losses"
					label="AT&C Losses (%)"
					handler={CARD_HANDLER.MANAGER}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
				<ValueCardSolo
					cardType="total_consumption"
					field="total_consumption"
					label="Total consumption (kWh)"
					handler={CARD_HANDLER.MANAGER}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
				<ValueCardSolo
					cardType="current_load"
					field="current_load"
					label="Current Load (kW)"
					handler={CARD_HANDLER.MANAGER}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
			</Box>
			<Box sx={styles.mapCardsAndChartsRow}>
				<Box sx={styles.mapAndCardsColumn}>
					<Box sx={styles.mapRow}>
						<GraphCard title="Map">
							<img src="map.png" alt="Smarterise" style={styles.mapImage} />
						</GraphCard>
					</Box>
					<Box sx={styles.cardsBottomRow}>
						<ValueCardSolo
							cardType="current_load"
							field="number_of_sites"
							label="Number of sites"
							handler={CARD_HANDLER.MANAGER}
							filters={filters}
							formatter={(value) => formatToUSlocale(value)}
						/>
						<ValueCardSolo
							cardType="current_load"
							field="number_of_users"
							label="Number of users"
							handler={CARD_HANDLER.MANAGER}
							filters={filters}
							formatter={(value) => formatToUSlocale(value)}
						/>
						<ValueCardSolo
							cardType="current_load"
							field="pending_alerts"
							label="Pending alerts"
							handler={CARD_HANDLER.MANAGER}
							filters={filters}
							formatter={(value) => formatToUSlocale(value)}
						/>
					</Box>
				</Box>
				<Box sx={styles.chartsColumn}>
					<PowerConsumptionChart filters={filters} />
					<RevenueChart filters={filters} />
				</Box>
			</Box>
		</Box>
	);
};
