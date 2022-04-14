console.log("Hello from external JavaScript");

alert('Welcome to my Website!')
let userFavColor = prompt("Whats your favorite color?")
alert(userFavColor + " is my favorite color too!")


//--------------------------------------------------------


const rentalCost = 3

let lMermaidRentalDays = parseFloat( prompt( "How long would you like to rent The Little Mermaid?"))
alert("You are renting The Little Mermaid for " + lMermaidRentalDays + " days.")

alert("Your total is " + "$" + lMermaidRentalDays * rentalCost)

let bBearRentalDays = parseFloat( prompt( "How long would you like to rent Brother Bear?"))
alert("You are renting Brother Bear for " + bBearRentalDays + " days.")

alert("Your total is " + "$" + bBearRentalDays * rentalCost)

let herculesRentalDays = parseFloat( prompt( "How long would you like to rent Hercules?"))
alert("You are renting Hercules for " + herculesRentalDays + " days.")

alert("Your total is " + "$" + herculesRentalDays * rentalCost)

let rentalTotalCost = (lMermaidRentalDays + bBearRentalDays + herculesRentalDays) * rentalCost

alert("Your grand total is $" + rentalTotalCost)
//--------------------------------------------------------



const googlePay = 400;
const amazonPay = 380;
const facebookPay = 350;

let googleHoursWorked = parseFloat(prompt("Hours worked for Google?"));
let amazonHoursWorked = parseFloat(prompt("Hours worked for Amazon?"));
let facebookHoursWorked = parseFloat(prompt("Hours worked for Facebook?"));

let totalPay = (googlePay * googleHoursWorked) + (amazonPay * amazonHoursWorked) + ( facebookPay * facebookHoursWorked);

alert("Your total pay for the week is $" + totalPay)


//--------------------------------------------------------


let isClassFull = false;
let doesConflictWithSchedule = true;
let canEnroll = !isClassFull && !doesConflictWithSchedule;
canEnroll && alert("You can enroll")
!canEnroll && alert("You can't enroll")


//--------------------------------------------------------


let hasOfferExpired = false;
let hasMoreThanTwoItems = true;
let isPremiumMember = true;

let canGetOffer = !hasOfferExpired && (hasMoreThanTwoItems || isPremiumMember)
console.log(canGetOffer);

canGetOffer && alert("Congrats!!")
!canGetOffer && alert("Sorry")












