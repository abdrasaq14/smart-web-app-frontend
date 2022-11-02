import { Controller, FieldErrors, FieldValues, UseControllerProps } from 'react-hook-form';
import { Box, TextField } from '@mui/material';
import { ErrorMessage } from '@hookform/error-message';
import React, { HTMLInputTypeAttribute } from 'react';

interface Props<T> extends UseControllerProps<T> {
	errors: FieldErrors | undefined;
	label: string;
	type?: HTMLInputTypeAttribute;
	multiline?: boolean;
	rows?: number;
}

export const ControlTextField = <T extends FieldValues>({
	name,
	control,
	label,
	rules,
	errors,
	type,
	multiline,
	rows,
}: Props<T>) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field }) => (
				<>
					<TextField
						{...field}
						label={label}
						type={type ?? 'text'}
						multiline={multiline}
						rows={rows}
					/>
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
