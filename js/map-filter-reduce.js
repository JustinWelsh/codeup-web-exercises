
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//LEC. EXAMPLES
//
//    Filter:
//     var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
//     var evens = numbers.filter(function(n) {
//         return n % 2 === 0;
//     });
//     console.log(evens); // [2, 4, 6, 8, 10]
//-------------------------------------------------------
//     Reduce:
//         const numbers = [1, 2, 3, 4, 5];
//
//         const sum = numbers.reduce((accumulation, currentNumber) => {
//             return accumulation + currentNumber;
//         }, 0);



//TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

// // MY SOLUTION
//     let threeLangArr = users.filter(function(user) {
//         return user.languages.length >= 3;
//     })
//     console.log(threeLangArr);


//TODO:  Use .map to create an array of strings where each element is a user's email address

// MY SOLUTION
//     let emailArr = users.map(function(user) {
//         return user.email;
//     })
//     console.log(emailArr);

//TODO:  Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

// MY ATTEMPT:
//     const totalYrsOfExperience = users.reduce( (bucketTotal, user) => {
//         return bucketTotal + user.yearsOfExperience / users.length; // <- bad practice
//     }, 0);
//     console.log(totalYrsOfExperience);

//TODO: Use .reduce to get the longest email from the list of users.

// MY ATTEMPT:
//     const longestEmail = users.reduce( (bucket , user) => {
//         return
//     }, 0);
// console.log(longestEmail);

// INSTRUCTOR SOLUTION:
//     const longestEmail = users.reduce((email, user) => (email.length > user.email.length) ? email:user.email, '');
//     console.log(longestEmail);
// //    OR
//     const longestEmail2 = users.reduce((email, user) => {
//         if (email.length > user.email.length) {
//             return email;
//         } else {
//             return user.email;
//         }
//     }, users[0]); // or you can use emails.reduce((longStr, email) => (longStr.length > email.length) ? longStr : email);
//
//     console.l    // console.log(longestEmail2);og(longestEmail2);


//TODO:  Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// MY ATTEMPT:

// INSTRUCTOR SOLUTION:
//     const introduction = users.reduce((str, user, index) => {
//         if (index === users.length - 1) {
//             return `${str}and ${user.name}.`;
//         } else {
//             return `${str}${user.name}, `;
//         }
//     }, "Your instructors are: ");
//
//     console.log(introduction);



//TODO: ** BONUS **
// Use .reduce to get the unique list of languages from the list of users.

// MY ATTEMPT:


// INSTRUCTOR SOLUTION:
// const uniqueLangs = users.reduce((langs, user) => {
//     for (let lang of user.languages) {
//         if (!langs.includes(lang)) { // langs.includes(lang) === false
//             langs.push(lang);
//         }
//     }
//     return langs;
// }, []);
//
// console.log(uniqueLangs);
//
// const davidsCoolWayToGetUniqueLanguages = Array.from(new Set(users.reduce((langs, user) => {
//             for (let lang of user.languages) {
//                 langs.push(lang);
//             }
//             return langs;
//         }, [])
//     )
// );
//
// console.log(davidsCoolWayToGetUniqueLanguages);


