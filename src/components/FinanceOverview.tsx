import React from 'react';
import { SitesDashboardFilters } from '../types';
import { Box, Grid } from '@mui/material';
import { formatToUSlocale } from '../utils/formatters';
import CustomerBreakdownChart from './Charts/CustomerBreakdownChart';
import FinancialPerformance from './Charts/FinancialPerformance';
import RevenueChart from './Charts/RevenueChart';
import { GraphCard } from './GraphCard';
import { TransactionHistoryTable } from './Tables/TransactionHistoryTable';
import { CARD_HANDLER } from '../api/cardsHandlers';
import ValueCardSolo from './ValueCardSolo';

const styles = {
	table: { width: '100%' },
	displayCenter: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
};

export const FinanceOverview = ({ filters }: { filters: SitesDashboardFilters }) => {
	return (
		<Grid container spacing={1}>
			<Grid item lg={3} md={6} sm={12} sx={styles.displayCenter}>
				<ValueCardSolo
					cardType="atc_losses"
					field="total_revenue"
					label="Total Revenue (CFA)"
					handler={CARD_HANDLER.FINANCE}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
			</Grid>
			<Grid item lg={3} md={6} sm={12} sx={styles.displayCenter}>
				<ValueCardSolo
					cardType="atc_losses"
					field="atc_losses"
					label="ATC&C Losses (%)"
					handler={CARD_HANDLER.FINANCE}
					filters={filters}
					formatter={(value) => formatToUSlocale((value ?? 0) * 100, 1)}
				/>
			</Grid>
			<Grid item lg={3} md={6} sm={12} sx={styles.displayCenter}>
				<ValueCardSolo
					cardType="downtime_losses"
					field="downtime_losses"
					label="Downtime Losses (N)"
					handler={CARD_HANDLER.FINANCE}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
			</Grid>
			{/* <Grid item lg={3} md={6} sm={12} sx={styles.displayCenter}>
				<ValueCardSolo
					cardType="tariff_losses"
					field="tariff_losses"
					label="Tariff Losses (N)"
					handler={CARD_HANDLER.FINANCE}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
			</Grid> */}

			<Grid item lg={3} md={12} sm={12} sx={styles.displayCenter}>
				<CustomerBreakdownChart filters={filters} />
			</Grid>
			<Grid item lg={6} md={12} sm={12} sx={styles.displayCenter}>
				<FinancialPerformance filters={filters} />
			</Grid>
			<Grid item lg={3} md={12} sm={12} sx={styles.displayCenter}>
				<RevenueChart filters={filters} />
			</Grid>

			<Grid item lg={9} md={12} sm={12}>
				<Box sx={styles.table}>
					<GraphCard title="Transaction History">
						<TransactionHistoryTable filters={filters} />
					</GraphCard>
				</Box>
			</Grid>
			<Grid item lg={3} md={12} sm={12}>
				<Grid container spacing={1}>
					<Grid item lg={12} md={6} sm={6}>
						<ValueCardSolo
							cardType="highest_losses"
							field="highest_losses"
							label="Revenue/hour (NGN)"
							handler={CARD_HANDLER.FINANCE}
							filters={filters}
							formatter={(value) => formatToUSlocale(value)}
						/>
					</Grid>
					<Grid item lg={12} md={6} sm={6}>
						<ValueCardSolo
							cardType="highest_revenue"
							field="highest_revenue"
							label="Revenue/DT (NGN)"
							handler={CARD_HANDLER.FINANCE}
							filters={filters}
							formatter={(value) => formatToUSlocale(value)}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
