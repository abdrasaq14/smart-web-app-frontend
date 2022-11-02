import { Controller, FieldErrors, FieldValues, UseControllerProps } from 'react-hook-form';
import { Box, TextField } from '@mui/material';
import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface Props<T> extends UseControllerProps<T> {
	errors: FieldErrors | undefined;
	label: string;
}

export const ControlDatePickerField = <T extends FieldValues>({
	name,
	control,
	label,
	rules,
	errors,
}: Props<T>) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field }) => (
				<>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							{...field}
							label={label}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
					<ErrorMessage
						errors={errors}
						name={name}
						render={({ message }) => <Box sx={{ color: 'red' }}>{message}</Box>}
					/>
				</>
			)}
		/>
	);
};
