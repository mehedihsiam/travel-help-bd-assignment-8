import React from 'react';
import './Place.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons'


const Place = (props) => {
    const { name, desc, location, guide, guideContact, cost, img } = props.place;
    const element = <FontAwesomeIcon icon={faHandPointUp} />
    return (
        <div className="container">
            <div className="place">
                <img src={img} alt="" className="img-fluid" />
                <div className="info">
                    <h3 className="txt-color-a">{name}</h3>
                    <div>
                        <h6 className="txt-color-b">About this place</h6>
                        <p className="description">{desc}</p>
                    </div>
                    <p><strong className="txt-color-a">Location:</strong> {location}</p>
                    <h6>Guide: {guide}</h6>
                    <h6>Contact: {guideContact} (Guide)</h6>
                    <h5 className="txt-color-a">Total Cost: {cost}</h5>
                    <button className="btn btn-b">{element} Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Place;