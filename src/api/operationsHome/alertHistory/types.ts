import { z } from 'zod';

const AlertHistoryRowSchema = z.object({
	id: z.string(),
	site: z.string(),
	zone: z.string(),
	district: z.string(),
	activity: z.string(),
	status: z.string(),
	time: z.string(),
});
export const AlertHistoryResponseSchema = z.array(AlertHistoryRowSchema);
export type ApiAlertHistoryRow = z.infer<typeof AlertHistoryRowSchema>;
export type ApiAlertHistory = z.infer<typeof AlertHistoryResponseSchema>;
