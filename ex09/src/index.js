// Only change code below this line
function functionElse(num) {
    var result = "";
    if (num <= 5) {
        result = "5 or smaller";
    } else {
        result = "Bigger than 5";
    }
    return result;
}
functionElse(4);
functionElse(5);
functionElse(6);
functionElse(10);
console.log(functionElse(4));
console.log(functionElse(5));
console.log(functionElse(6));
console.log(functionElse(10));
// Only change code above this line
module.exports = functionElse;