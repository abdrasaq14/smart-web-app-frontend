import React from 'react';
import ReactECharts from 'echarts-for-react';

import { Box, Card } from '@mui/material';
import { ApiLoadProfileChart } from '../../api/operationsHome/types';

const styles = {
	container: {
		borderRadius: '16px',
		padding: '16px',
		display: 'flex',
		flexDirection: 'column',
		marginTop: '32px',
		width: '480px',
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

type Props = { title: string; data: ApiLoadProfileChart['data'] };

const Chart = ({ title, data }: Props) => {
	const options = {
		dataset: {
			source: data,
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
		<ChartGraphCard title={title}>
			<ReactECharts option={options} />
		</ChartGraphCard>
	);
};

export default Chart;
