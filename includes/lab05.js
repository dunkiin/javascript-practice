alert ("Welcome to my Lab-05!");

// Part 1 Exercise 1;
function userNameRegEx() {
    let name = document.getElementById("userName").value;
    let nameRegEx = /^[a-z ,.'-]+$/i;
    // return (nameRegEx.test(name));
    if (nameRegEx.test(name)) {
        return true;
    }
    // if user enter blank, return the error.
    else if (name.length == 0){
        alert ("Please enter a valid name, it can't be blank.")
        return false;
    }
}

function userAgeRegEx() {
    let age = document.getElementById("userAge").value;
    if (age < 0 || age > 120) {
        alert ("Please enter a valid age.")
        return false;
    }
    // match after remove the spaces
    else if (age.trim().length == 0) {
        alert ("Can't be blank, Please enter a your age.")
        return false;
    }
    // if user didn't enter their age, return the error.
    else if (isNaN(age)) {
        alert ("Please enter your age.")
        return false;
    }
}

function userEmailRegEx() {
    let email = document.getElementById("userEmail").value;
    let emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    // return (emailRegEx.test(email));
    if (emailRegEx.test(email)) {
        return true;
    }
    else if (email.trim().length == 0) {
        alert ("Can't be blank, Please enter a valid email address.")
        return false;
    }
    // user email must match the email.
    else {
        alert ("Please enter a valid email address.")
        return false;
    }
}

function phoneNumberRegEx() {
    let phoneNumber = document.getElementById("userPhoneNumber").value;
    // to valid a phone number: ###-###-####, ### ### ####
    let phoneRegEx = /^\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/;

    // return (phoneRegEx.test(phoneNumber));
    if (phoneRegEx.test(phoneNumber)) {
        return true;
    }
    else if (phoneNumber.trim().length == 0) {
        alert ("Can't be blank, Please enter a valid phone number.")
        return false;
    }
    // if user enter a value doesn't match the phone number RegEx, return the error.
    else {
        alert ("Please enter a valid phone number.")
        return false;
    }
}

function postalCodeRegEx() {
    let postalCode = document.getElementById("userPoco").value;
    // to valid the canada postal code: Z1Z 1Z1, Z1Z-1Z1, Z1Z1Z1
    let pcRegEx = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    // return (pcRegEx.test(postalCode));
    if (pcRegEx.test(postalCode)) {
        return true;
    }
    else if (postalCode.trim().length == 0) {
        alert ("Can't be blank, Please enter a valid postal code.")
        return false;
    }
    else {
        alert ("Please enter a valid postal code.")
        return false;
    }
}

// the submit bottom
function submitButton() {
    // match all the function, if doesn't match return the function error;
    if (userNameRegEx() && userAgeRegEx() && phoneNumberRegEx() && userEmailRegEx() && postalCodeRegEx()) {
    document.getElementById("userForm").submit();
    alert ("Have A Good Day!");
    return true;
    }
    else {
        return false;
    }
}


