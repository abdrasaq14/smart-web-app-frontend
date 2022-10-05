import React from 'react';
import { useGetSitesMonitoredChartData } from '../../api/operations/operationsHome/sitesMonitored';
import { formatCompact } from '../../utils/formatters';
import { SitesDashboardFilters } from '../../types';
import { PieChartContainer } from './Basic/PieChartContainer';

const keyLabelMapping: any = {
	active: 'Active',
	offline: 'Offline',
};

const Page = ({ filters }: { filters: SitesDashboardFilters }) => {
	const { data, isLoading, isError } = useGetSitesMonitoredChartData({ filters });

	return (
		<PieChartContainer
			data={data}
			isLoading={isLoading}
			isError={isError}
			keyLabelMapping={keyLabelMapping}
			pieTitle={`${formatCompact(data?.total)} Locations`}
			cardTitle="Sites monitored"
		/>
	);
};

export default Page;
