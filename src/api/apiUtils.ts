import { z } from 'zod';

const stringOrNumberSchema = z.union([z.string(), z.number()]);
export const ChartDatasetDataSchema = z.array(z.array(stringOrNumberSchema));

export const PieChartSchema = z.object({
	total: z.number(),
	dataset: z.array(
		z.object({
			key: z.string(),
			value: z.number(),
		})
	),
});
export type ApiPieChart = z.infer<typeof PieChartSchema>;
