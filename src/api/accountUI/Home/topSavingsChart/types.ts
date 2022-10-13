import { z } from 'zod';
import { ChartDatasetDataSchema } from '../../../apiUtils';

export const TopSavingsSchema = z.object({
	dataset: ChartDatasetDataSchema,
});
export type ApiTopSavingsChart = z.infer<typeof TopSavingsSchema>;
