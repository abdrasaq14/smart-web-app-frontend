import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import EnergyChart from '../../components/Charts/EnergyChart';
import RevenueLossBreakdown from '../../components/Charts/RevenueLossBreakdown';
import { formatToUSlocale } from '../../utils/formatters';
import DTstatusChart from '../../components/Charts/DTstatusChart';
import AverageDailyVoltage from '../../components/Charts/AverageDailyVoltage';
import { KeyInsightsCard } from '../../components/Charts/KeyInsightChart';
import { SitesDashboardFilters } from '../../types';
import { DEFAULT_DASHBOARD_FILTERS } from '../../utils/constants';
import SitesDashboardHeader from '../../layouts/SitesDashboardHeader';
import { useGetMe } from '../../api/me';
import { CARD_HANDLER } from '../../api/cardsHandlers';
import ValueCardSolo from '../../components/ValueCardSolo';

const styles = {
	screenContent: {
		width: '90%',
		margin: '16px',
		// padding: '42px 65px 65px 32px',
		paddingRight: '8px',
		display: 'flex',
		flexDirection: 'column',
		overflowY: 'auto',
	},
	filters: { display: 'flex', width: '730px', justifyContent: 'space-between' },
	headerIcons: { display: 'flex', alignItems: 'center' },
	cardRow: { display: 'flex', justifyContent: 'space-between', paddingTop: '36px' },
	chartsRow: { display: 'flex', justifyContent: 'space-between' },
	backButtonContainer: { display: 'flex', marginTop: '10px' },
	displayCenter: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
};

export const Dashboard = () => {
	const { data: me } = useGetMe();
	const myCompanies = me ? me?.companies.map((company) => company.id) : null;
	const myCompaniesDefaultFilters = myCompanies
		? {
				...DEFAULT_DASHBOARD_FILTERS,
				companies: myCompanies,
		  }
		: DEFAULT_DASHBOARD_FILTERS;
	const [filters, setFilters] = useState<SitesDashboardFilters>(myCompaniesDefaultFilters);

	return (
		<Box sx={styles.screenContent}>
			<SitesDashboardHeader filters={filters} setFilters={setFilters} />

			<Grid container spacing={1}>
				<Grid item lg={3} md={6} sm={12} sx={styles.displayCenter}>
					<ValueCardSolo
						cardType="availability"
						field="gridHours"
						label="Uptime"
						handler={CARD_HANDLER.OPERATIONS_DASHBOARD}
						filters={filters}
						formatter={(value) => formatToUSlocale(value)}
					/>
				</Grid>
				<Grid item lg={3} md={6} sm={12} sx={styles.displayCenter}>
					<ValueCardSolo
						cardType="tariffPlan"
						field="tariffPlan"
						label="Energy Consumption"
						handler={CARD_HANDLER.OPERATIONS_DASHBOARD}
						filters={filters}
						formatter={(value) => formatToUSlocale(value)}
					/>
				</Grid>
				<Grid item lg={3} md={6} sm={12} sx={styles.displayCenter}>
					<ValueCardSolo
						cardType="availability"
						field="noOfOutages"
						label="No. of Outages"
						handler={CARD_HANDLER.OPERATIONS_DASHBOARD}
						filters={filters}
						formatter={(value) => formatToUSlocale(value)}
					/>
				</Grid>
				<Grid item lg={3} md={6} sm={12} sx={styles.displayCenter}>
					<ValueCardSolo
						cardType="downtime"
						field="downtime"
						label="Current Load"
						handler={CARD_HANDLER.OPERATIONS_DASHBOARD}
						filters={filters}
						formatter={(value) => formatToUSlocale(value)}
					/>
				</Grid>
				<Grid item lg={3} md={12} sm={12} sx={styles.displayCenter}>
					<RevenueLossBreakdown filters={filters} />
				</Grid>
				<Grid item lg={6} md={12} sm={12} sx={styles.displayCenter}>
					<EnergyChart filters={filters} />
				</Grid>
				<Grid item lg={3} md={12} sm={12} sx={styles.displayCenter}>
					<DTstatusChart filters={filters} />
				</Grid>
				<Grid item lg={3} md={12} sm={12}>
					<Grid container spacing={1}>
						<Grid item lg={12} md={6} sm={6}>
							<ValueCardSolo
								cardType="revenuePerHour"
								field="revenuePerHour"
								label="Revenue/Hour"
								handler={CARD_HANDLER.OPERATIONS_DASHBOARD}
								filters={filters}
								formatter={(value) => `N${formatToUSlocale(value)}`}
							/>
						</Grid>
						<Grid item lg={12} md={6} sm={6}>
							<ValueCardSolo
								cardType="untappedRevenue"
								field="untappedRevenue"
								label="Untapped Revenue"
								handler={CARD_HANDLER.OPERATIONS_DASHBOARD}
								filters={filters}
								formatter={(value) => `N${formatToUSlocale(value)}`}
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item lg={6} md={12} sm={12} sx={styles.displayCenter}>
					<AverageDailyVoltage filters={filters} />
				</Grid>
				<Grid item lg={3} md={12} sm={12} sx={styles.displayCenter}>
					<KeyInsightsCard filters={filters} />
				</Grid>
			</Grid>
		</Box>
	);
};
