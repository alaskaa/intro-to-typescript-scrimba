import { Bear } from "./bear.model";
import { Age } from "./age.enum";
import { Names } from "./name.enum";
import { Person } from "./person.model";
import { IPerson } from "./person.interface";
import { Dog } from "./dog.model";

import { BearBo, Pig, Man } from "./interfaces";
import { PersonTwo } from "./personTwo.model";
//import { Animal } from "./animal.model";
// this is a barrel import

document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

// Intro to TypeScript on Scrimba
let example1: boolean = true;
let example2: number = 35;
let example3: string = "Hello World";

console.log(example1);

console.log(example2);

console.log(example3);

// Optional types - boolean or number

let example4: boolean | number = 34;
console.log(example4);

// Implicit vs Explicit types

// this is explicit typing
let example5: number;
example5 = 1991;
console.log(example5);

const arrayExample = [1, 3, 4, 5];
let example6 = arrayExample.reduce((num1, num2) => num1 + num2);
console.log(example6);
// arrayExample now has the implicit type of numbert array: number[]

// Checking Types

// typeof will only the check the initial JavaScript value

const bear = new Bear(3);

// this will also work if you inherit from mutliple classes cos the bear will be an instance of that as well
if (bear instanceof Bear) {
  console.log("Hello from the TypeScript Bear");
}

// TypeScript Type Assertions

let definitelyNotAString: any = "I am string";

let strLength = (definitelyNotAString as string).length;
// can also write as (<string> definitelyNotAString)
console.log(strLength);

// TypeScript Arrays
const array: string[] = ["Hello"];
const array2: number[] = [1, 2];
const array3: boolean[] = [true, false];

console.log(array, array2, array3);

const array4: (number | boolean)[] = [1, 2, true];
// this is how you declare an array that can either have booleans or numbers
console.log(array4);

// nested array values -- multidimensional arrays

const array5: boolean[][] = [[true, false]];
console.log(array5);

// TypeScript tuples
const exampleTuple: [string, number] = ["https://google.com", 25, 50, "hi"];
console.log(exampleTuple);
// should work ? Guy in tutorial said so .... but yeah normally tuple would work like this

// TypeScript Enums

function totalAge(age1: Age, age2: Age) {
  return age1 + age2;
}

totalAge(1, 2);

console.log(Names.mine);
console.log(Names.boyfriend);

// TypeScript objects
const exampleObject: object = {};
// this is okay
// couldn't assign NaN here
console.log(exampleObject);

const exampleObject2: Object = undefined;
console.log(exampleObject2);
// this is not recommended according to TypeScript docs and will lead to unexpected results - DON'T DO THIS

const exampleObject3: {} = {};
console.log(exampleObject3);
exampleObject3.firstName = "Dylan"; // doesn't work!

// TypeScript Parameters + return type of function
function add(val1: number, val2: number): number {
  return val1 + val2;
}

console.log(add(1, 10));

function sayHello(person: Person): string {
  return `Say Hello to my little friend, ${person.firstName}`;
}

console.log(sayHello(new Person({ firstName: "Marcus" })));

// TypeScript return types
function voidExample(): void {
  add(1, 2);
}

console.log(voidExample);

// use never type for Errors
// function neverExample(): never {
//   throw Error;
// }

//neverExample();

// TypeScript Custom Types

type person = {
  firstName: string;
};

const personObject: person = { firstName: "Connor" };

console.log(personObject);

// TypeScript Interfaces

const exampleWithInterface: IPerson = {
  firstName: "Mary",
  middleName: "Genius",
  lastName: "Lancaster"
};
console.log(exampleWithInterface);

exampleWithInterface.firstName = "Mary-Ann";
exampleWithInterface.middleName = "Genius";
exampleWithInterface.lastName = "Smith";

console.log(exampleWithInterface);

// TypeScript Barrels
// see interfaces folder index.ts file for exports and imports

// TypeScript Models
// interfaces can't enforce anything -- no methods or defaults but models can!

const exampleWithModel: PersonTwo = new PersonTwo({
  middleName: "Katharina",
  lastName: "Hello"
});

// default firstName is given from model
console.log(exampleWithModel);

// TypeScript Intersection Types
// Intersection Types are the ability to add multiple types to a single entitity and create a new type based off that

let man: Man | Pig;
let bearbo: BearBo;
let pig: Pig;
console.log(man, bearbo, pig);

// this will inherit ALL interface propertoes
// type ManBearPig = BearBo & Man & Pig;

// let manBearPig: ManBearPig;
// manBearPig.claws = 3;
// manBearPig.firstName = "Justus";
// manBearPig.bacon = false;

// TypeScript Generics

// used for mutliple data types or if you don't know what you get
function exampleGeneric<T>(arg: T): T {
  return arg;
}

exampleGeneric(5);

function exampleGenericComplex<T>(arg: T[]): T[] {
  return arg;
}

exampleGenericComplex([5]);

// TypeScript Access Modifiers

const dog = new Dog({ name: "Omegabear", tail: true });
//const animal = new Animal({ type: dog }); // if constructor is protected we can't create an animal

dog.paws = 4;
// dog.tail = false; // wont work cos it is protected
dog.add(1, 2); // hide internal logic

// TSLint - ESLint for TypeScript
