import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import React from 'react';

type Option = {
	value: string | number;
	label: string;
};

interface DropdownProps {
	options: Array<Option>;
	label?: string;
	value: any;
	setValue: any;
	multiselect?: boolean;
}

export const ControlledDropdown = ({
	options,
	label,
	value,
	setValue,
	multiselect,
}: DropdownProps) => {
	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				{label ? <InputLabel id="Label">{label}</InputLabel> : undefined}
				<Select
					sx={{ background: '#F9F9F9', borderColor: '#E5E5E5' }}
					labelId={label ? 'Label' : undefined}
					multiple={!!multiselect}
					id="selection"
					value={value}
					onChange={(value) => {
						setValue(value.target.value);
					}}
				>
					{options.map((option, index) => (
						<MenuItem key={index} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};
