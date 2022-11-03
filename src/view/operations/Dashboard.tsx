import React, { useState } from 'react';
import { Box } from '@mui/material';
import { ValueCard } from '../../components/ValueCard';
import EnergyChart from '../../components/Charts/EnergyChart';
import { useGetOperationsDashboardCardsData } from '../../api/operations/operationsDashboard/cardsData';
import RevenueLossBreakdown from '../../components/Charts/RevenueLossBreakdown';
import { formatToUSlocale } from '../../utils/formatters';
import DTstatusChart from '../../components/Charts/DTstatusChart';
import AverageDailyVoltage from '../../components/Charts/AverageDailyVoltage';
import { KeyInsightsCard } from '../../components/Charts/KeyInsightChart';
import { SitesDashboardFilters } from '../../types';
import { DEFAULT_DASHBOARD_FILTERS } from '../../utils/constants';
import SitesDashboardHeader from '../../layouts/SitesDashboardHeader';

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
	backButtonContainer: { display: 'flex', marginTop: '10px' },
};

export const Dashboard = () => {
	const [filters, setFilters] = useState<SitesDashboardFilters>(DEFAULT_DASHBOARD_FILTERS);
	const {
		data: cardsData,
		isLoading: isCardsDataLoading,
		isError: isCardsDataError,
	} = useGetOperationsDashboardCardsData({ filters });

	return (
		<Box sx={styles.screenContent}>
			<SitesDashboardHeader filters={filters} setFilters={setFilters} />

			<Box sx={styles.cardRow}>
				<ValueCard
					value={formatToUSlocale(cardsData?.gridHours)}
					label="Uptime"
					isLoading={isCardsDataLoading}
					isError={isCardsDataError}
				/>
				<ValueCard
					value={cardsData?.tariffPlan}
					label="Energy Consumption"
					isLoading={isCardsDataLoading}
					isError={isCardsDataError}
				/>
				<ValueCard
					value={formatToUSlocale(cardsData?.noOfOutages)}
					label="No. of Outages"
					isLoading={isCardsDataLoading}
					isError={isCardsDataError}
				/>
				<ValueCard
					value={formatToUSlocale(cardsData?.downtime)}
					label="Current Load"
					isLoading={isCardsDataLoading}
					isError={isCardsDataError}
				/>
			</Box>
			<Box sx={styles.chartsRow}>
				<RevenueLossBreakdown filters={filters} />
				<EnergyChart filters={filters} />
				<DTstatusChart filters={filters} />
			</Box>
			<Box sx={{ ...styles.chartsRow, height: '380px' }}>
				<Box
					sx={{
						marginTop: '10px',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}
				>
					<ValueCard
						value={`N${formatToUSlocale(cardsData?.revenuePerHour)}`}
						label="Revenue/Hour"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
					<ValueCard
						value={`N${formatToUSlocale(cardsData?.untappedRevenue)}`}
						label="Untapped Revenue"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
				</Box>
				<AverageDailyVoltage filters={filters} />
				<KeyInsightsCard filters={filters} />
			</Box>
		</Box>
	);
};
