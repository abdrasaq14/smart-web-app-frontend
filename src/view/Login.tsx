import { Box, Card, Checkbox, FormControlLabel, TextField } from '@mui/material';
import React, { useState } from 'react';
import { RegularButton } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { getAuthToken } from '../auth/Rest';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 343,
        minWidth: 343,
        height: 244,
        padding: '44px 93px 44px 93px',
        borderRadius: '16px',
        borderColor: '#E6E6E6',
    },
    title: { fontSize: '24px', fontWeight: 500, marginBottom: '20px' },
    helperRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' },
    forgotPassButton: {
        cursor: 'pointer',
    }
};

export const Login = () => {

    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    return (
        <Box sx={styles.container}>
            <Card sx={styles.loginCard} variant="outlined">
                <Box sx={styles.title}>Login to continue</Box>
                <TextField sx={{ width: '100%' }} id="user" type="text" placeholder='Email'/>
                <TextField sx={{ width: '100%' }} id="password" type="password" placeholder='Password'/>
                <Box sx={styles.helperRow}>
                    <FormControlLabel
                        control={<Checkbox checked={rememberMe} onChange={() => setRememberMe(!rememberMe)}/>}
                        label="Remember me"
                    />
                    <Box sx={styles.forgotPassButton} onClick={() => {
                    }}>Forgot Password?
                    </Box>
                </Box>
                <RegularButton label='Login' onClick={() => {
                    getAuthToken();
                    navigate('/operations')
                }}/>
            </Card>
        </Box>
    );
};