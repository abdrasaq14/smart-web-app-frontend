import { z } from 'zod';

const CreateCompanySchema = z.object({
	name: z.string(),
	type: z.string(), // set of options
	phone_number: z.string(),
	email_address: z.string(),
	address: z.string(),
	renewal_date: z.string(),
	type_of_service: z.string(), // set of options
});

export const GetCompanySchema = CreateCompanySchema.extend({ id: z.number() });

export type ApiGetCompany = z.infer<typeof GetCompanySchema>;
