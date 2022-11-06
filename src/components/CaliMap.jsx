import React, { useState, useRef } from 'react';
import * as d3 from 'd3';

import '../styles/components/CaliMap.scss';

export default function CaliMap() {
    const svgRef = useRef();

    var w = 760;
    var h = 600;

    //Define map projection
	var projection = d3.geoMercator()
        .center([ -120, 37 ])
        .translate([ w/2, h/2 ])
        .scale([ w*3.3 ]);

    //Define path generator
    var path = d3.geoPath()
        .projection(projection);

    const selectedSVG = d3.select(svgRef);



    return (
        <div>
            <h2>This is the CaliMap component</h2>
            <svg id='mainsvg' ref={svgRef}></svg>
        </div>
    )
}