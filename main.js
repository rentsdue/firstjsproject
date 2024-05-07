let num1 = 0;
let num2 = 3;

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

//This is a comment

var testFunctionBoolean = testFunction(5);

console.log(testFunctionBoolean);