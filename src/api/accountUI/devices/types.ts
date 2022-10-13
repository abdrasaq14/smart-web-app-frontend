import { z } from 'zod';

const DeviceSchema = z.object({
	id: z.number(),
	device_id: z.string(),
	name: z.string(),
	company: z.string(),
	asset_type: z.string(),
	asset_capacity: z.number(),
	time: z.string(),
});
export const DeviceResponseSchema = z.object({
	count: z.number(),
	next: z.nullable(z.string()),
	previous: z.nullable(z.string()),
	results: z.array(DeviceSchema),
});

export type ApiDevice = z.infer<typeof DeviceResponseSchema>;
