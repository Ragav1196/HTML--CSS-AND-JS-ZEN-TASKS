// 6
    const num = [10, 20, 30, 40,50,60,70,80,90,100] 
    const ans = num.reduce(function(a, b){
        return a+b;
    }, 0);
    console.log(ans);