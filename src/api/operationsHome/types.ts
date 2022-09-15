import { z } from 'zod';

export const OperationsHomeSchema = z.object({
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
