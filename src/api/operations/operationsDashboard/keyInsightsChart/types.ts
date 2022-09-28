import { z } from 'zod';

export const KeyInsightsChartSchema = z.object({
	insights: z.array(z.string()),
});

export type ApiKeyInsightsChart = z.infer<typeof KeyInsightsChartSchema>;
