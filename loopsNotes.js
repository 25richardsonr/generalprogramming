//loops allow you to loop though code multiple itmes
/*
let i = 0;
while (i<3){
    console.log(i)
    i++; //short hand for i += 1 which is i = i + 1
}
/*
a single time thorugh a loop is called an iteraltion
while loops will continute until their condtion becomes falsy
remember 0 is falsy
i is already 2 because of the prior loop
*
while (i){
    console.log("banana")
    i--;
}

there is a scond flavor of loop called a do while looop
the difference is that a while loop will always execute at least once
while loop structe

do{
    code goes here
    } while (condition);
*
let a = 0
do{
    console.log(a)
    a += 1;
} while (a < -1);

the other kind of loop is the FOR loop
for loops are essentially facy while loops, their syntax is more complicated 
but they are more commonly used, less likely to set up an infinite loop while using a for loop

for loop structure

for (begin; condition; step){
    code goes here
}
*
for (let j = 0; j < 5; j++){
    console.log(`j = ${j}`);
}

with eiher form of loop, as a general rule, if your condition is going to be based on a number
you probably want to use <, >, <=, >=,
== and != are likely enable you to miss and make an infinite loop

you'll also find that you'll somethimes be off by one frequently the solution to this is just to change between < and <= or > amd >=
//Do...While execeutes at leaast once
// break - will eject looop altother
//continue - skip reson of current iteration

/*Arrays

in programming and array is an ordered collection of values

let arrayName = [item1, item2, item3, item4];

to make an empty array there are two ways
let fakeArray1 = new Array();
let fakeArray2 = [];

*
let fruits = ["apples", "bananas", "cantelopes", "Durians", "taco"];
console.log(fruits);

console.log(fruits[3]);

//arrays are 0-index

fruits[3] = "Watermellon"
console.log(fruits);

fruits[5] = "Strawberries"

console.log(fruits)
//find out how long an array i
console.log(fruits.length);
fruits[fruits.length] = "nick's mother"
console.log(fruits);
*
an array can store elemets of any type including mixing types
in the same array
*
let exampleArray2 = ["Apple", 35, true, function () {console.log('hello')}, "array"];
console.log(exampleArray2[1]);
console.log(exampleArray2[3]);

do math or other operations with the values in an array
*
//function to calculate distance between two points on xy plane

let obj1 = [3,5];
let obj2 = [7, 11];
let dist = Math.sqrt((obj2[0] - obj1[0])**2 + (obj2[1] - obj1[1])**2)
console.log(dist);
*
let primes = [2,3,5,7,11,13,17,19];
let i = 0
while (i<primes.length){
    console.log(primes[i]);
    i++;
}
console.log(primes.at(-1));

// array methods
// .pop() - finds last element of array, returns it, then deletes it

// heres a code to find all primes less than 20



let sum = 0
while (primes.length > 0){
    sum += primes.pop();
    console.log(primes,sum)
}
console.log(sum);

the inverse of .pop is .push
.push() adds an element to the end of an array.

the problem with a push is that you can only modiy the end of an array
if you want to modify the beginning you need different meathods

shift() - shift is pop but at the beginnning 

unshift() - is push but at the beginning
fruits.unshift("apricots")
console.log(fruits)

push and unshift can add multiple elements
*
fruits.push("orange", "peach");
fruits.unshift("lemon", "pinneapple")
console.log(fruits)

using loops with arrays
here is an old style of printing the array values

for (let i = 0; i < fruits.length; i++){
console.log(fruits[i])};

another way

for (let fruit of fruits){
console.log(fruit)}
*/