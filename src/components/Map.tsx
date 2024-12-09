import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { siteData } from '@src/utils/utils';

// Fix for Leaflet marker icons
L.Icon.Default.mergeOptions({
	iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
	iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});


const MapWithMarkers = () => {
	return (
		<MapContainer
			center={siteData[0].position} // Default map center
			zoom={13} // Default zoom level
			style={{ height: '500px', width: '100%', minWidth: '350px' }}
		>
			{/* Add a tile layer (map background) */}
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>

			{/* Add markers for each site */}
			{siteData.map((site) => (
				<Marker key={site.id} position={site.position}>
					<Popup>
						<h4>{site.name}</h4>
						<p>{site.description}</p>
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
};

export default MapWithMarkers;
