let return_opp = (input) => {
    if(input === 0){
        return 0;
    }
    else if(input%1 === 0){
        return input * (-1);
    }
    else{
        return -1;
    }
}
console.log(return_opp(5));
console.log(return_opp(0));
console.log(return_opp(-5));
console.log(return_opp("5a"));
console.log(return_opp(5.5));