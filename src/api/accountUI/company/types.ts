import { z } from 'zod';
import { accessLevelsOptions } from '../users/types';

export const companyTypeOptions = ['car_energy'] as const;
export const companyTypeEnum = z.enum(companyTypeOptions);
export type CompanyTypeEnum = z.infer<typeof companyTypeEnum>;

export const companyServiceTypeOptions = ['energy_monitoring'] as const;
export const companyServiceTypeEnum = z.enum(companyServiceTypeOptions);
export type CompanyServiceTypeEnum = z.infer<typeof companyServiceTypeEnum>;

export const CreateCompanySchema = z.object({
	name: z.string(),
	company_type: companyTypeEnum,
	phone_number: z.string(),
	email: z.string(),
	address: z.string(),
	renewal_date: z.string(),
	service_type: z.enum(companyServiceTypeOptions),
});

const UserInCompaniesSchema = z.object({
	id: z.number(),
	first_name: z.string(),
	last_name: z.string(),
	employee_id: z.string(),
	email: z.string(),
	phone_number: z.string(),
	access_level: z.enum(accessLevelsOptions),
	time: z.string(),
});

export const GetCompanySchema = CreateCompanySchema.extend({
	id: z.number(),
	users: z.array(UserInCompaniesSchema),
});

export type ApiGetCompany = z.infer<typeof GetCompanySchema>;
export type ApiCreateCompany = z.infer<typeof CreateCompanySchema>;
