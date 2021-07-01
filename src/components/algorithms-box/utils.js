const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const selectionSort = async (array, stateSetter) => {
    for (let i = 0; i < array.length; i += 1) {
      for (let j = i + 1; j < array.length; j += 1)
        if (array[i] > array[j]) {
          [array[i], array[j]] = [array[j], array[i]];
          await sleep(10);
          stateSetter(array);
        }
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
    for (let i = 0; i < array.length - 1; i += 1) {
      for (let j = 0; j < array.length-1-i; j += 1)
        if (array[j] > array[j+1]) {
          [array[j], array[j+1]] = [array[j+1], array[j]];
          await sleep(10);
          stateSetter(array);
        }
    }
};

const getPartition = async (array, left, right, stateSetter) => {
  let pivot, i, j;
  pivot = array[left];
  i = left + 1;
  j = right;
  while (i <= j) {
    while (array[i] < pivot)
      i += 1;
    while (array[j] > pivot)
      j -= 1;
    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]];
      i += 1;
      j -= 1;
      await sleep(30);
      stateSetter(array);
    }
  }
  if (i !== j) {
    [array[j], array[left]] = [array[left], array[j]];
    await sleep(30);
    stateSetter(array);
  }
  await sleep(30);
  stateSetter(array);
  return j;
};

const quickSorter = async (array, left, right, stateSetter) => {
  if (left < right) {
    let pivotIndex = await getPartition(array, left, right, stateSetter);
    quickSorter(array, left, pivotIndex - 1, stateSetter);
    await sleep(30);
    stateSetter(array);
    quickSorter(array, pivotIndex + 1, right, stateSetter);
    await sleep(30);
    stateSetter(array);
  }
};

export const quickSort = async (array, stateSetter) => {
  await quickSorter(array, 0, array.length - 1, stateSetter);
  await sleep(10);
  stateSetter(array);
};

export const mergeSort = async (array, stateSetter) => {
  if (array.length > 1) {
    let mid = Math.floor(array.length/2);
    let l = array.slice(0, mid);
    let r = array.slice(mid);
    mergeSort(l, stateSetter);
    mergeSort(r, stateSetter);
    let i = 0, j = 0, k = 0;
    while (i < l.length && j < r.length) {
      if (l[i] < r[j])
        array[k++] = l[i++];
      else
        array[k++] = r[j++];
      await sleep(20);
      stateSetter(array);
    }
    while (i < l.length) {
      array[k++] = l[i++];
      await sleep(10);
      stateSetter(array);
    }
    while (j < r.length) {
      array[k++] = r[j++];
      await sleep(10);
      stateSetter(array);
    }
    await sleep(10);
    stateSetter(array);
  }
  await sleep(10);
  stateSetter(array);
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