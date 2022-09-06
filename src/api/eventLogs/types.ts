import { z } from 'zod';

const EventLogSchema = z.object({
	alertId: z.string(),
	site: z.string(),
	zone: z.string(),
	district: z.string(),
	activity: z.string(),
	time: z.string(),
	status: z.string(),
});
export const EventLogsResponseSchema = z.array(EventLogSchema);

export type ApiEventLog = z.infer<typeof EventLogSchema>;
export type ApiEventLogs = z.infer<typeof EventLogsResponseSchema>;
