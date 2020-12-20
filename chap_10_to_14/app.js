// Q1 - Make a Calculator

var num1 = +prompt("Enter your first number", "Type Here...");
var num2 = +prompt("Enter your second number", "Type Here...");
var sign = prompt("Enter sign (+, -, *, /, %)", "Type Here...");
var result;

if (sign === "+") {
    result = num1 + num2;
    alert(num1 + ' ' + sign + ' ' + num2 + ' = ' + result);
} else if (sign === "-") {
    result = num1 - num2;
    alert(num1 + ' ' + sign + ' ' + num2 + ' = ' + result);
} else if (sign === "*") {
    result = num1 * num2;
    alert(num1 + ' ' + sign + ' ' + num2 + ' = ' + result);
} else if (sign === "/") {
    result = num1 / num2;
    alert(num1 + ' ' + sign + ' ' + num2 + ' = ' + result);
} else if (sign === "%") {
    result = num1 % num2;
    alert(num1 + ' ' + sign + ' ' + num2 + ' = ' + result);
} else {
    alert('Wrong! Enter only these signs (+, -, *, /, %)')
}

// Q2 - Make a Percentage Calculator

var course1 = +prompt("Enter first course number", "Type Here...");
var course2 = +prompt("Enter second course number", "Type Here...");
var course3 = +prompt("Enter third course number", "Type Here...");
var course4 = +prompt("Enter fourth course number", "Type Here...");
var course5 = +prompt("Enter fifth course number", "Type Here...");
var totalMarks = 500
var result = (course1 + course2 + course3 + course4 + course5) * 100 / totalMarks;

alert('Percentage: ' + result + '%');