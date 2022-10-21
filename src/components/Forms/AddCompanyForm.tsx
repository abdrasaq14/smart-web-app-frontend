import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Box } from '@mui/material';
import {
	ApiCreateCompany,
	companyServiceTypeOptions,
	companyTypeOptions,
} from '../../api/accountUI/company/types';
import { useMutation, useQueryClient } from 'react-query';
import { post } from '../../api/apiUtils';

export default function AddCompanyForm() {
	const queryClient = useQueryClient();
	const mutation = useMutation(
		(newCompany: ApiCreateCompany): Promise<any> => {
			return post('companies', newCompany);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('companies');
			},
		}
	);
	const { register, handleSubmit } = useForm<ApiCreateCompany>();
	const onSubmit: SubmitHandler<ApiCreateCompany> = (data) => {
		console.log(data);
		mutation.mutate(data);
	};

	return (
		<Box>
			<Box>Add company</Box>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Company name</label>
						<input {...register('name')} />
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Company type</label>
						<select {...register('company_type')}>
							{companyTypeOptions.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Company phone number</label>
						<input {...register('phone_number')} />
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Company email address</label>
						<input type="email" {...register('email')} />
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Company address</label>
						<textarea rows={5} {...register('address')} />
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Company renewal date</label>
						<input type="date" {...register('renewal_date')} />
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Company service type</label>
						<select {...register('service_type')}>
							{companyServiceTypeOptions.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
					</Box>

					<input type="submit" />
				</Box>
			</form>
		</Box>
	);
}
