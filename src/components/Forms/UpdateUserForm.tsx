import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { patch } from '../../api/apiUtils';
import {
	accessLevelsOptions,
	AddUserApi,
	UpdateUserApi,
	User,
} from '../../api/accountUI/users/types';

export default function UpdateUserForm({
	entity: currentUser,
	afterSubmit,
}: {
	entity: User;
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

	const { control, handleSubmit } = useForm<UpdateUserApi>({
		defaultValues: currentUserForUpdate,
	});
	const onSubmit: SubmitHandler<AddUserApi> = (data) => {
		console.log(data);
		mutation.mutate(data);
	};

	return (
		<Box
			sx={{
				width: '300px',
				padding: '16px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
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
