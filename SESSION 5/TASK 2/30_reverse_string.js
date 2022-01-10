let reverse_string = (string) =>{
    let temp = "";
    string = string.split("");
    for(let i=string.length - 1; i>=0; i--){
        temp += string[i] + " ";
    }
    return temp;
}
console.log(reverse_string("JavaScript"));