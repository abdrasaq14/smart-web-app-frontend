import React from 'react';
import PieChart from '../PieChart';
import { Spinner } from '../Spinner';
import { Box } from '@mui/material';
import { useGetSitesMonitoredChartData } from '../../api/operations/operationsHome/sitesMonitored';
import ChartCard from '../ChartCard';
import { formatCompact } from '../../utils/formatters';
import { SitesDashboardFilters } from '../../types';

const keyLabelMapping: any = {
	active: 'Active',
	offline: 'Offline',
};

const Page = ({ filters }: { filters: SitesDashboardFilters }) => {
	const { data, isLoading, isError } = useGetSitesMonitoredChartData({ filters });
	const dataset =
		data?.dataset.map((apiDataRow) => {
			return {
				name: keyLabelMapping[apiDataRow.key] ?? '',
				value: apiDataRow.value,
			};
		}) ?? [];

	const renderBody = () => {
		if (isLoading) {
			return <Spinner />;
		} else if (isError) {
			return <Box>Error fetching data...</Box>;
		} else {
			return <PieChart pieTitle={`${formatCompact(data?.total)} Locations`} data={dataset} />;
		}
	};

	return <ChartCard title="Sites monitored">{renderBody()}</ChartCard>;
};

export default Page;
