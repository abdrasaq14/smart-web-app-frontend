import React from 'react';
import { SitesDashboardFilters } from '../types';
import { useGetFinanceHomeCardsData } from '../api/finance/Home/cardsData';
import { Box } from '@mui/material';
import { ValueCard } from './ValueCard';
import { formatToUSlocale } from '../utils/formatters';
import CustomerBreakdownChart from './Charts/CustomerBreakdownChart';
import FinancialPerformance from './Charts/FinancialPerformance';
import RevenueChart from './Charts/RevenueChart';
import { GraphCard } from './GraphCard';
import { TransactionHistoryTable } from './Tables/TransactionHistoryTable';

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
	const {
		data: cardsData,
		isLoading: isCardsDataLoading,
		isError: isCardsDataError,
	} = useGetFinanceHomeCardsData({ filters });

	return (
		<Box>
			<Box sx={styles.cardRow}>
				<ValueCard
					value={formatToUSlocale(cardsData?.total_revenue)}
					label="Total Revenue (N)"
					isLoading={isCardsDataLoading}
					isError={isCardsDataError}
				/>
				<ValueCard
					value={formatToUSlocale(cardsData?.atc_losses)}
					label="ATC&C Losses (%)"
					isLoading={isCardsDataLoading}
					isError={isCardsDataError}
				/>
				<ValueCard
					value={formatToUSlocale(cardsData?.downtime_losses)}
					label="Downtime Losses (N)"
					isLoading={isCardsDataLoading}
					isError={isCardsDataError}
				/>
				<ValueCard
					value={formatToUSlocale(cardsData?.tarrif_losses)}
					label="Tarrif Losses (N)"
					isLoading={isCardsDataLoading}
					isError={isCardsDataError}
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
					<ValueCard
						value={formatToUSlocale(cardsData?.highest_losses)}
						label="Highest losses"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
					<ValueCard
						value={formatToUSlocale(cardsData?.highest_revenue)}
						label="Highest revenue"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
				</Box>
			</Box>
		</Box>
	);
};
