function repeatedString(s, n) {
    let count = 0;
    let factor = Math.floor(n / s.length);
    let extraStrLength = n % s.length;
    let extraCount = 0;

    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if (element === "a") {
            count++;
            if (i < extraStrLength) {
                extraCount++;
            }
        }
    }
    let total = factor * count + extraCount;
    return total;
}
