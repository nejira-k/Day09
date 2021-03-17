function checkSign(num) {
    if (num < 0) {
        return "negative"
    }
    else if (num > 0) {
        return "positive"
    }
    else {
        return "zero"
    }
}
checkSign(10);
checkSign(-12);
checkSign(0);
console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));
module.exports = checkSign;