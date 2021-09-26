import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.booking)
    const { booking } = props;
    let eventFee = 0;
    let guideFee = 0;
    for (const place of booking) {
        eventFee = eventFee + place.cost;
        guideFee = guideFee + place.guideFee;
    }
    return (
        <div className="cart-style">
            <h5>Booked Package: {props.booking.length}</h5>
            {
                booking.map(place => <li className="list">{place.name}</li>)
            }
            <hr />
            <h6 className="l-align">Event Fee: ${eventFee}</h6>
            <hr />
            <h6 className="l-align">Guide Fee: ${guideFee}</h6>
            <hr />
            <h5 className="txt-color-a l-align">Total Cost: ${eventFee + guideFee}</h5>
        </div>
    );
};

export default Cart;