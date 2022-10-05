import React from 'react';
import PieChart from '../PieChart';
import { Spinner } from '../Spinner';
import { Box } from '@mui/material';
import ChartCard from '../ChartCard';
import { formatCompact } from '../../utils/formatters';
import { useGetRevenueLossBreakdownChartData } from '../../api/operations/operationsDashboard/revenueLossBreakdownChart';
import { SitesDashboardFilters } from '../../types';

const keyLabelMapping: any = {
	billing: 'Billing 40(KWh)',
	collection: 'Collection 40(KWh)',
	downtime: 'Downtime 60(KWh)',
};

const Chart = ({ filters }: { filters: SitesDashboardFilters }) => {
	const { data, isLoading, isError } = useGetRevenueLossBreakdownChartData({ filters });
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

	return <ChartCard title="Revenue Loss Breakdown">{renderBody()}</ChartCard>;
};

export default Chart;
