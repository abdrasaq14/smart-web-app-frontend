import { z } from 'zod';

const UserLogSchema = z.object({
	alertId: z.string(),
	modifiedBy: z.string(),
	employeeId: z.string(),
	emailAddress: z.string(),
	time: z.string(),
});
export const UserLogsResponseSchema = z.array(UserLogSchema);

export type ApiUserLog = z.infer<typeof UserLogSchema>;
export type ApiUserLogs = z.infer<typeof UserLogsResponseSchema>;
