var obj = {
    mykey : "value"
}
let getProperty = (object, key) =>{
    return object[key];
}
console.log(getProperty(obj, "mykey"));