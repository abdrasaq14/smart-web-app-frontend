import { z } from 'zod';

export const CardsDataForOperationsHomeSchema = z.object({
	total_consumption: z.number().optional(),
	current_load: z.number().optional(),
	avg_availability: z.number().optional(),
	power_cuts: z.number().optional(),
	overloaded_dts: z.number().optional(),
	sites_under_maintenance: z.number().optional(),
});

export type ApiCardsDataForOperationsHome = z.infer<typeof CardsDataForOperationsHomeSchema>;
