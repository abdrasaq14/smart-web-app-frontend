import { z } from 'zod';

export const companyTypeOptions = ['car_energy'] as const;
export const companyServiceTypeOptions = ['energy_monitoring'] as const;

const CreateCompanySchema = z.object({
	name: z.string(),
	company_type: z.enum(companyTypeOptions),
	phone_number: z.string(),
	email: z.string(),
	address: z.string(),
	renewal_date: z.string(),
	service_type: z.enum(companyServiceTypeOptions),
});

const CompanyUserSchema = z.object({
	id: z.number(),
	name: z.string(),
	date: z.string(),
});

export const GetCompanySchema = CreateCompanySchema.extend({
	id: z.number(),
	users: z.array(CompanyUserSchema),
});

export type ApiGetCompany = z.infer<typeof GetCompanySchema>;
