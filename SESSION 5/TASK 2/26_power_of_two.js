let powers_of_two = (exponent) =>{
    let temp = "";
    for(let i=0; i<=exponent; i++){
        temp += Math.pow(2, i);
    }
    temp = temp.split("");
    temp = temp.join(",")
    return temp;
}
console.log(powers_of_two(0));
console.log(powers_of_two(1));
console.log(powers_of_two(2));
