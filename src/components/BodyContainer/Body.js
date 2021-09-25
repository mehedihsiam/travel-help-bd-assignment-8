import React, { useEffect, useState } from 'react';
import Place from './Place/Place';
import './Body.css'

const Body = () => {
    const [places, setPLaces] = useState([]);
    useEffect(() => {
        fetch('./place.JSON')
            .then(res => res.json())
            .then(data => setPLaces(data))
    }, [])
    return (
        <div className="parent container">
            <div className="place-parent">
                {
                    places.map(place => <Place
                        key={place.key}
                        place={place}
                    ></Place>)
                }
            </div>
            <div>

            </div>
        </div>
    );
};

export default Body;