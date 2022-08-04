import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import React, { useState } from 'react';

export const Dropdown = ({ options }: { options: Array<string> }) => {

    const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);

    return (<Box sx={{ minWidth: 90 }}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Site(s)</InputLabel>
            <Select
                sx={{ background: '#F9F9F9', borderColor: '#E5E5E5' }}
                labelId="Site"
                id="site-selection"
                value={selectedOption}
                label="Site(s)"
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