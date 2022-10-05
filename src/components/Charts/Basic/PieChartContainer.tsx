import { Spinner } from '../../Spinner';
import { Box } from '@mui/material';
import PieChart from './PieChart';
import ChartCard from '../../ChartCard';
import React from 'react';

interface PieChartContainerProps {
	keyLabelMapping: { [key in string]: string };
	pieTitle: string;
	cardTitle: string;
	data?: { dataset: any[]; total: number };
	isLoading: boolean;
	isError: boolean;
}

export function PieChartContainer({
	keyLabelMapping,
	pieTitle,
	cardTitle,
	data,
	isLoading,
	isError,
}: PieChartContainerProps) {
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
			return <PieChart pieTitle={pieTitle} data={dataset} />;
		}
	};

	return <ChartCard title={cardTitle}>{renderBody()}</ChartCard>;
}
