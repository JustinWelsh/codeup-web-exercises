(function() {
    "use strict";

    /**
     * TODO: 1. ☑️
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "Justin",
        lastName: "Welsh",
        sayHello: function() {
            let message = `Hello from ${person.firstName} ${person.lastName}!`;
            return message;
        }
    }

    // console.log(person.firstName);
    // console.log(person.lastName);


    /**
     * TODO: 2. ☑️
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // console.log(person.sayHello());


    /** TODO: 3.
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

            //--- Code Given ___
            let shoppers = [
                {name: 'Cameron', amount: 180},
                {name: 'Ryan', amount: 250},
                {name: 'George', amount: 320}
            ];
            //---           ---

    // shoppers.forEach(function (shopper) {
    //     if(shopper.amount < 200) {
    //         console.log(`${shopper.name} owes: $${shopper.amount.toFixed(2)}`)
    //     } else {
    //         console.log(`${shopper.name}'s total before discount: $${shopper.amount} | After discount, new total is ${shopper.amount * .88.toFixed(2)}`)
    //     }
    //
    // });


    /** TODO: 4.
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title: "The Art of Thinking Clearly",
            author: {
                firstName: "Rolf",
                lastName: "Dobelli"
            }
        },
        {
            title: "Can't Hurt Me",
            author: {
                firstName: "Dovid",
                lastName: "Goggins"
            }
        },
        {
            title: "The Mamba Mentality",
            author: {
                firstName: "kobe",
                lastName: "Bryant"
            }
        },
        {
            title: "12 Rules for Life",
            author: {
                firstName: "Jordan",
                lastName: "Peterson"
            }
        },
        {
            title: "Rich Dad Poor Dad",
            author: {
                firstName: "Robert",
                lastName: "Kiyosaki"
            }
        }
    ]

    // console.log(books[0].title) // "The Salmon of Doubt"
    // console.log(books[0].author.firstName) // "Douglas"
    // console.log(books[0].author.lastName) // "Adams"

    /**
     * TODO: 5.
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // books.forEach(function(book, bookNumber) {
    //     console.log(`Book # ${books.indexOf(book) + 1}`);
    //     console.log(`Title: "${book.title}"`);
    //     console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
    //     console.log("-----------------------");
    // })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously.
     *   -Refactor your code that creates the books array to instead
     *   use your function.
     *
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above.
     *   -Refactor your loop to use your
     *   `showBookInfo` function.
     */



    function createBook(title, author) {
        let bookObject = {
            title: title, author: author
        };
         return bookObject
    }

    console.log(createBook("My first book", "JW"));
    console.log(createBook("Book #2", "JW"));
    console.log(createBook("Book #3", "JW"));


})();
