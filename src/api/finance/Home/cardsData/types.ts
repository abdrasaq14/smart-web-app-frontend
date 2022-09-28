import { z } from 'zod';

export const CardsDataForFinanceHomeSchema = z.object({
	total_revenue: z.number(),
	atc_losses: z.number(),
	downtime_losses: z.number(),
	tarrif_losses: z.number(),
	highest_losses: z.number(),
	highest_revenue: z.number(),
});

export type ApiCardsDataForFinanceHome = z.infer<typeof CardsDataForFinanceHomeSchema>;
