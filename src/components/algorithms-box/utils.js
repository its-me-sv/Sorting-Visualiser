const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const selectionSort = async (array, stateSetter) => {
    for (let i = 0; i < array.length; i += 1) 
      for (let j = i + 1; j < array.length; j += 1)
        if (array[i] > array[j]) {
          [array[i], array[j]] = [array[j], array[i]];
          await sleep(10);
          stateSetter(array);
        }
};

export const insertionSort = async (array, stateSetter) => {
    for (let i = 1; i < array.length; i += 1) {
        let j = i - 1;
        let key = array[i];
        while (j >= 0 && array[j] > key) {
            array[j+1] = array[j];
            j -= 1;
            await sleep(10);
            stateSetter(array);
        }
        array[j+1] = key;
    }
};

export const bubbleSort = async (array, stateSetter) => {
    for (let i = 0; i < array.length - 1; i += 1)
      for (let j = 0; j < array.length-1-i; j += 1)
        if (array[j] > array[j+1]) {
          [array[j], array[j+1]] = [array[j+1], array[j]];
          await sleep(10);
          stateSetter(array);
        }
};

export const quickSort = async (array, stateSetter) => {
  if (array.length < 2)
    return array;
  let m = Math.floor(array.length / 2);
  let lhs = [], mid = [], rhs = [];
  const key = array[m];
  for (let no of array){
    if (no < key)
      lhs.push(no);
    else if (no > key)
      rhs.push(no);
    else
      mid.push(no);
  }
  let leftHalf = await quickSort(lhs, stateSetter);
  let rightHalf = await quickSort(rhs, stateSetter);
  let toReturn = [...leftHalf, ...mid, ...rightHalf];
  await sleep(10);
  stateSetter(toReturn);
  return toReturn;
};

const merge = (left, right) => {
  const output = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      output.push(left[i]);
      i+=1;
    } else {
      output.push(right[j]);
      j+=1;
    }
  }
  return [...output, ...left.slice(i), ...right.slice(j)];
};

export const mergeSort = async (array, stateSetter) => {
  if (array.length < 2) 
    return array;
  const mid = Math.floor(array.length / 2);
  let leftSide = await mergeSort(array.slice(0, mid), stateSetter);
  let rightSide = await mergeSort(array.slice(mid), stateSetter);
  let toReturn = merge(leftSide, rightSide);
  await sleep(10);
  stateSetter(toReturn);
  return toReturn;
};

export const shellSort = async (array, stateSetter) => {
    let n = array.length;
    let interval = Math.floor(n/2);
    while (interval > 0) { 
      for (let i = interval; i < n; i += 1) {
        let temp = array[i];
        let j = i;
        while (j >= interval && array[j - interval] > temp) {
          array[j] = array[j- interval];
          j -= interval;
          await sleep(10);
          stateSetter(array);
        }
        array[j] = temp;
      }
      interval = Math.floor(interval/2);
    }
    stateSetter(array);
};