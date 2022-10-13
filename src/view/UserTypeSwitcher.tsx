import React from 'react';
import { Sidebar } from '../layouts/Sidebar';
import { AppMenuButton } from '../types';

const buttonDefinitions: Array<AppMenuButton> = [
	{
		id: 1,
		label: 'Operations',
		path: '/operations/home',
	},
	{
		id: 2,
		label: 'Finance',
		path: '/finance/home',
	},
	{
		id: 3,
		label: 'Senior Manager',
		path: '/senior-manager-account/operations',
	},
	{
		id: 4,
		label: 'Smarterise Account UI',
		path: '/account-ui/home',
	},
];

const Switcher = () => {
	return <Sidebar buttonDefinitions={buttonDefinitions} />;
};

export default Switcher;
