import React, { useEffect, useRef, useState } from 'react';
import { Box, Card } from '@mui/material';
import { createEmbeddingContext } from 'amazon-quicksight-embedding-sdk';
import './sbee.css';
import { post } from '../api/apiUtils';
import Loader from '../components/Loader/Loader';
import { Link } from 'react-router-dom';
import { useGetMe } from '../api/me';
import { IoIosLogOut } from 'react-icons/io';
import { useAuth0 } from '@auth0/auth0-react';
import { z } from 'zod';

const styles = {
	container: {
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	embedCard: {
		display: 'flex',
		position: 'relative',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		maxWidth: '90%',
		width: '100%',
		height: '90%',
		padding: '40px',
		borderRadius: '16px',
		borderColor: '#E6E6E6',
		backgroundColor: '#F7F7F7'
	},
	logo: { cursor: 'pointer', maxWidth: '170px' },
	hide: {
		position: 'absolute',
		zIndex: '1000',
		bottom: '20px',
		right: '0',
		backgroundColor: '#F7F7F7',
		height: '50px',
		width: '200px'
	}
};

const DashboardEmbed = () => {
	const { data: me } = useGetMe();
	const role = me?.access_level;
	const containerRef = useRef<HTMLDivElement>(null);
	const [embedUrl, setEmbedUrl] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const { logout } = useAuth0();
  
	// Fetch the embed URL from the backend
	const fetchEmbedUrl = async () => {
		try {
			const response = await post('generate-embed-url', {
				accountId: '368563411071',
				dashboardId: '66492307-dbe0-4b76-bfce-170caca91512',
				namespace: 'default',
				authorizedResourceArns: [
					`arn:aws:quicksight:eu-west-2:368563411071:dashboard/66492307-dbe0-4b76-bfce-170caca91512`,
				],
				// authorizedResourceArns: ['arn:aws:quicksight:region:account-id:dashboard/dashboard-id'],
				allowedDomains: ['http://localhost:3000', 'https://demo.powersmarter.net'],
				sessionTags: [],
			});
			if (response.EmbedUrl) {
				setEmbedUrl(response.EmbedUrl);
				setIsLoading(false);
				return;
			}
			setError('Error while fetching your dashboard. Please try again later.');
			setIsLoading(false);
		} catch (error) {
			setError('Error while fetching your dashboard. Please try again later.');
			setIsLoading(false);
			console.error('Error fetching embed URL:', error);
		}
	};

	const handleLogout = () => { 
		localStorage.removeItem('auth0Token');
		 logout({ returnTo: `${window.location.origin}/login` });
		// window.location.href = '/login';
	}
	// Embed the QuickSight dashboard
	useEffect(() => {
		if (!embedUrl) return;

		const embedQuickSight = async () => {
			try {
				const embeddingContext = await createEmbeddingContext();
				const { embedDashboard } = embeddingContext;

				embedDashboard({
					url: embedUrl,
					container: containerRef.current!,
					width: '100%',
					height: '700px',
					className: 'quicksight-embedding-iframe',
				});
			} catch (error) {
				console.error('Error embedding QuickSight:', error);
			}
		};

		embedQuickSight();
	}, [embedUrl]);

	useEffect(() => {
		fetchEmbedUrl();
	}, []);

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', padding: '40px', gap: '70px' }}>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Link to={role == 'admin' ? '/' : '/sbee'} style={{ height: '120px' }}>
					<img src="logo.png" alt="Smarterise" style={styles.logo} />
				</Link>
				<span style={{cursor: 'pointer'}} onClick={handleLogout}>
					<IoIosLogOut size={25} />
				</span>
			</Box>
			<Box sx={styles.container}>
				{isLoading ? (
					<Loader />
				) : error?.trim() ? (
					<p style={{ fontSize: '28px', color: 'red' }}>{error}</p>
				) : (
					<Card sx={styles.embedCard}>
								<Box ref={containerRef} style={{ width: '100%', height: '700px' }} >
									<div style={styles.hide}></div>
						</Box>
					</Card>
				)}
			</Box>
		</Box>
	);
};

export default DashboardEmbed;
