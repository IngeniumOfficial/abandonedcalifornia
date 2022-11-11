import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';
import * as L from 'leaflet';
import { MapContainer, useMap, TileLayer, Marker, Popup } from 'react-leaflet';
import abandonedcalifornia from '../assets/abandonedcalifornia.json';

import '../styles/components/CaliMap.scss';

const CalStateBounds = [
    [ 42.234305, -125.267535 ],
    [ 32.592792, -113.720101 ]
]


export default function CaliMap() {
    const mapRef = useRef();
    


    return (
        <div id='CaliMapMain'>
            <h2>This is the CaliMap component</h2>
            <MapContainer id='mapContainer' maxBounds={CalStateBounds} center={[37.42076433334728, -120.57716717888397]} zoom={7} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {abandonedcalifornia.map((town) => 
                    <Marker
                        key={town.id}
                        position={[ town.gps.latitude, town.gps.longitude]}
                    >
                    </Marker>
                )}
            </MapContainer>
        </div>
    )
}