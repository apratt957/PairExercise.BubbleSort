function bubbleSort(array) {
    let swapped = true;
    let length = array.length;
    while (swapped) {
      swapped = false;
      for (let i = 1; i < length; i++) {
        let current = array[i];
        let previous = array[i - 1];
        if (previous > current) {
          let temp = array[i];
          array[i] = array[i - 1];
          array[i - 1] = temp;
          swapped = true;
        }
      }
      length--;
    }
    return array;
   }

const testArr = [7, 1, 19, 4, 32, 8, 12, 3]
console.log('pre bubbleSort: ', testArr)

const result = bubbleSort(testArr)
console.log('post bubbleSort: ', result)
