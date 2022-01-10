let getLastElement = (array) =>{
    let length = array.length;
    if(length === 0){
        return -1;
    }
    else{
        return array[length-1];
    }
}
console.log(getLastElement([1, 2, 3, 4]));