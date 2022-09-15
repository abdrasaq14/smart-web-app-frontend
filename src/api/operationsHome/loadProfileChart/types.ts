import { z } from 'zod';
import { ChartDatasetDataSchema } from '../../apiUtils';

export const LoadProfileChartSchema = z.object({
	dataset: ChartDatasetDataSchema,
});
export type ApiLoadProfileChart = z.infer<typeof LoadProfileChartSchema>;
