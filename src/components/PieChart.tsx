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
		width: '240px',
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

type DataRow = {
	value: number;
	name: string;
};

type Props = {
	cardTitle: string;
	pieTitle: string;
	data: DataRow[];
};

const Page = ({ cardTitle, pieTitle, data }: Props) => {
	const options = {
		title: {
			text: pieTitle,
			left: 'center',
			top: 'center',
		},
		series: [
			{
				type: 'pie',
				data: data,
				radius: ['40%', '70%'],
			},
		],
	};

	return (
		<ChartGraphCard title={cardTitle}>
			<ReactECharts option={options} />
		</ChartGraphCard>
	);
};

export default Page;
