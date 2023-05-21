const {performance} = require('perf_hooks');

const partition = (arr, pivot) => {
  let pivotValue = arr[pivot];
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    while (arr[i] < pivotValue) {
      i++;
    }
    while (arr[j] > pivotValue) {
      j--;
    }
    if (i < j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  return j;
}

const quickSort = (arr, low = 0, high = arr.length-1) => {
  if (low < high) {
    const pivot = partition(arr, low);
    quickSort(arr, low, pivot);
    quickSort(arr, pivot + 1, high);
  }
  return arr;
}

let start = performance.now();
const test = [3, 7, 4, 8, 2, 1, 5, 6, 9, 0];
console.log("Original array:", test);
console.log("Sorted array:", quickSort(test));
console.log(`This took ${performance.now() - start} milliseconds to run.`);

const partition2 = (arr, low, high) => {
    const pivotIndex = Math.floor(Math.random() * (high - low + 1)) + low;
    const pivotValue = arr[pivotIndex];
  
    let i = low;
    let j = high;
  
    while (true) {
      while (arr[i] < pivotValue) {
        i++;
      }
  
      while (arr[j] > pivotValue) {
        j--;
      }
  
      if (i >= j) {
        return j;
      }
  
      [arr[i], arr[j]] = [arr[j], arr[i]];
  
      i++;
      j--;
    }
  };
  
  const quickSort2 = (arr, low = 0, high = arr.length - 1) => {
    if (low < high) {
      const pivot = partition2(arr, low, high);
      quickSort(arr, low, pivot);
      quickSort(arr, pivot + 1, high);
    }
  
    return arr;
  };
  
  start = performance.now();
  const arr = [9, 4, 2, 7, 1, 5, 8, 3, 6];
  console.log("Original array:", arr);
  console.log("Sorted array:", quickSort2(arr));
  console.log(`This took ${performance.now() - start} milliseconds to run.`);
  