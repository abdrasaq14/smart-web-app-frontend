import React from 'react';
import { Box, Card, TextField, CardMedia } from '@mui/material';
import { Dropdown } from '../../components/Dropdown';
import { IconButton } from '../../components/IconButton';
import { NotificationsOutlined, PersonOutlined, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    headerIcons: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: '46px',
        marginBottom: '100px',
        paddingRight: '130px'
    },
    loginCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 568,
        minWidth: 568,
        height: 436,
        padding: '32px',
        borderRadius: '32px',
        borderColor: '#77777740',
    },
    content: {
        padding: '0px 96px 0px 96px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '343px',
        height: '100%',

    },
    editProfile: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        textDecoration: 'underline',
        color: '#666666'
    },
    profileHeader: { display: 'flex', justifyContent: 'space-around', width: '100%' },
    idAndRole: { display: 'flex', flexDirection: 'column', justifyContent: 'space-around' },
    profilePicture: { height: '100px', width: '100px' },
    id: { fontWeight: 'bold', marginLeft: '10px' },
    textfield: { width: '100%', },
};

export const MyAccount = () => {

    const navigate = useNavigate();

    return (
        <Box sx={styles.container}>
            <Box sx={styles.headerIcons}>
                <IconButton light Icon={NotificationsOutlined} onClick={() => {
                }}/>
                <IconButton round Icon={PersonOutlined} onClick={() => navigate('/operations/myAccount')}/>
                <IconButton round Icon={Logout} onClick={() => navigate('/login')}/>
            </Box>
            <Card sx={styles.loginCard} variant="outlined">
                <Box sx={styles.editProfile}>Edit Profile</Box>
                <Box sx={styles.content}>
                    <Box sx={styles.profileHeader}>
                        <CardMedia sx={styles.profilePicture} image='bear.png'/>
                        <Box sx={styles.idAndRole}>
                            <Box sx={{ display: 'flex' }}>
                                ID:
                                <Box sx={styles.id}>JB005</Box>
                            </Box>
                            <Dropdown options={['Admin Officer', 'Senior Manager', 'Operation', 'Finance']}
                                      autoSelectFirst/>
                        </Box>
                    </Box>
                    <TextField sx={styles.textfield} id="first_name" type="text" label='First Name'/>
                    <TextField sx={styles.textfield} id="last_name" type="text" label='Last Name'/>
                    <TextField sx={styles.textfield} id="email" type="text" label='Email Address'/>
                    <TextField sx={styles.textfield} id="company" type="text" label='Company'/>
                </Box>
            </Card>
        </Box>
    );
}