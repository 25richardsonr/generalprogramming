//skibidi sigma//
//We will use a combination of commens and code to build up our notes.

//We start by declaring a variable
/*let myName = "skibidi Sigma";
console.log(myName);
*/
//here is a different way to declare a variable:
/*
const e = 2.71828
console.log(e);
// e = 3.1415;
// console.log(e);
//^ this doesnt work because you cant change the value of a constant

//a third way of declaring a variable
var pi = 3.1415;
console.log(pi);
pi = e;
console.log(pi);

//var and let are interchangable, but const makes variables that cant be changed;

let total = 0;
let i = 0;
while (i<1001){
        total = total + i;
        i = i + l
}
console.log(total);
*/
// We'll start looking at numbers and math below;
console.log(23+97);
//you can store values as variables
let sumOfSix = 1+2+3+4+5+6;
console.log(sumOfSix);
//you can do math in the concole

//simulation of calculating % error
const actual = 57;
let prediction = actual - 13;
let percentage = prediction / actual;
let percentError = 1 - percentage;
console.log(percentError);

/* Starts a multiline, or block, comment*/

/* Mathmatical operators in javascript
+ -> addition
- -> subtraction
* -> multiplication
/ -> division
** -> exponent
% -> modules

javaScript will work like a scientific calculator and apply the order of operations except modules 
happens with division aand multiplication and nd berore addition and subtraction

unlike many other languages, java only has 1 number type
(which is number)
other languages frequently have 2 number types most commonly 
int - integers
float - floating point numbers (decimals)
*/

console.log(2 + 3);
console.log("2"+"3");
// + with strings produces "concatenation": connecting two symbols one after the other
/* stings are gnerally formed by encapsulating symboles in quotation marks. 
In javascript there are three different kinds quotation maeks you can use

"Hello" - double quotation
'Hello' - single quotation
`Hello` - backTicks
*/

console.log('Hello, world!');
console.log("Hello, world!");
console.log('"nevermore"');
/* If your string contains an apostrophe, use double quotes
If your string contains a quotation, use single quotes

backTicks allow you to embed variables into a string.
*/
let myName = "Steve"
console.log(`Hello, ${myName}`);
// you can also do math 
console.log(`2+3=${(2+3)}`);

//many programming languages have a 'char' datatype representing
//a single character. javaScript does not

/* boolean
Boolean is named or George Boole, who did a lot of work with formal logic
Namely, ways to make decisions using true and false statements.
THE BOolieaN data type can only hold 2 values - true or false*/

/* Null
This is a special datatype. IT contains only q value: Null.
"null" in javaScript means "nothing", "empty", or "value unknown"

/* undefined 
this is another special datatype, it contains only 1 value;
undefined, 'undefined' in javaScript means that the value has not been assigned

let age;  <- here a variable was declared but not defined, so it is undefined

our last 2 datatypes would be objects and symbols which are related and are beyond the scope of this class

if you need to know the data type of a variable, you can use the typeof() function. */

/*console.log(typeof("word"));
console.log(typeof(365));
*/
/*
console.log(a ==="5");
console.log(a != 3);
*/
/*rules for string comparison;
1) compare the first characters of the first strong is greater than the first character
of teh second string, return true, if it is less than the first character of the second string, return false
if they are equal, continue to the next step
2) compare the second charadcters of each string as desscroobed above
3) continue until either string ends
4) if both strings are equal and ahve the same length, return false(they are equal)
5) if one sting is longer, that string is greater than the other string

console.log("R">"B");
console.log("b"=="B");
/* Now that we know how comparisons work, we can look at conditionals.*/
// an if statement allows you to gate code behind a condition being true
/*
if (3<5){
        console.log("3 is less than 5");
}
//if you want to make a choice between options, you have other structures that are useful
if (7<5){
        console.log("7 is less then 5");
} else {
        console.log("7 is not less than 5")
}
*/
//a test for equality. we're going to check if test number is
//greater than, less than, or equal to
/*
let testNumber = 6;{if(testNumber > 6)
        console.log(`${testNumber}is greater than 6`);
} else {
        if (testNumber < 6){
                console.log(`$(testNumber) is equal to 6`);
        }
}
*/
// as a rule, you want to avoid nested if/than statements. There are two
//better approaches;
// if-else if else
/*
let testNumber = 4;

if (testNumber < 6){console.log(`${testNumber} is less than 6.`)
} else if (testNumber == 6) {
        console.log(`${testNumber} is equal to 6`)
} else {
        console.log(`${testNumber}is greater than 6`)

}
*/
        
