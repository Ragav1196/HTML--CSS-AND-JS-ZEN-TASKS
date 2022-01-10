let getLengthOfWord = (name1) => {
    if(name1 == ""){
        return 0;
    }
    else if(name1 == undefined || name1%1 === 0){
        return -1;
    }
    else{
        return name1.length;
    }
}
console.log(getLengthOfWord("GUVI"));
console.log(getLengthOfWord(""));
console.log(getLengthOfWord());
console.log(getLengthOfWord(9));