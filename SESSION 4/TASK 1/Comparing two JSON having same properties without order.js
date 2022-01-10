// TASK 1
    // Comparing two JSON having same properties without order
    var obj1 = { name: "Person 1", age:5 };
    var obj2 = { age:5, name: "Person 1" };

    let temp;
    for(let details in obj1){
        if(obj1[details] === obj2[details]){
            temp = true;
        }
        else{
            temp = false;
            break;
        }
    }
    
    if(temp === true){
        console.log("BOTH ARE SAME");
    }
    else{
        console.log("BOTH ARE NOT SAME")
    }
    