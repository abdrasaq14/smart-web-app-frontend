import React from 'react';
import ReactECharts from 'echarts-for-react';

import { Box, Card } from '@mui/material';

const styles = {
	container: {
		borderRadius: '16px',
		padding: '16px',
		display: 'flex',
		flexDirection: 'column',
		marginTop: '32px',
		width: '700px',
	},
	content: { paddingTop: '8px', fontWeight: 'bold', fontSize: '14px', lineHeight: '17px' },
};

const ChartGraphCard = (props: React.PropsWithChildren<{ title: string }>) => {
	return (
		<Card sx={styles.container} variant="outlined">
			<Box sx={styles.content}>{props.title}</Box>
			{props.children}
		</Card>
	);
};

type Props = { title: string };

const PerformanceChart = ({ title }: Props) => {
	const options = {
		xAxis: {
			data: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
		},
		yAxis: {},
		series: [
			{
				type: 'bar',
				data: [420, 740, 600, 600, 500, 800, 840, 400, 800, 750, 890, 980],
			},
		],
		color: ['#ffbe00'],
	};

	return (
		<ChartGraphCard title={title}>
			<ReactECharts option={options} />
		</ChartGraphCard>
	);
};

export default PerformanceChart;
