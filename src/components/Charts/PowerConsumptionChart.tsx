import React from 'react';
import ReactECharts from 'echarts-for-react';

import { Box } from '@mui/material';
import { getPowerConsumptionChartData } from '../../api/operationsHome/powerConsumptionChart';
import { useQuery } from 'react-query';
import { Spinner } from '../../componentes/Spinner';
import ChartCard from '../ChartCard';

const Chart = () => {
	const { data, isLoading, isError } = useQuery(
		['powerConsumptionChart'],
		getPowerConsumptionChartData
	);

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
					x: 'consumption',
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

	return <ChartCard title="Power consumption by District">{renderBody()}</ChartCard>;
};

export default Chart;
