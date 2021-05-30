// Retrieving HTML elements from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// Function to update class and message for errors
function showError(input, message){
    // Get the parent element of the inpujt field (.form-control)
    const formControl = input.parentElement;
    // Replace the class - add error
    formControl.className = 'form-control error';
    // Get the small element for the error nessage
    const small = formControl.querySelector('small');
    // Replace the text for small element using the input message
    small.innerText = message;
}
// Function to update class for success
function showSuccess(input){
    // Get the parent element of the inpujt field (.form-control)
    const formControl = input.parentElement;
    // Replace the class - add success
    formControl.className = 'form-control success';
}
//Function to chekc if email is valid
function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Function to check if required fields have data
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if (input.value === ''){
            showError(input,`${getFieldId(input)} is required`);
        }else {
            showSuccess(input);
        }
    });
}
// Function to get the id of the field with proper case
function getFieldId(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Create  event listener for submit button
form.addEventListener('submit', function(e) {
    // Stop page on reloading on submit
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    
});