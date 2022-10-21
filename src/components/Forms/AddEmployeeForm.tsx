import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { post } from '../../api/apiUtils';
import { accessLevelsOptions, AddUserApi } from '../../api/accountUI/users/types';
import { SitesDashboardFilters } from '../../types';
import { useParams } from 'react-router-dom';

export default function AddEmployeeForm({ filters }: { filters: SitesDashboardFilters }) {
	const { id: companyId } = useParams();

	const queryClient = useQueryClient();
	const mutation = useMutation(
		(newUser: AddUserApi): Promise<any> => {
			return post('users', { ...newUser, companies: [parseInt(companyId ?? '0')] });
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('users');
			},
		}
	);
	const { register, handleSubmit } = useForm<AddUserApi>();
	const onSubmit: SubmitHandler<AddUserApi> = (data) => {
		console.log(data);
		mutation.mutate(data);
	};

	return (
		<Box>
			<Box>Add employee</Box>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Employee first name</label>
						<input {...register('first_name')} />
					</Box>
					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Employee last name</label>
						<input {...register('last_name')} />
					</Box>
					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Employee id</label>
						<input {...register('employee_id')} />
					</Box>
					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Employee phone number</label>
						<input {...register('phone_number')} />
					</Box>
					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Employee email address</label>
						<input type="email" {...register('email')} />
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
						<label>Employee access level</label>
						<select {...register('access_level')}>
							{accessLevelsOptions.map((option) => (
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
