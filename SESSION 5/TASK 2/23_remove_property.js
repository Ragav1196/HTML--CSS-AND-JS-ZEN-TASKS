var obj = {
    name : "Ragavendiran"
}
let removeproperty = (object, key) =>{
    delete object[key];
    return object[key];
}
console.log(removeproperty(obj, "name"));