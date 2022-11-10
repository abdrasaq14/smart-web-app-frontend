import React, { useState } from 'react';
import { Box } from '@mui/material';
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

			<Box sx={styles.cardRow}>
				<ValueCardSolo
					cardType="availability"
					field="gridHours"
					label="Uptime"
					handler={CARD_HANDLER.OPERATIONS_DASHBOARD}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
				<ValueCardSolo
					cardType="tariffPlan"
					field="tariffPlan"
					label="Energy Consumption"
					handler={CARD_HANDLER.OPERATIONS_DASHBOARD}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
				<ValueCardSolo
					cardType="availability"
					field="noOfOutages"
					label="No. of Outages"
					handler={CARD_HANDLER.OPERATIONS_DASHBOARD}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
				/>
				<ValueCardSolo
					cardType="downtime"
					field="downtime"
					label="Current Load"
					handler={CARD_HANDLER.OPERATIONS_DASHBOARD}
					filters={filters}
					formatter={(value) => formatToUSlocale(value)}
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
					<ValueCardSolo
						cardType="revenuePerHour"
						field="revenuePerHour"
						label="Revenue/Hour"
						handler={CARD_HANDLER.OPERATIONS_DASHBOARD}
						filters={filters}
						formatter={(value) => `N${formatToUSlocale(value)}`}
					/>
					<ValueCardSolo
						cardType="untappedRevenue"
						field="untappedRevenue"
						label="Untapped Revenue"
						handler={CARD_HANDLER.OPERATIONS_DASHBOARD}
						filters={filters}
						formatter={(value) => `N${formatToUSlocale(value)}`}
					/>
				</Box>
				<AverageDailyVoltage filters={filters} />
				<KeyInsightsCard filters={filters} />
			</Box>
		</Box>
	);
};
