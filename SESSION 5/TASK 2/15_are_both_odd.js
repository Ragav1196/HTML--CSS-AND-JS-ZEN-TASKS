let are_both_odd = (num1, num2) => {
    if((num1%2  !== 0) && (num2 % 2 !== 0)){
        return true;
    }
    else{
        return false;
    }
}
console.log(are_both_odd(1, 3));
console.log(are_both_odd(1, 4));
console.log(are_both_odd(2, 3));
console.log(are_both_odd(0, 0));