import { z } from 'zod';

const UserLogRowSchema = z.object({
	id: z.number(),
	alert_id: z.string(),
	modified_by: z.string(),
	employee_id: z.string(),
	email_address: z.string(),
	time: z.string(),
});
export const UserLogsResponseSchema = z.object({
	count: z.number(),
	next: z.nullable(z.string()),
	previous: z.nullable(z.string()),
	results: z.array(UserLogRowSchema),
});

export type ApiUserLogs = z.infer<typeof UserLogsResponseSchema>;
