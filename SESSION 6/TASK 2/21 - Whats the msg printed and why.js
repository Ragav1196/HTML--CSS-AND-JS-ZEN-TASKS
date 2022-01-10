// 21
    var lemein = "0";
    var lemeout = 0;
    var msg = "";
    if (lemein) {
     msg += "hi";
     }
    if (lemeout) {
     msg += "Hello";
    }
    console.log(msg);

    // "hi" is printed because it is truthy value
    // "hello" is not printed as value of "lemeout" is "0" and "0" is a faslsy value

