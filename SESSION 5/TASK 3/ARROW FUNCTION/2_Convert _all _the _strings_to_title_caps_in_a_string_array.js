let titlecase = (input) =>{
    input =input.toLowerCase().split(" ");
    for(let i=0; i<input.length; i++){
        input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
    }
    return console.log(input.join(" "));
}
titlecase("rAGAV");