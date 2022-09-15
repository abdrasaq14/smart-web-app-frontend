import { z } from 'zod';
import { ChartDatasetDataSchema } from '../apiUtils';

const SitesMonitoredSchema = z.object({
	total: z.number(),
	data: z.array(
		z.object({
			key: z.string(),
			value: z.number(),
		})
	),
});
export type ApiSitesMonitored = z.infer<typeof SitesMonitoredSchema>;

const LoadProfileChartSchema = z.object({
	data: ChartDatasetDataSchema,
});
export type ApiLoadProfileChart = z.infer<typeof LoadProfileChartSchema>;

export const OperationsHomeSchema = z.object({
	chartsData: z.object({
		sitesMonitored: SitesMonitoredSchema,
		loadProfile: LoadProfileChartSchema,
	}),
	cardsData: z.object({
		totalConsumption: z.number(),
		currentLoad: z.number(),
		avgAvailability: z.number(),
		powerCuts: z.number(),
		overloadedDTs: z.number(),
		sitesUnderMaintenance: z.number(),
	}),
});

export type ApiOperationsHome = z.infer<typeof OperationsHomeSchema>;
