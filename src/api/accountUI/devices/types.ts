import { z } from 'zod';
import { GetCompanySchema } from '../company/types';

const DeviceSchema = z.object({
	id: z.string(),
	name: z.string(),
	company: GetCompanySchema,
	asset_type: z.string(), // set of options
	asset_capacity: z.number(),
	linked_at: z.string(),
});
export const DeviceResponseSchema = z.object({
	count: z.number(),
	next: z.nullable(z.string()),
	previous: z.nullable(z.string()),
	results: z.array(DeviceSchema),
});

export type ApiDevice = z.infer<typeof DeviceResponseSchema>;
