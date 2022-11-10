import React from 'react';
import { SitesDashboardFilters } from '../types';
import { Box } from '@mui/material';
import { formatToUSlocale } from '../utils/formatters';
import CustomerBreakdownChart from './Charts/CustomerBreakdownChart';
import FinancialPerformance from './Charts/FinancialPerformance';
import RevenueChart from './Charts/RevenueChart';
import { GraphCard } from './GraphCard';
import { TransactionHistoryTable } from './Tables/TransactionHistoryTable';
import { CARD_HANDLER } from '../api/cardsHandlers';
import ValueCardSolo from './ValueCardSolo';

const styles = {
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

export const FinanceOverview = ({ filters }: { filters: SitesDashboardFilters }) => {
	return (
		<Box>
			<Box sx={styles.cardRow}>
				<ValueCardSolo
					cardType="atc_losses"
					field="total_revenue"
					label="Total Revenue (N)"
					handler={CARD_HANDLER.FINANCE}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
				<ValueCardSolo
					cardType="atc_losses"
					field="atc_losses"
					label="ATC&C Losses (%)"
					handler={CARD_HANDLER.FINANCE}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
				<ValueCardSolo
					cardType="downtime_losses"
					field="downtime_losses"
					label="Downtime Losses (N)"
					handler={CARD_HANDLER.FINANCE}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
				<ValueCardSolo
					cardType="tarrif_losses"
					field="tarrif_losses"
					label="Tarrif Losses (N)"
					handler={CARD_HANDLER.FINANCE}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
			</Box>
			<Box sx={styles.chartsRow}>
				<CustomerBreakdownChart filters={filters} />
				<FinancialPerformance filters={filters} />
				<RevenueChart filters={filters} />
			</Box>
			<Box sx={styles.lastRow}>
				<Box sx={styles.table}>
					<GraphCard title="Transaction History">
						<TransactionHistoryTable filters={filters} />
					</GraphCard>
				</Box>
				<Box sx={styles.lastRowCards}>
					<ValueCardSolo
						cardType="highest_losses"
						field="highest_losses"
						label="Highest losses"
						handler={CARD_HANDLER.FINANCE}
						filters={filters}
						formatter={(value) => formatToUSlocale(value)}
					/>
					<ValueCardSolo
						cardType="highest_revenue"
						field="highest_revenue"
						label="Highest revenue"
						handler={CARD_HANDLER.FINANCE}
						filters={filters}
						formatter={(value) => formatToUSlocale(value)}
					/>
				</Box>
			</Box>
		</Box>
	);
};
