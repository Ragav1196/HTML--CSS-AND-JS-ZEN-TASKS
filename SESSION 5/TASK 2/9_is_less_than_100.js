let is_less_than_100 = (num1, num2) => {
    let result = num1 + num2;
    if(result < 100){
        return true;
    }
    else{
        return false
    }
}
console.log(is_less_than_100(22, 15));
console.log(is_less_than_100(83, 134));