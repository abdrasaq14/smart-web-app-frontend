import { z } from 'zod';
import { ChartDatasetDataSchema } from '../../../apiUtils';

export const FinancialPerformanceChartSchema = z.object({
	dataset: ChartDatasetDataSchema,
});
export type ApiFinancialPerformanceChart = z.infer<typeof FinancialPerformanceChartSchema>;
