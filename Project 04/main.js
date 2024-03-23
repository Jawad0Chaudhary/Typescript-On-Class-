"use strict";
// If and If-Else Statement
let age = 18;
if (age >= 18) {
    console.log("You are eligible f0r ID card");
}
else {
    console.log("You are not eligible for ID card");
}
//Comparison Operator with If-Else STatement
let email = "jawadchaudhary00@gmail.com";
let password = 123456789;
if (email == "jawadchaudhary00@gmail.com" && password == 123456789) {
    console.log("Sucessful Login!");
}
else {
    console.log("Unsucessful Login!");
}
let firstname = "Jawad";
if (firstname == "Jawad") {
    console.log("Correct!");
}
else {
    console.log("Incorrect!");
}
//Else-If
let marks = 101;
if (marks >= 90 && marks < 100) {
    console.log("A+ Grade");
}
else if (marks >= 80 && marks < 90) {
    console.log("A Grade");
}
else if (marks >= 70 && marks < 80) {
    console.log("B= Grade");
}
else if (marks >= 60 && marks < 70) {
    console.log("B Grade");
}
else if (marks >= 50 && marks < 60) {
    console.log("C Grade");
}
else if (marks < 50) {
    console.log("Fail!");
}
else {
    console.log("Invalid number!");
}
