import React from 'react';
import ReactECharts from 'echarts-for-react';

import { Box } from '@mui/material';
import ChartCard from '../ChartCard';
import { useQuery } from 'react-query';
import { Spinner } from '../../componentes/Spinner';
import { getEnergyChartData } from '../../api/operationsDashboard/energyChart';

const EnergyChart = () => {
	const { data, isLoading, isError } = useQuery(['energyChart'], getEnergyChartData);

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

	return (
		<ChartCard title="ENERGY" width="480px">
			{renderBody()}
		</ChartCard>
	);
};

export default EnergyChart;
