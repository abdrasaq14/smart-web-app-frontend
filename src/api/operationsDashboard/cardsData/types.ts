import { z } from 'zod';

export const CardsDataForOperationsDashboardSchema = z.object({
	gridHours: z.number(),
	tariffPlan: z.number(),
	noOfOutages: z.number(),
	downtime: z.number(),
	revenuePerHour: z.number(),
	untappedRevenue: z.number(),
});

export type ApiCardsDataForOperationsDashboard = z.infer<
	typeof CardsDataForOperationsDashboardSchema
>;
