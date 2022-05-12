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

// Write a function that takes in an array of numbers and returns the sum of all elements.
//
// Ex. sumOfElements([1,2,3,4,5]) -> returns 15.

// let numArray = [1,2,3,4,5];
// function sumOfElements(arr) {
//     for (let i = 0; i < arr.length; i++) {
//
//     }
// }
// sumOfElements(numArray)
// ----------Instructor Solution---------------------------

//---------------------------------

/** Create a function, returnProductEssentialDetails, that takes in a product object and returns a simpler product object containing only the product name and price in cents.**/

function returnProductEssentialDetails(object) {
    return {
        name: object.name,
        priceInCents: object.priceInCents
    }
}

//     Examples...
//
// let product1 = {
//     name: 'Hammar',
//     priceInCents: 400,
//     description: 'It is a a hammar.',
//     inventory: 25034
// }
//
// let product2 = {
//     name: 'Computer',
//     priceInCents: 40000,
//     description: 'It is a computer.',
//     inventory: 33000
// }
//
// let product3 = {
//     name: 'Ruler',
//     priceInCents: 1000,
//     description: 'It is a ruler.',
//     inventory: 2200
// }
//
//
//
// returnProductEssentialDetails(product1); // returns...

/*
    {
        name: 'Hammar',
        priceInCents: 400
    }
*/


// returnProductEssentialDetails(product2);
// returns...

/*

    {
        name: 'Computer',
        priceInCents: 40000
    }

*/


// returnProductEssentialDetails(product3);
// returns...

/*
    {
        name: 'Ruler',
        priceInCents: 1000
    }
*/



// BONUS (if time permits)
//
// Create a function, returnAllProductsEssentialDetails, that takes in an array of product objects and returns an array of product objects containing only the essential details of the product name and price in cents.

// Warm-Up:
// Write a function that will accept an array of objects and return the tallest object from the array.
//
//     A test array will be provided in Slack. :)


function tallest(arr) {
    let largest = {heightInMM: 0}
    for (let i = 0; i < arr.length; i++) {

    }
}

//Write a function that will accept an array of objects and return the object from the array that is the most colorful.
//
// A test array has been provided in Slack. :)

function mostColorful(arr) {

}

/**
 * Warm-Up:
 * Write a function that will accept a string. It should return an object with the following properties: string, size, containsLetterFromRSTLNE, and isOneWord.
 *
 * Ex 1. makeObjectFromString(“tacocat”) -> {
 * string: “tacocat”,
 * size: 7,
 * containsLetterFromRSTLNE: true,
 * isOneWord: true
 * };
 *
 * Ex 2. makeObjectFromString(“John Jacob”) -> {
 * string: “John Jacob”,
 * size: 10,
 * containsLetterFromRSTLNE: false,
 * isOneWord: false
 * };
 */

function makeObjectFromString(str) {
    const obj ={};
    obj.string = str;
    obj.size = str.length;
    obj.isOneWord = str.indexOf(" ") < 0;
    let lc = str.toLowerCase();
    if (lc.includes("r") || lc.includes("s") || lc.includes("t") || lc.includes("l") || lc.includes("n") || lc.includes("e")) {
        obj.containsLetterFromRSTLNE = true;
    } else {
        obj.containsLetterFromRSTLNE = false;
    }
    return obj;
};

console.log(makeObjectFromString("John Jacob"));


