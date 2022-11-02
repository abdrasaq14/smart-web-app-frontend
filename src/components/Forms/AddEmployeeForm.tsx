import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { post } from '../../api/apiUtils';
import { accessLevelsOptions, AddUserApi } from '../../api/accountUI/users/types';
import { useParams } from 'react-router-dom';
import { DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE } from '../../utils/constants';
import { ControlTextField } from './FormComponents/ControlTextField';
import { ControlSelectField } from './FormComponents/ControlSelectField';
import { useSnackbar } from 'notistack';

const defaultValues: Partial<AddUserApi> = {
	first_name: '',
	last_name: '',
	employee_id: '',
	email: '',
	phone_number: '',
	// access_level: z.enum(accessLevelsValues),
};

export default function AddEmployeeForm() {
	const { id: companyId } = useParams();
	const { enqueueSnackbar } = useSnackbar();
	const queryClient = useQueryClient();

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<AddUserApi>({ defaultValues });

	const mutation = useMutation(
		(newUser: AddUserApi): Promise<any> => {
			return post('users', { ...newUser, companies: [parseInt(companyId ?? '0')] });
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('users');
				enqueueSnackbar('Employee has been added!', { variant: 'success' });
				reset();
			},
			onError: () => {
				enqueueSnackbar('Error while trying to add employee!', { variant: 'error' });
			},
		}
	);

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
