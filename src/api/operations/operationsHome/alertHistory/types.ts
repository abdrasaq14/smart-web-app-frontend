import { z } from 'zod';

const AlertHistoryRowSchema = z.object({
	id: z.number(),
	alert_id: z.string(),
	site: z.string(),
	// site: z.number(),
	zone: z.string(),
	district: z.string(),
	activity: z.string(),
	status: z.string(),
	time: z.string(),
});
export const AlertHistoryResponseSchema = z.object({
	count: z.number(),
	next: z.nullable(z.string()),
	previous: z.nullable(z.string()),
	results: z.array(AlertHistoryRowSchema),
});
export type ApiAlertHistoryRow = z.infer<typeof AlertHistoryRowSchema>;
export type ApiAlertHistory = z.infer<typeof AlertHistoryResponseSchema>;
