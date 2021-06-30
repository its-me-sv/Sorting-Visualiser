import React, {useState, useEffect} from 'react';

import './sort-box.styles.css';

import {
    themeMapper,
    complexityMapperWorst,
    complexityMapperBest
} from './utils';

const SortBox = ({array, algorithName, algorithm, theme, tbs}) => {
    const mainColor = themeMapper[theme];
    const [currArray, setCurrArray] = useState([...array]);
    const handleClick = () => {
        algorithm([...currArray], setCurrArray);
        algorithm([...currArray], setCurrArray);
    };
    useEffect(() => {
        if (tbs === 1)
            handleClick();
    }, [tbs]);
    return (
        <div className="container">
            <h2 style={{color: mainColor}}>{algorithName}</h2>
            <div className='sorted-container' style={{border: `0.3rem solid ${mainColor}`}}>
            {
                currArray.map((val, i) => 
                    <div 
                        key={i}
                        style={{height: `${val}px`, backgroundColor: theme}}
                        className={`box ${theme}`}
                        title={val}
                    ></div>
                )
            }
            </div>
            <div className="button-result">
                <div 
                    className={`custom-button box1 ${theme}1`}
                    onClick={handleClick}
                >Sort</div>
                <h3 style={{color: mainColor}}>Time Complexity</h3>
                <h4 style={{color: mainColor}}>Best Case: {complexityMapperBest[algorithName]}</h4>
                <h4 style={{color: mainColor}}>Worst Case: {complexityMapperWorst[algorithName]}</h4>
            </div>
        </div>
    );
}

export default SortBox;