import React, { CSSProperties } from 'react';
import { FaUserTie, FaHardHat, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RiAdminFill } from 'react-icons/ri';
const UserType = ({ name }: { name: string }) => {
	return (
		<div style={styles.container}>
			{/* Header */}
			<header style={styles.header}>
				<div style={styles.logoContainer}>
					<img
						src="/logo.png" // Replace with your logo URL
						alt="Smarterise Logo"
						style={styles.logo}
					/>
				</div>
				{/* <div style={styles.iconContainer}>
					<button style={styles.iconButton}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							style={styles.icon}
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
						</svg>
					</button>
					<button style={styles.iconButton}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							style={styles.icon}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 9V5.25A2.25 2.25 0 0013.5 3H6.75A2.25 2.25 0 004.5 5.25V9m11.25 0V5.25a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25V9M18 11.25V9m0 0h-3.75m3.75 0H9.75m0 3h6m0 0h1.5m-1.5 0H6.75m6 6H6.75m6 0h4.5m-4.5 0H6.75m6 0a3 3 0 10-6 0m6 0h3"
							/>
						</svg>
					</button>
				</div> */}
			</header>

			{/* Welcome Message */}
			<div style={styles.welcomeMessage}>
				<h2 style={styles.greeting}>Welcome {name},</h2>

				{/* Permission Options */}
				<div style={styles.cardContainer}>
					<PermissionCard
						title="Senior Manager"
						icon={<FaUserTie size={40} />}
						bgColor="#FFC107"
						to="/senior-manager-account/home"
					/>
					<PermissionCard
						title="Operations"
						icon={<FaHardHat size={40} />}
						bgColor="#FFC107"
						to="/operations/home"
					/>
					<PermissionCard
						title="Finance"
						icon={<FaChartLine size={40} />}
						bgColor="#FFC107"
						to="/finance/home"
					/>
					<PermissionCard
						title="Admin"
						icon={<RiAdminFill size={40} />}
						bgColor="#FFC107"
						to="/account-ui/home"
					/>
				</div>
				<p style={styles.instruction}>
					To change your Permission type,{' '}
					<Link to="/" style={styles.link}>
						Contact Super Admin
					</Link>
				</p>
			</div>
		</div>
	);
};

const PermissionCard = ({ title, icon, bgColor, to }: {title: string, icon:any, bgColor: string, to: string}) => (
	<Link to={to} style={{ ...styles.card, backgroundColor: bgColor }}>
		{icon}
		<h3 style={styles.cardTitle}>{title}</h3>
	</Link>
);

const styles: { [key: string]: CSSProperties } = {
	container: {
		minHeight: '100vh',
		backgroundColor: '#FFFFFF',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '16px',
		// justifyContent: 'center',
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
		padding: '16px',
	},
	logoContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	logo: {
		// width: '50px',
		maxHeight: '80px',
		marginRight: '16px',
	},
	logoText: {
		fontSize: '20px',
		fontWeight: 'bold',
		color: '#FBC02D',
	},
	subtitle: {
		fontSize: '12px',
		color: '#757575',
	},
	iconContainer: {
		display: 'flex',
		gap: '16px',
	},
	iconButton: {
		background: 'none',
		border: 'none',
		cursor: 'pointer',
	},
	icon: {
		width: '24px',
		height: '24px',
		color: '#757575',
	},
	welcomeMessage: {
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'start',
		justifyContent: 'center',
		marginTop: '40px',
		backgroundColor: '#FDFDFD',
		gap: '16px',
		padding: '32px',
		borderRadius: '12px',
		border: '1px solid #E0E0E0',
		minHeight: '250px',
	},
	greeting: {
		fontSize: '24px',
		fontWeight: '600',
		color: '#424242',
	},
	instruction: {
		fontSize: '12px',
		color: '#757575',
		marginTop: '8px',
		alignSelf: 'end',
	},
	link: {
		color: '#1E88E5',
		fontSize: '12px',
		textDecoration: 'underline',
	},
	cardContainer: {
		marginTop: '32px',
		display: 'flex',
		gap: '24px',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	card: {
		width: '160px',
		height: '160px',
		borderRadius: '12px',
		boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		color: '#424242',
	},
	cardTitle: {
		marginTop: '16px',
		fontSize: '16px',
		fontWeight: '500',
		color: '#424242',
	},
	notification: {
		position: 'absolute',
		top: '8px',
		right: '8px',
		backgroundColor: '#FFFFFF',
		color: '#FFC107',
		fontSize: '12px',
		fontWeight: '700',
		padding: '4px 8px',
		borderRadius: '50px',
	},
};

export default UserType;
