import { z } from 'zod';

export const CardsDataForAccountUiHomeSchema = z.object({
	total_energy_expanses: z.number(),
	total_consumption: z.number(),
	current_load: z.number(),
	co2_savings: z.number(),
	number_of_companies: z.number(),
	number_of_sites: z.number(),
	number_of_users: z.number(),
});

export type ApiCardsDataForAccountUiHome = z.infer<typeof CardsDataForAccountUiHomeSchema>;
