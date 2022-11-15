import { SitesDashboardFilters } from '../types';
import React from 'react';
import { Box, TextField } from '@mui/material';
import ControlledDatePicker from '../components/ControlledDatePicker';
import { ControlledDropdown } from '../components/ControlledDropdown';
import HeaderIcons from './HeaderIcons';

const styles = {
	header: { display: 'flex', justifyContent: 'space-between', width: '100%', height: '56px' },
	filters: { display: 'flex', width: '100%', justifyContent: 'end', margin: '20px' },
	headerIcons: { display: 'flex', alignItems: 'center' },
};

type UsersHeaderProps = {
	filters: SitesDashboardFilters;
	setFilters: React.Dispatch<React.SetStateAction<SitesDashboardFilters>>;
};

export const UsersHeader = ({ filters, setFilters }: UsersHeaderProps) => {
	const companies = {
		results: [
			{ id: 1, name: 'Stell & Bronze Ltd' },
			{ id: 2, name: 'Vasi Ltd' },
			{ id: 3, name: 'KGB N PUDB' },
		],
	};

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
					id="users_search"
					type="text"
					placeholder="Search for users, companies and more"
					value={filters.search}
					onChange={handleChangeInSearch}
				/>
				<Box sx={styles.headerIcons}>
					<HeaderIcons />
				</Box>
			</Box>
			<Box sx={styles.filters}>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', width: '700px' }}>
					<ControlledDropdown
						multiselect={true}
						label="Companies"
						options={
							companies?.results.map((company) => ({ label: company.name, value: company.id })) ??
							[]
						}
						value={filters.companies}
						setValue={updateFilters('companies')}
					/>
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
