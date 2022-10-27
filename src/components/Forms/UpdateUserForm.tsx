import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { patch } from '../../api/apiUtils';
import {
	accessLevelsOptions,
	AddUserApi,
	UpdateUserApi,
	User,
} from '../../api/accountUI/users/types';

export default function UpdateUserForm({
	user: currentUser,
	afterSubmit,
}: {
	user: User;
	afterSubmit: () => void;
}) {
	const queryClient = useQueryClient();
	const mutation = useMutation(
		(newUser: AddUserApi): Promise<any> => {
			return patch('users', { ...newUser });
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('users');
				afterSubmit();
			},
		}
	);

	const currentUserForUpdate = {
		...currentUser,
		companies: currentUser.companies.map((company) => company.id),
	};

	const { register, handleSubmit } = useForm<UpdateUserApi>({
		defaultValues: currentUserForUpdate,
	});
	const onSubmit: SubmitHandler<AddUserApi> = (data) => {
		console.log(data);
		mutation.mutate(data);
	};

	return (
		<Box>
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
