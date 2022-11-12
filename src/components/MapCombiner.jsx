import React, { useState, useRef, useEffect } from 'react';
import CaliMap from './CaliMap';
import MapSidebar from './MapSidebar.jsx';

const styles = {
    zoom: 7,
    screenSize: 'regular'
};

if(window.innerWidth <= 700) {
    styles.zoom = 6;
    styles.screenSize = 'phone';
} else if (window.innerWidth > 700 && window.innerWidth <= 1200) {
    styles.zoom = 6.5;
    styles.screenSize = 'small';
}

const fullscreenStyles = {
    height: '100vh',
    width: '100vw',
    position: 'absolute'
}


export default function MapCombiner() {

    return (
        <div>
            <MapSidebar />
            <CaliMap styling={styles} />
        </div>
    )
}