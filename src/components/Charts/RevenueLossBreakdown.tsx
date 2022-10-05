import React from 'react';
import { formatCompact } from '../../utils/formatters';
import { useGetRevenueLossBreakdownChartData } from '../../api/operations/operationsDashboard/revenueLossBreakdownChart';
import { SitesDashboardFilters } from '../../types';
import { PieChartContainer } from './Basic/PieChartContainer';

const keyLabelMapping: { [key in string]: string } = {
	billing: 'Billing 40(KWh)',
	collection: 'Collection 40(KWh)',
	downtime: 'Downtime 60(KWh)',
};

const Chart = ({ filters }: { filters: SitesDashboardFilters }) => {
	const { data, isLoading, isError } = useGetRevenueLossBreakdownChartData({ filters });

	return (
		<PieChartContainer
			data={data}
			isLoading={isLoading}
			isError={isError}
			keyLabelMapping={keyLabelMapping}
			pieTitle={`${formatCompact(data?.total)} Locations`}
			cardTitle="Revenue Loss Breakdown"
		/>
	);
};

export default Chart;
