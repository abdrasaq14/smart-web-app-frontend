import React from 'react';
import { formatCompact } from '../../utils/formatters';
import { useGetRevenueLossBreakdownChartData } from '../../api/operations/operationsDashboard/revenueLossBreakdownChart';
import { KeyValueMapping, SitesDashboardFilters } from '../../types';
import { PieChartContainer } from './Basic/PieChartContainer';

const keyLabelMapping: KeyValueMapping = {
	// billing: (value) => `Billing ${formatCompact(value)} (KWh)`,
	collection: (value) => `Actual consumption ${formatCompact(value)} (KWh)`,
	downtime: (value) => `Downtime losses ${formatCompact(value)} (KWh)`,
};

const Chart = ({ filters }: { filters: SitesDashboardFilters }) => {
	const { data, isLoading, isError } = useGetRevenueLossBreakdownChartData({ filters });

	return (
		<PieChartContainer
			data={data}
			isLoading={isLoading}
			isError={isError}
			keyLabelMapping={keyLabelMapping}
			pieTitle={`${formatCompact(data?.total)} (KWh)`}
			cardTitle="Potential consumption breakdown"
		/>
	);
};

export default Chart;
