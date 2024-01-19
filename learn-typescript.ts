console.log('Hello, World!');
console.log('Learning TypeScript');

// Typed Vars
// -------------
let myInt: number   = 5;
let myFloat: number = 7.5;

let myStr: string = 'A typed string';

let myBoolTrue: boolean = true;
let myBoolFalse: boolean = false;


// Data Structures / Special Types
// ----------------------------------
const myNumArray: number[] = [0, 1, 2, 3, 4];
const myStrArray: string[] = ['return', 'Marcco'];

const myReadOnlyStrArr: readonly string[] = ['test', 'fixed'];
// myReadOnlyStrArr.push('thisWillErrorAtCompileTime');

// Type-enforced to the initial types passed into the declaration.
const myTuple: [number, string, boolean] = [1, 'Hello', true];
console.log(myTuple);

// Make the Tuple readonly because any values after the initial ones cannot be type-enforced.
// Named tuples - provides context on index-values.
const myReadOnlyTuple: readonly [id: number, msg: string, isDeleted: boolean] = [...myTuple]; // Spread - copies by value.
console.log(myReadOnlyTuple);

const myCar: { vehicleId: number, model: string, year: number, buildDate?: Date } = {
    vehicleId: 1,
    model: 'Ford',
    year: new Date().getFullYear(),
    // buildDate is optional
};
console.log(myCar);

// Index Signatures: Can define object without defining list of keys
const myRandomObj: { [index: string]: string | number } = {}; // All keys must be a string and values but of types string OR number.
myRandomObj.id = 1;
myRandomObj.model = 'Holden';
console.log(myRandomObj);


// Typed Functions. (params)
// ----------------------------
function  myTypedSumFunc(x: number, y: number) {
    return x + y;
}

console.log(myTypedSumFunc(5, 4));

const myTypedMultiplierFuncExpression = (x: number, y: number) => {
    return x * y;
};

console.log(myTypedMultiplierFuncExpression(5, 3));

// Interfaces - fully abstract object-structures.
// Similar in concept to Interfaces in classical OOP.