/*
undefined=no meaning or to be defined
null=nothing
boolean=T/F
String
symbol=unique value
number
object=keyvalue pairs
var=variable, can be defined to be anything
; can show when a line ends, not manditory
*/

// var Kristian = "Hello"
// Let also only used within where you define them
// let Ourname = "freecodecamp"
// const never changes 

// const pi = 3.14
//

// var a;
// var b = 2;

// a = 7;

// b = a;



//Var's are case sensitive

// var sum = a + b
// var product = a * b
// var quotient = a / b

// console.log(sum)
// console.log(product)
// console.log(quotient)



// var This = 12;

//This++;
//This + 1

//this--;



// var ourDecimal = 5.7;

// var myDecimal = 0.009

// var product = 2.0 * 2.5

// var remainder; 
// remainder = 11 % 3;

// console.log(remainder)
//remainder is 2



// Compound assignment with augmented addition

// var a = 3;
// var b = 17;
// var c = 12;

// a = a + 12; 
// b = 9 + b;
// c = c + 7;

//or

// a += 12
// b += 9
// c += 7

// same with subtracting so a -= 6
// same with miltiplication so a *= 5
// same with division so /=



// Declare string Variables

//string literal's =

// var firstname = "Kristian"
// var lastname = "Sparks"

// a = firstname
// b = lastname
// console.log(firstname)

// console.log(lastname)



//Escaping literal quotes in strings
//wont work
//var myStr = "I am a "double quoted" string inside "double quotes""
//will work
// var myStr = "I am a \"double quoted\" string inside \"double quotes\""

// console.log(myStr)





//Escape Sequences in Strings

/*
Code  Output
\'    single quote
\"    double quote
\\    backslash
\n    newline
\r    carriage return
\t    tab
\b    backspace
\f    form feed
*/

// var myStr = "FirstLine\n\t\SecondLine\nThirdLine"

// console.log(myStr)



//concatenating strings with plus operator

// var ourStr = "I come first. " + "I come second. "

// var myStr = "This is the start. " + "This is the end. "

// console.log(myStr)




//Constructing strings with variables

// var ourName = "KS"
// var ourStr = "Hello, our name is " + ourName + ", How are you?"

// var myName = "Kristian Sparks"
// var myStr = "My name is " + myName + " and I am well!" 

// console.log(myStr)
// console.log(ourStr)



//Script Length

// var firstNameLength = 0;
// var firstName = "Kristian"

// firstNameLength = firstName.length

// var lastNameLength = 0
// var lastName = "Sparks"

// lastNameLength = lastName.length
// console.log(lastNameLength)
// console.log(firstNameLength)



//Arrays are storages of information and are written as [78]
// But can be written as ["Kristian", 63] or ["Kristian", [89]]
//You can retract information from an array by typing the name of the array which is a
// with its name and a bracket with a number in it so myArray[0]
//Numbers with computers start with 0

// var arrayNumber = myArray.Pop() will define arrayNumber as the last character in the array.
// arrayNumber = myArray.Shift() will remove the first character from the first array found and define the attribute.
// .unshift will add an attribute to an array the the very beginning. 
// myArray.unshift(["pual", 35])

//Shopping list
// var myList = [["cereal", 3], ["milk", 2]]



//Write reusable code with functions

// function ourReusableFunction() {
//     console.log("heyya, World");
// }

// ourReusableFunction();



//  function difference (a, b) {
//      console.log(a-b)
//  }
//  difference(10, 5)

// function sum (a, b) {
//     console.log(a + b)
// }

// sum(7, 3)



//return function

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10))

function timesFive(num) {
    return num * 5
}

console.log
