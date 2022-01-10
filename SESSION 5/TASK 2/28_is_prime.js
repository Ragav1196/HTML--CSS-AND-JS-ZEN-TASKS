let isprime = (input) =>{
    let bool = true;
    let temp = "";
    for(let i=2; i<=input; i++){
        if(i === 2){
            bool = true;
        }
        else{
            for(let j=(i-1); j>1; j--){
                if(i%j === 0){
                    bool = false
                    j = 0;
                }
            }
        }
        if(bool === true){
            temp += i + " ";
        }
        bool = true;
    }
    return temp;
}
console.log(isprime(100))