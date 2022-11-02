import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import {
	ApiCreateCompany,
	companyServiceTypeOptions,
	companyTypeOptions,
} from '../../api/accountUI/company/types';
import { useMutation, useQueryClient } from 'react-query';
import { post } from '../../api/apiUtils';
import { DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE } from '../../utils/constants';
import { ControlTextField } from './FormComponents/ControlTextField';
import { ControlSelectField } from './FormComponents/ControlSelectField';
import { ControlDatePickerField } from './FormComponents/ControlDatePicker';

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
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<ApiCreateCompany>();
	const onSubmit: SubmitHandler<ApiCreateCompany> = (data) => {
		console.log(data);
		mutation.mutate(data);
	};
	console.log('errors: ', errors);

	return (
		<Box>
			<Box>Add company</Box>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlTextField
							name="name"
							label="Company name"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlSelectField
							name="company_type"
							label="Company Type"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
							options={companyTypeOptions}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlTextField
							name="phone_number"
							label="Company phone number"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlTextField
							name="email"
							label="Company email address"
							type="email"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlTextField
							name="address"
							label="Company address"
							multiline
							rows={5}
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlDatePickerField
							name="renewal_date"
							label="Company renewal date"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<ControlSelectField
							name="service_type"
							label="Company service type"
							errors={errors}
							control={control}
							rules={{ required: DEFAULT_REQUIRED_FIELD_ERROR_MESSAGE }}
							options={companyServiceTypeOptions}
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
