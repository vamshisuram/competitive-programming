function countingValleys(n, s) {
    let previousState = 0;
    let currState = 0;
    let valleyCount = 0;
    for (let i = 0; i < n; i++) {
        const step = s[i];
        if (step === "D") {
            currState--;
        } else {
            currState++;
        }
        if (previousState === 0 && currState === -1) {
            valleyCount++;
        }
        previousState = currState;
    }
    return valleyCount;
}
