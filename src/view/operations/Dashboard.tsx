import React from 'react';
import { Box, Button } from '@mui/material';
import { DatePickerDropdown } from '../../components/DatePickerDropdown';
import { Dropdown } from '../../components/Dropdown';
import { Logout, NotificationsOutlined, PersonOutlined } from '@mui/icons-material';
import { ValueCard } from '../../components/ValueCard';
import { RegularButton } from '../../components/Button';
import { IconButton } from '../../components/IconButton';
import { useNavigate } from 'react-router-dom';
import PieChart from '../../components/PieChart';
import BarChart from '../../components/BarChart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
	backButtonContainer: { display: 'flex', marginTop: '10px' },
};

export const Dashboard = () => {
	const navigate = useNavigate();

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
			<Box sx={styles.backButtonContainer}>
				<Button
					variant="outlined"
					startIcon={<ArrowBackIcon />}
					onClick={() => {
						navigate('/operations/site');
					}}
				>
					Back
				</Button>
			</Box>

			<Box sx={styles.cardRow}>
				<ValueCard value="32,727,658" label="Grid Hours" />
				<ValueCard value="23" label="Tarif Plan" />
				<ValueCard value="1,019,591" label="No. of Outages" />
				<ValueCard value="29,019,591" label="Downtime" />
			</Box>
			<Box sx={styles.chartsRow}>
				<PieChart cardTitle="Site monitored" pieTitle="12k Locations" />
				<BarChart title="ENERGY" />
			</Box>
		</Box>
	);
};
