import React from 'react';
import { formatCompact } from '../../utils/formatters';
import { useGetCustomerBreakdownChartData } from '../../api/finance/Home/customerBreakdown';
import { KeyValueMapping, SitesDashboardFilters } from '../../types';
import { PieChartContainer } from './Basic/PieChartContainer';

const keyLabelMapping: KeyValueMapping = {
	paying: (value, total = 1) => `Good Performance ${Number(value * 100) ? formatCompact((value * 100) / total) : 0}%`,
	defaulting: (value, total = 1) => `Bad Performance ${Number(value * 100) ? formatCompact((value * 100) / total) : 0}%`}

const Chart = ({ filters }: { filters: SitesDashboardFilters }) => {
	const { data, isLoading, isError } = useGetCustomerBreakdownChartData({ filters });

	return (
		<PieChartContainer
			data={data}
			isLoading={isLoading}
			isError={isError}
			keyLabelMapping={keyLabelMapping}
			pieTitle={`${formatCompact(data?.total)} Customers`}
			cardTitle="Customer Breakdown"
		/>
	);
};

export default Chart;
