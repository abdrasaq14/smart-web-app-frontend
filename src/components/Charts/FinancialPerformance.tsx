import React from 'react';
import ReactECharts from 'echarts-for-react';

import { Box } from '@mui/material';
import { Spinner } from '../Spinner';
import ChartCard from '../ChartCard';
import { useGetFinancialPerformanceChartData } from '../../api/finance/Home/financialPerformance';

const Chart = () => {
	const { data, isLoading, isError } = useGetFinancialPerformanceChartData();

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
					y: 'collection',
				},
				areaStyle: {},
			},
			{
				type: 'line',
				encode: {
					x: 'day',
					y: 'billedEnergy',
				},
				areaStyle: {},
			},
		],
	};

	return (
		<ChartCard title="Financial Performance" width="480px">
			{renderBody()}
		</ChartCard>
	);
};

export default Chart;
