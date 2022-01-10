var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let countPositivesSumNegatives = (array) =>{
    let new_arr = [];
    let add_positive = 0;
    let add_negative = 0;
    for(let i=0; i<array.length; i++){
        if(arr[i] >= 0){
            add_positive += arr[i];
        }
        else{
            add_negative += arr[i];
        }
    }
    new_arr.push(add_positive, add_negative);
    return new_arr;
}
console.log(countPositivesSumNegatives(arr));