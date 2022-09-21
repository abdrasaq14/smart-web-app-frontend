import React from 'react';
import ReactECharts from 'echarts-for-react';

import { Box } from '@mui/material';
import { Spinner } from '../../componentes/Spinner';
import ChartCard from '../ChartCard';
import { useGetAverageDailyVoltageChartData } from '../../api/operationsDashboard/averageDailyVoltgeChart';

const Chart = () => {
	const { data, isLoading, isError } = useGetAverageDailyVoltageChartData();

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
		legend: {
			show: true,
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true,
		},
		xAxis: {},
		yAxis: {},
		series: [
			{
				type: 'line',
				encode: {
					x: 'date',
					y: 'red_phase',
				},
				smooth: true,
			},
			{
				type: 'line',
				encode: {
					x: 'date',
					y: 'yellow_phase',
				},
				smooth: true,
			},
			{
				type: 'line',
				encode: {
					x: 'date',
					y: 'blue_phase',
				},
				smooth: true,
			},
		],
	};

	return (
		<ChartCard title="Average Daily Voltage" width="480px">
			{renderBody()}
		</ChartCard>
	);
};

export default Chart;
