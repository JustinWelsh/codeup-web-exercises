'use strict';

/**     2.      **/
function showMultiplicationTable(input) {
    for (let i = 1; i <= 10; i++) {
        let result = `${input} x ${i} = ${input * i}` // let result = input + "x" + i + "="
        console.log(result)
    }
}
// showMultiplicationTable(7)

//--------------------------------------------------
/**     3.      **/
for (let i = 1; i <= 10; i++) {
    let randomNum = Math.floor(Math.random() * 20) + 180;
    if (randomNum % 2 === 0) {
        // console.log(`${randomNum} is even`)
    } else{
        // console.log(`${randomNum} is odd`)
    }
}
//--------------------------------------------------

/**     4.      **/
for (let i = 1; i <= 9; i++) {
    let numberPyramid = i.toString().repeat(i)
    // console.log(numberPyramid)
}

/**     5.      **/
for (let i = 100; i >= 5; i-= 5) {
    // console.log(i)
}




