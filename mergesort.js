function split(wholeArray) {
    const firstHalf = []
    const secondHalf = []

    for (let i = 0; i < wholeArray.length; i++) {
        if (i < Math.floor(wholeArray.length / 2)) {
            firstHalf.push(wholeArray[i])
        } else {
            secondHalf.push(wholeArray[i])
        }
    }

    return [firstHalf, secondHalf]
}
