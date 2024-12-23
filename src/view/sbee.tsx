import React, { useEffect, useRef, useState } from 'react';
import { Box, Card } from '@mui/material';
import { createEmbeddingContext } from 'amazon-quicksight-embedding-sdk';
import './sbee.css';
import { post } from '../api/apiUtils';
import Loader from '../components/Loader/Loader';

const styles = {
	container: {
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	loginCard: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		maxWidth: '90%',
		width: '100%',
		height: '90%',
		padding: '40px',
		borderRadius: '16px',
		borderColor: '#E6E6E6',
		backgroundColor: '#F7F7F7',
	},
	logo: { cursor: 'pointer', maxWidth: '170px' },
};

const DashboardEmbed = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [embedUrl, setEmbedUrl] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	// Fetch the embed URL from the backend
	const fetchEmbedUrl = async () => {
		try {
			const response = await post('generate-embed-url', {
				accountId: '368563411071',
				dashboardId: '1e7e705c-7dd4-4226-bb44-1b4da8108716',
				namespace: 'default',
				authorizedResourceArns: [
					`arn:aws:quicksight:eu-west-2:368563411071:dashboard/1e7e705c-7dd4-4226-bb44-1b4da8108716`,
				],
				// authorizedResourceArns: ['arn:aws:quicksight:region:account-id:dashboard/dashboard-id'],
				allowedDomains: ['http://localhost:3000', 'https://demo.powersmarter.net'],
				sessionTags: [],
			});
			if (response.EmbedUrl) {
				setEmbedUrl(response.EmbedUrl);
				setIsLoading(false);
				return
			}
			setError('Error while fetching your dashboard. Please try again later.');
			setIsLoading(false);
		} catch (error) {
			setError('Error while fetching your dashboard. Please try again later.');
			setIsLoading(false);
			console.error('Error fetching embed URL:', error);
		}
	};

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
			<Box sx={{ height: '120px' }}>
				<img src="logo.png" alt="Smarterise" style={styles.logo} />
			</Box>
			<Box sx={styles.container}>
				{isLoading ? (
					<Loader />
				) : error?.trim() ? (
					<p style={{ fontSize: '28px', color: 'red' }}>{error}</p>
				) : (
					<Card sx={styles.loginCard}>
						<Box ref={containerRef} style={{ width: '100%', height: '700px' }} />
					</Card>
				)}
			</Box>
		</Box>
	);
};

export default DashboardEmbed;
