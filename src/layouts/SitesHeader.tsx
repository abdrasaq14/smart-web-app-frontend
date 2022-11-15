import { SitesDashboardFilters } from '../types';
import React from 'react';
import { Box, TextField } from '@mui/material';
import ControlledDatePicker from '../components/ControlledDatePicker';
import HeaderIcons from './HeaderIcons';

const styles = {
	header: { display: 'flex', justifyContent: 'space-between', width: '100%', height: '56px' },
	filters: { display: 'flex', width: '100%', justifyContent: 'end', margin: '20px' },
	headerIcons: { display: 'flex', alignItems: 'center' },
};

type SiteHeaderProps = {
	filters: SitesDashboardFilters;
	setFilters: React.Dispatch<React.SetStateAction<SitesDashboardFilters>>;
};
export const SitesHeader = ({ filters, setFilters }: SiteHeaderProps) => {
	const updateFilters = (key: keyof SitesDashboardFilters) => (value: any) => {
		setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
	};

	const handleChangeInSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setFilters((prevFilters) => ({ ...prevFilters, search: value }));
	};

	return (
		<Box>
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
					<HeaderIcons />
				</Box>
			</Box>
			<Box sx={styles.filters}>
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
		</Box>
	);
};
