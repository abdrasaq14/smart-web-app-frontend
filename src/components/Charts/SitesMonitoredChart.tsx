import React from 'react';
import { useGetSitesMonitoredChartData } from '../../api/operations/operationsHome/sitesMonitored';
import { formatCompact } from '../../utils/formatters';
import { KeyValueMapping, SitesDashboardFilters } from '../../types';
import { PieChartContainer } from './Basic/PieChartContainer';

const keyLabelMapping: KeyValueMapping = {
	active: (value, total = 1) =>
		`Active ${Number(value * 100) ? formatCompact((value * 100) / total) : 0}%`,
	offline: (value, total = 1) =>
		`Offline ${Number(value * 100) ? formatCompact((value * 100) / total) : 0}%`,
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
