import { z } from 'zod';

const EventLogRowSchema = z.object({
	id: z.number(),
	alert_id: z.string(),
	site: z.string(),
	// site: z.number(),
	zone: z.string(),
	district: z.string(),
	activity: z.string(),
	time: z.string(),
	status: z.string(),
});
export const EventLogsResponseSchema = z.object({
	count: z.number(),
	next: z.nullable(z.string()),
	previous: z.nullable(z.string()),
	results: z.array(EventLogRowSchema),
});

export type ApiEventLogs = z.infer<typeof EventLogsResponseSchema>;
