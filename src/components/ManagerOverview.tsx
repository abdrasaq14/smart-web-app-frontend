import { SitesDashboardFilters } from '../types';
import { Grid } from '@mui/material';
import { formatToUSlocale } from '../utils/formatters';
import { GraphCard } from './GraphCard';
import PowerConsumptionChart from './Charts/PowerConsumptionChart';
import RevenueChart from './Charts/RevenueChart';
import React from 'react';
import { CARD_HANDLER } from '../api/cardsHandlers';
import ValueCardSolo from './ValueCardSolo';

export const styles = {
	displayCenter: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
};
export const ManagerOverview = ({ filters }: { filters: SitesDashboardFilters }) => {
	return (
		<Grid container spacing={1}>
			<Grid item lg={3} md={6} sm={12} sx={styles.displayCenter}>
				<ValueCardSolo
					cardType="revenue_losses"
					field="total_revenue"
					label="Total Revenue (N)"
					handler={CARD_HANDLER.MANAGER}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
			</Grid>
			<Grid item lg={3} md={6} sm={12} sx={styles.displayCenter}>
				<ValueCardSolo
					cardType="revenue_losses"
					field="atc_losses"
					label="AT&C Losses (%)"
					handler={CARD_HANDLER.MANAGER}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
			</Grid>
			<Grid item lg={3} md={6} sm={12} sx={styles.displayCenter}>
				<ValueCardSolo
					cardType="total_consumption"
					field="total_consumption"
					label="Total consumption (kWh)"
					handler={CARD_HANDLER.MANAGER}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
			</Grid>
			<Grid item lg={3} md={6} sm={12} sx={styles.displayCenter}>
				<ValueCardSolo
					cardType="current_load"
					field="current_load"
					label="Current Load (kW)"
					handler={CARD_HANDLER.MANAGER}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
			</Grid>

			<Grid item lg={8} md={6} sm={12} sx={styles.displayCenter}>
				<Grid container spacing={1}>
					<Grid item lg={12} md={12} sm={12} sx={styles.displayCenter}>
						<GraphCard title="Map">
							<img src="map.png" alt="Smarterise" style={{ width: '100%', height: '460px' }} />
						</GraphCard>
					</Grid>
					<Grid item lg={4} md={12} sm={12} sx={styles.displayCenter}>
						<ValueCardSolo
							cardType="current_load"
							field="number_of_sites"
							label="Number of sites"
							handler={CARD_HANDLER.MANAGER}
							filters={filters}
							formatter={(value) => formatToUSlocale(value)}
						/>
					</Grid>
					<Grid item lg={4} md={12} sm={12} sx={styles.displayCenter}>
						<ValueCardSolo
							cardType="current_load"
							field="number_of_users"
							label="Number of users"
							handler={CARD_HANDLER.MANAGER}
							filters={filters}
							formatter={(value) => formatToUSlocale(value)}
						/>
					</Grid>
					<Grid item lg={4} md={12} sm={12} sx={styles.displayCenter}>
						<ValueCardSolo
							cardType="current_load"
							field="pending_alerts"
							label="Pending alerts"
							handler={CARD_HANDLER.MANAGER}
							filters={filters}
							formatter={(value) => formatToUSlocale(value)}
						/>
					</Grid>
				</Grid>
			</Grid>
			<Grid item lg={4} md={6} sm={12} sx={styles.displayCenter}>
				<Grid container spacing={1}>
					<Grid item lg={12} md={12} sm={12}>
						<PowerConsumptionChart filters={filters} />
					</Grid>
					<Grid item lg={12} md={12} sm={12}>
						<RevenueChart filters={filters} />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
