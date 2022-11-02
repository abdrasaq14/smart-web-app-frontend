import { Controller, FieldErrors, FieldValues, UseControllerProps } from 'react-hook-form';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { ErrorMessage } from '@hookform/error-message';
import React from 'react';

type Option = {
	key: number | string;
	value: number | string;
	label: string;
};

interface Props<T> extends UseControllerProps<T> {
	errors: FieldErrors | undefined;
	label: string;
	options: Option[];
}

export const ControlSelectField = <T extends FieldValues>({
	name,
	control,
	label,
	rules,
	errors,
	options,
}: Props<T>) => {
	return (
		// <Controller
		// 	name={name}
		// 	control={control}
		// 	rules={rules}
		// 	render={({ field }) => (
		// 		<>
		// 			<TextField {...field} label={label} />
		// 			<ErrorMessage
		// 				errors={errors}
		// 				name={name}
		// 				render={({ message }) => <Box sx={{ color: 'red' }}>{message}</Box>}
		// 			/>
		// 		</>
		// 	)}
		// />
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field }) => (
				<FormControl>
					<InputLabel>{label}</InputLabel>
					<Select {...field} label={label}>
						{options.map((option) => (
							<MenuItem key={option.key} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</Select>
					<ErrorMessage
						errors={errors}
						name={name}
						render={({ message }) => <Box sx={{ color: 'red' }}>{message}</Box>}
					/>
				</FormControl>
			)}
		/>
	);
};
