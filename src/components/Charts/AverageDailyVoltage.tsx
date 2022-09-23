import React from 'react';
import ReactECharts from 'echarts-for-react';

import { Box, MenuItem, SelectChangeEvent, Select } from '@mui/material';
import { Spinner } from '../Spinner';
import ChartCard from '../ChartCard';
import { useGetAverageDailyChartData } from '../../api/operationsDashboard/AverageCharts';

const DEFAULT_CHART = 'voltage';

const Chart = () => {
	const [chartType, setChartType] = React.useState(DEFAULT_CHART);
	const { data, isLoading, isError } = useGetAverageDailyChartData(chartType);
	console.log({ data, isLoading, isError });

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

	const chartTypeMap = {
		voltage: 'Average Daily Voltage',
		load: 'Average Daily Load',
		pf: 'Average Daily PF',
		frequency: 'Average Daily Frequency',
	};

	const handleChange = (event: SelectChangeEvent) => {
		setChartType(event.target.value as string);
	};

	return (
		<ChartCard title={chartTypeMap[chartType]} width="480px">
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={chartType}
				label="Age"
				onChange={handleChange}
			>
				<MenuItem value="voltage">Average Daily Voltage</MenuItem>
				<MenuItem value="load">Average Daily Load</MenuItem>
				<MenuItem value="pf">Average Daily PF</MenuItem>
				<MenuItem value="frequency">Average Daily Frequency</MenuItem>
			</Select>
			{renderBody()}
		</ChartCard>
	);
};

export default Chart;
