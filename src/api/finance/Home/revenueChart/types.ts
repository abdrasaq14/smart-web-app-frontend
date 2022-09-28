import { z } from 'zod';
import { ChartDatasetDataSchema } from '../../../apiUtils';

export const RevenueSchema = z.object({
	dataset: ChartDatasetDataSchema,
});
export type ApiRevenueChart = z.infer<typeof RevenueSchema>;
