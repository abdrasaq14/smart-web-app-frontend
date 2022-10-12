import { Box } from '@mui/material';
import React from 'react';
import ControlledDatePicker from '../components/ControlledDatePicker';
import { RegularButton } from '../components/Button';
import { SitesDashboardFilters } from '../types';
import { Header } from './Header';

const styles = {
	filters: { display: 'flex', width: '730px', justifyContent: 'space-between' },
};

type Props = {
	filters: SitesDashboardFilters;
	setFilters: React.Dispatch<React.SetStateAction<SitesDashboardFilters>>;
};

const DateFiltersHeader = ({ filters, setFilters }: Props) => {
	const updateFilters = (key: keyof SitesDashboardFilters) => (value: any) => {
		setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
	};

	return (
		<Header>
			<Box sx={styles.filters}>
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
				<RegularButton label="Print" onClick={() => {}} />
			</Box>
		</Header>
	);
};

export default DateFiltersHeader;
