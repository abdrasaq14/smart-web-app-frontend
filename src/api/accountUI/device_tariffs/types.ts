import { z } from 'zod';

export const DeviceTariffSchema = z.object({
	id: z.number(),
	name: z.string(),
	daily_availability: z.string(),
	price: z.number(),
});
export const DeviceTariffsResponseSchema = z.array(DeviceTariffSchema);

export type ApiDeviceTariffs = z.infer<typeof DeviceTariffsResponseSchema>;
