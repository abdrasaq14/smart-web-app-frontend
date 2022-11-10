import { z } from 'zod';

export const CardsDataForManagerHomeSchema = z.object({
	total_revenue: z.number().optional(),
	atc_losses: z.number().optional(),
	total_consumption: z.number().optional(),
	current_load: z.number().optional(),
	number_of_sites: z.number().optional(),
	number_of_users: z.number().optional(),
	pending_alerts: z.number().optional(),
});

export type ApiCardsDataForManagerHome = z.infer<typeof CardsDataForManagerHomeSchema>;
