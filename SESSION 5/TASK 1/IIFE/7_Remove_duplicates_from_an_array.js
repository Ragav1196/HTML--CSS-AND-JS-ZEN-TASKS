(function(input){
    let obj = {};
    let temp = "";
    for(let i=0; i<input.length; i++){
        let current_value = input[i];
        if(obj[current_value]){
            obj[current_value] += 1;
        }
        else{
            obj[current_value] = 1;
        }
    }
    for(let num in obj){
        if(obj[num] === 1){
            temp += num + " ";
        }
    }
    return console.log(temp.trim());
})
([1, 2, 2, 2, 7, 6, 7, 8, 9, 9]);