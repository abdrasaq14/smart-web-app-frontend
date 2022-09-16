import { z } from 'zod';
import { ChartDatasetDataSchema } from '../../apiUtils';

export const AverageDailyVoltageSchema = z.object({
	dataset: ChartDatasetDataSchema,
});
export type ApiAverageDailyVoltageChart = z.infer<typeof AverageDailyVoltageSchema>;
