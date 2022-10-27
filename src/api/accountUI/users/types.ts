import { z } from 'zod';

export const accessLevelsOptions = ['operations', 'finance', 'manager', 'superuser'] as const;
const accessLevelsEnum = z.enum(accessLevelsOptions);
export type AccessLevelsEnum = z.infer<typeof accessLevelsEnum>;

export const companyTypeOptions = ['car_energy'] as const;
export const companyTypeEnum = z.enum(companyTypeOptions);

export const companyServiceTypeOptions = ['energy_monitoring'] as const;
export const companyServiceTypeEnum = z.enum(companyServiceTypeOptions);

export const CreateUserSchema = z.object({
	first_name: z.string(),
	last_name: z.string(),
	companies: z.array(z.number()),
	employee_id: z.string(),
	email: z.string(),
	phone_number: z.string(),
	access_level: z.enum(accessLevelsOptions),
	time: z.string(),
});

const GetCompanySchemaWithoutUsers = z.object({
	id: z.number(),
	name: z.string(),
	company_type: companyTypeEnum,
	phone_number: z.string(),
	email: z.string(),
	address: z.string(),
	renewal_date: z.string(),
	service_type: z.enum(companyServiceTypeOptions),
	// users: z.array(z.number()),
});

const UserSchema = CreateUserSchema.extend({
	id: z.number(),
	companies: z.array(GetCompanySchemaWithoutUsers),
});

const UpdateUserSchema = CreateUserSchema.extend({ id: z.number() });

export const UserResponseSchema = z.object({
	count: z.number(),
	next: z.nullable(z.string()),
	previous: z.nullable(z.string()),
	results: z.array(UserSchema),
});

export type AddUserApi = z.infer<typeof CreateUserSchema>;
export type UpdateUserApi = z.infer<typeof UpdateUserSchema>;
export type User = z.infer<typeof UserSchema>;
export type ApiUsers = z.infer<typeof UserResponseSchema>;
