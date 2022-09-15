import React from 'react';
import ReactECharts from 'echarts-for-react';

import { Box, Card } from '@mui/material';
import { useQuery } from 'react-query';
import { Spinner } from '../../componentes/Spinner';
import { getLoadProfileChartData } from '../../api/operationsHome/loadProfileChart';

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

type Props = {};

const Chart = ({}: Props) => {
	const { data, isLoading, isError } = useQuery(['loadProfileChart'], getLoadProfileChartData);

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

	return <ChartGraphCard title="Load Profile (KW)">{renderBody()}</ChartGraphCard>;
};

export default Chart;
