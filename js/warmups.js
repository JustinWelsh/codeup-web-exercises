// console.log("Yay! I completed the warm-up!")


/**
 * Create a function that will replace every other letter of a string with a “Z”. (example: replaceLettersWithZ(“javascript”) // returns “jZvZsZrZpZ”;) This can be accomplished with a for loop,
 * Create a function to display a message of the factorial of a number. (example: factorial(4) // returns “1 * 2 * 3 * 4 = 24";)
 * Research FizzBuzz. This will be tomorrow’s morning warm-up. :)
 * **/

//----------My Attempt---------------------------

// for( let i = 1; i <= 100; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log("FizBuzz");
//         continue;
//     }  else if (i % 3 === 0) {
//         console.log("Fizz");
//         continue;
//     }
//     console.log(i);
// }

//----------Instructor Solution---------------------------

// function fizzBuzz(limit) {
//     if (limit === undefined) {
//         limit = 100;
//     }
//
//     for( let i = 1; i <= limit; i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
//
// fizzBuzz()

//------------------------------
/**
 * Warm-up
 * Write a function that takes in an array of strings and returns a string of the first letter of each element concatenated together:
 *
 * Ex. allFirstLetters([“dog”,”cat”,”frog”,”bat”]) -> “dcfb”;**/


//----------My Attempt---------------------------
// let array = ["Car", "Dog", "Cat", "Bob"]

// function takesFirstLetter(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i] = arr[0]);
//     }
// }
// takesFirstLetter(array)

//----------Instructor Solution---------------------------
// function allFirstLetters(arr) {
//     let bucket = "";
//     for (let el of arr) {
//         bucket += el[0];
//     }
//     return bucket;
// }
//
// const testArrayString = ['dog', 'cat', 'frog', 'bat'];
// console.log(allFirstLetters(testArrayString));


function alphaString(str) {
    if (typeof str === 'string') {
        for (let i = 0; i < str.length; i++) {
            return str[i].sort();
        }
    }
}

// ----------Instructor Solution---------------------------

function alphabetizer(str) {
    // let strArray = str.split('')
    // console.log(strArray)
    // let sortedArray = strArray.sort()
    // console.log(sortedArray);
    // return sortedArray.join('')

    //          refactored below..

    return str.split('').sort().join('');
}
