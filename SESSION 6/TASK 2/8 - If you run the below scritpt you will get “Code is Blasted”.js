// 8
    var a = "2" > "12";
    //Don't touch below this
    if (a) {
    console.log("Code is Blasted")
    }
    else
    {
    console.log("Diffused") 
    }
    // the code is blasted because the above statement is false
    // if the greater than Symbol is replace by the lesser than symblo then the "var a"
        // become true.

    // CORRECT WAY
    var a = "2" < "12";
    //Don't touch below this
    if (a) {
    console.log("Code is Blasted")
    }
    else
    {
    console.log("Diffused") 
    }