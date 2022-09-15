import { z } from 'zod';

export const DTstatusChartSchema = z.object({
	dataset: z.object({ percentageValue: z.number(), humidity: z.number(), temperature: z.number() }),
});

export type ApiDTstatusChart = z.infer<typeof DTstatusChartSchema>;
