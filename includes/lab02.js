alert ("Weclome To My Lab-02!");

// 1.prompt the number
let number1 = parseInt(prompt("Enter Your First Number." , "Enter Your Number in here."));
let number2 = parseInt(prompt("Enter Your Second Number." , "Enter Your Number in here."));
let number3 = parseInt(prompt("Enter Your Third Number." , "Enter Your Number in here."));



let result = 0;
// check the firstnumber is a middle number or not
if (number2 > number1 && number1 > number3 || number3 > number1 && number1 > number2) {
    result = number1;
} 
// check the secondnumber is a midder number or not
else if (number1 > number2 && number2 > number3 || number3 > number2 && number2 > number1) {
    result = number2;
}
// check the thirdnumber is a midder number or not
else if (number1 > number2 && number3 > number2 || number2 > number3 && number3 > number1) {
    result = number3;
}

// check the result is even or not
if (result % 2 == 0) {
    document.getElementById("finalResult").style.color = "red";
}

// output the three numbers and the middle number
document.getElementById("middleNumber").innerHTML = "The middle number of ( " + number1 + "," + number2 + "," + number3 + ") is: ";
document.getElementById("finalResult").innerHTML = result;

// 2.grade calculator
let yourGrade = parseInt(prompt("Enter Your Grade (a number from 0 - 100)"));

// Range of A grades 90-100
if (yourGrade >= 90 && yourGrade <= 100) {
    document.getElementById("gradeLetter").innerHTML = "A";
    document.getElementById("gradeLetter").style.color = "Green";
}
// Range of B grades 80-89
else if (yourGrade >= 80 && yourGrade <= 89) {
    document.getElementById("gradeLetter").innerHTML = "B";
    document.getElementById("gradeLetter").style.color = "Blue";
}
// Range of C grades 65-79
else if (yourGrade >= 65 && yourGrade <= 79) {
    document.getElementById("gradeLetter").innerHTML = "C";
    document.getElementById("gradeLetter").style.color = "Yellow";
}
// Range of D grades 50-64
else if (yourGrade >= 50 && yourGrade <= 64) {
    document.getElementById("gradeLetter").innerHTML = "D";
    document.getElementById("gradeLetter").style.color = "Black";
}
// Range of F grades LESS THAN 49
else if (yourGrade <= 49) {
    document.getElementById("gradeLetter").innerHTML = "F";
    document.getElementById("gradeLetter").style.color = "Red";
}
document.getElementById("gradeCalculator").innerHTML = "The letter grade of " + yourGrade + "%" + " is: ";



// 3.hashtag parts
let checkPoint = "";

// increasing number
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        checkPoint += "# ";
    }
    checkPoint += "<br>";
}
// decreasing number
for (let i = 4; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
        checkPoint += "# ";
    }
    checkPoint += "<br>";
}

document.getElementById("checkPoint").innerHTML = checkPoint;

// 4."The Smog That Swallowed Bangkok"
let fullyEnv = 0;
let halfEnv = 0;
let percentIncre = 0.06;
let FogArea = 100;
let totalArea = 125000;

while (FogArea <= totalArea) {
    FogArea += FogArea * percentIncre;
    fullyEnv ++;
}

FogArea = 100;
totalArea = 125000 / 2;
while (FogArea <= totalArea) {
    FogArea += FogArea * percentIncre;
    halfEnv ++;
}


document.getElementById("fullyEnve").innerHTML = "Fully envelop Bangkok in MINUTES: " + fullyEnv;
document.getElementById("halfEnve").innerHTML = "Half envelop Bangkok in MINUTES: " + halfEnv;