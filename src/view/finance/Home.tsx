import React from 'react';
import { Box } from '@mui/material';
import { DatePickerDropdown } from '../../components/DatePickerDropdown';
import { Dropdown } from '../../components/Dropdown';
import { Logout, NotificationsOutlined, PersonOutlined } from '@mui/icons-material';
import { ValueCard } from '../../components/ValueCard';
import { GraphCard } from '../../components/GraphCard';
import { TransactionHistoryTable } from '../../components/TransactionHistoryTable';
import { RegularButton } from '../../components/Button';
import { IconButton } from '../../components/IconButton';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import PieChart from '../../components/PieChart';
import PerformanceChart from '../../components/PerformanceChart';
import { getTransactionHistory } from '../../api/operations/operationsActivityLog/transactionHistory';

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
	chartsRow: { display: 'flex', justifyContent: 'space-around' },
};

export const Home = () => {
	const navigate = useNavigate();
	const { data, isLoading, isError } = useQuery(['financeHome'], getTransactionHistory);

	const renderCell = () => {
		if (isError) {
			return <div>There was an error...</div>;
		} else if (isLoading) {
			return <div>Loading...</div>;
		} else if (data && data.length > 0) {
			return <TransactionHistoryTable data={data} />;
		} else {
			return <div>Empty data</div>;
		}
	};

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
				<ValueCard value="32,727,658" label="Total Revenue (N)" />
				<ValueCard value="23" label="ATC&C Losses (%)" />
				<ValueCard value="1,019,591" label="Downtime Losses (N)" />
				<ValueCard value="29,019,591" label="Tarrif Losses (N)" />
			</Box>
			<Box sx={styles.chartsRow}>
				<PieChart cardTitle="Customer Breakdown" pieTitle="720k Customers" />
				<PerformanceChart title="Financial Performance" />
			</Box>
			<GraphCard title="Transaction History">{renderCell()}</GraphCard>
		</Box>
	);
};