//make a grade generator
/*
let testGrade = 65;

if(testGrade > 90){
        console.log("A");
} else if (testGrade > 80){
        console.log("")
}
*/
// Logical Operators
// modify or combine multiple logic statements
//AND: && --) will return true only with both statemnts are true
//OR: || --) when either
//NOT: ! --) flips the true false value

//Clothing selector based on weather
// two variables, temperature and percipitation
/*
let temperature = 85; 
let percipitation = false;
*/
//list of options
// sweatshirt and shorts, t-shirt and pants, long sleeve shirt(60-75 degrees)
//long sleeve shirt and pants (above 45), sweatshirt and pants (colder than 45
// jacket instead of regular shirt, if precipitation
/*
if (temperature < 75 && temperature > 60)
        console.log("t-shirt and pants"){
console.log}

console.log("3"+4)

let height = 180
if(`height`>=200 || <=160){
        console.log("yes")
}else{
        console.log("no")
}
*/
//BEWARE: you must restate your checked variable each time
//this will not work:
// (x=35 || 15)
// this will work
// (x==35 || x || 15)

/* javaScript use "truthy" and "falsy" vavlues
A truthy value witll e treated the same as true
The folling values are thruthy:
true
any not empty string (including "false")
any number other than 0
arrays, fuctionss, and objects

A falsy value will be treated the same as false
false
0 (as a number) or 0n (BigInt)
an empty string
null
undeined
NaN(not a number)

OR -> find the forst truthy value
an example: 
*/
/*
let testVariable = null || 1 || false;
console.log(testVariable);
let testVariable2 = null || false || 0;
console.log(testVariable2);

//when could this be useful?
// if you have a form that you need a user to full out
// let name = USER IMPUT || "unknown name"
//this could also be used to set up conditional alerts or functions
// for example:

let printSuccess = true;
printSuccess || alert('DID NOT PRINT');
!printSuccess || alert('Printed successfully');

*/

/* AND && find the first falsy value
- evaluat from left to right
- converts the value to a boolean based on truthy/falsyness
- stops when it gets to the first falsy value
- if no values are falsy, returns last value
*/
console.log(true && true && true);
console.log(true && 0 && true);
console.log(true && "false" && 5 && 3.14);

// precedence
//the order in which things happens
// && has a higher precedence than ||
//a && b || c && d == (a && b) || (c && d)
//if you want the operations to combile b-c then a
// && is like multiplicatin in pemdas
// vvDO NOT DO THISvv
// some people use && instead of "if"
let x = 1;
(x>0)&& alert("greater than zero");

// while that worked, this is much more readable
let y = 1;
if (y>0){
        alert('greater than zero');
}
/* NOT -) !
! takes a single arguement or value and does the following:
1) converts the value to a boolean type (true/false)
2) returns the opposite of the result of 1)
*/
/*
console.log(!NaN);
console.log(!1);

// because of this behavior, sometimes people will use !! to convert values into bolleans

console.log(!!NaN);
*/
/* If we have a lot of passoble test cases we want to check, it is frequently better 
to use a switch instead of a if, else if, chain

STRUCTURE: 
switch(expression){
case x:
        //code goes here
        break;
case y
        //code goes here
        break;
default: 
        //code goes here
}

// the switch expression is evaluated
// the valeu of teh expression is compared with the values o each case
// if there is a match, the associated block of code is executed
//if there is no match then the default case is executed
*/
// there is something called teh getDay() meathod. this returns the weekday 
//as a number between 0 and 6. we'll use a switch to convert this output to 
// an actual day
/*
let day
switch (new Date().getDay()){
        case 0:
                day = "sunday";
                break;
        case 1:
                day = "Monday";
                break;
        case 2:
                day = "Tuesday";
                break;
        case 3:
                day = "Wednesday";
                break;
        case 4:
                day = "Thursday";
                break;
        case 5:
                day = "Friday";
                break;
        case 6:
                day = "Satrday";
        default:
                console.log("Not a date")
}
console.log (day)
*/
//console.log(console.log(1) && console.log(2));

// The ternary operator allows you to write simple and concise if/else statements.

//The syntax for this is
// condition ? do this : else do this instead