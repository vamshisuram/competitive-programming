function simpleArraySum(ar) {
    return ar.reduce((item, acc) => {
        return acc + item;
    }, 0);
}
