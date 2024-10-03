// ===================Question1: Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
// // Take user inputs for first and last name
// let firstName = prompt("Enter Your First Name");
// let lastName = prompt("Enter Your Last Name");

// //  merge them in a new variable titled fullName
// let fullName = firstName + " " + lastName;

// // Greet the user using his full name
// alert(`Hello ${fullName} Welcome!`);

// ===================Question2: Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser 
// // Take user input for favorite mobile phone model
// let mobileModel = prompt("Enter your favorite mobile phone model:");

// // Find and display the length of the user input
// let inputLength = mobileModel.length;

// document.write("My Favourite Phone is: " + mobileModel + "<br/>");
// document.write("Length of string: " + inputLength);

// ===================Question3: Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser 
// // Define the word
// let word = "Pakistani";

// // Find the index of the letter 'n'
// let index = word.indexOf("n");

// // Display the result
// document.write(`String: ${word}<br/>`);
// document.write(`Index of 'n': ${index}`);

// ===================Question4: Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
// // Define the word
// let word = "Hello World";

// // Find the last index of the letter 'l'
// let lastIndex = word.lastIndexOf("l");

// // Display the result
// document.write(`String: ${word}<br/>`);
// document.write(`Last index of 'l': ${lastIndex}`);

// ===================Question5: Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
// // Define the word
// let word = "Pakistani";

// // Find the character at the 3rd index
// let charAtIndex = word.charAt(3);

// // Display the result
// document.write(`String: ${word}<br/>`);
// document.write(`Character at index 3: ${charAtIndex}`);

// ===================Question6:  Repeat Q1 using string concat() method.
// // Take user inputs for first and last name
// let firstName = prompt("Enter Your First Name");
// let lastName = prompt("Enter Your Last Name");

// //  Merge first and last name using the concat() method
// let fullName = firstName.concat(" ", lastName);

// // Greet the user using his full name
// alert(`Hello ${fullName} Welcome!`);

// ===================Question7: Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
// // Define the word
// let word = "Hyderabad";

// // Replace "Hyder" with "Islam"
// let replacedWord = word.replace("Hyder", "Islam");

// // Display the result
// document.write(`City: ${word}<br/>`);
// document.write(`After replacement: ${replacedWord}`);

// ===================Question8: Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;
// // Define the message
// let message = "Ali and Sami are best friends. They play cricket and football together.";

// // Replace all occurrences of "and" with "&"
// let updatedMessage = message.replace(/and/g, "&");

// // Display the result
// document.write(`The previous message is: ${message}<br/>`);
// document.write(`The updated message is: ${updatedMessage}`);

// ===================Question9: Write a program that converts a string “472” to a number 472. Display the values & types in your browser
// // Define the string
// let strNumber = "472";

// // Convert the string to a number
// let num = Number(strNumber);

// // Display the values and their types
// document.write(`Value: ${strNumber} <br/> Type: ${typeof strNumber}<br/>`);
// document.write(`Value: ${num} <br/> Type: ${typeof num}`);

// ===================Question10: Write a program that takes user input. Convert and show the input in capital letters. 
// // Take user input
// let userInput = prompt("Enter some text:");

// // Convert the input to capital letters
// let upperCaseInput = userInput.toUpperCase();

// // Display the result
// document.write(`User input: ${userInput}<br/>`);
// alert(`Upper case:${upperCaseInput}`);

// ===================Question11: Write a program that takes user input. Convert and show the input in title case.
// // Take user input
// let userInput = prompt("Enter some text:");

// // Convert the input to title case
// let titleCaseInput = userInput
//     .toLowerCase() // Convert to lower case
//     .split(' ') // Split into words
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
//     .join(' '); // Join the words back together

// // Display the result
// alert("Your input in title case is: " + titleCaseInput);

// ===================Question12: Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser
// // Define the number
// var num = 35.36;

// // Convert the number to a string
// var numString = num.toString();

// // Remove the dot from the string
// var result = numString.replace('.', '');

