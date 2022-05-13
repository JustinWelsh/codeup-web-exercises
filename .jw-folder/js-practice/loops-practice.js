console.log("loops-practice.js file is connected!");
/**     LOOPS
 * 1.   Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
 * EXAMPLE:
 *          7 x 1 = 7
 *          7 x 2 = 14
 *          7 x 3 = 21
 *          7 x 4 = 28
 *          7 x 5 = 35
 *          7 x 6 = 42
 *          7 x 7 = 49
 *          7 x 8 = 56
 *          7 x 9 = 63
 *          7 x 10 = 70
 */

function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
// showMultiplicationTable(9)

/**
 *  2.  Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
 *
 * For example:
 *      123 is odd
 *      80 is even
 *      24 is even
 *      199 is odd
 *      ...
 */
function tenRanNumEvenOdd() {
    for (let i = 0; i <= 10; i++) {
        let randomNum = Math.floor(Math.random() * 180) + 20;
        if (randomNum % 2 === 0) {
            console.log(`${randomNum} is EVEN 🕺🏻`);
        } else {
            console.log(`${randomNum} 😬`);
        }
    }
}
// tenRanNumEvenOdd()


// 3.   Create a for loop that uses console.log to create the output shown below.
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

function numPyramid() {
    for (let i = 1; i < 10; i++) {

        let str = "";
        for (let j = 0; j < i; j++) {
            str += i;
        }
        // let str = "";

        console.log(str);
    }
}
numPyramid()



// 4.   Create a for loop that uses console.log to create the output shown below.
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for (let i = 100; i >= 5; i-=5) {
    // console.log(i)
}

//      BREAK AND CONTINUE
//
// 1.   Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//
// for (let i = 1; i < 51; i++) {
//     let numPrompt = prompt("Enter an odd number between 1 and 50");
//     if (numPrompt % 2 !== 0) {
//         break;
//     }
// }

// 2.   Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//
// Your output should look like this:
//
// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49


//      WHILE LOOPS
// Create a while loop that uses console.log() to create the output shown below.
//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536
//
//==============================================================================


//Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascencding order.
//
// Example input: ["fred", true, 5, 3] Example output: [3, 5]

//==============================================================================
//OBJECTS
// Exercise 1. Write a function called makeCar that takes in two strings, make and model, and returns an object with those properties
// Example: makeCar("VW", "beetle") returns the object {"make": "VW", "model", "beetle"}

// function makeCar(make, model) {
//     return {carMake: make, model}
// }

function makeCar(make, model) {
    let carObject = {}
    carObject.make = make
    carObject.model = model
    return carObject
}

// console.log(makeCar("Dodge", "Charger"));

