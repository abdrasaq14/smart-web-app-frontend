import React from 'react';
import ReactECharts from 'echarts-for-react';

import { Box } from '@mui/material';
import { Spinner } from '../Spinner';
import ChartCard from '../ChartCard';
import { SitesDashboardFilters } from '../../types';
import { useGetTopSavingsChartData } from '../../api/accountUI/Home/topSavingsChart';

const Chart = ({ filters }: { filters: SitesDashboardFilters }) => {
	const { data, isLoading, isError } = useGetTopSavingsChartData({ filters });

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
				encode: {
					x: 'savings',
					y: 'company',
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

	return <ChartCard title="Top Savings">{renderBody()}</ChartCard>;
};

export default Chart;
