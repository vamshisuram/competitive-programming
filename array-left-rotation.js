function rotLeft(a, d) {
    let movedArr = a.splice(0, d);
    let finalArr = a.concat(movedArr);
    return finalArr;
}
