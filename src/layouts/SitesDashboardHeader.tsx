import { Box } from '@mui/material';
import React from 'react';
import { ControlledDropdown } from '../components/ControlledDropdown';
import ControlledDatePicker from '../components/ControlledDatePicker';
import { RegularButton } from '../components/Button';
import { SitesDashboardFilters } from '../types';
import { useGetSites } from '../api/operations/operationsSites';
import { Header } from './Header';

const styles = {
	filters: { display: 'flex', width: '730px', justifyContent: 'space-between' },
};

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
			<Box sx={styles.filters}>
				<ControlledDropdown
					multiselect={true}
					label="Site(s)"
					options={sitesData?.results.map((site) => ({ label: site.name, value: site.id })) ?? []}
					value={filters.sites}
					setValue={updateFilters('sites')}
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
				<RegularButton label="Download" onClick={() => {}} />
			</Box>
		</Header>
	);
};

export default SitesDashboardHeader;
