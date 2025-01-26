export interface ICompany {
  id: string;
  name: string;
  company_type: string;
  service_type: string;
  phone_number: string;
  email: string;
  address: string;
  renewal_date: string; // ISO 8601 date string
  users: IUser[]; // Array of users in the company
}


export interface IUser {
  id: string;
  access_level: string;
  email: string;
  first_name: string;
  last_name: string;
  employee_id: string;
  created_at: string; // ISO 8601 date-time string
  updated_at: string; // ISO 8601 date-time string
  phone_number: string;
  company_id: string;
  company: ICompany;
  username: string;
}