var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var myReadOnlyStrArr = ['test', 'fixed'];
// myReadOnlyStrArr.push('thisWillErrorAtCompileTime');
// Type-enforced to the initial types passed into the declaration.
var myTuple = [1, 'Hello', true];
console.log(myTuple);
// Make the Tuple readonly because any values after the initial ones cannot be type-enforced.
// Named tuples - provides context on index-values.
var myReadOnlyTuple = __spreadArray([], myTuple, true); // Spread - copies by value.
console.log(myReadOnlyTuple);
var myCar = {
    vehicleId: 1,
    model: 'Ford',
    year: new Date().getFullYear(),
    // buildDate is optional
};
console.log(myCar);
// Index Signatures: Can define object without defining list of keys
var myRandomObj = {}; // All keys must be a string and values but of types string OR number.
myRandomObj.id = 1;
myRandomObj.model = 'Holden';
console.log(myRandomObj);
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
