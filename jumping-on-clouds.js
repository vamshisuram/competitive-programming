function jumpingOnClouds(c) {
    let stepCount = 0;
    let currIndex = 0;
    while (currIndex < c.length - 1) {
        if (c[currIndex + 2] !== 1) {
            currIndex += 2;
        } else {
            currIndex++;
        }
        stepCount++;
    }
    return stepCount;
}
