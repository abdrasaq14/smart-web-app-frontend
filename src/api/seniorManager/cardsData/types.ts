import { z } from 'zod';

export const CardsDataForManagerHomeSchema = z.object({
	total_revenue: z.number(),
	atc_losses: z.number(),
	total_consumption: z.number(),
	current_load: z.number(),
	number_of_sites: z.number(),
	number_of_users: z.number(),
	pending_alerts: z.number(),
});

export type ApiCardsDataForManagerHome = z.infer<typeof CardsDataForManagerHomeSchema>;
