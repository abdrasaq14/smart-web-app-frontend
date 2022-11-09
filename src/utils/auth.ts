// const ROLES_KEY = 'smarterise-dev/roles';

export enum ROLE {
	ADMIN = 'admin',
	MANAGER = 'manager',
	OPERATIONS = 'operation',
	FINANCE = 'finance',
}

// export const getUserRoles = (user?: User) => {
// 	return (user ?? {})[ROLES_KEY] ?? [];
// };
// export const hasRole = (user: User | undefined, role: ROLE) => {
// 	const userRoles = getUserRoles(user);
// 	return userRoles.includes(role);
// };
