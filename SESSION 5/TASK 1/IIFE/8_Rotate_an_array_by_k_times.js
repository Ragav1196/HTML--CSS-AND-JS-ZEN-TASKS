(function(input, k){
    let arr = [];
    let con = input.length - 1;
    for(let i=1; i<=k; i++){
        for(let j=0; j>=0; j--){
            let initial = con - j;
            arr.push(input[initial]);
            if(j === 0){
                j = input.length;
            }
            else if(j === 1){
                break;
            }
        }
        if(i < k){
            input = arr;
            arr = [];
        }
    }
    return console.log(arr);
})
([10, 23, 34, 56, 25], 2);