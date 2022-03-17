export const mergeSort = (array) => {

}

export const quickSort = (array) => {
  const quickSortProcess = (arr, low, high) => {
    if(low < high) {
      const index = partition(arr, low, high);

      quickSortProcess(arr, low, index - 1);
      quickSortProcess(arr, index + 1, high);

      return arr;
    }
  }

  const partition = (arr, low, high) => {
    const pivot = arr[high];
    let index = low - 1;

    for(let i = low; i < high; i++) {
      if(arr[i] < pivot) {
        index++;
        [arr[i], arr[index]] = [arr[index], arr[i]];
      }
    }

    [arr[index + 1], arr[high]] = [arr[high], arr[index + 1]];

    return index + 1;
  }

  return quickSortProcess(array, 0, array.length - 1);
}

export const bubbleSort = (array) => {
  let changed = true;

  while(changed) {
    changed = false;

    for(let i = 0; i < array.length - 1; i++) {
      if(array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        changed = true;
      }
    }
  }

  return array;
}