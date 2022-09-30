import React from 'react';
import { Box, Checkbox, FormControlLabel, Tab, Tabs, TextField, Typography } from '@mui/material';
import { DatePickerDropdown } from '../../components/DatePickerDropdown';
import { Logout, NotificationsOutlined, PersonOutlined } from '@mui/icons-material';
import { RegularButton } from '../../components/Button';
import { IconButton } from '../../components/IconButton';
import { useNavigate } from 'react-router-dom';
import { EventLogsTable } from '../../components/EventLogsTable';
import { UserLogTable } from '../../components/UserLogTable';
import { GraphCard } from '../../components/GraphCard';

const styles = {
	screenContent: {
		width: '100%',
		padding: '42px 65px 65px 32px',
		display: 'flex',
		flexDirection: 'column',
	},
	header: { display: 'flex', justifyContent: 'space-between', width: '100%', height: '56px' },
	filters: { display: 'flex', width: '100%', justifyContent: 'space-between', margin: '20px' },
	headerIcons: { display: 'flex', alignItems: 'center' },
	cardRow: { display: 'flex', justifyContent: 'space-between', paddingTop: '36px' },
};

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export const ActivityLog = () => {
	const navigate = useNavigate();
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
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
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
						<Tab label="Event Logs" {...a11yProps(0)} />
						<Tab label="Alerts" {...a11yProps(1)} />
						<Tab label="User Logs" {...a11yProps(2)} />
						<Tab label="Raw data" {...a11yProps(3)} />
					</Tabs>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', width: '600px' }}>
					<DatePickerDropdown label="Start Date" />
					<DatePickerDropdown label="End Date" />
					<RegularButton label="Download" onClick={() => {}} />
				</Box>
			</Box>
			<Box>
				<TabPanel value={value} index={0}>
					<EventLogsTable />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<EventLogsTable />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<UserLogTable />
				</TabPanel>
				<TabPanel value={value} index={3}>
					<GraphCard title="Choose Details">
						<DatePickerDropdown label="Start Date" />
						<DatePickerDropdown label="End Date" />
						<Typography>Packaged type</Typography>
						<FormControlLabel
							control={
								<Checkbox
									checked={true}
									onChange={(evt) => console.log('Change in checkbox with event: ', evt)}
								/>
							}
							label="Power (KW)"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={false}
									onChange={(evt) => console.log('Change in checkbox with event: ', evt)}
								/>
							}
							label="Frequency (Hz)"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={false}
									onChange={(evt) => console.log('Change in checkbox with event: ', evt)}
								/>
							}
							label="Voltage (V)"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={false}
									onChange={(evt) => console.log('Change in checkbox with event: ', evt)}
								/>
							}
							label="Phase Voltage"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={false}
									onChange={(evt) => console.log('Change in checkbox with event: ', evt)}
								/>
							}
							label="Status"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={true}
									onChange={(evt) => console.log('Change in checkbox with event: ', evt)}
								/>
							}
							label="Import Active Energy"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={false}
									onChange={(evt) => console.log('Change in checkbox with event: ', evt)}
								/>
							}
							label="Reactive Power"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={false}
									onChange={(evt) => console.log('Change in checkbox with event: ', evt)}
								/>
							}
							label="Frequent"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={false}
									onChange={(evt) => console.log('Change in checkbox with event: ', evt)}
								/>
							}
							label="Load Type"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={false}
									onChange={(evt) => console.log('Change in checkbox with event: ', evt)}
								/>
							}
							label="Current K Factor"
						/>
						<Box sx={{ display: 'flex', justifyContent: 'center' }}>
							<Box sx={{ display: 'flex', justifyContent: 'space-between', width: '250px' }}>
								<RegularButton label="Cancel" onClick={() => {}} />
								<RegularButton label="Download" onClick={() => {}} />
							</Box>
						</Box>
					</GraphCard>
				</TabPanel>
			</Box>
		</Box>
	);
};
