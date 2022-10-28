import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { post } from '../../api/apiUtils';
import { accessLevelsOptions, AddUserApi } from '../../api/accountUI/users/types';
import { useParams } from 'react-router-dom';

export default function AddEmployeeForm() {
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

	const { control, handleSubmit } = useForm<AddUserApi>();
	const onSubmit: SubmitHandler<AddUserApi> = (data) => {
		console.log(data);
		mutation.mutate(data);
	};

	return (
		<Box>
			<Box>Add employee</Box>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => <TextField {...field} label="Employee first name" />}
							name="first_name"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => <TextField {...field} label="Employee last name" />}
							name="last_name"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => <TextField {...field} label="Employee id" />}
							name="employee_id"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => <TextField {...field} label="Employee phone number" />}
							name="phone_number"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => (
								<TextField {...field} type="email" label="Employee email address" />
							)}
							name="email"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => (
								<FormControl>
									<InputLabel>Employee access level</InputLabel>
									<Select {...field} label="Employee access level">
										{accessLevelsOptions.map((option) => (
											<MenuItem key={option} value={option}>
												{option}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							)}
							name="access_level"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Button variant="contained" onClick={handleSubmit(onSubmit)}>
							Submit
						</Button>
					</Box>
				</Box>
			</form>
		</Box>
	);
}
