function split(wholeArray) {
    const firstHalf = []
    const secondHalf = []
    let count = 0;

    for (let i = 0; i < Math.floor(wholeArray.length / 2); i++) {
        firstHalf[i] = wholeArray[i];
    }
    for (let i = Math.floor(wholeArray.length / 2); i < wholeArray.length; i++ ) {
            secondHalf[count] = wholeArray[i]
            count++;
        }

    return [firstHalf, secondHalf]
}

function merge(firstHalf, secondHalf) {
    let firstCount = 0;
    let secondCount = 0;
    const mergedArr = []

    let idx = 0;

    while ((firstCount + secondCount) !== (firstHalf.length + secondHalf.length)){
        if (firstHalf[firstCount] < secondHalf[secondCount]){
            mergedArr[idx] = firstHalf[firstCount]
            idx++;
            firstCount++;
        } else {
            mergedArr[idx] = secondHalf[secondCount]
            idx++;
            secondCount++;
        }
    }

    return mergedArr;
}
