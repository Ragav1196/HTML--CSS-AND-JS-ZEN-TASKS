(function(input){
    let temp = "";
    for(let i=0; i<input.length; i++){
        if(input[i]%2 !==0 ){
            temp += input[i] + " ";
        }
    }
    return console.log(temp.trim());
})
([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);