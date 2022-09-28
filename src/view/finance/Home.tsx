import React from 'react';
import { Box } from '@mui/material';
import { DatePickerDropdown } from '../../components/DatePickerDropdown';
import { Dropdown } from '../../components/Dropdown';
import { Logout, NotificationsOutlined, PersonOutlined } from '@mui/icons-material';
import { ValueCard } from '../../components/ValueCard';
import { GraphCard } from '../../components/GraphCard';
import { TransactionHistoryTable } from '../../components/Tables/TransactionHistoryTable';
import { RegularButton } from '../../components/Button';
import { IconButton } from '../../components/IconButton';
import { useNavigate } from 'react-router-dom';
import { useGetFinanceHomeCardsData } from '../../api/finance/Home/cardsData';
import { formatToUSlocale } from '../../utils/formatters';
import CustomerBreakdownChart from '../../components/Charts/CustomerBreakdownChart';
import FinancialPerformance from '../../components/Charts/FinancialPerformance';
import RevenueChart from '../../components/Charts/RevenueChart';

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
export const Home = () => {
	const navigate = useNavigate();
	const {
		data: cardsData,
		isLoading: isCardsDataLoading,
		isError: isCardsDataError,
	} = useGetFinanceHomeCardsData();

	return (
		<Box sx={styles.screenContent}>
			<Box sx={styles.header}>
				<Box sx={styles.filters}>
					<Dropdown label="Site(s)" options={['site 1', 'site 2', 'site 3']} />
					<DatePickerDropdown label="Start Date" />
					<DatePickerDropdown label="End Date" />
					<RegularButton label="Download" onClick={() => {}} />
				</Box>
				<Box sx={styles.headerIcons}>
					<IconButton light Icon={NotificationsOutlined} onClick={() => {}} />
					<IconButton
						round
						Icon={PersonOutlined}
						onClick={() => navigate('/operations/myAccount')}
					/>
					<IconButton round Icon={Logout} onClick={() => navigate('/login')} />
				</Box>
			</Box>

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
				<CustomerBreakdownChart />
				<FinancialPerformance />
				<RevenueChart />
			</Box>
			<Box sx={styles.lastRow}>
				<Box sx={styles.table}>
					<GraphCard title="Transaction History">
						<TransactionHistoryTable />
					</GraphCard>
				</Box>
				<Box sx={styles.lastRowCards}>
					<ValueCard
						value={cardsData?.highest_losses}
						label="Highest losses"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
					<ValueCard
						value={cardsData?.highest_revenue}
						label="Highest revenue"
						isLoading={isCardsDataLoading}
						isError={isCardsDataError}
					/>
				</Box>
			</Box>
		</Box>
	);
};
