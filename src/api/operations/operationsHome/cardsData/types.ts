import { z } from 'zod';

export const CardsDataForOperationsHomeSchema = z.object({
	total_consumption: z.number(),
	current_load: z.number(),
	avg_availability: z.number(),
	power_cuts: z.number(),
	overloaded_dts: z.number(),
	sites_under_maintenance: z.number(),
});

export type ApiCardsDataForOperationsHome = z.infer<typeof CardsDataForOperationsHomeSchema>;
