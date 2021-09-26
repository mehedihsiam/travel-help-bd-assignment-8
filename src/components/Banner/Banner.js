import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="banner">
                <div className="company-name">
                    <h1 className="headline">Welcome to <span className="txt-color-a">Travel Help BD</span></h1>
                    <p className="">Your trusted Tour organizer</p>
                </div>
                <h3 className="average">Average cost per tour is <span className="txt-color-a">$200-300</span></h3>

            </div>
        </div>
    );
};

export default Banner;