import { getAverageDailyFrequencyChartData } from './averageDailyFrequencyChart';
import { getAverageDailyLoadChartData } from './averageDailyLoadChart';
import { getAverageDailyVoltageChartData } from './averageDailyVoltgeChart';
import { getAverageDailyPFChartData } from './averageDailyPFChart';
import { useQuery } from 'react-query';
import { OperationsSiteDashboardChartType } from '../../../../types';

const chartTypeFetcher = {
	voltage: getAverageDailyVoltageChartData,
	load: getAverageDailyLoadChartData,
	pf: getAverageDailyPFChartData,
	frequency: getAverageDailyFrequencyChartData,
} as const;

export const useGetAverageDailyChartData = (chartType: OperationsSiteDashboardChartType) =>
	useQuery(
		['dailyCharts', chartType],
		chartTypeFetcher[chartType] ?? getAverageDailyVoltageChartData
	);
