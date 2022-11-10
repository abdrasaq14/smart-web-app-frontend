import { z } from 'zod';

export const CardsDataForFinanceHomeSchema = z.object({
	total_revenue: z.number().optional(),
	atc_losses: z.number().optional(),
	downtime_losses: z.number().optional(),
	tarrif_losses: z.number().optional(),
	highest_losses: z.number().optional(),
	highest_revenue: z.number().optional(),
});

export type ApiCardsDataForFinanceHome = z.infer<typeof CardsDataForFinanceHomeSchema>;
