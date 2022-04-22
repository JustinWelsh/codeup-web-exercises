
/** WHILE LOOP **/
// let i = 2;
//
// while (i <= 65536) {
//     console.log(i);
//     i *= 2;
// }

/** DO WHILE LOOP **/
let allCones = Math.floor(Math.random() * 50) + 50;
let conesSold = allCones;

do {
    let coneGenerator = Math.floor(Math.random() * 5) + 1;
    if (coneGenerator > conesSold) {
        console.log(`Cannot sell you ${coneGenerator} cones, I only have ${conesSold}`);
        continue;
    }
    conesSold -= coneGenerator;
    console.log(`${coneGenerator} cones sold!`)

 } while (conesSold > 0);

console.log("Yay! I sold them all! ")