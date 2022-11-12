import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';
import * as L from 'leaflet';
import { MapContainer, useMap, TileLayer, Marker, Popup } from 'react-leaflet';
import abandonedcalifornia from '../assets/abandonedcalifornia.json';

import mappinfilledblack from '../../src/assets/mappinfilledblack.svg';
import mappinfilledred from '../../src/assets/mappinfilledred.svg';

import '../styles/components/CaliMap.scss';

const CalStateBounds = [
    [ 42.234305, -125.267535 ],
    [ 32.592792, -113.720101 ]
]

const blackIcon = L.icon({
    iconUrl: mappinfilledblack,
    shadowSize: [68, 95]
})

const redIcon = L.icon({
    iconUrl: mappinfilledred,
    shadowSize: [68, 95]
})

export default function CaliMap(props) {


    return (
        <div id='CaliMapMain'>
            <h2>This is the CaliMap component</h2>
            <MapContainer fullscreenControl={true} id='mapContainer' maxBounds={CalStateBounds} center={[37.42076433334728, -120.57716717888397]} zoom={props.styling.zoom} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {abandonedcalifornia.map((town) => {
                    if(town.gps.presence === 'accurate'){
                        return(
                            <Marker
                                icon={blackIcon}
                                key={town.id}
                                position={[ town.gps.latitude, town.gps.longitude]}
                            >
                            </Marker>
                        )
                    } else {
                        return(
                            <Marker
                                icon={redIcon}
                                key={town.id}
                                position={[ town.gps.latitude, town.gps.longitude]}
                            >
                            </Marker>
                        )
                    }
                })}
            </MapContainer>
        </div>
    )
}