import { z } from 'zod';

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

export const OperationsHomeSchema = z.object({
	chartsData: z.object({
		sitesMonitored: SitesMonitoredSchema,
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
