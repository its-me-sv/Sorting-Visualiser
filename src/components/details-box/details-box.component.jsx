import React from 'react';

import './details-box.styles.css';

const DetailsBox = ({orginalArray, toggleViewDetails}) => {
    return (
        <div className="details-box">
            <h1 style={{color: '#8d69e0'}}>Array Details</h1>
            <div className="array-box">
                {
                    orginalArray.map((val, idx) => 
                        <div 
                            key={idx}
                            title={`${val} - Position in Array ${idx + 1}`}
                            style={{cursor: 'crosshair'}}
                        ><h3>{val}</h3></div>)
                }
            </div>
            <h3 style={{color: '#56b870'}}>Minimum Value: {Math.min(...orginalArray)}</h3>
            <h3 style={{color: '#ff0000'}}>Maximum Value: {Math.max(...orginalArray)}</h3>
            <h2 
                className="custom-button1 box2 yellow2"
                onClick={toggleViewDetails}
            >Ok</h2>
        </div>
    );
};

export default DetailsBox;