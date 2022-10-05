import React from 'react';
import PieChart from '../PieChart';
import { Spinner } from '../Spinner';
import { Box } from '@mui/material';
import ChartCard from '../ChartCard';
import { formatCompact } from '../../utils/formatters';
import { useGetCustomerBreakdownChartData } from '../../api/finance/Home/customerBreakdown';
import { SitesDashboardFilters } from '../../types';

const keyLabelMapping: any = {
	paying: 'Paying',
	defaulting: 'Defaulting',
};

const Chart = ({ filters }: { filters: SitesDashboardFilters }) => {
	const { data, isLoading, isError } = useGetCustomerBreakdownChartData({ filters });
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
			return <PieChart pieTitle={`${formatCompact(data?.total)} Customers`} data={dataset} />;
		}
	};

	return <ChartCard title="Customer Breakdown">{renderBody()}</ChartCard>;
};

export default Chart;
