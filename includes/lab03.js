alert ("Weclome To My lab-03!");

// Request the string and char from user.
let string = prompt("Enter Your string.", "Type Your String in Here.");
let char = prompt("Enter Your Letter.", "Type the letter that you want to count");
let time = letterCount(string,char);
// The function for count the letter that the user want.
function letterCount (string, char) {
    let time = 0;
    for(let i = 0; i < string.length; i++) {
        if (string.charAt(i) == char) {
            time++;
        }
    }
    return time;
    
}
// The output for the function.
document.getElementById("theString").innerHTML = "The string is: " + string;
document.getElementById("theChar").innerHTML = "The letter " + "'"+ char + "'" + " appears " + time + " times.";
    
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* The note for date funtion */
// let labDay = new Date();
// console.log("labDay is " + labDay);
// console.log(labDay.toDateString());
// console.log(labDay.toTimeString());
// console.log(labDay.getTime());
// console.log(labDay.getDate() + " / " + labDay.getMonth() + " / " + labDay.getFullYear());
// console.log(labDay.getHours() + " : " + labDay.getMinutes());
// let labDay = new Date(2022, 2, 1);
// let now = Date.now();
// console.log(now);
// let errorDate = new Date(2016, 33, 1);
// console.log(errorDate);
// let invalidDate = new Date("Funuary 3, 2018");
// console.log(invalidDate);
// let options = { weekday: 'long' , year: 'numeric', month: 'long', day: 'numeric'};
// console.log(labDay.toLocaleString('de-De', options));
// let msDay = d.getHours() + 1) * 60 * 60 * 1000;
// console.log(msDay);
// let mslabDay = Date.now();
// labDay = new Date(mslabDay + msDay);
// console.log(msDay);

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Part 1 Exercise 2
function daysInMonth (year, month) { // Use 1 for Jan, 2 for Feb, etc.
    return new Date(year, month, 0).getDate();
}


// Request the month, year, and hourlyPay from the users.
let month = parseInt(prompt("Enter Your Month", "TYPE THE VALUE IN HERE"));
let year = parseInt(prompt("Enter Your Year", "TYPE THE VALUE IN HERE"));
let hourlyPay = parseInt(prompt("Enter Your $/hour" , "TYPE THE VALUE IN HERE"));


function calcSalary (month, year, hourlyPay) {
    // Declare a variable for count the weekdays.
    let countWeekdays = 0;

    for (let i = 0; i < daysInMonth(year, month); i++) {
        //Javascript add 1 day to date
        let countDays = new Date(year, month-1, i+1);
        //Javascript show day of the week
        let weekDay = countDays.getDay();
        // find the Saturday and Sunday
        if (weekDay != 0 && weekDay != 6) {
            countWeekdays++;
        }
    }
    // Calc the total salary for a month.
    let totalPay = hourlyPay * countWeekdays * 7.5;

    // print out the message.

    let date = new Date(year, month-1, 1);
    let dateFormat = {month: 'long'};

    // toLocaleString is used to set a format for a date
    document.getElementById("theMonth").innerHTML = "Month: " + date.toLocaleString('en-GB', dateFormat);
    document.getElementById("theYear").innerHTML = "Year: " + year;
    document.getElementById("weekDays").innerHTML = "Weekdays: " + countWeekdays;
    document.getElementById("theSalary").innerHTML = "Salary: " + "$ " + hourlyPay.toFixed(2);
    document.getElementById("thePay").innerHTML = "Pay: " + "$ " + totalPay.toFixed(2);
}
calcSalary(month, year, hourlyPay);


/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Part 2

// The function for calcFutureValue.
function calcFutureValue (principle, rate, year0) {
    if (principle <= 0) {
        throw new Error("Principle value must be greater than zero");
    }

    if (rate <= 0) {
        throw new Error("Rate value must be greater than zero");
    }

    if (year0 <= 0) {
        throw new Error("Years value must be greater than zero");
    }

    let monthlyRate = ((rate) / 12) / 100;;
    let months = year0 * 12;
    let futureValue = 0;
    for (let i = 0; i < months; i++) {
        futureValue = (futureValue + principle) * (monthlyRate + 1);
    }
    return futureValue;
}

// first futureValue.
let investment = 10;
let annualRate = 4;
let years = 5;

try {
    let futureValue = calcFutureValue(investment, annualRate, years);
    document.getElementById("futureValue0").innerHTML = "The future value is: " + futureValue.toFixed(2);
}
catch (err) {
    document.getElementById("error").innerHTML = err;
}

// Second FutureValue.
investment = 100;
annualRate = 5;
years = 5;

try {
    let futureValue1 = calcFutureValue(investment, annualRate, years);
    document.getElementById("futureValue1").innerHTML = "The future value is: " + futureValue1.toFixed(2);
}
catch (err) {
    document.getElementById("error").innerHTML = err;
}

// Third FutureValue.
investment = -1;
annualRate = 4;
years = 5;

try {
    let futureValue2 = calcFutureValue(investment, annualRate, years);
    document.getElementById("futureValue2").innerHTML = "The future value is: " + futureValue2.toFixed(2);
}
catch (err) {
    document.getElementById("error").innerHTML = err;
}
