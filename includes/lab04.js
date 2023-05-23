alert ("Weclome To My Lab-04!");

// Part 1 Exercise 1;
let string = prompt("Enter Your String.", "Type the string in here.");
let key = prompt("Enter Your Key char.", "Type the char that you want.");
let countTime = letterCount(string,key);

// The Function for count the letter;
function letterCount (string, key) {
    let countTime = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) == key) {
            countTime++;
        }
    }
    return countTime;
}

// The Function for catch the key character, than remove the letter from the old string, and become to the new string.;
function letterRemove (string, key) {
    for (let i = 0; i < string.length ; i++) {
        if (string.charAt(i) == key) {
            // take out the key words in the string and put them together.
            let leftChars = string.substring(0,i);
            let rightChars = string.substring(i+1, string.length);
            i--;
            string = leftChars + rightChars;
        }
    }
    return string;
}

// print out;
document.getElementById("theString").innerHTML = "String: ";
document.getElementById("theString1").innerHTML = string;
document.getElementById("theKey").innerHTML = "Char: " ;
document.getElementById("theKey1").innerHTML = key;
document.getElementById("theChar").innerHTML = "The letter " + "'"+ key + "'" + " appears " + countTime + " times in the array.";
document.getElementById("theNewString").innerHTML = "The new string is: " + letterRemove(string, key);

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// Part 1 Exercise 2.;
let suits = ["Hearts","Spades","Clubs","Diamonds"];
let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

// create a function for calCard;
function calcCards (suits, numbers) {
    // 4 is about the suits, and caught a number in random.
    let suit = suits[Math.floor(Math.random() * 4)];
    // 13 is about the numbers, and caught a number in random.
    let number = numbers[Math.floor(Math.random() * 13)];

    let array1 = [suit, number];
    // let obj = {
    //     foo : suit, 
    //     number : number
    // }

    // obj.foo  //it will call out the obj and show the suit.
    return array1;
}

// declare a call the function;
let cardArray = calcCards (suits,numbers);
let cardArray2 = calcCards (suits,numbers);

document.getElementById("theCard1").innerHTML = "Card 1 is: " + cardArray[1] + " of " + cardArray[0];
document.getElementById("theCard2").innerHTML = "Card 2 is: " + cardArray2[1] + " of " + cardArray2[0];

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// Part 2 Exercise 1;
document.getElementById("myButton").onclick = function () {
    document.getElementById("sampleTable").innerHTML += "<tr> <td>New cell1</td> <td>New cell2</td></tr>"
}