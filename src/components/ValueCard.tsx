import { Box, Card } from '@mui/material';
import React from 'react';

export const ValueCard = ({ value, label }: { value: string, label: string }) => {
    return (<Card
        sx={{
            width: '280px',
            height: '140px',
            borderRadius: '16px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}
        variant="outlined">
        <Box sx={{ paddingTop: '8px', fontWeight: 'bold', fontSize: '32px', lineHeight: '48px'}}>{value}</Box>
        <Box sx={{ paddingTop: '20px', fontSize: '14px', color: '#6E7883', lineHeight: '48px' }}>{label}</Box>
    </Card>);
}