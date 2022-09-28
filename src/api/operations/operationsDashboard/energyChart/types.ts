import { z } from 'zod';
import { ChartDatasetDataSchema } from '../../../apiUtils';

export const EnergyChartSchema = z.object({
	dataset: ChartDatasetDataSchema,
});
export type ApiEnergyChart = z.infer<typeof EnergyChartSchema>;
