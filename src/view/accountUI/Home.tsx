import React, { useState } from 'react';
import { Box } from '@mui/material';
import { ValueCard } from '../../components/ValueCard';
import { GraphCard } from '../../components/GraphCard';
import { formatToUSlocale } from '../../utils/formatters';
import { SitesDashboardFilters } from '../../types';
import { DEFAULT_DASHBOARD_FILTERS } from '../../utils/constants';
import DateFiltersHeader from '../../layouts/DateFiltersHeader';
import { useGetAccountUiHomeCardsData } from '../../api/accountUI/Home/cardsData';
import TopSavings from '../../components/Charts/TopSavings';
import TopRevenue from '../../components/Charts/TopRevenue';

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
	} = useGetAccountUiHomeCardsData({ filters });

	return (
		<Box sx={styles.screenContent}>
			<DateFiltersHeader filters={filters} setFilters={setFilters} />

			<Box>
				<Box sx={styles.cardRow}>
					<ValueCard
						value={formatToUSlocale(cardsData?.total_energy_expanses)}
						label="Total Energy Expanses (N)"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
					<ValueCard
						value={formatToUSlocale(cardsData?.total_consumption)}
						label="Total Consumtion (kWh)"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
					<ValueCard
						value={formatToUSlocale(cardsData?.current_load)}
						label="Current Load (kW)"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
					<ValueCard
						value={formatToUSlocale(cardsData?.co2_savings)}
						label="CO2 savings (MMT)"
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
								value={formatToUSlocale(cardsData?.number_of_companies)}
								label="Number of companies"
								isLoading={isCardsDataLoading}
								isError={isCardsDataError}
							/>
							<ValueCard
								value={formatToUSlocale(cardsData?.number_of_sites)}
								label="Number of sites"
								isLoading={isCardsDataLoading}
								isError={isCardsDataError}
							/>
							<ValueCard
								value={formatToUSlocale(cardsData?.number_of_users)}
								label="Number of users"
								isLoading={isCardsDataLoading}
								isError={isCardsDataError}
							/>
						</Box>
					</Box>
					<Box sx={styles.chartsColumn}>
						<TopSavings filters={filters} />
						<TopRevenue filters={filters} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
