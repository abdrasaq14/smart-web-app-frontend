import React from 'react';
import ReactECharts from 'echarts-for-react';

import { Box } from '@mui/material';
import { Spinner } from '../Spinner';
import { useGetLoadProfileChartData } from '../../api/operations/operationsHome/loadProfileChart';
import ChartCard from '../ChartCard';
import { SitesDashboardFilters } from '../../types';

const Chart = ({ filters }: { filters: SitesDashboardFilters }) => {
	const { data, isLoading, isError } = useGetLoadProfileChartData({ filters });
const newData = [
	[0, 100.3],
	[6, 101.7],
	[12, 102.4],
	[18, 103.1],
	[24, 104.5],
	[30, 100.8],
	[36, 101.2],
	[42, 102.6],
	[48, 103.9],
	[54, 104.3],
];


	console.log('dtaLoadPRofile', data);
	const renderBody = () => {
		if (isLoading) {
			return <Spinner />;
		} else if (isError) {
			return <Box>Error fetching data...</Box>;
		} else {
			return <ReactECharts option={options} />;
		}
	};

	const dataset = [['time', 'profile'], ...newData];

	const options = {
		dataset: {
			source: dataset,
		},
		xAxis: {},
		yAxis: {},
		series: [
			{
				type: 'line',
				encode: {
					x: 'time',
					y: 'profile',
				},
				areaStyle: {},
			},
		],
	};

	return <ChartCard title="Load Profile (KW)">{renderBody()}</ChartCard>;
};

export default Chart;
