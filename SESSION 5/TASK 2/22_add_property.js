var obj = {}
let addproperty = (object, key) =>{
    object[key] = true;
    return object;
}
console.log(addproperty(obj, "mykey"));