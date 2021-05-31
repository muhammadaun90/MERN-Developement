// Retrieving HTML elements from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// Function to update class and message for errors
function showError(input, message){
    // Get the parent element of the input field (.form-control)
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
    // Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Replace the class - add success
    formControl.className = 'form-control success';
}
//Function to chekc if email is valid
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim()){
        showSuccess(input);
    }) else{
        showError(input,`Please provide a valid email`);
    }
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
// Function to check length of input field
function checkLength(input, min, max){
    if (input.value.length < min){
        showError(input,`${getFieldId(input)} needs to be atleast ${min} characters`);
    } else if (input.value.length>max){
        showError(input,`${getFieldId(input)} needs to be atleast ${max} characters`);
    } else{
        showSuccess(input);
    }
}
// Function to chekc if password and confirm password is matched
function checkPasswordsMatch(input1,input2){
    if (input1.value !== input2.value){
        showError(input2,"Passwords don't match");
    }
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
    checkLength(username,3,10);
    checkLength(password,6,30);
    checkEmail(email);
    checkPasswordsMatch(password,password2);
})