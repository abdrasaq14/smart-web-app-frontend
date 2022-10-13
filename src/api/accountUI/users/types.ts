import { z } from 'zod';

const UserSchema = z.object({
	id: z.number(),
	name: z.string(),
	company: z.string(),
	employee_id: z.string(),
	email_address: z.string(),
	department: z.string(),
	time: z.string(),
});
export const UserResponseSchema = z.object({
	count: z.number(),
	next: z.nullable(z.string()),
	previous: z.nullable(z.string()),
	results: z.array(UserSchema),
});

export type ApiUsers = z.infer<typeof UserResponseSchema>;
