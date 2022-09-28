import React from 'react';
import PieChart from '../PieChart';
import { Spinner } from '../Spinner';
import { Box } from '@mui/material';
import ChartCard from '../ChartCard';
import { formatCompact } from '../../utils/formatters';
import { useGetCustomerBreakdownChartData } from '../../api/finance/Home/customerBreakdown';

const keyLabelMapping: any = {
	paying: 'Paying',
	defaulting: 'Defaulting',
};

const Chart = () => {
	const { data, isLoading, isError } = useGetCustomerBreakdownChartData();
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
