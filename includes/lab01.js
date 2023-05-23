// welcome banner
alert ("Weclome To My lab-01!");

// defined the user name
let userName = prompt("Enter Your Name Please.", "Type your name here.");
document.getElementById("username").innerHTML = "Hello, " + userName + ". Nice to meet you";

// the input message for user enter
let amount = prompt("Enter Your Amount in the table.", "Type your amount in here.")
let taxRate = prompt("Enter Your Tax Rate in the table.", "Type your Tax Rate in here.")

// defined in 2 digit numbers
let finalAmount = parseFloat(amount + amount * (taxRate/100)).toFixed(2);

// the output
document.getElementById("amount").innerHTML = "$" + amount;
document.getElementById("taxRate").innerHTML = taxRate + "%";
document.getElementById("finalAmount").innerHTML = "$" + finalAmount;