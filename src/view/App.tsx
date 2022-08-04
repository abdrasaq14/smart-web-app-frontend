import React from 'react';
import { AppMenu } from './AppMenu';
import { Box, Button } from '@mui/material';
import { DatePickerDropdown } from '../components/DatePickerDropdown';
import { Dropdown } from '../components/Dropdown';
import { NotificationsOutlined, PersonOutlined } from '@mui/icons-material';
import { ValueCard } from '../components/ValueCard';
import { GraphCard } from '../components/GraphCard';
import { AlertHistoryTable } from '../components/AlertHistoryTable';

export const App = () => (
    <Box sx={{ display: 'flex' }}>
        <AppMenu/>
        <Box sx={{
            width: '100%',
            padding: ['42px', '65px', '65px', '32px'],
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '56px' }}>
                <Box sx={{ display: 'flex', width: '730px', justifyContent: 'space-between' }}>
                    <Dropdown options={['site 1', 'site 2', 'site 3']}/>
                    <DatePickerDropdown label='Start Date'/>
                    <DatePickerDropdown label='End Date'/>
                    <Button
                        variant='contained'
                        sx={{
                            display: 'flex',
                            alignSelf: 'flex-end',
                            width: '120px',
                            height: '40px',
                            color: '#ffffff',
                            marginTop: '8px',
                            marginBottom: '8px',
                            borderRadius: '8px',
                            backgroundColor: '#444444',
                            '&:hover': {
                                backgroundColor: '#b6b6b6',
                                borderRadius: '8px'
                            },

                        }}
                        onClick={() => {
                        }}
                    >
                        Download
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button
                        variant='contained'
                        sx={{
                            display: 'flex',
                            minWidth: '48px',
                            height: '48px',
                            color: '#6E7883',
                            padding: 0,
                            marginRight: '25px',
                            borderRadius: '64px',
                            backgroundColor: '#F2F2F2',
                            '&:hover': {
                                backgroundColor: '#b6b6b6',
                                borderRadius: '64px'
                            },

                        }}
                        onClick={() => {
                        }}
                    >
                        <NotificationsOutlined/>
                    </Button>
                    <Button
                        variant='contained'
                        sx={{
                            display: 'flex',
                            minWidth: '48px',
                            height: '48px',
                            color: '#ffffff',
                            padding: 0,
                            borderRadius: '16px',
                            backgroundColor: '#C4C4C4',
                            '&:hover': {
                                backgroundColor: '#b6b6b6',
                                borderRadius: '16px'
                            },

                        }}
                        onClick={() => {
                        }}
                    >
                        <PersonOutlined/>
                    </Button>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '36px' }}>
                <ValueCard value='32,727,658' label='Total Consumtion (kWh)'/>
                <ValueCard value='2,727,121' label='Current Load (kW)'/>
                <ValueCard value='20hrs' label='Avg. Availability'/>
                <ValueCard value='5' label='Power Cut'/>
            </Box>
            <GraphCard title='Alert History'>
                <AlertHistoryTable/>
            </GraphCard>
        </Box>
    </Box>
);