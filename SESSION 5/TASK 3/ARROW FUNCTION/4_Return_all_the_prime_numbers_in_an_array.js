let prime_num = (input) =>{
    let temp = "";
    let iftrue = true;
    for(let i=0; i<input.length; i++){
        if(input[i] > 1){
            for(let j=2; j<input[i]; j++){
                if(input[i]%j === 0){
                    iftrue = false;           
                }
            }
            if(iftrue){
                temp += input[i] + " ";
            }
            iftrue = true;
        }
    }
    return console.log(temp.trim());
};
prime_num([1, 2, 3, 4, 5, 6, 7, 8, 9]);