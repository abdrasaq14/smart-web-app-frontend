import { Grid } from '@mui/material';
import React from 'react';
import ControlledDatePicker from '../components/ControlledDatePicker';
import { SitesDashboardFilters } from '../types';
import { Header } from './Header';

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
			<Grid container spacing={1} sx={{ width: '400px' }}>
				<Grid item lg={6} md={6} sm={12} xs={12}>
					<ControlledDatePicker
						label="Start Date"
						value={filters.start_date ?? null}
						setValue={updateFilters('start_date')}
					/>
				</Grid>
				<Grid item lg={6} md={6} sm={12} xs={12}>
					<ControlledDatePicker
						label="End Date"
						value={filters.end_date ?? null}
						setValue={updateFilters('end_date')}
					/>
				</Grid>
				{/*<Grid item lg={4} md={4} sm={12} xs={12}>*/}
				{/*	<RegularButton label="Print" onClick={() => {}} />*/}
				{/*</Grid>*/}
			</Grid>
		</Header>
	);
};

export default DateFiltersHeader;
