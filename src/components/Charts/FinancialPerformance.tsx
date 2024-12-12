import React from 'react';
import ReactECharts from 'echarts-for-react';

import { Box } from '@mui/material';
import { Spinner } from '../Spinner';
import ChartCard from '../ChartCard';
import { useGetFinancialPerformanceChartData } from '../../api/finance/Home/financialPerformance';
import { SitesDashboardFilters } from '../../types';

const Chart = ({ filters }: { filters: SitesDashboardFilters }) => {
	const { isLoading, isError } = useGetFinancialPerformanceChartData({ filters });

	const data = {
		dataset: [
			['month', 'collection', 'billedEnergy'],
			['JAN', 0, 1000],
			['FEB', 1500, 1100],
			['MAR', 1300, 1050],
			['APR', 1700, 1250],
			['MAY', 1600, 1200],
			['JUN', 1800, 1300],
			['JUL', 2000, 1400],
			['AUG', 2100, 1500],
			['SEP', 1900, 1350],
			['OCT', 2200, 1600],
			['NOV', 2300, 1700],
			['DEC', 2400, 1800],
		],
	};

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
		source: data.dataset,
	},
	legend: {
		bottom: 0, // Position the legend at the bottom of the chart
		orient: 'horizontal', // Display items in a row
	},
	xAxis: {
		type: 'category', // Use category axis for month strings
		// name: 'Month',
		axisLabel: {
			interval: 0, // Ensure all labels are shown
			rotate: 45, // Optional: Rotate labels for better readability
		},
	},
	yAxis: {
		// name: 'Values',
	},
	series: [
		{
			name: 'Collection', // Name to appear in the legend
			type: 'line',
			encode: {
				x: 'month', // Map the "month" field to the x-axis
				y: 'collection', // Map the "collection" field to the y-axis
			},
			areaStyle: {
				color: '#FFC000', // Set the fill color for collection
			},
			lineStyle: {
				color: '#000000', // Set the line color for collection
			},
			smooth: true, // Make the line curved
		},
		{
			name: 'Billed Energy', // Name to appear in the legend
			type: 'line',
			encode: {
				x: 'month', // Map the "month" field to the x-axis
				y: 'billedEnergy', // Map the "billedEnergy" field to the y-axis
			},
			areaStyle: {
				color: '#7C878E', // Set the fill color for billedEnergy
			},
			lineStyle: {
				color: '#000000', // Set the line color for billedEnergy
			},
			smooth: true, // Make the line curved
		},
	],
};


	return <ChartCard title="Financial Performance">{renderBody()}</ChartCard>;
};

export default Chart;
