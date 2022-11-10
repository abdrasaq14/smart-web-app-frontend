import { z } from 'zod';

export const CardsDataForOperationsDashboardSchema = z.object({
	gridHours: z.number().optional(),
	tariffPlan: z.number().optional(),
	noOfOutages: z.number().optional(),
	downtime: z.number().optional(),
	revenuePerHour: z.number().optional(),
	untappedRevenue: z.number().optional(),
});

export type ApiCardsDataForOperationsDashboard = z.infer<
	typeof CardsDataForOperationsDashboardSchema
>;
