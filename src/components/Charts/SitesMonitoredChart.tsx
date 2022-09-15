import React from 'react';
import PieChart from '../PieChart';
import { useQuery } from 'react-query';
import { Spinner } from '../../componentes/Spinner';
import { Box } from '@mui/material';
import { getSitesMonitoredChartData } from '../../api/operationsHome/sitesMonitored';
import ChartCard from '../ChartCard';

const keyLabelMapping: any = {
	active: 'Active',
	offline: 'Offline',
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

	const formatter = Intl.NumberFormat('en', { notation: 'compact' });

	const renderBody = () => {
		if (isLoading) {
			return <Spinner />;
		} else if (isError) {
			return <Box>Error fetching data...</Box>;
		} else {
			return (
				<PieChart pieTitle={`${formatter.format(data?.total ?? 0)} Locations`} data={dataset} />
			);
		}
	};

	return <ChartCard title="Sites monitored">{renderBody()}</ChartCard>;
};

export default Page;
