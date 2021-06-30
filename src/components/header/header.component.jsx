import React from 'react';

import './header.styles.css';

const Header = ({orginalArray, handleUpdate}) => {
    return (
            <div>
                <h1>Sorting Visualiser</h1>
                <h2 
                    className="custom-button1 box2 green2"
                    onClick={handleUpdate}
                >Sort All</h2>
            </div>
    );
};

export default Header;