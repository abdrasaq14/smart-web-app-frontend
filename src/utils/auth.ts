import { User } from '@auth0/auth0-react';

const ROLES_KEY = 'smarterise-dev/roles';

export enum ROLE {
	ADMIN = 'Admin',
	MANAGER = 'Manager',
	OPERATIONS = 'Operations',
	FINANCE = 'Finance',
}

export const getUserRoles = (user?: User) => {
	return (user ?? {})[ROLES_KEY] ?? [];
};
export const hasRole = (user: User | undefined, role: ROLE) => {
	const userRoles = getUserRoles(user);
	return userRoles.includes(role);
};
