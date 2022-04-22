/**
 * Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
 * **/

// let oddNumPrompt = prompt("Enter a odd number between 1 - 50");
//
// while (oddNumPrompt) {
//     oddNumPrompt = prompt("Enter a odd number between 1 - 50");
//     if (oddNumPrompt % 2 !== 0) {
//         break;
//     }
// }

/**
 * Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
 * **/

function logOddNumbers(num) {
    console.log(`Number to skip is : ${num}`);
    console.log("\n");

    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            console.log(`Here is an odd number : ${i}`);
        } else if (num === i) {
            console.log(`YIKES! Skipping number ${num}`);
        }
    }
}
// logOddNumbers(20);
