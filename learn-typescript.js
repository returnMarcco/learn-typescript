console.log('Hello, World!');
console.log('Learning TypeScript');
// Typed Vars/Data Structures.
var myInt = 5;
var myFloat = 7.5;
var myStr = 'A typed string';
var myBoolTrue = true;
var myBoolFalse = false;
var myNumArray = [0, 1, 2, 3, 4];
var myStrArray = ['return', 'Marcco'];
// Typed Object Literal here.
// Typed Functions. (params)
function myTypedSumFunc(x, y) {
    return x + y;
}
console.log(myTypedSumFunc(5, 4));
var myTypedMultiplierFuncExpression = function (x, y) {
    return x * y;
};
console.log(myTypedMultiplierFuncExpression(5, 3));
// Interfaces - fully abstract object-structures.
// Similar in concept to Interfaces in classical OOP.
