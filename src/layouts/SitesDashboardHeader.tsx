import { Grid } from '@mui/material';
import React from 'react';
import { ControlledDropdown } from '../components/ControlledDropdown';
import ControlledDatePicker from '../components/ControlledDatePicker';
import { RegularButton } from '../components/Button';
import { SitesDashboardFilters } from '../types';
import { useGetSites } from '../api/operations/operationsSites';
import { Header } from './Header';

type Props = {
	filters: SitesDashboardFilters;
	setFilters: React.Dispatch<React.SetStateAction<SitesDashboardFilters>>;
};

const SitesDashboardHeader = ({ filters, setFilters }: Props) => {
	const { data: sitesData } = useGetSites();

	const updateFilters = (key: keyof SitesDashboardFilters) => (value: any) => {
		setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
	};

	return (
		<Header>
			<Grid container spacing={1} sx={{ maxWidth: '650px' }}>
				<Grid item lg={3} md={3} sm={12} xs={12}>
					<ControlledDropdown
						multiselect={true}
						label="Sites(s)"
						options={sitesData?.results.map((site) => ({ label: site.name, value: site.id })) ?? []}
						value={filters.sites}
						setValue={updateFilters('sites')}
					/>
				</Grid>
				<Grid item lg={3} md={3} sm={12} xs={12}>
					<ControlledDatePicker
						label="Start Date"
						value={filters.start_date ?? null}
						setValue={updateFilters('start_date')}
					/>
				</Grid>
				<Grid item lg={3} md={3} sm={12} xs={12}>
					<ControlledDatePicker
						label="End Date"
						value={filters.end_date ?? null}
						setValue={updateFilters('end_date')}
					/>
				</Grid>
				<Grid item lg={3} md={3} sm={12} xs={12}>
					<RegularButton label="Download" onClick={() => {}} />
				</Grid>
			</Grid>
		</Header>
	);
};

export default SitesDashboardHeader;
