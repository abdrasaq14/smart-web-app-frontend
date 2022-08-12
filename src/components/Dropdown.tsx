import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import React, { useState } from 'react';

interface DropdownProps {
    options: Array<string>,
    label?: string,
    autoSelectFirst?: boolean
}

export const Dropdown = ({ options, label, autoSelectFirst }: DropdownProps) => {

    const [selectedOption, setSelectedOption] = useState<string | undefined>(autoSelectFirst ? options[0] : undefined);

    return (<Box sx={{ minWidth: 90 }}>
        <FormControl fullWidth>
            {label ? <InputLabel id="Label">{label}</InputLabel> : undefined}
            <Select
                sx={{ background: '#F9F9F9', borderColor: '#E5E5E5' }}
                labelId={label ? 'Label' : undefined}
                id="selection"
                value={selectedOption}
                onChange={(value) => {
                    setSelectedOption(value.target.value);
                }}
            >
                {options.map((option, index) => (
                    <MenuItem key={index} value={option}>{option}</MenuItem>
                ))}
            </Select>
        </FormControl>
    </Box>);
}