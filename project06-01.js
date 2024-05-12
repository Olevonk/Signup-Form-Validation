"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Oleksii Fon Krupp
      Date:   05/11/2024

      Filename: project06-01.js
*/

// Get references to form elements
let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

// Add event listener for form submission
submitButton.addEventListener("click", function() {
   // Check if password meets HTML5 validation criteria
   if (pwd.validity.patternMismatch) {
      // Set custom validation message for password field
      pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
   } else if (pwd.value !== pwd2.value) {
      // Set custom validation message if passwords don't match
      pwd.setCustomValidity("Your passwords must match");
   } else {
      // Clear custom validation message if no errors
      pwd.setCustomValidity("");
   } 
});