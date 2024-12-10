import React from 'react';
import ReactECharts from 'echarts-for-react';

import { Box } from '@mui/material';
import { Spinner } from '../Spinner';
import { useGetLoadProfileChartData } from '../../api/operations/operationsHome/loadProfileChart';
import ChartCard from '../ChartCard';
import { SitesDashboardFilters } from '../../types';

const Chart = ({ filters }: { filters: SitesDashboardFilters }) => {
	const { data, isLoading, isError } = useGetLoadProfileChartData({ filters });
	const newDAta = [
		[0, 0],
		[1, 20],
		[2, 35],
		[3, 40],
		[4, 50],
		[5, 60],
		[6, 70],
	]
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

	const dataset = [['time', 'profile'], ...newDAta];

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
