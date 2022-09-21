import React from 'react';
import ReactECharts from 'echarts-for-react';

import { Box } from '@mui/material';
import { Spinner } from '../../componentes/Spinner';
import { useGetLoadProfileChartData } from '../../api/operationsHome/loadProfileChart';
import ChartCard from '../ChartCard';

const Chart = () => {
	const { data, isLoading, isError } = useGetLoadProfileChartData();

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
		yAxis: {},
		series: [
			{
				type: 'line',
				encode: {
					x: 'day',
					y: 'profile1',
				},
				areaStyle: {},
			},
			{
				type: 'line',
				encode: {
					x: 'day',
					y: 'profile2',
				},
				areaStyle: {},
			},
		],
	};

	return (
		<ChartCard title="Load Profile (KW)" width="480px">
			{renderBody()}
		</ChartCard>
	);
};

export default Chart;
