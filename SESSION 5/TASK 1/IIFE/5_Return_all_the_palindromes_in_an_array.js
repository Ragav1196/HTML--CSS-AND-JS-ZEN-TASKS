(function(input){
    let temp = "";
    let arr = [];
    for(let j=0; j<input.length; j++){
        arr = input[j].split("");
        for(let i=arr.length-1; i>=0; i--){
        temp += arr[i] + " ";
        temp = temp.trim();
    }
    if(temp == input[j]){
        console.log(temp);
    }
    temp = "";
    }
})
(["MADAM", "RAGAV", "GUVI", "NURSESRUN"]);