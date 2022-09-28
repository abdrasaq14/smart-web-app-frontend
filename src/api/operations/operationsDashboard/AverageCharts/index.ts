import { getAverageDailyFrequencyChartData } from './averageDailyFrequencyChart';
import { getAverageDailyLoadChartData } from './averageDailyLoadChart';
import { getAverageDailyVoltageChartData } from './averageDailyVoltgeChart';
import { getAverageDailyPFChartData } from './averageDailyPFChart';
import { useQuery } from 'react-query';

const chartTypeFetcher = {
	voltage: getAverageDailyVoltageChartData,
	load: getAverageDailyLoadChartData,
	pf: getAverageDailyPFChartData,
	frequency: getAverageDailyFrequencyChartData,
};

export const useGetAverageDailyChartData = (chartType: string) =>
	useQuery(
		['dailyCharts', chartType],
		chartTypeFetcher[chartType] ?? getAverageDailyVoltageChartData
	);
