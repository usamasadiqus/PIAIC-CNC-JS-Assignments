var a = 2;
var b = a++ + ++a - --a + a--;
    //   2 + 4 - 3 + 3
    //  (2 + 4 = 6) - (6 - 3 = 3) + (3 + 3 = 6)

alert("Variable (a) value is: " + a);
alert("Variable (b) value is: " + b);
