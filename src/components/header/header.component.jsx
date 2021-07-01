import React from 'react';

import './header.styles.css';

const Header = ({orginalArray, handleUpdate, toggleViewDetails}) => {
    return (
            <div>
                <h1>Sorting Visualiser</h1>
                <h2 
                    className="custom-button1 box2 purple2"
                    onClick={handleUpdate}
                >Sort All</h2>
                <h2 
                    className="custom-button1 box2 red2"
                    onClick={toggleViewDetails}
                >Array Details</h2>
            </div>
    );
};

export default Header;