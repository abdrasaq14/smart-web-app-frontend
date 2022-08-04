import { Box, Card } from '@mui/material';
import React from 'react';

export const GraphCard = (props: React.PropsWithChildren<{ title: string }>) => {
    return (<Card
        sx={{
            borderRadius: '16px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '32px'
        }}
        variant="outlined">
        <Box sx={{ paddingTop: '8px', fontWeight: 'bold', fontSize: '14px', lineHeight: '17px' }}>{props.title}</Box>
        {props.children}
    </Card>);
}