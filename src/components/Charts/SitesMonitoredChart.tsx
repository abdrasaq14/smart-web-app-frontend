import React from 'react';
import PieChart from '../PieChart';
import { useQuery } from 'react-query';
import { Spinner } from '../../componentes/Spinner';
import { Box, Card } from '@mui/material';
import { getSitesMonitoredChartData } from '../../api/operationsHome/sitesMonitored';

const keyLabelMapping: any = {
	active: 'Active',
	offline: 'Offline',
};

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

const Page = () => {
	const { data, isLoading, isError } = useQuery(
		['sitesMonitoredChart'],
		getSitesMonitoredChartData
	);
	const dataset =
		data?.dataset.map((apiDataRow) => {
			return {
				name: keyLabelMapping[apiDataRow.key] ?? '',
				value: apiDataRow.value,
			};
		}) ?? [];

	const renderBody = () => {
		if (isLoading) {
			return <Spinner />;
		} else if (isError) {
			return <Box>Error fetching data...</Box>;
		} else {
			return <PieChart pieTitle={`${data?.total} Locations`} data={dataset} />;
		}
	};

	return <ChartGraphCard title="Sites monitored">{renderBody()}</ChartGraphCard>;
};

export default Page;
