import React, { useEffect, useState } from "react";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './ClusteredMap.css'

import MarkerClusterGroup from 'react-leaflet-markercluster';

const ClusteredMap = () => {

	const [randomPoints, setRandomPoints] = useState([])

	const [center, setCenter] = useState([51.9194, 19.1451])

	useEffect(() => {
		let temp = [];
		for (var i=0; i<=50; i++){
			temp.push([
					center[0] + (Math.random() * 2) * Math.pow(-1, i),  
					center[1] + (Math.random() * 2) * Math.pow(-1, i)
				])
		}

		setRandomPoints(temp)
	}, [])

	return (
		<div>
			<MapContainer center={center} zoom={8}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MarkerClusterGroup
					iconCreateFunction={(clusters) => {
						return L.divIcon({
							html: `<span style="font-size: 100px">${clusters.getChildCount()}</span>`,
							className: 'marker-cluster-custom',
							iconSize: L.point(40, 40, true),
						}) 
					}}
				>
					
					{
					
					// 50 random points near the center
					randomPoints.map(
						(item, index) => <Marker 
							position={ randomPoints[index] } 

							icon={ L.divIcon({
								html: `<span style="font-size: 100px">1</span>`,
								className: 'marker-cluster-custom',
								iconSize: L.point(40, 40, true),
						}) } />)
						
					}
				</MarkerClusterGroup>;
			</MapContainer>
			
		</div>
	)
}

export default ClusteredMap;