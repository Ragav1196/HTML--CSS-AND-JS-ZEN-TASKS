// 16
    let num = 1;

    let temp1 = "";
    let temp2 = "";
    let temp3 = "";
    let temp4 = "";

    for(let i = num; i<=10; i++){
        if(i <= 3){
            temp1 += i + " ";
        }
        else if(i<=6){
            temp2 += i + " ";
        }
        else if(i <= 9){
            temp3 += i + " ";
        }
        else{
            temp4 += i;
        }
    }

    console.log(temp1);
    console.log(temp2);
    console.log(temp3);
    console.log(temp4);