import { z } from 'zod';

export const SitesMonitoredSchema = z.object({
	total: z.number(),
	dataset: z.array(
		z.object({
			key: z.string(),
			value: z.number(),
		})
	),
});
export type ApiSitesMonitored = z.infer<typeof SitesMonitoredSchema>;
