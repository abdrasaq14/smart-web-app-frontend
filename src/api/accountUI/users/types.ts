import { z } from 'zod';

export const accessLevelsOptions = ['operations', 'finance', 'manager', 'superuser'] as const;

const UserSchema = z.object({
	id: z.number(),
	first_name: z.string(),
	last_name: z.string(),
	companies: z.array(z.number()),
	employee_id: z.string(),
	email: z.string(),
	access_level: z.enum(accessLevelsOptions),
	time: z.string(),
});

export const UserResponseSchema = z.object({
	count: z.number(),
	next: z.nullable(z.string()),
	previous: z.nullable(z.string()),
	results: z.array(UserSchema),
});

export type ApiUsers = z.infer<typeof UserResponseSchema>;
