import { z } from 'zod';
import { ChartDatasetDataSchema } from '../../../apiUtils';

export const TopRevenuesSchema = z.object({
	dataset: ChartDatasetDataSchema,
});
export type ApiTopRevenuesChart = z.infer<typeof TopRevenuesSchema>;
