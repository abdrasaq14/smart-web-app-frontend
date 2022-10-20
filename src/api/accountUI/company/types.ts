import { z } from 'zod';
import { CompanyUserSchema } from '../companies/types';

const CreateCompanySchema = z.object({
	name: z.string(),
	company_type: z.string(), // set of options
	phone_number: z.string(),
	email: z.string(),
	address: z.string(),
	renewal_date: z.string(),
	service_type: z.string(), // set of options
});

export const GetCompanySchema = CreateCompanySchema.extend({
	id: z.number(),
	users: z.array(CompanyUserSchema),
});

export type ApiGetCompany = z.infer<typeof GetCompanySchema>;
