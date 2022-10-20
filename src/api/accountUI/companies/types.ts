import { z } from 'zod';
import { GetCompanySchema } from '../company/types';

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

export const GetCompaniesSchema = z.object({
	count: z.number(),
	next: z.nullable(z.string()),
	previous: z.nullable(z.string()),
	results: z.array(GetCompanySchema),
});

export type ApiGetCompanies = z.infer<typeof GetCompaniesSchema>;
