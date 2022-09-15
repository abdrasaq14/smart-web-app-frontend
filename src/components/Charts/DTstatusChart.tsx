import React from 'react';
import ReactECharts from 'echarts-for-react';

import { Box } from '@mui/material';
import ChartCard from '../ChartCard';
import { useQuery } from 'react-query';
import { Spinner } from '../../componentes/Spinner';
import { getDTstatusChartData } from '../../api/operationsDashboard/DTstatusChart';

const DTstatusChart = () => {
	const { data, isLoading, isError } = useQuery(['DTstatusChartData'], getDTstatusChartData);

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
		series: [
			{
				type: 'gauge',
				center: ['50%', '40%'],
				radius: '55%',
				startAngle: 200,
				endAngle: -20,
				min: 0,
				max: 100,
				splitNumber: 10,
				itemStyle: {
					color: '#FFAB91',
				},
				progress: {
					show: true,
					width: 30,
				},
				pointer: {
					show: false,
				},
				axisLine: {
					lineStyle: {
						width: 30,
					},
				},
				axisTick: {
					distance: -45,
					splitNumber: 5,
					lineStyle: {
						width: 2,
						color: '#999',
					},
				},
				splitLine: {
					distance: -52,
					length: 10,
					lineStyle: {
						width: 3,
						color: '#999',
					},
				},
				axisLabel: {
					distance: -5,
					color: '#999',
					fontSize: 10,
				},
				anchor: {
					show: false,
				},
				title: {
					show: false,
				},
				detail: {
					valueAnimation: true,
					width: '60%',
					lineHeight: 40,
					borderRadius: 8,
					offsetCenter: [0, '-15%'],
					fontSize: 20,
					fontWeight: 'bolder',
					formatter: '{value} %',
					color: 'auto',
				},
				data: [
					{
						value: data?.dataset.percentageValue,
					},
				],
			},
		],
	};

	return <ChartCard title="DT Status">{renderBody()}</ChartCard>;
};

export default DTstatusChart;
