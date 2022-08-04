import { Button, Drawer } from '@mui/material';
import { PersonOutlined, SaveOutlined, SettingsOutlined, TopicOutlined } from '@mui/icons-material';
import React, { useState } from 'react';

interface AppMenuButton {
    id: number,
    label: string,
    icon: JSX.Element
}

const buttonDefinitions: Array<AppMenuButton> = [
    {
        id: 1,
        label: 'Home',
        icon: <SaveOutlined/>
    },
    {
        id: 2,
        label: 'Site',
        icon: <SettingsOutlined/>
    },
    {
        id: 3,
        label: 'Activity Log',
        icon: <TopicOutlined/>
    },
    {
        id: 4,
        label: 'My Account',
        icon: <PersonOutlined/>
    },
];

export const AppMenu = () => {

    const [selectedItem, setSelectedItem] = useState<number>(-1);

    return (
        <Drawer
            sx={{
                width: '287px',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: '287px',
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <img src='logo.png' alt='Smarterise'/>
            {buttonDefinitions.map((buttonDefinition: AppMenuButton) => (
                <Button
                    key={buttonDefinition.id}
                    variant="text"
                    sx={[{
                        width: '223px',
                        color: '#353D46',
                        justifyContent: 'flex-start',
                        paddingLeft: '25px',
                        marginTop: '15px',
                        marginBottom: '15px',
                        borderRadius: '32px',
                        '&:hover': {
                            backgroundColor: '#b6b6b6',
                            borderRadius: '32px'
                        },

                    },
                        (buttonDefinition.id === selectedItem) && {
                            backgroundColor: '#929292',
                            borderRadius: '32px'
                        }
                    ]
                    }
                    startIcon={buttonDefinition.icon}
                    onClick={() => setSelectedItem(buttonDefinition.id)}
                >
                    {buttonDefinition.label}
                </Button>
            ))}
        </Drawer>
    );
}