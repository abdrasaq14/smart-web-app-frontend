import React from 'react';
import { Box, Button } from '@mui/material';
import { DatePickerDropdown } from '../../components/DatePickerDropdown';
import { Dropdown } from '../../components/Dropdown';
import { Logout, NotificationsOutlined, PersonOutlined } from '@mui/icons-material';
import { ValueCard } from '../../components/ValueCard';
import { RegularButton } from '../../components/Button';
import { IconButton } from '../../components/IconButton';
import { useNavigate } from 'react-router-dom';
import BarChart from '../../components/BarChart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useQuery } from 'react-query';
import { getCardsDataForOperationsDashboard } from '../../api/operationsDashboard/cardsData';
import RevenueLossBreakdown from '../../components/Charts/RevenueLossBreakdown';
import { formatToUSlocale } from '../../utils/formatters';

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
	const {
		data: cardsData,
		isLoading: isCardsDataLoading,
		isError: isCardsDataError,
	} = useQuery(['operationsDashboard'], getCardsDataForOperationsDashboard);

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
				<ValueCard
					value={formatToUSlocale(cardsData?.gridHours)}
					label="Grid Hours"
					isLoading={isCardsDataLoading}
					isError={isCardsDataError}
				/>
				<ValueCard
					value={cardsData?.tariffPlan}
					label="Tarif Plan"
					isLoading={isCardsDataLoading}
					isError={isCardsDataError}
				/>
				<ValueCard
					value={formatToUSlocale(cardsData?.noOfOutages)}
					label="No. of Outages"
					isLoading={isCardsDataLoading}
					isError={isCardsDataError}
				/>
				<ValueCard
					value={formatToUSlocale(cardsData?.downtime)}
					label="Downtime"
					isLoading={isCardsDataLoading}
					isError={isCardsDataError}
				/>
			</Box>
			<Box sx={styles.chartsRow}>
				<RevenueLossBreakdown />
				<BarChart title="ENERGY" />
			</Box>
		</Box>
	);
};
