import React from 'react';
import { FaUsers } from 'react-icons/fa';

const OfferBanner = () => {
    return (
        <div className="offer-banner">
            <div className="offer-banner-text">
                <h2>
                    Work With Our <span>Amazing Tour Guides</span>
                </h2>
                <p>Join the Rafco Travels family and help people explore the beauty of Kerala.</p>
            </div>
            <button className="btn-join">
                <FaUsers /> Join Our Team
            </button>
        </div>
    );
};

export default OfferBanner;