let str = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";
let sum = (string) =>{
    string = string.split(", ").map(Number);
    console.log(string)
    let result = 0;
    for(let i=0; i<string.length; i++){
        result += string[i];
    }
    return result;
}
console.log(sum(str));