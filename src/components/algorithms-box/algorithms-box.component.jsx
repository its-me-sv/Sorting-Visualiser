import React from 'react';

import './algorithms-box.styles.css';

import SortBox from '../sort-box/sort-box.component';

import {
  selectionSort,
  insertionSort,
  bubbleSort,
  quickSort,
  mergeSort,
  shellSort
} from './utils';

const AlgorithmsBox = ({orginalArray, toBeSorted}) => {
    return (
        <div className="algorithms-box">
          <SortBox 
            array={orginalArray}
            tbs={toBeSorted}
            algorithName="Selection Sort"
            algorithm={selectionSort}
            theme="green"
          />
          <SortBox 
            array={orginalArray}
            tbs={toBeSorted}
            algorithName="Merge Sort"
            algorithm={mergeSort}
            theme="purple"
          />
          <SortBox 
            array={orginalArray}
            tbs={toBeSorted}
            algorithName="Bubble Sort"
            algorithm={bubbleSort}
            theme="yellow"
          />
          <SortBox 
            array={orginalArray}
            tbs={toBeSorted}
            algorithName="Quick Sort"
            algorithm={quickSort}
            theme="blue"
          />
          <SortBox 
            array={orginalArray}
            tbs={toBeSorted}
            algorithName="Insertion Sort"
            algorithm={insertionSort}
            theme="red"
          />
          <SortBox 
            array={orginalArray}
            tbs={toBeSorted}
            algorithName="Shell Sort"
            algorithm={shellSort}
            theme="brown"
          />
        </div>
    );
};

export default AlgorithmsBox;