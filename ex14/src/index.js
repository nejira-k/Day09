// Only change code below this line
function myForLoop1() {
    var evenNumbers = " ";
    for (var i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            evenNumbers = evenNumbers + "," + i
        }
    }
    console.log(evenNumbers);
    return evenNumbers; 
    }
    function myForLoop2() {
        var evenInverseNumbers = " ";
        for (var i = 8; i >= 0; i--) {
            if (i % 2 === 0) {
               evenInverseNumbers = evenInverseNumbers + ", " + i
            }
        }
        console.log(evenInverseNumbers);
        return evenInverseNumbers;
    }
    
myForLoop1();
myForLoop2();
// Only change code above this line
module.exports = {
    myForLoop1,
    myForLoop2
};