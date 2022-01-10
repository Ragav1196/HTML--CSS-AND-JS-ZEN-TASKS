(function(arr1, arr2){
    let temp = "";
    for(let i=0; i<arr2.length; i++){
            arr1.push(arr2[i]);
        }
        arr1.sort(function compareNumbers(a, b) {
            return a - b;
          });
        let middle_num = (arr1.length/2)
        let next_middle_num = middle_num - 1;
        let ans = (arr1[middle_num] + arr1[next_middle_num]) / 2;
        return console.log(ans);
})
([1, 13, 345, 226, 318], [232, 1243, 147, 230, 435]);