// // Display the result
// document.write(`Number: ${num}<br/>`);
// document.write(`String: ${result}`);

// ===================Question13: Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ . (Note: ASCII code of ! is 33 ASCII code of , is 44 ASCII code of . is 46 ASCII code of @ is 64) 
// // Function to validate username
// function isValidUsername(username) {
//     // ASCII codes of special characters
//     const specialChars = [33, 44, 46, 64]; // [!, ,, ., @]
    
//     // Check if the username contains any special character
//     for (let i = 0; i < username.length; i++) {
//         let charCode = username.charCodeAt(i);
//         if (specialChars.includes(charCode)) {
//             return false; // Invalid username
//         }
//     }
//     return true; // Valid username
// }

// // Take user input for username
// let username = prompt("Enter your username:");

// // Validate the username
// while (!isValidUsername(username)) {
//     username = prompt(`Invalid username! Please enter a valid username (no special characters: @, ., !):`);
// }

// // Display the valid username
// alert(`Your username is: ${username}`);

// ===================Question14: You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. (Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability).
// // Define the array
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Take user input for the item to search
// let userInput = prompt("Enter an item to search:").toLowerCase();

// // Check if the item is available in the array (case-insensitive search)
// let foundIndex = -1;
// for (let i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput) {
//         foundIndex = i; // Store the index where the item is found
//         break;
//     }
// }

// // Prompt the user about the availability of the item and its index
// if (foundIndex !== -1) {
//     alert(`${userInput} is available at index ${foundIndex} in our bakery.`);
// } 
// else {
//     alert(`We are sorry. ${userInput} is not available in our bakery.`);
// }

// ===================Question15: Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document
// // Function to validate the password
// function isValidPassword(password) {
//     // Check if the password is at least 6 characters long
//     if (password.length < 6) {
//         alert(`Password must be at least 6 characters long.`);
//         return false;
//     }
    
//     // Check if the password starts with a number
//     if (!isNaN(password.charAt(0))) {
//         alert(`Password should not start with a number.`);
//         return false;
//     }
    
//     // Check if the password contains both alphabets and numbers
//     let hasAlphabet = /[a-zA-Z]/.test(password);
//     let hasNumber = /[0-9]/.test(password);
    
//     if (!hasAlphabet || !hasNumber) {
//         alert(`Password must contain both alphabets and numbers.`);
//         return false;
//     }
    
//     return true;
// }

// // Take user input for the password
// let password = prompt(`Enter your password:`);

// // Validate the password and prompt the user until a valid password is entered
// while (!isValidPassword(password)) {
//     password = prompt(`Enter a valid password:`);
// }

// // If password is valid, display success message
// alert(`Your password is valid.`);

// ===================Question16: Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.
// // Define the string
// let university = "University of Karachi";

// // Convert the string to an array using the split method
// let universityArray = university.split(""); // Split by space

// // Display each element of the array
// for (let i = 0; i < universityArray.length; i++)  {
//     document.write(`${universityArray[i]} <br/>`);
// }

// ===================Question17: Write a program to display the last character of a user input. 
// // Take user input
// let userInput = prompt("Enter any string:");

// // Get the last character of the input
// let lastCharacter = userInput.charAt(userInput.length - 1);

// // Display the last character
// document.write(`User input: ${userInput}`);
// document.write(`last Character of input: ${lastCharacter}`);

// ===================Question18: You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string
// // Define the string
// let sentence = "The quick brown fox jumps over the lazy dog";

// // Convert the string to lowercase for case-insensitive search
// let lowerCaseSentence = sentence.toLowerCase();

// // Split the string into an array of words
// let wordsArray = lowerCaseSentence.split(" ");

// // Count occurrences of the word "the"
// let count = 0;
// for (let i = 0; i < wordsArray.length; i++) {
//     if (wordsArray[i] === "the") {
//         count++;
//     }
// }

// // Display the count
// document.write(`Text: ${sentence}<br/>`);
// document.write(`There are ${count} occurrence(s) of word 'the'`);
