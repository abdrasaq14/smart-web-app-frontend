import { z } from 'zod';

// used for Create Company
// const CompanyFullSchema = z.object({
// 	id: z.number(),
// 	name: z.string(),
// 	type: z.string(), // set of options
// 	phone_number: z.string(),
// 	email_address: z.string(),
// 	address: z.string(),
// 	renewal_date: z.string(),
// 	type_of_service: z.string(), // set of options
// });

const CompanyReducedSchema = z.object({
	id: z.number(),
	name: z.string(),
});

export const CompanyUserSchema = z.object({
	id: z.number(),
	name: z.string(),
	date: z.string(),
});

const CompanyWithUsersSchema = CompanyReducedSchema.extend({ users: z.array(CompanyUserSchema) });

export const GetCompaniesSchema = z.array(CompanyWithUsersSchema);

export type ApiGetCompanies = z.infer<typeof GetCompaniesSchema>;
