var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let getPositives = (array) =>{
    let new_arr = [];
    let add_positive = "";
    for(let i=0; i<array.length; i++){
        if(arr[i] >= 0){
            add_positive += arr[i] + " ";
        }
    }
    add_positive = add_positive.trim();
    let result = add_positive.split(" ");
    return result;
}
console.log(getPositives(arr));