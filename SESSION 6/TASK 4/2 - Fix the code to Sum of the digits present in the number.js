// 2
    function add(n){
        let arr = [];
        while(n>0){
            let temp;
            temp = n%10;
            n = n/10;
            n = Math.floor(n)
            arr.push(temp);
        }
        arr.reverse();
        let sum = 10;
        for(var i=0; i<arr.length;i++){
            sum+=arr[i]
        }
        return sum;
    }
    let n = 123;
    console.log(add(n));