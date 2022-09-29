import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React from 'react';

const styles = {
	container: { background: '#F9F9F9', borderColor: '#E5E5E5' },
};

const ControlledDatePicker = ({
	label,
	value,
	setValue,
}: {
	label: string;
	value: Date | null;
	setValue: any;
}) => {
	return (
		<Box sx={styles.container}>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<DatePicker
					label={label}
					value={value}
					onChange={(newValue) => {
						setValue(newValue);
					}}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>
		</Box>
	);
};

export default ControlledDatePicker;
