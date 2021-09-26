import React from 'react';

const Cart = (props) => {
    console.log(props.booking)
    const { booking } = props;
    let total = 0;
    for (const place of booking) {
        total = total + place.cost;
    }
    // for (const place of booking) {
    //     name = name + ' ' + place.name;
    // }
    return (
        <div>
            <h5>Bokked Package: {props.booking.length}</h5>
            {
                booking.map(place => <li>{place.name}</li>)
            }
            <p>Total Cost: {total}</p>
        </div>
    );
};

export default Cart;