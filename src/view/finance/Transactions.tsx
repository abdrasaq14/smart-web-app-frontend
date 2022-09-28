import React from 'react';
import { Box, TextField } from '@mui/material';
import { DatePickerDropdown } from '../../components/DatePickerDropdown';
import { Logout, NotificationsOutlined, PersonOutlined } from '@mui/icons-material';
import { RegularButton } from '../../components/Button';
import { IconButton } from '../../components/IconButton';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { TransactionHistoryTable } from '../../components/Tables/TransactionHistoryTable';
import { getTransactionHistory } from '../../api/finance/Home/transactionHistory';

const styles = {
	screenContent: {
		width: '100%',
		padding: '42px 65px 65px 32px',
		display: 'flex',
		flexDirection: 'column',
	},
	header: { display: 'flex', justifyContent: 'space-between', width: '100%', height: '56px' },
	filters: { display: 'flex', width: '100%', justifyContent: 'end', margin: '20px' },
	headerIcons: { display: 'flex', alignItems: 'center' },
	cardRow: { display: 'flex', justifyContent: 'space-between', paddingTop: '36px' },
};

export const Transactions = () => {
	const navigate = useNavigate();
	const { data, isLoading, isError } = useQuery(['operationsSites'], getTransactionHistory);

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
				<TextField
					sx={{ width: '500px' }}
					id="site_search"
					type="text"
					placeholder="Search for asset name, site and more"
				/>
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
			<Box sx={styles.filters}>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', width: '600px' }}>
					<DatePickerDropdown label="Start Date" />
					<DatePickerDropdown label="End Date" />
					<RegularButton label="Download" onClick={() => {}} />
				</Box>
			</Box>
			<Box>{renderCell()}</Box>
		</Box>
	);
};
