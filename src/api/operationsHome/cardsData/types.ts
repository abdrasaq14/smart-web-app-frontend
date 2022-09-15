import { z } from 'zod';

export const CardsDataForOperationsHomeSchema = z.object({
	totalConsumption: z.number(),
	currentLoad: z.number(),
	avgAvailability: z.number(),
	powerCuts: z.number(),
	overloadedDTs: z.number(),
	sitesUnderMaintenance: z.number(),
});

export type ApiCardsDataForOperationsHome = z.infer<typeof CardsDataForOperationsHomeSchema>;
