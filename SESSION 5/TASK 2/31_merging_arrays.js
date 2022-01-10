var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
let merge_aarrays = (arr1, arr2) =>{
    let new_arr = [];
    for(let i=0; i<arr1.length; i++){
        new_arr.push(arr1[i]);
    }
    for(let j=0; j<arr2.length; j++){
        new_arr.push(arr2[j]);
    }
    return new_arr;
}
console.log(merge_aarrays(arr1, arr2));