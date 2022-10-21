import { z } from 'zod';
import { GetCompanySchema } from '../company/types';
import { DeviceTariffSchema } from '../device_tariffs/types';

const CreateDeviceSchema = z.object({
	id: z.string(),
	name: z.string(),
	location: z.string(),
	co_ordinate: z.string(),
	company_district: z.string(),
	asset_type: z.string(), // set of options
	asset_capacity: z.number(),
	linked_at: z.string(),
	site: z.number(),
	company: z.number(),
	tariff: z.number(),
});

const GetDeviceSchema = CreateDeviceSchema.merge(
	z.object({
		company: GetCompanySchema,
		tariff: DeviceTariffSchema,
	})
);

export const DeviceResponseSchema = z.object({
	count: z.number(),
	next: z.nullable(z.string()),
	previous: z.nullable(z.string()),
	results: z.array(GetDeviceSchema),
});

export type ApiDevice = z.infer<typeof DeviceResponseSchema>;
export type ApiCreateDevice = z.infer<typeof CreateDeviceSchema>;
