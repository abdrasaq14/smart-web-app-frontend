import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { ValueCard } from '../../components/ValueCard';
import { GraphCard } from '../../components/GraphCard';
import { formatToUSlocale } from '../../utils/formatters';
import { SitesDashboardFilters } from '../../types';
import { DEFAULT_DASHBOARD_FILTERS } from '../../utils/constants';
import DateFiltersHeader from '../../layouts/DateFiltersHeader';
import { useGetAccountUiHomeCardsData } from '../../api/accountUI/Home/cardsData';
import TopSavings from '../../components/Charts/TopSavings';
import TopRevenue from '../../components/Charts/TopRevenue';
import MapWithMarkers from '../../components/Map';

const styles = {
	screenContent: {
		width: '90%',
		// padding: '16px',
		margin: '16px',
		paddingRight: '8px',
		display: 'flex',
		flexDirection: 'column',
		overflowY: 'auto',
	},

	displayCenter: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
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

			<Grid container spacing={1}>
				<Grid item lg={3} md={6} sm={12} sx={styles.displayCenter}>
					<ValueCard
						value={formatToUSlocale(cardsData?.total_energy_expanses)}
						label="Total Energy Expanses (N)"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
				</Grid>
				<Grid item lg={3} md={6} sm={12} sx={styles.displayCenter}>
					<ValueCard
						value={formatToUSlocale(cardsData?.total_consumption)}
						label="Total Consumption (kWh)"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
				</Grid>
				<Grid item lg={3} md={6} sm={12} sx={styles.displayCenter}>
					<ValueCard
						value={formatToUSlocale(cardsData?.current_load)}
						label="Current Load (kW)"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
				</Grid>
				<Grid item lg={3} md={6} sm={12} sx={styles.displayCenter}>
					<ValueCard
						value={formatToUSlocale(cardsData?.co2_savings)}
						label="CO2 savings (MMT)"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
				</Grid>

				<Grid item lg={8} md={6} sm={12} sx={styles.displayCenter}>
					<Grid container spacing={1}>
						<Grid item md={11} sm={12} sx={{ ...styles.displayCenter, backgroundColor: 'red' }}>
							<GraphCard title="Map" extraStyling={{ width: '100%' }}>
								<MapWithMarkers />
								{/* <img src="map.png" alt="Smarterise" style={{ width: '100%', height: '460px' }} /> */}
							</GraphCard>
						</Grid>
						<Grid item lg={4} md={12} sm={12} sx={styles.displayCenter}>
							<ValueCard
								value={formatToUSlocale(cardsData?.number_of_companies)}
								label="Number of companies"
								isLoading={isCardsDataLoading}
								isError={isCardsDataError}
							/>
						</Grid>
						<Grid item lg={4} md={12} sm={12} sx={styles.displayCenter}>
							<ValueCard
								value={formatToUSlocale(cardsData?.number_of_sites)}
								label="Number of sites"
								isLoading={isCardsDataLoading}
								isError={isCardsDataError}
							/>
						</Grid>
						<Grid item lg={4} md={12} sm={12} sx={styles.displayCenter}>
							<ValueCard
								value={formatToUSlocale(cardsData?.number_of_users)}
								label="Number of users"
								isLoading={isCardsDataLoading}
								isError={isCardsDataError}
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item lg={4} md={6} sm={12} sx={styles.displayCenter}>
					<Grid container spacing={1}>
						<Grid item lg={12} md={12} sm={12}>
							<TopSavings filters={filters} />
						</Grid>
						<Grid item lg={12} md={12} sm={12}>
							<TopRevenue filters={filters} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};
