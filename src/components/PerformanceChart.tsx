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
			data: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
		},
		yAxis: {},
		series: [
			{
				data: [15, 12, 13, 14, 16, 14, 20, 19, 18, 17, 22, 24, 25, 26],
				type: 'line',
				areaStyle: {},
			},
			{
				data: [13, 12, 11, 12, 13, 10, 12, 9, 10, 11, 10, 13, 14, 15],
				type: 'line',
				areaStyle: {
					color: '#ff0',
					opacity: 0.5,
				},
			},
		],
	};

	return (
		<ChartGraphCard title={title}>
			<ReactECharts option={options} />
		</ChartGraphCard>
	);
};

export default PerformanceChart;
