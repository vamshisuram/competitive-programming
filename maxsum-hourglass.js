function getSum(i, j, arr) {
    let sum = 0;
    for (let m = 0; m < 3; m++) {
        for (let n = 0; n < 3; n++) {
            if (!(m === 1 && (n === 0 || n === 2))) {
                sum += arr[m + i][n + j];
            }
        }
    }
    return sum;
}

function hourglassSum(arr) {
    let max, m = arr.length - 2, n = arr[0].length - 2;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const sum = getSum(i, j, arr);
            if (max === undefined) {
                max = sum;
            } else if (sum > max) {
                max = sum;
            }
        }
    }
    return max;
}
