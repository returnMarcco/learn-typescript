console.log('Hello, World!');
console.log('Learning TypeScript');


// Typed Vars/Data Structures.
let myInt: number   = 5;
let myFloat: number = 7.5;

let myStr: string = 'A typed string';

let myBoolTrue: boolean = true;
let myBoolFalse: boolean = false;

const myNumArray: number[] = [0, 1, 2, 3, 4];
const myStrArray: string[] = ['return', 'Marcco'];

// Typed Object Literal here.



// Typed Functions. (params)
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