import { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';
import * as d3 from 'd3';

const Map: FC = () => {
    useEffect(() => {
        let projection = d3.geoEqualEarth();
        projection.fitSize([300, 300], );
        svg.current!.append('circle')
    }, [])

    const svg = useRef(null);

    return(
        <div>
            React Component
            <svg ref={svg} width={300} height={300} viewBox="0 0 300 300" style={{border: '1px solid black'}}>
            </svg>
        </div>
    )
}

export default Map