let sum_num = function(input){
    let temp = 0;
    for(let i=0; i<input.length; i++){
            temp += input[i];
    }
    return console.log(temp);
};
sum_num([1, 2, 3, 4, 5, 6, 7, 8, 9]);