import { SitesDashboardFilters } from '../types';
import { useGetManagerHomeCardsData } from '../api/seniorManager/Home/cardsData';
import { Box } from '@mui/material';
import { ValueCard } from './ValueCard';
import { formatToUSlocale } from '../utils/formatters';
import { GraphCard } from './GraphCard';
import PowerConsumptionChart from './Charts/PowerConsumptionChart';
import RevenueChart from './Charts/RevenueChart';
import React from 'react';

export const styles = {
	cardRow: { display: 'flex', justifyContent: 'space-between', paddingTop: '36px' },
	mapCardsAndChartsRow: { display: 'flex', justifyContent: 'space-between', paddingTop: '36px' },
	mapAndCardsColumn: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
	mapRow: { width: '775px', height: '500px' },
	mapImage: {},
	cardsBottomRow: { display: 'flex', justifyContent: 'space-between' },
	chartsColumn: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
};
export const CompanyOverview = ({ filters }: { filters: SitesDashboardFilters }) => {
	const {
		data: cardsData,
		isLoading: isCardsDataLoading,
		isError: isCardsDataError,
	} = useGetManagerHomeCardsData({ filters });
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
					label="AT&C Losses (%)"
					isLoading={isCardsDataLoading}
					isError={isCardsDataError}
				/>
				<ValueCard
					value={formatToUSlocale(cardsData?.total_consumption)}
					label="Total consumption (kWh)"
					isLoading={isCardsDataLoading}
					isError={isCardsDataError}
				/>
				<ValueCard
					value={formatToUSlocale(cardsData?.current_load)}
					label="Current Load (kW)"
					isLoading={isCardsDataLoading}
					isError={isCardsDataError}
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
						<ValueCard
							value={cardsData?.number_of_sites}
							label="Number of sites"
							isLoading={isCardsDataLoading}
							isError={isCardsDataError}
						/>
						<ValueCard
							value={cardsData?.number_of_users}
							label="Number of users"
							isLoading={isCardsDataLoading}
							isError={isCardsDataError}
						/>
						<ValueCard
							value={cardsData?.pending_alerts}
							label="Pending alerts"
							isLoading={isCardsDataLoading}
							isError={isCardsDataError}
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
