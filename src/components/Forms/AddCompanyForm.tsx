import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import {
	ApiCreateCompany,
	companyServiceTypeOptions,
	companyTypeOptions,
} from '../../api/accountUI/company/types';
import { useMutation, useQueryClient } from 'react-query';
import { post } from '../../api/apiUtils';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

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
	const { handleSubmit, control } = useForm<ApiCreateCompany>();
	const onSubmit: SubmitHandler<ApiCreateCompany> = (data) => {
		console.log(data);
		mutation.mutate(data);
	};

	return (
		<Box>
			<Box>Add company</Box>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => <TextField {...field} label="Company name" />}
							name="name"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => (
								<FormControl>
									<InputLabel>Company Type</InputLabel>
									<Select {...field} label="Company Type">
										{companyTypeOptions.map((option) => (
											<MenuItem key={option} value={option}>
												{option}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							)}
							name="company_type"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => <TextField {...field} label="Company phone number" />}
							name="phone_number"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => (
								<TextField {...field} type="email" label="Company email address" />
							)}
							name="email"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => (
								<TextField {...field} multiline rows={5} label="Company address" />
							)}
							name="address"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => (
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<DatePicker
										{...field}
										label="Company renewal date"
										renderInput={(params) => <TextField {...params} />}
									/>
								</LocalizationProvider>
							)}
							name="renewal_date"
							control={control}
						/>
					</Box>

					<Box sx={{ padding: '8px', display: 'flex', flexDirection: 'column', width: '260px' }}>
						<Controller
							render={({ field }) => (
								<FormControl>
									<InputLabel>Company Type</InputLabel>
									<Select {...field} label="Company service type">
										{companyServiceTypeOptions.map((option) => (
											<option key={option} value={option}>
												{option}
											</option>
										))}
									</Select>
								</FormControl>
							)}
							name="service_type"
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
