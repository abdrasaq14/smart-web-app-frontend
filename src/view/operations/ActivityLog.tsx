import React, { useState } from 'react';
import { Box, Checkbox, FormControlLabel, Tab, Tabs, TextField, Typography } from '@mui/material';
import { DatePickerDropdown } from '../../components/DatePickerDropdown';
import { Logout, NotificationsOutlined, PersonOutlined } from '@mui/icons-material';
import { RegularButton } from '../../components/Button';
import { IconButton } from '../../components/IconButton';
import { useNavigate } from 'react-router-dom';
import { EventLogsTable } from '../../components/Tables/EventLogsTable';
import { UserLogsTable } from '../../components/Tables/UserLogsTable';
import { GraphCard } from '../../components/GraphCard';
import { SitesDashboardFilters } from '../../types';
import { DEFAULT_DASHBOARD_FILTERS } from '../../utils/constants';
import ControlledDatePicker from '../../components/ControlledDatePicker';
import { AlertHistoryTable } from '../../components/Tables/AlertHistoryTable';
import { a11yProps, TabPanel } from '../../components/TabPanel';
import { useGetMe } from '../../api/me';

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

export const ActivityLog = () => {
	const navigate = useNavigate();
	const [tabValue, setTabValue] = React.useState(0);
	const { data: me } = useGetMe();
	const myCompanies = me ? me?.companies.map((company) => company.id) : null;
	const myCompaniesDefaultFilters = myCompanies
		? {
				...DEFAULT_DASHBOARD_FILTERS,
				companies: myCompanies,
		  }
		: DEFAULT_DASHBOARD_FILTERS;
	const [filters, setFilters] = useState<SitesDashboardFilters>(myCompaniesDefaultFilters);

	const handleTabValueChange = (event: React.SyntheticEvent, newValue: number) => {
		setTabValue(newValue);
	};

	const updateFilters = (key: keyof SitesDashboardFilters) => (value: any) => {
		setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
	};

	const handleChangeInSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setFilters((prevFilters) => ({ ...prevFilters, search: value }));
	};

	return (
		<Box sx={styles.screenContent}>
			<Box sx={styles.header}>
				<TextField
					sx={{ width: '500px' }}
					id="site_search"
					type="text"
					placeholder="Search for asset name, site and more"
					value={filters.search}
					onChange={handleChangeInSearch}
				/>
				<Box sx={styles.headerIcons}>
					<IconButton light Icon={NotificationsOutlined} onClick={() => {}} />
					<IconButton round Icon={PersonOutlined} onClick={() => navigate('/account')} />
					<IconButton round Icon={Logout} onClick={() => navigate('/login')} />
				</Box>
			</Box>
			<Box sx={styles.filters}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={tabValue} onChange={handleTabValueChange} aria-label="basic tabs example">
						<Tab label="Event Logs" {...a11yProps(0)} />
						<Tab label="Alerts" {...a11yProps(1)} />
						<Tab label="User Logs" {...a11yProps(2)} />
						<Tab label="Raw data" {...a11yProps(3)} />
					</Tabs>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', width: '400px' }}>
					<ControlledDatePicker
						label="Start Date"
						value={filters.start_date ?? null}
						setValue={updateFilters('start_date')}
					/>
					<ControlledDatePicker
						label="End Date"
						value={filters.end_date ?? null}
						setValue={updateFilters('end_date')}
					/>
					{/*<RegularButton label="Download" onClick={() => {}} />*/}
				</Box>
			</Box>
			<Box>
				<TabPanel value={tabValue} index={0}>
					<EventLogsTable filters={filters} />
				</TabPanel>
				<TabPanel value={tabValue} index={1}>
					<AlertHistoryTable filters={filters} />
				</TabPanel>
				<TabPanel value={tabValue} index={2}>
					<UserLogsTable filters={filters} />
				</TabPanel>
				<TabPanel value={tabValue} index={3}>
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
								<RegularButton disabled label="Download" onClick={() => {}} />
							</Box>
						</Box>
					</GraphCard>
				</TabPanel>
			</Box>
		</Box>
	);
};
