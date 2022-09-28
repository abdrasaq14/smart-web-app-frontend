import { z } from 'zod';
import { ChartDatasetDataSchema } from '../../../apiUtils';

export const PowerConsumptionSchema = z.object({
	dataset: ChartDatasetDataSchema,
});
export type ApiPowerConsumptionChart = z.infer<typeof PowerConsumptionSchema>;
