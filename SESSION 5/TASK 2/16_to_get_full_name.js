let getFullName = (name1, name2) => {
    if(name1 == ""){
        return `"${name2}"`
    }
    else if(name1 == "" && name2 == ""){
        return `""`;
    }
    else if(name2 == undefined){
        return `"${name1}"`
    }
    else{
        return `"${name1} ${name2}"`
    }
}
console.log(getFullName("GUVI", "GEEK"));
console.log(getFullName("GUVI",));
console.log(getFullName("", "GEEK"));
console.log(getFullName("", ""));