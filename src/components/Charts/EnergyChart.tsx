import React from 'react';
import ReactECharts from 'echarts-for-react';

import { Box } from '@mui/material';
import ChartCard from '../ChartCard';
import { Spinner } from '../Spinner';
import { useGetEnergyChartData } from '../../api/operations/operationsDashboard/energyChart';
import { SitesDashboardFilters } from '../../types';

const EnergyChart = ({ filters }: { filters: SitesDashboardFilters }) => {
	const { data, isLoading, isError } = useGetEnergyChartData({ filters });

	const renderBody = () => {
		if (isLoading) {
			return <Spinner />;
		} else if (isError) {
			return <Box>Error fetching data...</Box>;
		} else {
			return <ReactECharts option={options} />;
		}
	};

	const options = {
		dataset: {
			source: data?.dataset,
		},
		xAxis: { type: 'category' },
		yAxis: {},
		series: [
			{
				type: 'bar',
				encode: {
					x: 'month',
					y: 'energy',
				},
			},
		],
		color: ['#ffbe00'],
	};

	return <ChartCard title="ENERGY">{renderBody()}</ChartCard>;
};

export default EnergyChart;
