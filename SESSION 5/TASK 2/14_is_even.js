let is_even = (number) => {
    if(number % 2 === 0){
        return true;
    }
    else if(number % 2 !== 0){
        if(number % 1 === 0){
            return false;
        }
        else{
            return -1;
        }
    }
}
console.log(is_even(12));
console.log(is_even(0));
console.log(is_even(11));
console.log(is_even("11h"));