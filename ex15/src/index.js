function myDoWhile() {
    var myNumbers = "";
    var i = 0;
    do {
        myNumbers = myNumbers + ", " + i;
        i++;
    } while (i < 10) {
        if (i <= 0) {
            myNumbers += ",";
        } 
    }
    console.log(myNumbers);
    return myNumbers;
}
myDoWhile();
module.exports = myDoWhile;
