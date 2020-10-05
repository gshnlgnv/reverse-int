module.exports = function reverse (n) {
    let reversedNum = Math.abs(n);
    return reversedNum.toString().split("").reverse().join("");
};
