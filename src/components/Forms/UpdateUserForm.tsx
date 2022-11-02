import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { patch } from '../../api/apiUtils';
import {
	accessLevelsOptions,
	AddUserApi,
	UpdateUserApi,
	User,
} from '../../api/accountUI/users/types';
import { ControlTextField } from './FormComponents/ControlTextField';
import { DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE } from '../../utils/constants';
import { ControlSelectField } from './FormComponents/ControlSelectField';
import { useSnackbar } from 'notistack';

export default function UpdateUserForm({
	entity: currentUser,
	afterSubmit,
}: {
	entity: User;
	afterSubmit: () => void;
}) {
	const queryClient = useQueryClient();
	const { enqueueSnackbar } = useSnackbar();
	const mutation = useMutation(
		(newUser: AddUserApi): Promise<any> => {
			return patch('users', { ...newUser });
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('users');
				enqueueSnackbar('User has been updated!', { variant: 'success' });
				afterSubmit();
			},
			onError: () => {
				enqueueSnackbar('Error while trying to update user!', { variant: 'error' });
			},
		}
	);

	const currentUserForUpdate = {
		...currentUser,
		companies: currentUser.companies.map((company) => company.id),
	};

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<UpdateUserApi>({
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
						<ControlTextField
							name="first_name"
							label="Employee first name"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlTextField
							name="last_name"
							label="Employee last name"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlTextField
							name="employee_id"
							label="Employee id"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlTextField
							name="phone_number"
							label="Employee phone number"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlTextField
							name="email"
							label="Employee email address"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlSelectField
							name="access_level"
							label="Employee access level"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
							options={accessLevelsOptions}
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
