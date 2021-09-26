import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Place from '../Place/Place';
import './Body.css'

const Body = () => {
    const [places, setPLaces] = useState([]);
    const [booking, setBooking] = useState([])
    useEffect(() => {
        fetch('./place.JSON')
            .then(res => res.json())
            .then(data => setPLaces(data))
    }, [])

    const handleBooking = (place) => {
        const newBooking = [...booking, place]
        setBooking(newBooking);
    }
    return (
        <div className="parent container">
            <div className="place-parent">
                {
                    places.map(place => <Place
                        key={place.key}
                        place={place}
                        handleBooking={handleBooking}
                    ></Place>)
                }
            </div>
            <div>
                <Cart
                    booking={booking}
                ></Cart>
            </div>
        </div>
    );
};

export default Body;