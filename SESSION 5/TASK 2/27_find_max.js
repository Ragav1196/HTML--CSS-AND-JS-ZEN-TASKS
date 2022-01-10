var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let find_max = (array  =>{
    let min_value = -Infinity;
    for(let i=0; i<array.length; i++){
        if(arr[i] > min_value){
            min_value = arr[i];
        } 
    }
    return min_value;
})
console.log(find_max(arr));