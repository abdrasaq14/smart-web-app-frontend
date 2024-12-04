import React from 'react';
import ReactECharts from 'echarts-for-react';

import { Box } from '@mui/material';
import { Spinner } from '../Spinner';
import ChartCard from '../ChartCard';
import { useGetRevenueChartData } from '../../api/finance/Home/revenueChart';
import { SitesDashboardFilters } from '../../types';

const Chart = ({ filters }: { filters: SitesDashboardFilters }) => {
	const { data, isLoading, isError } = useGetRevenueChartData({ filters });

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
			source: data && data?.dataset ? data?.dataset : [],
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true,
		},
		xAxis: {},
		yAxis: {
			type: 'category',
			axisLabel: {
				show: false,
			},
		},
		series: [
			{
				type: 'bar',
				barWidth: '20%',
				encode: {
					x: 'revenue',
					y: 'district',
				},
				label: {
					position: [0, -14],
					formatter: '{b}',
					show: true,
				},
			},
		],
		color: ['#ffbe00'],
	};

	return <ChartCard title="Revenue">{renderBody()}</ChartCard>;
};

export default Chart;
