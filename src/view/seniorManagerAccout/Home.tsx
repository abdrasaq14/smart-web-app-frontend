import React, { useState } from 'react';
import { Box } from '@mui/material';
import { ValueCard } from '../../components/ValueCard';
import { GraphCard } from '../../components/GraphCard';
import PowerConsumptionChart from '../../components/Charts/PowerConsumptionChart';
import { formatToUSlocale } from '../../utils/formatters';
import { SitesDashboardFilters } from '../../types';
import { DEFAULT_DASHBOARD_FILTERS } from '../../utils/constants';
import { useGetManagerHomeCardsData } from '../../api/seniorManager/cardsData';
import RevenueChart from '../../components/Charts/RevenueChart';
import DateFiltersHeader from '../../layouts/DateFiltersHeader';

const styles = {
	screenContent: {
		width: '100%',
		padding: '42px 65px 65px 32px',
		display: 'flex',
		flexDirection: 'column',
		overflowY: 'auto',
	},

	cardRow: { display: 'flex', justifyContent: 'space-between', paddingTop: '36px' },
	mapCardsAndChartsRow: { display: 'flex', justifyContent: 'space-between', paddingTop: '36px' },
	mapAndCardsColumn: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
	mapRow: { width: '775px', height: '500px' },
	mapImage: {},
	cardsBottomRow: { display: 'flex', justifyContent: 'space-between' },
	chartsColumn: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
};

export const Home = () => {
	const [filters, setFilters] = useState<SitesDashboardFilters>(DEFAULT_DASHBOARD_FILTERS);

	const {
		data: cardsData,
		isLoading: isCardsDataLoading,
		isError: isCardsDataError,
	} = useGetManagerHomeCardsData({ filters });

	return (
		<Box sx={styles.screenContent}>
			<DateFiltersHeader filters={filters} setFilters={setFilters} />

			<Box>
				<Box sx={styles.cardRow}>
					<ValueCard
						value={formatToUSlocale(cardsData?.total_revenue)}
						label="Total Consumtion (kWh)"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
					<ValueCard
						value={formatToUSlocale(cardsData?.atc_losses)}
						label="Current Load (kW)"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
					<ValueCard
						value={formatToUSlocale(cardsData?.total_consumption)}
						label="Avg. Availability"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
					<ValueCard
						value={formatToUSlocale(cardsData?.current_load)}
						label="Power Cut"
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
								label="Power Cut"
								isLoading={isCardsDataLoading}
								isError={isCardsDataError}
							/>
							<ValueCard
								value={cardsData?.number_of_users}
								label="Power Cut"
								isLoading={isCardsDataLoading}
								isError={isCardsDataError}
							/>
							<ValueCard
								value={cardsData?.pending_alerts}
								label="Power Cut"
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
		</Box>
	);
};
