// 5
    const newArray=[1,3,2,5,10];
    let result = []
    const myPrime=newArray.filter(num => {
        let iftrue = true;
        for(let i=2; i<num; i++){
            if(num > 1){
                if(num === 2){
                    iftrue =  true;
                }
                else if(num%i === 0){
                    return false;
                }
                else{
                    true;
                }
            }
        }
        if(num == 1){
            iftrue = false;
        }

        if(iftrue){
            result.push(num);
        }     
    });
    console.log(result);