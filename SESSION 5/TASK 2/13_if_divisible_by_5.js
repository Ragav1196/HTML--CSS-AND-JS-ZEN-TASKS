let is_divisible_by_5 = (number) => {
    if(number % 5 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(is_divisible_by_5(5));
console.log(is_divisible_by_5(-55));
console.log(is_divisible_by_5(37));