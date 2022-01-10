//JSON ITERATION
let obj = {
    name : "Ragavendiran",
    age : 24,
    schooling : "Don bosco",
    college : "AMET UNIV",
    education : "Marine Engineering",
    contact_num : 1234567890
};

let obj_key_value = Object.entries(obj);
console.log(obj_key_value)

//FOR LOOP
let for_loop = (input) =>{
    console.log("FOR LOOP :");
    let temp = "";
    for(let i=0; i<input.length; i++){
        temp = input[i].join("=>");
        console.log(temp);
    }
}
for_loop(obj_key_value);


//FOR OF LOOP
let for_of_loop = (input) => {
    console.log("FOR OF LOOP :");
    let temp = "";
    for(let value of input){
        temp = value.join("=>");
        console.log(temp);
    }
}
for_of_loop(obj_key_value);


//FOR EACH LOOP
console.log("FOR EACH LOOP :");
obj_key_value.forEach(function(number){
    let temp = number.join("=>")
    console.log(temp);
});

//FOR IN LOOP
console.log("FOR IN LOOP :");
for(let details in obj){
    console.log(`${details} => ${obj[details]}`);
}
