console.log("Hello World!");

var num1 = 0;
var num2 = 3;

if (num1 < num2) {
    console.log("Yes!");
} else {
    console.log("No!");
}

function testFunction(number) {
    if (number % 2 == 0) {
        return false;
    } else {
        return true;
    }
}

var testFunctionBoolean = testFunction(5);

console.log(testFunctionBoolean);