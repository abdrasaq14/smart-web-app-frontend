import { z } from 'zod';
import { accessLevelsValues } from '../users/types';

export const companyTypeValues = ['car_energy'] as const;
export const companyTypeOptions = [{ key: 'car_energy', value: 'car_energy', label: 'Car energy' }];
export const companyTypeEnum = z.enum(companyTypeValues);
export type CompanyTypeEnum = z.infer<typeof companyTypeEnum>;

export const companyServiceTypeValues = ['energy_monitoring'] as const;
export const companyServiceTypeOptions = [
	{ key: 'energy_monitoring', value: 'energy_monitoring', label: 'Energy monitoring' },
];
export const companyServiceTypeEnum = z.enum(companyServiceTypeValues);
export type CompanyServiceTypeEnum = z.infer<typeof companyServiceTypeEnum>;

export const CreateCompanySchema = z.object({
	name: z.string(),
	company_type: companyTypeEnum,
	phone_number: z.string(),
	email: z.string(),
	address: z.string(),
	renewal_date: z.string(),
	service_type: z.enum(companyServiceTypeValues),
});

const UserInCompaniesSchema = z.object({
	id: z.number(),
	first_name: z.string(),
	last_name: z.string(),
	employee_id: z.string(),
	email: z.string(),
	phone_number: z.string(),
	access_level: z.enum(accessLevelsValues),
	time: z.string(),
});

export const GetCompanySchema = CreateCompanySchema.extend({
	id: z.number(),
	users: z.array(UserInCompaniesSchema),
});

export type ApiGetCompany = z.infer<typeof GetCompanySchema>;
export type ApiCreateCompany = z.infer<typeof CreateCompanySchema>;
