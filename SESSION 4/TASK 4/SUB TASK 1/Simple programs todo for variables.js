// 1
// Declare four variables without assigning values and print them in console
    var a;
    var b;
    var c;
    var d;

    console.log("1 =>",a, b, c, d);

// 2
// How to get value of the variable myvar as output
    var myvar= 1;
    // console.log("myvar");
    
    console.log("2 =>", myvar);

// 3
// Declare variables to store your first name, last name, marital status, country and age in multiple lines
    var first_name = "RAGAVENDIRAN";
    var second_name = "PANCHATSHARAM";
    var marital_status = "Unmarried";
    var country = "India";
    var age = "24";

    console.log("3(1) =>", first_name);
    console.log("3(2) =>", second_name);
    console.log("3(3) =>", marital_status);
    console.log("3(4) =>", country);
    console.log("3(5) =>", age);

// 4
// Declare variables to store your first name, last name, marital status, country and age in a single line
    var first_name = "RAGAVENDIRAN";
    var second_name = "PANCHATSHARAM";
    var marital_status = "Unmarried";
    var country = "India";
    var age = "24";

    console.log("4 =>", first_name, second_name, marital_status, country, age);

// 5
// Declare variables and assign string, boolean, undefined and null data types
    var str = "RAGAV";
    var bool = true;
    var undef;
    var nothing = null;
    
    console.log("5(1) =>", typeof(str));
    console.log("5(2) =>", typeof(bool));
    console.log("5(3) =>", typeof(undef));
    console.log("5(4) =>", typeof(nothing));

// 6
// Convert the string to integer
    var num1 = "24";
    var num2 = "25";
    var num3 = "26";

    num1 = parseInt(num1);
    num2 = Number(num2);
    num3 = +num3;
    
    console.log("6(1) =>", num1);
    console.log("6(2) =>", num2);
    console.log("6(3) =>", num3);
    
// 7
// Write 6 statement which provide truthy & falsey values.
    console.log("7(1) =>", 1 === 1);
    console.log("7(2) =>", Boolean("false"));
    console.log("7(3) =>", Boolean("0"));
    console.log("7(4) =>", Boolean([]));
    console.log("7(5) =>", Boolean({}));
    console.log("7(6) =>", Boolean(function(){}));
    console.log("7(7) =>", false);
    console.log("7(8) =>", Boolean(-0));
    console.log("7(9) =>", Boolean(0));
    console.log("7(10) =>", Boolean(null));
    console.log("7(11) =>", Boolean(undefined));
    console.log("7(12) =>", Boolean(NaN));


