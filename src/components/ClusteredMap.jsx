import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './ClusteredMap.css'
import { icon } from "../utils/icons";

const ClusteredMap = () => {
	return (
		<div>
			<MapContainer center={[51.505, -0.09]} zoom={13}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker  
					position={[51.505, -0.09]}
					icon={ icon }	
				>
					<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
			
		</div>
	)
}

export default ClusteredMap;