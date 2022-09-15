import React from 'react';
import ReactECharts from 'echarts-for-react';

import { Box, Card } from '@mui/material';
import { getPowerConsumptionChartData } from '../../api/operationsHome/powerConsumptionChart';
import { useQuery } from 'react-query';
import { Spinner } from '../../componentes/Spinner';

const styles = {
	container: {
		borderRadius: '16px',
		padding: '16px',
		display: 'flex',
		flexDirection: 'column',
		marginTop: '32px',
		maxWidth: '240px',
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

type Props = {};

const Chart = ({}: Props) => {
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

	return <ChartGraphCard title="Power consumption by District">{renderBody()}</ChartGraphCard>;
};

export default Chart;
