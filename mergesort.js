function split(wholeArray) {
  const firstHalf = [];
  const secondHalf = [];
  let count = 0;

  for (let i = 0; i < Math.floor(wholeArray.length / 2); i++) {
    firstHalf[i] = wholeArray[i];
  }
  for (let i = Math.floor(wholeArray.length / 2); i < wholeArray.length; i++) {
    secondHalf[count] = wholeArray[i];
    count++;
  }

  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
  let firstCount = 0;
  let secondCount = 0;
  const mergedArr = [];

  let idx = 0;

  while (firstCount + secondCount !== firstHalf.length + secondHalf.length) {
    if (firstHalf[firstCount] < secondHalf[secondCount]) {
      mergedArr[idx] = firstHalf[firstCount];
      idx++;
      firstCount++;
    } else {
      mergedArr[idx] = secondHalf[secondCount];
      idx++;
      secondCount++;
    }
  }

  return mergedArr;
}

function mergeSort(array) {
  // debugger;
  if (array.length <= 1) {
    return array;
  } else {
    let [arr1, arr2] = split(array);
    let splitArray1 = mergeSort(arr1);
    let splitArray2 = mergeSort(arr2);

    return merge(splitArray1, splitArray2);
  }
}

const test1 = [4, 12, 5, 13, 1, 6];
const test2 = [7, 3, 2, 10, 9, 8];
const test3 = [2, 4, 7, 1, 5, 12, 8];
