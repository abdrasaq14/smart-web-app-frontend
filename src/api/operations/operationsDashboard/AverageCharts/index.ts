import { getAverageDailyLoadChartData } from './averageDailyLoadChart';
import { getAverageDailyVoltageChartData } from './averageDailyVoltgeChart';
import { getAverageDailyPFChartData } from './averageDailyPFChart';
import { useQuery } from 'react-query';
import { DashboardQueryProps, OperationsSiteDashboardChartType } from '../../../../types';

const chartTypeFetcher: { [key in OperationsSiteDashboardChartType]: any } = {
	voltage: getAverageDailyVoltageChartData,
	load: getAverageDailyLoadChartData,
	pf: getAverageDailyPFChartData,
	// frequency: getAverageDailyFrequencyChartData,
} as const;

export const useGetAverageDailyChartData = (
	chartType: OperationsSiteDashboardChartType,
	options?: DashboardQueryProps
) =>
	useQuery(['dailyCharts', chartType], () =>
		(chartTypeFetcher[chartType] ?? getAverageDailyVoltageChartData)(options)
	);
